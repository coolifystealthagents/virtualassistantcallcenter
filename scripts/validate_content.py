#!/usr/bin/env python3
"""Routine gate for content structure, metadata, links, images, and dash hygiene."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REQUIRED = {"slug","title","description","published","updated","category","image","imageAlt"}
errors, entries = [], []
for path in sorted((ROOT / "content").glob("*/*.md")):
    raw = path.read_text(encoding="utf-8")
    match = re.match(r"^---\n(.*?)\n---\n(.+)$", raw, re.S)
    if not match: errors.append(f"{path}: invalid front matter"); continue
    meta = {line.split(":",1)[0].strip(): line.split(":",1)[1].strip() for line in match.group(1).splitlines() if ":" in line}
    missing = sorted(REQUIRED - {key for key, value in meta.items() if value})
    if missing: errors.append(f"{path}: missing {', '.join(missing)}")
    if meta.get("slug") != path.stem: errors.append(f"{path}: slug must equal filename")
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", meta.get("slug","")): errors.append(f"{path}: invalid slug")
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", meta.get("published","")): errors.append(f"{path}: invalid published date")
    if not 80 <= len(meta.get("description","")) <= 180: errors.append(f"{path}: description must be 80-180 chars")
    if not (ROOT / "public" / meta.get("image","").lstrip("/")).is_file(): errors.append(f"{path}: missing image {meta.get('image')}")
    body = match.group(2)
    if body.count("## ") < 3: errors.append(f"{path}: needs at least three H2 sections")
    if re.search(r"[ \t]-[ \t]", body): errors.append(f"{path}: spaced dash in prose")
    for href in re.findall(r"\[[^\]]+\]\(([^)]+)\)", body):
        if href.startswith("/") and not re.fullmatch(r"/[a-z0-9][a-z0-9/-]*", href): errors.append(f"{path}: malformed internal link {href}")
    entries.append({"file": str(path.relative_to(ROOT)), "slug": meta.get("slug"), "sections": body.count("## ")})
manifest_path = ROOT / "content" / "featured-images.json"
manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
seen = set()
for item in manifest:
    slug = item.get("slug", "")
    if slug in seen: errors.append(f"{manifest_path}: duplicate slug {slug}")
    seen.add(slug)
    for key in ("slug", "title", "category", "image", "imageAlt"):
        if not item.get(key): errors.append(f"{manifest_path}: {slug or 'entry'} missing {key}")
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug): errors.append(f"{manifest_path}: invalid slug {slug}")
    if len(item.get("imageAlt", "")) < 40: errors.append(f"{manifest_path}: {slug} imageAlt is too short")
    image = ROOT / "public" / item.get("image", "").lstrip("/")
    if not image.is_file(): errors.append(f"{manifest_path}: missing image {item.get('image')}")
    elif 'width="1200"' not in image.read_text(encoding="utf-8") or 'height="630"' not in image.read_text(encoding="utf-8"):
        errors.append(f"{manifest_path}: {slug} image must be 1200x630")
print(json.dumps({"ok": not errors, "entries": entries, "errors": errors}, indent=2))
sys.exit(1 if errors else 0)
