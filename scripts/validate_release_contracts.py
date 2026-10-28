#!/usr/bin/env python3
"""Static release-contract checks that do not create leads or bookings."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
errors: list[str] = []


def require(condition: bool, message: str) -> None:
    if not condition:
        errors.append(message)


form = (ROOT / "app/contact-us/StandardContactForm.tsx").read_text(encoding="utf-8")
contact_page = (ROOT / "app/contact-us/page.tsx").read_text(encoding="utf-8")
api = (ROOT / "app/api/contact/route.ts").read_text(encoding="utf-8")
content_loader = (ROOT / "app/content.ts").read_text(encoding="utf-8")
layout = (ROOT / "app/layout.tsx").read_text(encoding="utf-8")
components = (ROOT / "app/components.tsx").read_text(encoding="utf-8")
blog_layout = (ROOT / "app/blog/layout.tsx").read_text(encoding="utf-8")
config = (ROOT / "next.config.mjs").read_text(encoding="utf-8")

# Contact field names, client behavior, native fallback, analytics and endpoints.
require('<StandardContactForm endpoint="/api/contact" encoding="form" />' in contact_page, "contact page must use approved /api/contact form endpoint")
require('method="post"' in form and "action={endpoint}" in form, "contact form must retain native POST fallback")
for field in ("firstName", "lastName", "email", "countryCode", "phoneLocal", "companyName", "website", "companySize", "positions", "referral", "referralSpecify", "message"):
    require(f'name="{field}"' in form, f"contact form field missing: {field}")
for alias in ("firstName", "lastName", "name", "email", "phone", "company", "companyName", "companySize", "positions", "referral", "referralSpecify"):
    require(f"text(form,'{alias}'" in api or alias in {"firstName", "lastName", "name"}, f"server alias missing: {alias}")
require('tracker.trackLead(payload)' in form, "approved acrTracker lead hook missing")
require('window.location.assign("/thank-you")' in form, "client success route must be /thank-you")
require("new URL('/thank-you?lead=accepted'" in api, "native success route must be /thank-you")
require('id="contact-form-error"' in form and 'role="alert"' in form, "client failure must expose an accessible alert")
require("Return to the contact form" in api, "native failure page must provide a recovery link")
require("oncehub" not in contact_page.lower() and "oncehub" not in form.lower(), "OnceHub must not appear on /contact-us")

# Identity and browser metadata.
require("/icon.svg" in layout, "favicon declaration missing")
require("/apple-touch-icon.png" in layout, "apple touch icon declaration missing")
require("/og-image.png" in layout, "raster Open Graph image declaration missing")
require("Virtual Assistant Call Center" in layout, "subsidiary identity missing from metadata")
require("Powered by" in components, "StealthAgents attribution missing")

# Blog conversion offers must remain inside the site chrome: after Header and before Footer.
require("BlogBanner" not in blog_layout, "blog layout must not place conversion offers outside page Header/Footer")
require("pathname === '/blog' || pathname.startsWith('/blog/')" in components, "shared chrome must scope conversion offers to actual blog routes")
require('</header>{showBlogBanners?<BlogBanner position="top"/>:null}' in components, "blog top offer must render after the shared Header")
require('return <>{showBlogBanners?<><BlogBanner position="middle"/><BlogBanner position="bottom"/></>:null}<footer' in components, "blog final offers must render before the shared Footer")

# Drafts are filtered before indexes, static params and sitemap consume content.
require(".filter((entry) => !entry.draft)" in content_loader, "draft content must be filtered by the shared loader")
drafts = []
for article in (ROOT / "content").glob("*/*.md"):
    if re.search(r"^draft:\s*true\s*$", article.read_text(encoding="utf-8"), re.M):
        drafts.append(article)
require(len(drafts) == 17, f"expected 17 quarantined drafts, found {len(drafts)}")

# Compatibility routes identified by the live audit.
for source in ("/industries", "/industry", "/services/inbound-call-answering", "/services/appointment-scheduling", "/blog/warm-transfer-call-handling"):
    require(f'source: "{source}"' in config, f"legacy route redirect missing: {source}")

# Every authored img must reserve an intrinsic box.
for component in (ROOT / "app").rglob("*.tsx"):
    for tag in re.findall(r"<img\b[^>]*>", component.read_text(encoding="utf-8")):
        require("width=" in tag and "height=" in tag, f"image lacks intrinsic dimensions in {component.relative_to(ROOT)}: {tag[:100]}")

if errors:
    print("Release contract validation failed:")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)
print(f"Release contract validation passed ({len(drafts)} drafts excluded; all authored images reserve dimensions).")
