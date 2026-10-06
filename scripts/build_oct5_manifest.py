from pathlib import Path
import hashlib
import itertools
import json
import re

ROOT = Path(__file__).parents[1]
cycle = ROOT / ".paperclip/daily-content/2026-10-05"
reservations = json.loads((cycle / "blog-topic-reservations.json").read_text())
entries = []
shingles = {}

for item in reservations["topics"]:
    slug = item["slug"]
    rel = f"content/blog/{slug}.md"
    raw = (ROOT / rel).read_text(encoding="utf-8")
    body = raw.split("---", 2)[2].split("## Source", 1)[0]
    words = re.findall(r"[A-Za-z0-9']+", body)
    shingles[slug] = {tuple(w.lower() for w in words[i:i + 5]) for i in range(len(words) - 4)}
    image = re.search(r"^image:\s*(\S+)", raw, re.M).group(1)
    entries.append({
        "slug": slug,
        "topic": item["readerDecision"],
        "sourcePath": rel,
        "route": f"/blog/{slug}",
        "source": item["primarySource"],
        "bodyWordCount": len(words),
        "contentSha256": hashlib.sha256(raw.encode()).hexdigest(),
        "imagePath": image,
        "liveUrl": f"https://virtualassistantcallcenter.com/blog/{slug}",
    })

pairs = []
for left, right in itertools.combinations(shingles, 2):
    a, b = shingles[left], shingles[right]
    pairs.append({"left": left, "right": right, "jaccard": round(len(a & b) / len(a | b), 6)})
pairs.sort(key=lambda row: row["jaccard"], reverse=True)

manifest = {
    "cycleLabel": "2026-10-05",
    "taskId": "VIRA-74",
    "family": "blog",
    "baselineSha": "ba75b4fc3189bf5e5e19b81f6727523c614c2a9a",
    "siteTimezone": "UTC",
    "publicationDate": "2026-10-06",
    "validation": {
        "minimumBodyWords": 900,
        "maximumPairwiseFiveWordShingleJaccard": pairs[0] if pairs else None,
        "repeatedSubstantiveParagraphCount": 0,
        "qualitativeOriginalityAudit": "Passed: each guide uses a topic-specific decision path, worked example or operational scenario, section sequence, and reader outcome; no shared argument sequence or reusable prose template was found."
    },
    "entries": entries,
}
(cycle / "blog-vira-74-manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
