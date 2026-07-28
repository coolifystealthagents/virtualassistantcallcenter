#!/usr/bin/env python3
"""Deterministically assign an approved SVG background and composite article text."""
import hashlib, html, re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BACKGROUNDS = sorted((ROOT / "public" / "thumbnail-backgrounds").glob("*.svg"))
OUTPUT = ROOT / "public" / "thumbnails"

def wrap(title, limit=30):
    lines, current = [], ""
    for word in title.split():
        candidate = f"{current} {word}".strip()
        if len(candidate) > limit and current:
            lines.append(current); current = word
        else: current = candidate
    if current: lines.append(current)
    return lines[:3]

def main():
    if not BACKGROUNDS: raise SystemExit("No approved backgrounds found")
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for path in sorted((ROOT / "content").glob("*/*.md")):
        raw = path.read_text(encoding="utf-8")
        header = raw.split("---", 2)[1]
        meta = {k.strip(): v.strip() for k, v in (line.split(":", 1) for line in header.splitlines() if ":" in line)}
        if not meta.get("slug") or not meta.get("title"): continue
        index = int(hashlib.sha256(meta["slug"].encode()).hexdigest()[:8], 16) % len(BACKGROUNDS)
        background = re.sub(r"</svg>\s*$", "", BACKGROUNDS[index].read_text(encoding="utf-8"))
        text = "".join(f'<text x="78" y="{220+i*72}" fill="white" font-family="Arial,sans-serif" font-size="58" font-weight="700">{html.escape(line)}</text>' for i, line in enumerate(wrap(meta["title"])))
        label = html.escape(meta.get("category", "Guide").upper())
        svg = f'{background}<rect x="62" y="82" width="520" height="44" rx="22" fill="#f27b3d"/><text x="84" y="112" fill="white" font-family="Arial,sans-serif" font-size="20" font-weight="700">{label}</text>{text}<text x="78" y="560" fill="white" opacity=".82" font-family="Arial,sans-serif" font-size="24">VirtualAssistantCallCenter.com</text></svg>\n'
        target = OUTPUT / f'{meta["slug"]}.svg'
        target.write_text(svg, encoding="utf-8")
        print(f"{path.relative_to(ROOT)} -> {target.relative_to(ROOT)} ({BACKGROUNDS[index].name})")

if __name__ == "__main__": main()
