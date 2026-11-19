---
slug: measuring-how-often-callers-decline-to-provide-a-phone-number
title: "Measuring how often callers decline to provide a phone number"
description: "A measurement method for phone-number refusals, covering definitions, denominators, channel alternatives, consent, and limitations."
published: 2026-11-19
updated: 2026-11-19
category: "Call operations research"
image: /images/nov19/research/measuring-how-often-callers-decline-to-provide-a-phone-number.webp
imageAlt: "Measuring how often callers decline to provide a phone number"
related: /blog/set-a-rule-for-callers-who-will-not-share-a-phone-number, /research/measuring-how-often-callers-change-their-preferred-contact-method
---

A refusal to share a phone number is easy to notice and easy to miscount. An agent may mark the call as incomplete when the caller actually chose a different channel. A caller may decline once and then provide a number after hearing the reason. The count only means something when the definition and the denominator are fixed in advance.

## Key takeaways

- Count refusals per caller request, not per call outcome.
- Separate a first refusal from a final refusal.
- Record the channel the caller chose instead.
- Report the denominator and the queue alongside the rate.
- Treat unknown consent as absent in follow-up measures.

## Research question and scope

The question is how often callers decline to provide a phone number when one is requested. The unit is the request, not the call. A single call may contain two requests, such as a main number and an alternate. Each request is coded separately.

The scope covers inbound calls where an agent asked for a number for a stated purpose. It includes calls that ended without a number and calls that continued through another channel. It excludes calls where no number was requested and calls where the field was pre-filled from an existing record. That separation keeps the rate comparable across periods.

Record the queue, the form version, and the date range. A new script can change the refusal rate without changing caller behavior. The reader needs to know which version produced the result. The [contact preference study](/research/measuring-how-often-callers-change-their-preferred-contact-method) uses a similar discipline for channel changes.

## Definitions and unit of analysis

Define a refusal as an explicit statement that the caller will not provide a number at that moment. "I would rather not" and "I cannot give one" both count. A silence or an unclear answer does not count. The agent should code the response, not interpret it.

Define a final refusal as a refusal that stands after the agent offers an alternative. A first refusal followed by a number is not a final refusal. The two measures answer different questions. The first shows resistance, while the second shows an unmet request.

Define a channel alternative as a supported route the caller accepts instead of a call. Email, a portal, and an in-person visit are examples. Record the channel and the consent that came with it. An email address is not blanket permission for future contact.

## Sampling and data collection

Select calls from a fixed period and a fixed queue. Include every request if the volume is small. Draw a random sample if the volume is large. Keep the filter and the export date in the report so the result can be reproduced.

Read the agent's note and, where available, the call record. Code the request, the response, and the alternative. Use two coders for a subsample if the team is large enough. Compare their results before coding the full sample.

Do not copy the caller's number or email into the audit file. Use a record identifier instead. Store the coding sheet separately from the customer record. The measurement should not create a new privacy risk, and the [minimum necessary guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html) is a useful reference.

## Coding the refusal

Create a small code set that covers the common cases. "Declined, no reason given," "declined for privacy," "cannot use this phone," and "will use another channel" are useful starting points. Add a free-text field only for cases the codes cannot hold. Keep the note short and factual.

Code the agent's response as well. Did the agent accept the first refusal, offer an alternative, or repeat the request? The response is part of the process being measured. A high refusal rate with a poor response is a different problem from a high rate with a good response.

Record whether the caller later provided a number. A reversal may mean the explanation worked. It may also mean the caller felt pressured. Read the sequence before drawing a conclusion. The [voicemail refusal guide](/blog/handling-a-caller-who-refuses-to-leave-a-voicemail) shows how to keep the tone neutral.

## Measures and reporting

Report the number of requests and the number of refusals. Show the rate beside the counts. A rate without a denominator hides whether the sample was ten calls or ten thousand. Group the results by queue and by agent where the sample allows.

Report first refusals and final refusals separately. Then report the share of final refusals that accepted an alternative channel. That share shows whether the process still served the caller. A refusal is not a failure if the caller got help another way.

Report the follow-up outcome for the alternative channel when it is known. A message that was never answered is different from one that resolved the request. The [first-call resolution study](/research/measuring-first-call-resolution-for-a-virtual-receptionist) offers a related outcome measure. A resolved request is the outcome that matters.

## Limitations

The study cannot show why the caller refused. The note may contain a reason, but the reason is the caller's account. Treat it as context, not as a cause. A pattern across many calls is more useful than a single explanation.

The sample may exclude callers who hung up before the request. Those callers never had a chance to refuse. Pair the refusal count with the total call volume and the abandonment count. A low refusal rate may simply mean fewer requests were made.

The agent's presence can change the result. A caller may agree to a number when the agent sounds patient. A different agent may get a different answer. Note the script version and the training period. The [data reliability guidance](https://www.gao.gov/products/gao-20-283g) is a helpful frame for these limits.

## Repeating the measure

Repeat the measure after a script change with the same definitions and the same window. A change in either can move the rate without a change in behavior. Record the version and the sample dates beside the numbers. The comparison should be reproducible.

Change one part of the process at a time. Try leading with the purpose, or add a portal alternative for callers who cannot use a phone. Measure the final refusal rate and the alternative-channel completion rate. Keep the version that serves more callers without adding pressure.

The result should lead to a better request, not a harder sell. A caller who says no is giving the office useful information. Use it to improve the route, the wording, and the training. Then measure again to see whether the change helped.

## Sources

- [Federal Trade Commission, telephone and telemarketing guidance](https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule)
- [Federal Communications Commission, consumer phone privacy](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts)
- [U.S. Department of Health and Human Services, HIPAA minimum necessary requirement](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html)
- [U.S. Government Accountability Office, GAO-20-283G: assessing data reliability](https://www.gao.gov/products/gao-20-283g)
