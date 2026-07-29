#!/usr/bin/env python3
"""Build an Astro sitemap with per-content lastmod dates from Git history.

Run after `npm run build`. The script maps collection URLs back to their
Markdown sources and replaces only those URL entries' <lastmod> values.
Static pages keep Astro's build-time lastmod.
"""
from __future__ import annotations

import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "src" / "content"
SITEMAP = ROOT / "dist" / "sitemap-0.xml"
NS = "http://www.sitemaps.org/schemas/sitemap/0.9"

COLLECTION_PREFIX = {
    "reviews": "reviews",
    "lists": "best",
    "alternatives": "alternatives",
}


def git_last_modified(path: Path) -> str:
    proc = subprocess.run(
        ["git", "log", "-1", "--format=%cI", "--", str(path.relative_to(ROOT))],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=True,
    )
    value = proc.stdout.strip()
    if value:
        return value
    return datetime.fromtimestamp(path.stat().st_mtime, tz=timezone.utc).isoformat()


def frontmatter_date(text: str, key: str) -> str | None:
    match = re.search(rf"^{re.escape(key)}:\s*[\"']?([^\"'\n]+)", text, re.MULTILINE)
    return match.group(1).strip() if match else None


def normalize_iso(value: str) -> str:
    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
        return value + "T00:00:00.000Z"
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z")


def content_dates() -> dict[str, str]:
    dates: dict[str, str] = {}
    for collection, prefix in COLLECTION_PREFIX.items():
        for path in (CONTENT / collection).glob("*.md"):
            text = path.read_text(encoding="utf-8")
            draft = re.search(r"^draft:\s*true\s*$", text, re.MULTILINE)
            if draft:
                continue
            # Git is the source of truth for the real file update. An explicit
            # updatedDate can only move lastmod later, never backwards.
            git_date = git_last_modified(path)
            explicit = frontmatter_date(text, "updatedDate")
            candidates = [normalize_iso(git_date)]
            if explicit:
                candidates.append(normalize_iso(explicit))
            dates[f"https://smallmailhub.com/{prefix}/{path.stem}"] = max(candidates)
    return dates


def main() -> int:
    if not SITEMAP.exists():
        print(f"missing sitemap: {SITEMAP}", file=sys.stderr)
        return 2

    ET.register_namespace("", NS)
    tree = ET.parse(SITEMAP)
    root = tree.getroot()
    dates = content_dates()
    changed = 0
    missing: list[str] = []

    for url in root.findall(f"{{{NS}}}url"):
        loc = url.find(f"{{{NS}}}loc")
        lastmod = url.find(f"{{{NS}}}lastmod")
        if loc is None or not loc.text or loc.text not in dates:
            continue
        if lastmod is None:
            lastmod = ET.SubElement(url, f"{{{NS}}}lastmod")
        lastmod.text = dates[loc.text]
        changed += 1

    for loc in dates:
        if root.find(f".//{{{NS}}}loc[.='{loc}']") is None:
            missing.append(loc)

    tree.write(SITEMAP, encoding="utf-8", xml_declaration=True)
    print(f"updated {changed} content lastmod entries from Git history")
    if missing:
        print(f"warning: {len(missing)} published content URLs missing from sitemap", file=sys.stderr)
        for loc in missing[:10]:
            print(f"  {loc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
