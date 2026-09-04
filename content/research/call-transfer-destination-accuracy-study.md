---
slug: call-transfer-destination-accuracy-study
title: How accurately do virtual assistants choose transfer destinations?
description: A sampling method for comparing intended and actual transfer destinations while separating directory defects from assistant routing errors.
published: 2026-09-04
updated: 2026-09-04
category: Call routing research
image: /thumbnails/virtual-receptionist-call-transfer-rules.svg
imageAlt: Transfer destination study comparing caller intent routing directory and actual endpoint
related: /research/transfer-destination-hours-mismatch-study, /blog/conference-call-request-routing
---
## Research question

When a virtual assistant transfers a call, how often does the destination match the approved routing rule for that caller's stated need and the time of contact? The study separates assistant selection, directory accuracy, system execution, and destination acceptance. Combining those events into one transfer-success score would hide the source of failure.

The [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) discusses governance, roles, and continuous improvement. Those principles support maintaining an owned routing directory, but NIST does not define a telephone-transfer accuracy measure.

## Sample and expected route

Draw calls across shifts, intent categories, locations, and assistants. For each sampled call, have a reviewer determine the expected destination from the routing table and schedule version effective at that moment. The reviewer should not use today's directory for an older call.

Record the caller's stated intent, expected route, route selected by the assistant, endpoint dialed by the system, whether the endpoint answered, and the final disposition. Limit transcript access and remove caller details that are not needed for classification. The [NIST Privacy Framework](https://www.nist.gov/privacy-framework) offers a way to assess those data-handling choices without prescribing the sample.

## Classify mismatch types

Use distinct categories for assistant selection error, stale directory, wrong effective hours, phone-system mapping defect, destination rejection, and insufficient evidence. A caller who changes the request after transfer is not necessarily a routing error. Neither is an unanswered destination if the assistant chose and dialed the approved endpoint.

Report selection accuracy among calls with a resolvable expected route. Report system execution among calls where a route was selected. Report answer rates separately. Each denominator should be visible.

## Reliability checks

Give two reviewers the same subset without showing each other's labels. Discuss disagreements and revise the codebook before scoring the full sample. Test several boundary cases, including lunch coverage, holidays, multi-location callers, and a department that recently changed numbers.

Trace a few directory changes through approval, publication, and first observed use. This shows whether the apparent assistant error began earlier in the change process.

## Limitations

The expected route may be ambiguous, especially when a call contains several intents. Transcripts can omit context, and callers may describe the same need differently. A correct transfer does not prove that the destination solved the request. A completed interaction may occur after a formally incorrect route.

Findings apply to the sampled period, directory versions, and reviewed intents. They do not establish the effect of transfer accuracy on customer satisfaction or revenue, and they should not be generalized to other organizations without further study.
