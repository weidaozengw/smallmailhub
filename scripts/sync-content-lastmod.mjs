#!/usr/bin/env node
/** Generate a checked-in content URL -> lastmod manifest.
 *
 * Cloudflare Pages uses a shallow checkout, where `git log -- <file>` can make
 * every file look as if it changed in the deployment commit. On a shallow
 * checkout this script preserves the committed manifest. In a full local clone
 * it refreshes dates from real file history before each build.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = join(ROOT, 'data', 'content-lastmod.json');
const COLLECTIONS = { reviews: 'reviews', lists: 'best', alternatives: 'alternatives' };

function git(args) {
  try {
    return execFileSync('git', args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return '';
  }
}

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

const shallow = git(['rev-parse', '--is-shallow-repository']) === 'true';
if ((process.env.CF_PAGES || shallow) && existsSync(MANIFEST)) {
  const current = JSON.parse(readFileSync(MANIFEST, 'utf8'));
  console.log(`preserved ${Object.keys(current).length} committed lastmod entries on shallow CI checkout`);
  process.exit(0);
}

const manifest = {};
for (const [collection, prefix] of Object.entries(COLLECTIONS)) {
  const dir = join(ROOT, 'src', 'content', collection);
  for (const name of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
    const path = join(dir, name);
    const text = readFileSync(path, 'utf8');
    if (/^draft:\s*true\s*$/m.test(text)) continue;
    const history = git(['log', '-1', '--format=%cI', '--', relative(ROOT, path)]);
    const candidates = [normalize(history || statSync(path).mtime.toISOString())];
    const explicit = frontmatter(text, 'updatedDate');
    if (explicit) candidates.push(normalize(explicit));
    const slug = name.replace(/\.md$/, '');
    manifest[`https://smallmailhub.com/${prefix}/${slug}`] = candidates.sort().at(-1);
  }
}

mkdirSync(dirname(MANIFEST), { recursive: true });
const ordered = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(MANIFEST, `${JSON.stringify(ordered, null, 2)}\n`);
console.log(`synced ${Object.keys(ordered).length} content lastmod entries from full Git history`);
