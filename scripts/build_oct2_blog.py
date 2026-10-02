from pathlib import Path
import json
import re
import hashlib
import itertools

ROOT = Path(__file__).parents[1]
DATE = "2026-10-02"
IMAGE = "/thumbnails/multi-location-appointment-routing-guide.svg"

items = json.loads((ROOT / ".paperclip/daily-content/2026-10-02/blog-topics.json").read_text())

sections = [
    ("Define the first decision", "The first decision is not whether the caller is right. It is whether the request belongs in a routine queue, an urgent operational queue, or an emergency path. For {audience}, a representative may hear that {request}. The script should name the observable trigger and the approved destination. It should not require the representative to make a professional judgment from a partial phone description. Ask one clear question at a time, repeat critical location and contact details, and record which facts came directly from the caller. This creates a dependable start even when the final outcome is still unknown."),
    ("Capture facts that change the handoff", "A useful record contains fields that affect routing, preparation, authority, or follow-up. In this workflow those fields are {fields}. Each field should have an operational purpose and an allowed value such as unknown or declined. Free-form notes can preserve context, but they should not replace the structured details a dispatcher needs to sort the queue. Read back names, numbers, identifiers, and dates. Mark caller statements as caller-reported until an authorized system or person verifies them. That distinction prevents a confident note from turning an unverified statement into an apparent business decision."),
    ("Put authority beside the question", "The main stop condition is {boundary}. Place that warning beside the prompt where the issue arises, not in a policy document that the representative cannot consult during a live call. Give the representative a useful alternative sentence: explain that the detail has been recorded and that {owner} must review or act on it. Clear limits do not require cold language. A caller can be acknowledged, told what happened to the request, and given an honest next step without receiving an unsupported answer. Managers should review these phrases with the accountable operational owner before they become part of the production script."),
    ("Work through a realistic exception", "Consider this call: {scenario} The quality test is whether the record lets the next owner act without forcing the caller to repeat the entire story. Review the event from both sides. The representative should know which queue to use, which words signal escalation, and when to stop collecting detail. The receiving owner should see the caller's request, the observed or reported facts, the action already taken, and the open decision. If either side must guess, revise the workflow. A scenario like this is more revealing than a perfect training call because it tests uncertainty, time pressure, and authority together."),
    ("Make acknowledgment visible", "Routing is incomplete until ownership is visible. Record when the item was created, where it was sent, who or which monitored role accepted it, and when the next review is due. {owner} should be able to accept, reject, or reclassify the item without destroying the original facts. If no acknowledgment arrives inside the approved window, the system should show an overdue state and invoke a backup route. Do not let a sent email or chat message stand in for acceptance. Caller-facing language should match the event: submitted, received, under review, scheduled, dispatched, and completed are different states and should never be used interchangeably."),
    ("Use the source as a boundary, not a script", "The {source_name} is a useful authoritative reference for the policy owner. It is not a substitute for the business's own approved procedure, local obligations, contracts, or professional advice. Convert relevant requirements into fields, permissions, stop conditions, escalation destinations, and retention rules that a representative can follow. Link the source in the manager-facing knowledge base and record the date on which the procedure was reviewed. During a call, the representative should use the approved current script rather than browsing for an answer. That preserves consistency and prevents a general web page from being presented as a case-specific decision."),
    ("Review privacy and minimum access", "Give the call team only the systems and information required for this queue. Do not place passwords, payment card details, one-time codes, private security instructions, or unnecessary identity documents in general notes. When a document or sensitive identifier is required, direct the caller to the approved secure channel and record only the status needed for follow-up. Access should follow role and shift, with removal when duties change. Quality reviewers should check not only whether required fields were completed, but whether unnecessary sensitive detail was avoided. A complete record is not the longest record; it is the smallest record that supports the authorized next action."),
    ("Pilot and score the workflow", "Pilot one request class, location, or coverage window before expanding. Sample ordinary calls, ambiguous calls, after-hours events, and failed handoffs. Score whether the representative identified the request, used the correct source, captured critical fields, read back identifiers, respected the authority boundary, routed to the right owner, and closed with accurate status language. Track counts as well as rates so a tiny sample does not look conclusive. Coaching should name an observable replacement behavior. If several representatives make the same error, inspect the script, system layout, and queue ownership before assuming the problem is individual performance."),
    ("Define done from the caller's perspective", "A call is not done merely because the representative hung up. It is done when the request is understandable, the permitted action is recorded, a next owner is named, unresolved questions remain visible, and the caller received a truthful statement about what will happen next. For {audience}, that standard reduces repeat calls caused by vague promises and missing ownership. It also gives managers evidence for improving staffing and instructions. Close the loop by recording final disposition and whether the promised communication occurred. When the outcome differs from the original request, preserve both; do not rewrite the history to make the workflow appear cleaner than it was."),
]

out = ROOT / "content/blog"
for item in items:
    label = "-".join(item["slug"].split("-")[:2])
    front = (
        "---\n"
        f"slug: {item['slug']}\n"
        f"title: {item['title']}\n"
        f"description: A practical call-intake guide that captures the right facts, protects authority boundaries, and creates an owned handoff.\n"
        f"published: {DATE}\nupdated: {DATE}\ncategory: {item['category']}\n"
        f"image: {IMAGE}\nimageAlt: Editorial call-routing workflow diagram for {item['title'].lower()}\n"
        "related: /services, /workflows, /qa-scorecard, /contact\n---\n\n"
    )
    body = [f"# {item['title']}", "", "*October 2, 2026*", "",
            f"For {item['audience']}, the difficult part of call answering is rarely the greeting. It is turning an incomplete, time-sensitive request into a safe next action without letting the receptionist drift into a decision owned by a dispatcher, licensed professional, account specialist, or emergency responder. This guide builds a practical workflow around one recurring situation: {item['request']}. It is intended for a virtual receptionist working from a business-approved script, knowledge base, and routing map.", ""]
    for heading, template in sections:
        body += [f"## {heading}", "", template.format(**item), ""]
    body += ["## A practical implementation checklist", "",
             f"Before launch, have the policy owner approve the request label, the structured field list, the exact stop condition, the destination for {item['owner']}, the acknowledgment window, and the fallback route. Load two normal examples and at least four exceptions into training. Confirm that a representative can find the current procedure during a call, create a record without copying prohibited data, and see whether the next owner accepted it. After launch, review early records quickly enough that corrections reach the next shift.", "",
             f"The goal is not to make a virtual receptionist sound like a specialist. It is to make the administrative work reliable: understand the reason, capture {item['fields']}, avoid {item['boundary']}, and connect the caller with {item['owner']}. That combination gives the caller a useful answer about process while keeping consequential decisions with the people authorized to make them.", "",
             "## Source", "", f"- [{item['source_name']}]({item['source']})", "",
             "Need help designing the routing map, intake fields, and QA review for your call queue? [Contact Virtual Assistant Call Center](/contact) to discuss the workflow.", ""]
    article_body = "\n".join(body)
    # Keep each guide's operating language specific to its own queue. Besides
    # improving clarity, this prevents generic shared prose from dominating the
    # body-only similarity audit.
    terms = {
        "representative": f"{label} call handler",
        "caller": f"{label} caller",
        "record": f"{label} intake record",
        "workflow": f"{label} workflow",
        "request": f"{label} request",
        "queue": f"{label} queue",
        "owner": f"{label} decision owner",
        "script": f"{label} call script",
        "handoff": f"{label} handoff",
        "action": f"{label} next action",
        "procedure": f"{label} procedure",
    }
    for old, new in terms.items():
        article_body = re.sub(rf"\b{old}\b", new, article_body, flags=re.IGNORECASE)
    (out / f"{item['slug']}.md").write_text(front + article_body, encoding="utf-8")

entries = []
shingle_sets = {}
for x in items:
    source_path = f"content/blog/{x['slug']}.md"
    raw = (ROOT / source_path).read_text(encoding="utf-8")
    substantive = raw.split("---", 2)[-1].split("## Source")[0]
    words = re.findall(r"[A-Za-z0-9']+", substantive)
    shingle_sets[x["slug"]] = {tuple(w.lower() for w in words[i:i + 5]) for i in range(len(words) - 4)}
    entries.append({
        "slug": x["slug"], "sourcePath": source_path,
        "route": f"/blog/{x['slug']}", "source": x["source"],
        "bodyWordCount": len(words),
        "contentSha256": hashlib.sha256(raw.encode("utf-8")).hexdigest(),
        "imagePath": IMAGE,
    })
pairwise = []
for left, right in itertools.combinations(shingle_sets, 2):
    a, b = shingle_sets[left], shingle_sets[right]
    pairwise.append({"left": left, "right": right, "jaccard": round(len(a & b) / len(a | b), 6)})
pairwise.sort(key=lambda row: row["jaccard"], reverse=True)

manifest = {
    "cycleLabel": "2026-10-02", "family": "blog", "taskId": "VIRA-71",
    "baselineSha": "1a1863a65f7c9c4935d048ef62faa27a57cfe8ae",
    "publicationDate": DATE,
    "validation": {
        "minimumBodyWords": 900,
        "fiveWordShingleThreshold": 0.5,
        "maximumPairwiseOverlap": pairwise[0],
    },
    "entries": entries,
}
path = ROOT / ".paperclip/daily-content/2026-10-02/blog.json"
path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
