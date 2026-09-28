from pathlib import Path
import hashlib
import itertools
import json
import re
import sys

ROOT = Path(__file__).parents[1]
DATE = "2026-09-28"
blog_manifest = json.loads((ROOT / ".paperclip/daily-content/2026-09-28/blog.json").read_text())
research_manifest = json.loads((ROOT / ".paperclip/daily-content/2026-09-28/research-vira-68-manifest.json").read_text())

families = {
    "blog": [{**row, "path": row["sourcePath"], "sources": [row["source"]]} for row in blog_manifest["entries"]],
    "research": [{**row, "path": f"content/research/{row['slug']}.md", "sources": [s["url"] for s in row["sources"]]} for row in research_manifest["items"]],
}
expected = {"blog": 12, "research": 5}
minimum = {"blog": 900, "research": 1200}
errors = []
evidence = {}

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
        image = re.search(r"^image:\s*(\S+)", front, re.M)
        if not image or not (ROOT / "public" / image.group(1).lstrip("/")).is_file():
            errors.append(f"{row['slug']}: missing image")
        for source in row["sources"]:
            if source not in raw:
                errors.append(f"{row['slug']}: source absent from article: {source}")
        for link in re.findall(r"\]\((/[^)#?]+)", body):
            top = link.strip("/").split("/", 1)[0]
            if top not in {"blog", "research", "services", "workflows", "qa-scorecard", "contact"}:
                errors.append(f"{row['slug']}: unsupported internal link {link}")
        output.append({"slug": row["slug"], "path": row["path"], "bodyWordCount": len(words), "contentSha256": digest, "sources": row["sources"], "image": image.group(1) if image else None, "route": f"/{family}/{row['slug']}"})
    pairs = []
    for left, right in itertools.combinations(shingles, 2):
        a, b = shingles[left], shingles[right]
        pairs.append({"left": left, "right": right, "jaccard": round(len(a & b) / len(a | b), 6)})
    pairs.sort(key=lambda x: x["jaccard"], reverse=True)
    if pairs and pairs[0]["jaccard"] >= 0.5:
        errors.append(f"{family}: overlap {pairs[0]['jaccard']} exceeds threshold")
    evidence[family] = {"count": len(output), "minimumBodyWords": minimum[family], "maximumPairwiseFiveWordShingleJaccard": pairs[0] if pairs else None, "items": output}

result = {
    "cycleLabel": "September28", "publicationDate": DATE, "siteTimezone": "UTC",
    "baselineSha": "eda5b12b6f7516b6521b3eba36f77b7ea3d8894f",
    "researchHandoffSha": "d29e98d83584df5c2de534dbd35e0f1cc45b4066",
    "deploymentOwner": "Browser Operator", "publicVerificationOwner": "user",
    "status": "passed" if not errors else "failed", "errors": errors, "families": evidence,
}
(ROOT / ".paperclip/daily-content/2026-09-28/combined-release.json").write_text(json.dumps(result, indent=2) + "\n")
print(json.dumps({"status": result["status"], "errors": errors, "counts": {k: v["count"] for k, v in evidence.items()}, "overlap": {k: v["maximumPairwiseFiveWordShingleJaccard"] for k, v in evidence.items()}}, indent=2))
sys.exit(1 if errors else 0)
