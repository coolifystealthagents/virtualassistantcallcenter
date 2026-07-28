#!/usr/bin/env python3
"""Verify required routes, canonical metadata, schema, images, TOC, and CTA."""
import json, sys, urllib.error, urllib.request

base = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000").rstrip("/")
required = ["/", "/sitemap.xml", "/alternatives", "/alternatives/virtual-receptionist-vs-answering-service"]
results, errors = {}, []
for route in required:
    url = base + route
    try:
        with urllib.request.urlopen(url, timeout=20) as response:
            body = response.read().decode("utf-8", "replace")
            results[route] = response.status
            if response.status != 200: errors.append(f"{route}: HTTP {response.status}")
            if route.startswith("/alternatives/"):
                checks = {"canonical": f'href="{url}"' in body, "article_schema": '"@type":"Article"' in body, "toc": 'aria-label="Table of contents"' in body, "cta": 'href="/contact"' in body, "image": "/thumbnails/" in body}
                results[route] = {"status": response.status, **checks}
                errors.extend(f"{route}: missing {name}" for name, ok in checks.items() if not ok)
    except (urllib.error.URLError, TimeoutError) as exc: errors.append(f"{route}: {exc}")
print(json.dumps({"ok": not errors, "base": base, "results": results, "errors": errors}, indent=2))
sys.exit(1 if errors else 0)
