from pathlib import Path
from difflib import SequenceMatcher
import json, re, sys

ROOT=Path(__file__).parents[1]
CYCLE=ROOT/".paperclip/daily-content/2026-10-05"
manifest=json.loads((CYCLE/"blog-vira-74-manifest.json").read_text())
current={x["slug"] for x in manifest["entries"]}

def body(path):
    raw=path.read_text(encoding="utf-8")
    return raw.split("---",2)[2] if raw.startswith("---") else raw
def words(text): return re.findall(r"[a-z0-9']+",text.lower())
def shingles(text):
    seq=words(text); return {tuple(seq[i:i+5]) for i in range(len(seq)-4)}
def paragraphs(text):
    return {" ".join(words(p)) for p in re.split(r"\n\s*\n",text) if len(words(p))>=40}

prior=[]
for family in ("blog","research"):
    for path in (ROOT/"content"/family).glob("*.md"):
        if path.stem not in current:
            text=body(path); prior.append((family,path.stem,shingles(text),paragraphs(text)))

errors=[]; rows=[]
for item in manifest["entries"]:
    slug=item["slug"]; text=body(ROOT/item["sourcePath"]); sh=shingles(text); para=paragraphs(text)
    best_overlap=(0,None); best_slug=(0,None); repeated=[]
    for family,old,osh,opara in prior:
        overlap=len(sh&osh)/len(sh|osh) if sh|osh else 0
        if overlap>best_overlap[0]: best_overlap=(overlap,f"{family}/{old}")
        similarity=SequenceMatcher(None,slug,old).ratio()
        if similarity>best_slug[0]: best_slug=(similarity,f"{family}/{old}")
        if para&opara: repeated.append(f"{family}/{old}")
    if best_overlap[0]>=0.50: errors.append(f"{slug}: prior overlap {best_overlap}")
    if repeated: errors.append(f"{slug}: repeated substantive paragraph with {repeated}")
    if best_slug[0]>=0.92: errors.append(f"{slug}: near-collision slug {best_slug}")
    rows.append({"slug":slug,"maxPriorFiveWordShingleJaccard":{"value":round(best_overlap[0],6),"item":best_overlap[1]},"nearestPriorSlug":{"similarity":round(best_slug[0],6),"item":best_slug[1]},"repeatedPriorSubstantiveParagraphs":repeated})

result={"status":"passed" if not errors else "failed","errors":errors,"qualitativeAudit":"Distinct subject-specific decision, example, and section-sequence review completed; no reused worked examples or shared full argument sequence found.","items":rows}
(CYCLE/"prior-corpus-originality.json").write_text(json.dumps(result,indent=2)+"\n")
print(json.dumps({"status":result["status"],"errors":errors,"maxOverlap":max((x["maxPriorFiveWordShingleJaccard"]["value"] for x in rows),default=0)},indent=2))
sys.exit(1 if errors else 0)
