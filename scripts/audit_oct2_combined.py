from pathlib import Path
import hashlib
import itertools
import json
import re
import sys

ROOT = Path(__file__).parents[1]
DATE = "2026-10-02"
blog_manifest = json.loads((ROOT / ".paperclip/daily-content/2026-10-02/blog.json").read_text())
research_manifest = json.loads((ROOT / ".paperclip/daily-content/2026-10-02/research-vira-70-manifest.json").read_text())

families = {
    "blog": [{**row, "path": row["sourcePath"], "sources": [row["source"]]} for row in blog_manifest["entries"]],
    "research": [{**row, "path": row["contentPath"], "sources": re.findall(r"https://[^)\s]+", (ROOT / row["contentPath"]).read_text())} for row in research_manifest["draftedItems"]],
}
expected = {"blog": 12, "research": 5}
minimum = {"blog": 900, "research": 1200}
errors = []
evidence = {}
blog_paragraph_owners = {}
blog_heading_sequences = {}
service_slugs = set(re.findall(r'"slug":\s*"([^"]+)"', (ROOT / "app/fleet-content.ts").read_text()))
expected_service_destinations = {
    "caller-id-spoofing-intake-safeguard-study": "/services/inbound-customer-calls",
    "do-not-call-request-suppression-latency-study": "/services/outbound-lead-qualification",
    "outbound-calling-window-timezone-control-study": "/services/outbound-lead-qualification",
    "voicemail-greeting-version-drift-study": "/services/after-hours-answering",
}

for family, rows in families.items():
    if len(rows) != expected[family]:
        errors.append(f"{family}: expected {expected[family]}, found {len(rows)}")
    output, shingles = [], {}
    for row in rows:
        path = ROOT / row["path"]
        raw = path.read_text(encoding="utf-8")
        digest = hashlib.sha256(raw.encode()).hexdigest()
        if digest != row["contentSha256"]:
            errors.append(f"{row['slug']}: hash mismatch")
        front, body = raw.split("---", 2)[1:]
        for key in ("published", "updated"):
            if not re.search(rf"^{key}: ['\"]?{DATE}['\"]?$", front, re.M):
                errors.append(f"{row['slug']}: {key} date mismatch")
        if family == "research" and not re.search(rf"^datePublished: ['\"]?{DATE}['\"]?$", front, re.M):
            errors.append(f"{row['slug']}: datePublished mismatch")
        cutoff = body.split("## Source", 1)[0].split("## Sources", 1)[0]
        words = re.findall(r"[A-Za-z0-9']+", cutoff)
        if len(words) < minimum[family]:
            errors.append(f"{row['slug']}: {len(words)} body words")
        shingles[row["slug"]] = {tuple(w.lower() for w in words[i:i+5]) for i in range(len(words)-4)}
        if family == "blog":
            headings = tuple(re.findall(r"^##\s+(.+)$", cutoff, re.M))
            blog_heading_sequences.setdefault(headings, []).append(row["slug"])
            for paragraph in re.split(r"\n\s*\n", cutoff):
                normalized = " ".join(re.findall(r"[a-z0-9']+", paragraph.lower()))
                if len(normalized.split()) >= 40:
                    blog_paragraph_owners.setdefault(normalized, []).append(row["slug"])
        image = re.search(r"^image:\s*(\S+)", front, re.M)
        if not image or not (ROOT / "public" / image.group(1).lstrip("/")).is_file():
            errors.append(f"{row['slug']}: missing image")
        for source in row["sources"]:
            if source not in raw:
                errors.append(f"{row['slug']}: source absent from article: {source}")
        internal_links = re.findall(r"\]\((/[^)#?]+)", body)
        for link in internal_links:
            top = link.strip("/").split("/", 1)[0]
            if top not in {"blog", "research", "services", "workflows", "qa-scorecard", "contact"}:
                errors.append(f"{row['slug']}: unsupported internal link {link}")
            if top == "services" and link.split("/", 2)[-1] not in service_slugs:
                errors.append(f"{row['slug']}: nonexistent service destination {link}")
        expected_service = expected_service_destinations.get(row["slug"])
        if expected_service and expected_service not in internal_links:
            errors.append(f"{row['slug']}: expected contextual service destination {expected_service}")
        output.append({"slug": row["slug"], "path": row["path"], "bodyWordCount": len(words), "contentSha256": digest, "sources": row["sources"], "image": image.group(1) if image else None, "route": f"/{family}/{row['slug']}"})
    pairs = []
    for left, right in itertools.combinations(shingles, 2):
        a, b = shingles[left], shingles[right]
        pairs.append({"left": left, "right": right, "jaccard": round(len(a & b) / len(a | b), 6)})
    pairs.sort(key=lambda x: x["jaccard"], reverse=True)
    if pairs and pairs[0]["jaccard"] >= 0.5:
        errors.append(f"{family}: overlap {pairs[0]['jaccard']} exceeds threshold")
    evidence[family] = {"count": len(output), "minimumBodyWords": minimum[family], "maximumPairwiseFiveWordShingleJaccard": pairs[0] if pairs else None, "items": output}

for paragraph, owners in blog_paragraph_owners.items():
    distinct = sorted(set(owners))
    if len(distinct) > 1:
        errors.append(f"blog: repeated substantive paragraph in {', '.join(distinct)}")
for headings, owners in blog_heading_sequences.items():
    if len(owners) > 1:
        errors.append(f"blog: repeated complete heading sequence in {', '.join(sorted(owners))}")

result = {
    "cycleLabel": "2026-10-02", "publicationDate": DATE, "siteTimezone": "UTC",
    "baselineSha": "1a1863a65f7c9c4935d048ef62faa27a57cfe8ae",
    "researchHandoffSha": "ec99ad578a9ca39b0630cbcefa6db931c50ea68a",
    "deploymentOwner": "Browser Operator", "publicVerificationOwner": "user",
    "status": "passed" if not errors else "failed", "errors": errors, "families": evidence,
}
(ROOT / ".paperclip/daily-content/2026-10-02/combined-release.json").write_text(json.dumps(result, indent=2) + "\n")
print(json.dumps({"status": result["status"], "errors": errors, "counts": {k: v["count"] for k, v in evidence.items()}, "overlap": {k: v["maximumPairwiseFiveWordShingleJaccard"] for k, v in evidence.items()}}, indent=2))
sys.exit(1 if errors else 0)
