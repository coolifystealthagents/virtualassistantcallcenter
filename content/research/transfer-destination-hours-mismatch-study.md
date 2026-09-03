---
slug: transfer-destination-hours-mismatch-study
title: What happens when a call transfer destination is closed while the intake queue is open?
description: A cohort study of transfer-hour mismatches, failed handoffs, caller expectations, fallback ownership, and time-zone evidence.
published: 2026-09-03
updated: 2026-09-03
category: Transfer research
image: /thumbnails/call-transfer-latency-measurement.svg
imageAlt: Transfer hours mismatch study showing open intake, closed destination, caller expectation, fallback, and owner acknowledgment
related: /research/unanswered-transfer-recovery-study, /research/virtual-receptionist-after-hours-routing-study
---
## Research question

When a virtual assistant intake queue is open but the intended transfer destination is closed, which fallback produces a traceable outcome without misleading the caller? The mismatch can occur because teams use different schedules, locations, holiday calendars, or temporary closures. A transfer attempt that rings until disconnect is not a handoff, and a message placed in a queue is not acceptance.

The assistant's authority should be explicit. An assistant may check an approved availability source, tell the caller the documented status, offer allowed alternatives, capture a message, or escalate an exception. The receiving business owns destination hours, emergency routes, service eligibility, and response commitments. Research should identify where the schedule chain failed rather than ask assistants to improvise around it.

## Cohort construction

Identify calls where intake was open and the selected destination was unavailable under its authoritative schedule. Use a fixed period and include completed fallbacks, caller disconnects, returned transfers, messages, and unresolved episodes. Record the intake schedule version, destination schedule version, local time for each, holiday or temporary exception, assistant-visible status, transfer action, caller explanation, fallback selection, owner acknowledgment, and final outcome.

Do not infer closure only because a transfer went unanswered. The destination may have been busy, understaffed, misconfigured, or experiencing an outage. Confirm schedule status from the approved source and classify unresolvable cases separately. If the schedule source was unavailable during the call, that is a distinct evidence failure.

The [IANA Time Zone Database](https://www.iana.org/time-zones) supports accurate zone conversions. The [NIST daylight saving time resource](https://www.nist.gov/pml/time-and-frequency-division/popular-links/daylight-saving-time-dst) explains United States clock-change context. Neither source establishes a company's hours. The authoritative hours must come from the business-owned calendar or rule set effective at the time.

## Mapping failure points

Separate schedule mismatch from schedule visibility. A valid difference between intake and destination hours may be intentional if a message fallback exists. Failure occurs when the route does not account for that difference, when the assistant cannot see it, or when the caller receives an unsupported expectation. Code each event at the narrowest supported level.

Useful categories include correct closed-status detection, stale schedule, wrong zone conversion, ignored temporary exception, attempted transfer despite known closure, fallback offered, fallback accepted, owner acknowledged, and unknown. These categories should not collapse into a single transfer-failure rate. Report how many eligible episodes had enough evidence for each measure.

Measure caller expectation from the explanation and any supported confirmation. Did the caller understand that the destination was closed, whether a callback was requested rather than guaranteed, and which fallback owner would receive the message? An assistant saying "they will call" should be reviewed against approved promise language. A later callback does not make an unsupported promise acceptable.

## Comparing fallback paths

Compare documented fallback paths such as a message queue, scheduled callback request, alternate open team, or caller-directed return during stated hours. Stratify by intent and urgency boundary because the pathways serve different needs. Record whether the caller chose the option, whether the receiving owner accepted it, and whether the original request reached a supported disposition.

Avoid ranking fallbacks by speed alone. A fast alternate transfer may reach someone without the authority or context to act. A slower message may preserve ownership more accurately. Report elapsed time, transfer count, context carried forward, repeat burden, owner acknowledgment, and unresolved status as separate outcomes.

The [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) describes governance, roles, and continuous improvement at an organizational level. It supports examining accountable sources and recovery processes but does not endorse one call-routing design. The local fallback comparison is analysis derived from the business's records.

## Caller access and privacy

Closed-destination handling should allow repetition, correction, language support where approved, and a route that does not require unnecessary personal detail. The [W3C WCAG 2.2 standard](https://www.w3.org/TR/WCAG22/) concerns web accessibility, not phone transfers, yet its understandable-interaction and error-correction principles can inform review questions. Do not claim telephone compliance from that comparison.

Limit the study record to schedule, route, ownership, and outcome fields needed for the question. Protect phone numbers, recordings, and free text. If a reviewer lacks authorized access to a source, report missing evidence instead of recreating the caller's statement from memory. The business determines recording consent, retention, and access.

## Confounding and limitations

Destination closure may correlate with nights, holidays, lower staffing, or different call intents. Those conditions can affect outcomes independently. Temporary outages can look like schedule mismatches. Schedule exports may omit manual changes, and phone logs may use UTC while calendars display local time. Caller behavior after a failed transfer may occur through another unlinked channel.

The study cannot establish legal compliance, caller satisfaction, or the best schedule for every business. It cannot prove a fallback caused a later outcome without a stronger design. Results apply to the stated period, route rules, and available evidence.

Publication should also disclose the share of episodes missing a reliable destination schedule. That missingness is an operating result because the assistant cannot explain closure accurately without an authoritative source. A future comparison should use the same eligibility rule and keep temporary exceptions separate. If the business changes its hours system, treat the next period as a new cohort rather than claiming an uninterrupted trend.

## Evidence-led conclusion

An open intake queue can safely serve a closed destination only when the schedule difference is visible, the caller receives a bounded explanation, and a fallback owner accepts the work. The defensible measure follows the episode through schedule evidence, transfer action, caller choice, and acknowledgment. VirtualAssistantCallCenter can support this documented handoff, while the business controls hours, exceptions, and commitments.
