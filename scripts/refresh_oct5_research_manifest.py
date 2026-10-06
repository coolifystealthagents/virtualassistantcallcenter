from pathlib import Path
import hashlib
import json


ROOT = Path(__file__).parents[1]
MANIFEST = ROOT / ".paperclip/daily-content/2026-10-05/research-vira-73-manifest.json"

data = json.loads(MANIFEST.read_text(encoding="utf-8"))
data["publicationDateCandidate"] = "2026-10-06"

for item in data["draftedItems"]:
    raw = (ROOT / item["contentPath"]).read_bytes()
    item["contentSha256"] = hashlib.sha256(raw).hexdigest()

MANIFEST.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
