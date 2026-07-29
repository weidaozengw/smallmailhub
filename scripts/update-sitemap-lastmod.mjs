#!/usr/bin/env node
/** Rewrite Astro sitemap content lastmod values from source-file timestamps.
 *
 * Cloudflare Pages' shallow checkout may not contain Git history, so this script
 * uses source mtimes there. Locally it prefers `git log` when available. Explicit
 * frontmatter updatedDate can only move the date later.
 */
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITEMAP = join(ROOT, 'dist', 'sitemap-0.xml');
const COLLECTIONS = { reviews: 'reviews', lists: 'best', alternatives: 'alternatives' };

function normalize(value) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return `${value}T00:00:00.000Z`;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid date: ${value}`);
  return date.toISOString();
}

function frontmatter(text, key) {
  const match = text.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+)`, 'm'));
  return match?.[1]?.trim() ?? null;
}

function gitDate(path) {
  try {
    const value = execFileSync(
      'git', ['log', '-1', '--format=%cI', '--', relative(ROOT, path)],
      { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    ).trim();
    return value || null;
  } catch {
    return null;
  }
}

function contentDates() {
  const dates = new Map();
  for (const [collection, prefix] of Object.entries(COLLECTIONS)) {
    const dir = join(ROOT, 'src', 'content', collection);
    for (const name of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
      const path = join(dir, name);
      const text = readFileSync(path, 'utf8');
      if (/^draft:\s*true\s*$/m.test(text)) continue;
      const candidates = [normalize(gitDate(path) || statSync(path).mtime.toISOString())];
      const explicit = frontmatter(text, 'updatedDate');
      if (explicit) candidates.push(normalize(explicit));
      const slug = name.replace(/\.md$/, '');
      dates.set(`https://smallmailhub.com/${prefix}/${slug}`, candidates.sort().at(-1));
    }
  }
  return dates;
}

let xml = readFileSync(SITEMAP, 'utf8');
const dates = contentDates();
let changed = 0;
for (const [loc, lastmod] of dates) {
  const escaped = loc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(<loc>${escaped}<\\/loc><lastmod>)[^<]+(<\\/lastmod>)`);
  if (!pattern.test(xml)) throw new Error(`Published URL missing from sitemap: ${loc}`);
  xml = xml.replace(pattern, `$1${lastmod}$2`);
  changed += 1;
}
writeFileSync(SITEMAP, xml);
console.log(`updated ${changed} content lastmod entries from source history`);
