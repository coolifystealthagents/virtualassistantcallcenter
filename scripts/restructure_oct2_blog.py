from pathlib import Path
import hashlib, json, re

ROOT = Path(__file__).parents[1]
MANIFEST = ROOT / ".paperclip/daily-content/2026-10-02/blog.json"

# Each remaining guide gets a topic-specific reading path. The source appendix
# stays last and link targets are never rewritten.
profiles = {
    "septic-pumping-emergency-call-intake": ([0, 2, 1, 3, 5, 4, 6, 8, 7, 9], ["Separate a backup from a pumping request", "Stop before unsafe tank advice", "Map the property and affected fixtures", "A basement backup after heavy rain", "Turn EPA guidance into company rules", "Get an on-call acknowledgment", "Keep health and account details contained", "Close the loop on the affected property", "Test wet-weather and access exceptions", "Build the septic dispatch card"]),
    "generator-maintenance-service-call-intake": ([3, 0, 1, 2, 4, 6, 5, 7, 9, 8], ["Start with the clinic outage scenario", "Classify utility loss, alarm, or failed exercise", "Identify the generator without opening it", "Keep electrical decisions with the technician", "Show who accepted the outage", "Limit access to critical-load details", "Use outage guidance without improvising", "Exercise the escalation path", "Prepare the generator dispatch record", "Define a truthful callback close"]),
    "hearing-aid-repair-call-intake": ([1, 0, 3, 2, 6, 5, 4, 8, 7, 9], ["Identify the device and the affected side", "Separate repair logistics from hearing changes", "When a wet device call includes sudden difficulty", "Route symptoms without clinical interpretation", "Protect patient and serial-number details", "Use FDA material at the policy desk", "Make service ownership visible", "Review loss, warranty, and accessibility cases", "Tell the patient what happens next", "Set up the audiology service record"]),
    "glass-repair-board-up-call-intake": ([0, 3, 1, 2, 4, 5, 8, 6, 9, 7], ["Decide whether the opening is an emergency", "A shattered door after closing", "Describe the opening and loose glass", "Do not turn reception into a safety inspector", "Confirm emergency dispatch acceptance", "Keep preparedness guidance in policy", "Test weather, injury, and access variations", "Protect site security information", "Issue the board-up handoff", "Give an accurate service status"]),
    "irrigation-system-leak-service-call-intake": ([1, 0, 2, 3, 5, 6, 4, 7, 8, 9], ["Locate the water before naming the cause", "Choose routine, active-leak, or hazard routing", "Avoid remote valve and excavation instructions", "A sidewalk crossing becomes the priority", "Translate WaterSense material into intake fields", "Minimize gate and account data", "Require dispatch acknowledgment", "Pilot by property type and controller access", "Define resolution for the property contact", "Assemble the irrigation leak ticket"]),
    "commercial-door-access-control-service-call-intake": ([2, 1, 0, 3, 6, 4, 5, 8, 9, 7], ["Put credentials and bypasses outside reception", "Describe the failed entrance without exposing it", "Verify the account before discussing the site", "One locked staff entrance, many possible impacts", "Restrict security detail in notes", "Record technician ownership", "Use CISA resources for policy, not live instructions", "Audit lock, reader, and life-safety cases", "Create the access-control dispatch brief", "Close without claiming the building is secure"]),
    "medical-waste-pickup-call-intake": ([3, 2, 0, 1, 5, 4, 6, 8, 7, 9], ["A damaged sharps container call", "Keep handling and classification advice out", "Distinguish pickup service from an incident", "Capture the container and waste stream as reported", "Apply EPA material through approved procedure", "Confirm operations or compliance ownership", "Limit exposure and manifest details", "Test missed pickup and release scenarios", "Tell the facility what is still unresolved", "Prepare the medical-waste operations record"]),
    "portable-restroom-service-call-intake": ([1, 3, 0, 4, 2, 8, 5, 6, 9, 7], ["Count units and locate the service area", "Two unusable units before gates open", "Sort delivery, cleaning, restocking, and relocation", "Get route-coordinator acceptance", "Leave placement feasibility to operations", "Rehearse festival and jobsite exceptions", "Use sanitation rules in management policy", "Protect gate and event contact details", "Build the route-ready request", "Close with confirmed service status only"]),
    "property-survey-scheduling-call-intake": ([0, 1, 3, 2, 5, 6, 4, 8, 9, 7], ["Name the survey request without promising a product", "Capture parcel, purpose, access, and deadline", "The fence question before closing", "Keep deed and boundary interpretation with the surveyor", "Use cadastral resources as background", "Protect transaction documents and occupant details", "Obtain project-coordinator acceptance", "Test lender, owner, and contractor requests", "Prepare the survey scheduling brief", "State what is requested versus scheduled"]),
    "commercial-refrigeration-temperature-alarm-call-intake": ([3, 1, 0, 2, 4, 6, 5, 8, 7, 9], ["A 48-degree display with unknown duration", "Record the reading, unit, and observation time", "Separate an alarm from a confirmed failure", "Leave product disposition and repair diagnosis to owners", "Require refrigeration dispatch acknowledgment", "Restrict product and site details", "Keep FDA storage guidance out of live diagnosis", "Drill alarms, power loss, and multi-case events", "Close with the state of the temperature ticket", "Give the technician a usable alarm record"]),
}

manifest = json.loads(MANIFEST.read_text())
rows = {row["slug"]: row for row in manifest["entries"]}
for slug, (order, headings) in profiles.items():
    path = ROOT / rows[slug]["sourcePath"]
    raw = path.read_text()
    front, body = raw.split("---", 2)[1:]
    intro, *parts = re.split(r"(?m)^## ", body)
    sections = []
    for part in parts:
        old_heading, text = part.split("\n", 1)
        sections.append((old_heading.strip(), text.rstrip()))
    source = sections[-1]
    core = sections[:-1]
    rebuilt = [intro.rstrip(), ""]
    for index, heading in zip(order, headings):
        text = core[index][1]
        # Remove the most conspicuous generated labels without changing facts.
        text = text.replace(" next action", " next step")
        text = re.sub(r"\b([a-z]+(?:-[a-z]+)+) call handler\b", "receptionist", text)
        text = re.sub(r"\b([a-z]+(?:-[a-z]+)+) caller\b", "caller", text)
        rebuilt.extend([f"## {heading}", text, ""])
    rebuilt.extend([f"## {source[0]}", source[1], ""])
    updated = f"---{front}---" + "\n".join(rebuilt)
    path.write_text(updated)
    cutoff = updated.split("## Source", 1)[0].split("## Sources", 1)[0]
    rows[slug]["bodyWordCount"] = len(re.findall(r"[A-Za-z0-9']+", cutoff))
    rows[slug]["contentSha256"] = hashlib.sha256(updated.encode()).hexdigest()

MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n")
