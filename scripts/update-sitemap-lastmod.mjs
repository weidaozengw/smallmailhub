#!/usr/bin/env node
/** Rewrite Astro sitemap content lastmod values from a checked-in manifest. */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITEMAP = join(ROOT, 'dist', 'sitemap-0.xml');
const MANIFEST = join(ROOT, 'data', 'content-lastmod.json');
const dates = JSON.parse(readFileSync(MANIFEST, 'utf8'));
let xml = readFileSync(SITEMAP, 'utf8');
let changed = 0;

for (const [loc, lastmod] of Object.entries(dates)) {
  const escaped = loc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(<loc>${escaped}<\\/loc><lastmod>)[^<]+(<\\/lastmod>)`);
  if (!pattern.test(xml)) throw new Error(`Published URL missing from sitemap: ${loc}`);
  xml = xml.replace(pattern, `$1${lastmod}$2`);
  changed += 1;
}

writeFileSync(SITEMAP, xml);
console.log(`updated ${changed} content lastmod entries from committed manifest`);
