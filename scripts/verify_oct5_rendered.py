from pathlib import Path
from html.parser import HTMLParser
from urllib.request import Request, urlopen
from urllib.error import HTTPError
import hashlib, json, re, sys, xml.etree.ElementTree as ET

ROOT = Path(__file__).parents[1]
BASE = "http://127.0.0.1:3000"
CYCLE = ROOT / ".paperclip/daily-content/2026-10-05"
blog = json.loads((CYCLE / "blog-vira-74-manifest.json").read_text())
research = json.loads((CYCLE / "research-vira-73-manifest.json").read_text())
rows = [("blog", x["sourcePath"], x["slug"], x["imagePath"]) for x in blog["entries"]]
rows += [("research", x["contentPath"], x["slug"], None) for x in research["draftedItems"]]
errors, evidence = [], []

class Text(HTMLParser):
    def __init__(self): super().__init__(); self.parts=[]
    def handle_data(self, data): self.parts.append(data)

def get(url):
    req=Request(url,headers={"User-Agent":"Mozilla/5.0 VIRA-74 validator"})
    try:
        with urlopen(req,timeout=20) as r: return r.status, r.headers.get("content-type", ""), r.read()
    except HTTPError as e: return e.code, e.headers.get("content-type", ""), e.read()

def plain(value):
    value=re.sub(r"!\[([^]]*)\]\([^)]+\)", r"\1", value)
    value=re.sub(r"\[([^]]+)\]\([^)]+\)", r"\1", value)
    value=re.sub(r"[`*_#>]", "", value)
    return " ".join(value.split())

for family, rel, slug, manifest_image in rows:
    raw=(ROOT/rel).read_text(); front, body=raw.split("---",2)[1:]
    title=re.search(r"^title:\s*(.+)$",front,re.M).group(1)
    image=manifest_image or re.search(r"^image:\s*(\S+)",front,re.M).group(1)
    route=f"/{family}/{slug}"
    status,ctype,data=get(BASE+route); html=data.decode("utf-8","replace")
    if status != 200: errors.append(f"{route}: HTTP {status}")
    for needle,label in [(title,"title"),("2026-10-05","date"),(f"https://virtualassistantcallcenter.com{route}","canonical")]:
        if needle not in html: errors.append(f"{route}: missing {label}")
    if '"datePublished":"2026-10-05"' not in html: errors.append(f"{route}: datePublished mismatch")
    parser=Text(); parser.feed(html); rendered=plain(" ".join(parser.parts))
    paragraphs=[]
    for block in re.split(r"\n\s*\n",body):
        value=plain(block)
        if len(value.split()) >= 12 and not value.startswith(("slug:","published:")):
            paragraphs.append(value)
            if value not in rendered: errors.append(f"{route}: rendered paragraph mismatch: {value[:70]}")
    ordered_hash=hashlib.sha256("\n".join(paragraphs).encode()).hexdigest()
    istatus,ictype,idata=get(BASE+image)
    if istatus != 200 or "image/" not in ictype: errors.append(f"{route}: image HTTP/MIME {istatus} {ictype}")
    try:
        if "svg" in ictype or idata.lstrip().startswith(b"<svg"): ET.fromstring(idata)
        elif not idata.startswith((b"\x89PNG",b"\xff\xd8\xff",b"GIF8",b"RIFF")): raise ValueError("unknown signature")
    except Exception as exc: errors.append(f"{route}: image decode {exc}")
    internal=sorted(set(re.findall(r"\]\((/[^)#?]+)",body)))
    for link in internal:
        code,_,_=get(BASE+link)
        if code >= 400: errors.append(f"{route}: internal {link} HTTP {code}")
    sources=sorted(set(re.findall(r"https://[^)\s]+",body)))
    source_status={}
    for url in sources:
        code,_,_=get(url); source_status[url]=code
        if code >= 500: errors.append(f"{route}: source {url} HTTP {code}")
    evidence.append({"route":route,"orderedSourceRenderParagraphHash":ordered_hash,"paragraphCount":len(paragraphs),"image":image,"imageHttp":istatus,"imageMime":ictype,"sources":source_status})

for index in ("/blog","/research","/sitemap.xml"):
    code,_,data=get(BASE+index); page=data.decode("utf-8","replace")
    if code != 200: errors.append(f"{index}: HTTP {code}")
    for family,_,slug,_ in rows:
        if index == "/blog" and family != "blog": continue
        if index == "/research" and family != "research": continue
        if f"/{family}/{slug}" not in page: errors.append(f"{index}: missing {slug}")

result={"status":"passed" if not errors else "failed","verifiedRoutes":len(evidence),"errors":errors,"routes":evidence}
(CYCLE/"prepush-rendered-verification.json").write_text(json.dumps(result,indent=2)+"\n")
print(json.dumps({"status":result["status"],"verifiedRoutes":len(evidence),"errors":errors},indent=2))
sys.exit(1 if errors else 0)
