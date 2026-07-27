#!/usr/bin/env python3
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

EXPECTED_TITLE = "Outbound lead follow-up with a Philippines virtual assistant"
EXPECTED_SLUG = "outbound-lead-follow-up-virtual-assistant-philippines"
EXPECTED_MARKER = "VAC-OUTBOUND-CONSENT-2026-07-27"

class Node:
    def __init__(self, tag="root", attrs=None):
        self.tag = tag
        self.attrs = dict(attrs or [])
        self.children = []
        self.content = []

    def text(self):
        parts = []
        for item in self.content:
            if isinstance(item, str):
                parts.append(item)
            elif item.tag not in {"script", "style", "noscript"}:
                parts.append(item.text())
        return " ".join(part for part in parts if part).strip()

    def all(self, tag=None):
        found = []
        for child in self.children:
            if tag is None or child.tag == tag:
                found.append(child)
            found.extend(child.all(tag))
        return found

class Parser(HTMLParser):
    void = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node()
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        self.stack[-1].content.append(node)
        if tag not in self.void:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in self.void:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                self.stack = self.stack[:index]
                return

    def handle_data(self, data):
        if data.strip():
            self.stack[-1].content.append(data.strip())


def has_class(node, name):
    return name in node.attrs.get("class", "").split()


def sentence_count(text):
    cleaned = re.sub(r"\b(?:U\.S|HHS|CDC|NIST)\.", lambda match: match.group(0).replace(".", ""), text)
    return len([part for part in re.split(r"(?<=[.!?])[\"']?\s+", cleaned.strip()) if re.search(r"[A-Za-z0-9]", part)])


def main(path):
    raw = Path(path).read_text(errors="ignore")
    parser = Parser()
    parser.feed(raw)
    articles = [node for node in parser.root.all("article") if node.attrs.get("data-article-marker") == EXPECTED_MARKER]
    if len(articles) != 1:
        raise SystemExit(json.dumps({"ok": False, "error": "ARTICLE_ROOT_MISMATCH", "count": len(articles)}))
    article = articles[0]
    visible = re.sub(r"\s+", " ", article.text()).strip()
    words = re.findall(r"\b[\w]+(?:['’-][\w]+)*\b", visible, flags=re.UNICODE)
    hrefs = [node.attrs.get("href", "") for node in article.all("a")]
    internal = sorted({href for href in hrefs if href.startswith("/")})
    external = sorted({href for href in hrefs if href.startswith("http://") or href.startswith("https://")})
    build_root = Path(path).parents[1]
    missing_internal = []
    for href in internal:
        route = href.split("#", 1)[0].split("?", 1)[0].strip("/")
        candidates = [build_root / (route + ".html"), build_root / route / "index.html"] if route else [build_root / "index.html"]
        if not any(candidate.exists() for candidate in candidates):
            missing_internal.append(href)
    banners = [node.attrs.get("data-banner-slot") for node in article.all() if has_class(node, "article-banner")]
    visuals = [node.attrs.get("data-visual") for node in article.all() if node.attrs.get("data-visual")]
    bad_paragraphs = []
    for index, paragraph in enumerate(article.all("p"), 1):
        if has_class(paragraph, "eyebrow"):
            continue
        text = re.sub(r"\s+", " ", paragraph.text()).strip()
        count = sentence_count(text)
        if count < 2 or count > 3:
            bad_paragraphs.append({"index": index, "sentences": count, "text": text[:180]})
    h1s = [re.sub(r"\s+", " ", node.text()).strip() for node in article.all("h1")]
    source_sections = [node for node in article.all("section") if has_class(node, "sources-section")]
    source_items = source_sections[0].all("li") if len(source_sections) == 1 else []
    page_visible = re.sub(r"\s+", " ", parser.root.text()).strip()
    page_hrefs = [node.attrs.get("href", "") for node in parser.root.all("a")]
    forbidden = re.findall(r"(?i)\b(?:pricing|prices?|rates?|tiers?)\b|/pricing", page_visible + " " + " ".join(page_hrefs))
    checks = {
        "word_range_1500_2000": 1500 <= len(words) <= 2000,
        "h1_exact": h1s == [EXPECTED_TITLE],
        "title_present": f"<title>{EXPECTED_TITLE}" in raw,
        "canonical_exact": f'href="https://virtualassistantcallcenter.com/blog/{EXPECTED_SLUG}"' in raw,
        "unique_marker": raw.count(EXPECTED_MARKER) >= 1,
        "one_table": len(article.all("table")) == 1,
        "two_svgs": len(article.all("svg")) == 2,
        "visual_identities": visuals == ["ftc-robocall-complaints-chart", "consent-first-follow-up-process"],
        "visual_regions_focusable": all(node.attrs.get("tabindex") == "0" and node.attrs.get("role") == "region" for node in article.all("figure")),
        "one_blockquote": len(article.all("blockquote")) == 1,
        "three_banner_slots": banners == ["top", "middle", "bottom"],
        "internal_links": len(internal) >= 3,
        "internal_destinations_exist": not missing_internal,
        "external_links": len(external) >= 4,
        "five_numbered_sources": len(source_items) == 5,
        "paragraphs_2_3_sentences": not bad_paragraphs,
        "methods_note": any(has_class(node, "methods-note") for node in article.all()),
        "dated_stats": all(marker in visible for marker in ["253 million", "2 million", "4.2 million", "249.5 million", "1.1 million", "1.2 million", "3.4 million"]),
        "exact_quote": "Illegal calls remain a scourge, but the FTC's strategy to pursue upstream players and equip the agency to confront emerging threats is showing clear signs of success." in visible,
        "philippines_only_context": "Filipino virtual assistant" in visible and "Philippines-based assistant" in visible,
        "no_forbidden_commercial_copy": not forbidden,
        "article_schema": '"@type":"Article"' in raw,
        "faq_schema": '"@type":"FAQPage"' in raw,
    }
    result = {
        "ok": all(checks.values()),
        "article_words": len(words),
        "checks": checks,
        "bad_paragraphs": bad_paragraphs,
        "banner_slots": banners,
        "visuals": visuals,
        "internal_links": internal,
        "missing_internal": missing_internal,
        "external_links": external,
        "forbidden_matches": forbidden,
    }
    print(json.dumps(result, indent=2))
    raise SystemExit(0 if result["ok"] else 1)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("usage: audit_outbound_article.py BUILT_HTML")
    main(sys.argv[1])
