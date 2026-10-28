#!/usr/bin/env python3
"""Validate authored internal destinations against public source routes.

This gate checks literal links in TS/TSX and Markdown. It intentionally ignores
runtime template strings, fragments, assets, API routes, and external schemes.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_ORIGIN = "virtualassistantcallcenter.com"


def front_matter(path: Path) -> dict[str, str]:
    raw = path.read_text(encoding="utf-8")
    match = re.match(r"^---\n(.*?)\n---\n", raw, re.S)
    if not match:
        return {}
    return {
        line.split(":", 1)[0].strip(): line.split(":", 1)[1].strip()
        for line in match.group(1).splitlines()
        if ":" in line
    }


def public_routes() -> set[str]:
    routes = {
        "/", "/services", "/pricing", "/workflows", "/qa-scorecard",
        "/blog", "/research", "/alternatives", "/contact-us",
        "/thank-you", "/thanks-whats-next", "/privacy", "/terms",
        "/cancellation-policy",
    }
    # Literal app routes.
    for page in (ROOT / "app").glob("**/page.tsx"):
        relative = page.relative_to(ROOT / "app").parent.as_posix()
        if "[" not in relative:
            routes.add("/" if relative == "." else f"/{relative}")
    # Published Markdown routes. Drafts are deliberately not public.
    for kind in ("blog", "research", "alternatives"):
        for article in (ROOT / "content" / kind).glob("*.md"):
            meta = front_matter(article)
            if meta.get("draft", "").lower() != "true" and meta.get("slug"):
                routes.add(f"/{kind}/{meta['slug']}")
    # Service registry.
    fleet = (ROOT / "app" / "fleet-content.ts").read_text(encoding="utf-8")
    routes.update(f"/services/{slug}" for slug in re.findall(r"['\"]slug['\"]\s*:\s*['\"]([^'\"]+)", fleet))
    # Generated route families.
    aug = json.loads((ROOT / "app" / "aug19-meta.json").read_text(encoding="utf-8"))
    routes.update(f"/{value['family']}/{slug}" for slug, value in aug.items())
    # Hard-coded post registry.
    data = (ROOT / "app" / "data.ts").read_text(encoding="utf-8")
    routes.update(f"/blog/{slug}" for slug in re.findall(r"slug:\s*['\"]([^'\"]+)['\"]", data))
    return {route.rstrip("/") or "/" for route in routes}


def authored_links() -> list[tuple[Path, str]]:
    found: list[tuple[Path, str]] = []
    for path in list((ROOT / "app").glob("**/*.tsx")) + list((ROOT / "content").glob("**/*.md")):
        raw = path.read_text(encoding="utf-8")
        for pattern in (r"href\s*=\s*['\"]([^'\"]+)['\"]", r"\[[^\]]+\]\(([^)]+)\)"):
            found.extend((path, href.strip()) for href in re.findall(pattern, raw))
    return found


routes = public_routes()
errors: list[str] = []
for source, href in authored_links():
    if not href or href.startswith(("#", "mailto:", "tel:", "data:")):
        continue
    parsed = urlsplit(href)
    if parsed.scheme in {"http", "https"}:
        if parsed.netloc not in {PUBLIC_ORIGIN, f"www.{PUBLIC_ORIGIN}"}:
            continue
        path = parsed.path
    elif href.startswith("/"):
        path = parsed.path
    else:
        continue
    normalized = path.rstrip("/") or "/"
    if normalized.startswith(("/_next/", "/api/", "/ingest/")):
        continue
    if Path(normalized).suffix or normalized in {"/sitemap.xml", "/robots.txt"}:
        continue
    if normalized not in routes:
        errors.append(f"{source.relative_to(ROOT)} -> {href}")

print(json.dumps({"ok": not errors, "routeCount": len(routes), "errors": sorted(set(errors))}, indent=2))
sys.exit(1 if errors else 0)
