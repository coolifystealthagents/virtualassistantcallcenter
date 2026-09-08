---
slug: after-hours-escalation-false-positive-study
title: Measuring false-positive after-hours escalations
description: A review method for testing urgent-call rules without treating manager disagreement as proof that an agent made an error.
published: 2026-09-08
updated: 2026-09-08
category: Escalation Research
image: /thumbnails/after-hours-call-triage-threshold-study.svg
imageAlt: After-hours escalation study comparing call evidence rule triggers and reviewer decisions
related: emergency-escalation-acknowledgment-latency-study,after-hours-vendor-authorization-study
---
## Finding and scope

Incident-response and internal-control guidance supports documented criteria, assigned responsibility, and review. It does not supply a universal urgency threshold for business calls. This article outlines a local audit of possible over-escalation. It contains no measured company rate.

## Evidence base

[NIST SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final) places incident response within risk management and stresses preparation and improvement. The [GAO Green Book](https://www.gao.gov/greenbook) describes control activities, quality information, monitoring, and remediation. [OSHA's recommended practices](https://www.osha.gov/safety-management) describe management leadership and worker participation in safety programs. These sources support a controlled review, but they do not decide whether an individual caller's situation is urgent.

## Proposed method

Freeze the approved after-hours rules and sample every escalation during a defined period, plus a random sample of non-escalated calls. Two reviewers who did not handle the call should independently score whether the recorded facts triggered the written rule. They should see the same transcript or recording, where lawful, and the same rule version.

Classify disagreements separately: rule triggered, rule not triggered, evidence missing, or rule ambiguous. The primary measure is escalations where both reviewers agree that the recorded facts did not trigger the rule. Also report missed escalations, reviewer agreement, acknowledgment time, unavailable evidence, and outcomes that cannot be determined.

## Inference limits and decision boundary

A false-positive label describes rule application, not whether the caller's concern was reasonable. Later events can bias reviewers. Managers may also disagree because the rule is vague. Agents should continue to follow the active rule during the study; researchers should not penalize cautious escalation when the rule directs it.

## Limitations

Rare severe events make threshold tuning difficult. Recorded words may omit tone or context, and outcome severity is not a reliable substitute for information available at call time. Findings apply only to the reviewed queue, rule version, staffing pattern, and period. This design does not establish a safe threshold for another organization.

## Sources

1. [NIST, SP 800-61 Rev. 3](https://csrc.nist.gov/pubs/sp/800/61/r3/final)
2. [GAO, Standards for Internal Control in the Federal Government](https://www.gao.gov/greenbook)
3. [OSHA, Recommended Practices for Safety and Health Programs](https://www.osha.gov/safety-management)
