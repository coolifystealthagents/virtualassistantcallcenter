#!/usr/bin/env python3
"""Regression gate for the frozen August 10 research date repair manifest."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = "2026-08-10"
BASE = "https://virtualassistantcallcenter.com"
manifest = json.loads((ROOT / ".paperclip/aug10-2026/research.json").read_text())
errors = []
entries = manifest.get("entries", [])
if manifest.get("family") != "research" or len(entries) != 14 or len(entries) < manifest.get("minimum", 10):
    errors.append("manifest family/count/minimum mismatch")
if len({e.get("slug") for e in entries}) != len(entries): errors.append("duplicate manifest slug")

source_records = {}
for path in sorted((ROOT / "content/research").glob("*.md")):
    text = path.read_text()
    fm = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if fm:
        meta = {line.split(":", 1)[0].strip(): line.split(":", 1)[1].strip() for line in fm.group(1).splitlines() if ":" in line}
        source_records[meta.get("slug", path.stem)] = (path, meta)
for entry in entries:
    slug = entry.get("slug", "")
    path, meta = source_records.get(slug, (None, {}))
    if path is None or entry.get("sourcePath") != str(path.relative_to(ROOT)): errors.append(f"{slug}: source record mismatch")
    if meta.get("published") != TARGET or entry.get("sourceDate") != TARGET: errors.append(f"{slug}: source date mismatch")
    if entry.get("route") != f"/research/{slug}" or entry.get("renderedDate") != TARGET or entry.get("renderedDateFields") != ["datePublished"]: errors.append(f"{slug}: route/date manifest mismatch")
    html = ROOT / ".next/server/app/research" / f"{slug}.html"
    if not html.is_file(): errors.append(f"{slug}: built route missing")
    else:
        rendered = html.read_text(errors="replace")
        if f'"datePublished":"{TARGET}"' not in rendered: errors.append(f"{slug}: rendered date missing")
        if f'"url":"{BASE}/research/{slug}"' not in rendered: errors.append(f"{slug}: rendered canonical URL missing")

all_sorted = sorted(source_records, key=lambda s: (-int(source_records[s][1].get("published", "0").replace("-", "")), s))
if [e.get("slug") for e in entries] != [s for s in all_sorted if s in {e.get("slug") for e in entries}]: errors.append("manifest/index order is not newest-first")
sitemap = (ROOT / "app/sitemap.xml/route.ts").read_text()
if "research.map(p=>`/research/${p.slug}`)" not in sitemap: errors.append("research sitemap membership missing")
if 'url,\n    publisher' not in (ROOT / "app/content-article.tsx").read_text(): errors.append("article canonical URL source missing")
print(json.dumps({"ok": not errors, "acceptedCount": len(entries), "errors": errors}, indent=2))
sys.exit(1 if errors else 0)
