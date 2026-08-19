---
slug: virtual-assistant-callback-queue-fairness-study
title: Is first-in-first-out fair for a virtual assistant callback queue?
description: A research examination of callback order, urgency, accessibility, and transparent exceptions in virtual assistant operations.
published: 2026-08-18
updated: 2026-08-18
category: Queue research
image: /thumbnails/virtual-assistant-callback-queue-fairness-study.svg
imageAlt: Virtual assistant callback queue fairness study
---

## Research question

Should a virtual assistant call center return callbacks strictly first-in-first-out, or can a fair queue use urgency and accessibility exceptions? First-in-first-out is easy to explain, but equal order is not always equal service when calls have different consequences or when a caller cannot remain available. The research question is how an operator can make exceptions without turning priority into guesswork or favoritism.

## Methodology

I compare the U.S. Department of Justice's accessibility guidance, NIST's risk-management framework, and the Office of Management and Budget's customer experience guidance. These sources do not prescribe a private call-center queue. They provide evidence about access, risk, and understandable service design. I translate those principles into queue fields: arrival time, stated impact, deadline, accessibility need, owner, and exception reason. The result is a measurement model, not a claim that any one ordering policy is legally sufficient.

## Findings from the evidence

Accessibility guidance treats equal access as more than offering the same interface to everyone. Risk frameworks ask organizations to consider impact and uncertainty rather than hiding both in averages. Customer-experience guidance emphasizes clear, usable interactions and feedback. The common implication is that a queue should preserve a predictable default while allowing documented accommodations and risk-based exceptions. A caller should not have to reveal more personal information than needed to explain the service need.

## A defensible queue design

Use arrival order as the baseline. Add a narrow urgency class based on the consequence described by the caller, not on an assistant's unsupported diagnosis. Add an accessibility field only when it changes how contact can be completed. Every exception should have a reason code, a responsible reviewer, and an expiry or review point. This prevents a temporary priority from becoming a permanent advantage. If two calls have the same class, arrival order remains the tie-breaker.

For example, a caller who says a technician cannot access a site today may need a time-bound callback, while a general information request can remain in ordinary order. The assistant should record the caller's words and route the question to the owner who can judge operational consequence. It should not announce that a caller is more important, promise a precise response time that has not been measured, or infer a medical or legal emergency from a vague phrase.

## What to measure

Review wait time by queue class, percentage of exceptions, reason-code completeness, abandoned callbacks, and repeat contacts. A low average wait can hide a small group that waits longest. Compare medians and upper-tail waits, and inspect samples of both prioritized and non-prioritized calls. The evidence does not establish a target number; it supports looking for unequal outcomes and unexplained decisions. If exceptions cluster around one assistant or one caller type, review the rule and training rather than blaming the queue alone.

## Limitations and conclusion

This study cannot determine the correct priority categories for every industry, nor can it replace disability, employment, consumer-protection, or sector-specific legal review. It also cannot show that a fairness metric predicts satisfaction. Its conclusion is narrower: a virtual assistant callback queue is more defensible when first-in-first-out is the default, exceptions are limited and recorded, and outcomes are reviewed by class. Fairness becomes inspectable when the reason for a departure from order is visible.

## Operational test

Construct a sample containing ordinary calls, documented exceptions, accessibility-related alternatives, and calls that changed priority. Compare the reason, owner, wait, and result for each class. If the same description receives different treatment, determine whether the difference reflects a real consequence or an inconsistent interpretation. The purpose is not to erase judgment; it is to make judgment reviewable. A virtual assistant should give the caller a clear next step even when the queue cannot offer an immediate resolution.

That review should include callers who did not receive an exception, because fairness is comparative. Record the ordinary path as carefully as the prioritized path. A queue is understandable when both groups can see an honest next step and when the reason for a difference is connected to the request rather than the caller's persistence.

## Further interpretation

Queue fairness should be reviewed as a pattern over time. A single exception can be justified, while repeated exceptions for one class of caller can reveal an access problem or a vague policy. Preserve arrival time, stated consequence, exception reason, owner acceptance, and final outcome. Do not require callers to use repeated calls to prove urgency. The default order should remain understandable, and an exception should expire or be reviewed. This does not remove judgment; it gives the operation evidence with which to challenge inconsistent judgment.

The conclusion should include the queue definition, exception denominator, and unavailable outcomes. A fairness finding based only on average wait is incomplete. The operation should say what it measured, what it could not measure, and which rule owner is responsible for reviewing repeated exceptions.

Caller effort is part of the fairness question. If the only way to obtain priority is to call repeatedly, the queue may reward persistence rather than consequence. If an accommodation requires a caller to explain a private circumstance to several people, the process may create unnecessary burden. A virtual assistant can reduce that burden by capturing the requested contact method and the reason for an approved exception, then routing it once to the owner who can decide.

## Sources

1. [U.S. DOJ accessibility guidance](https://www.ada.gov/resources/web-guidance/)
2. [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
3. [OMB customer experience guidance](https://www.performance.gov/cx/)
