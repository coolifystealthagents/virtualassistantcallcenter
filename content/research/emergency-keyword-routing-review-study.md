---
slug: emergency-keyword-routing-review-study
title: How should teams test emergency-keyword call routing?
description: A retrospective review design for measuring missed and unnecessary escalations without claiming that keywords can determine real-world urgency.
published: 2026-09-09
updated: 2026-09-09
category: Escalation Research
image: /thumbnails/virtual-assistant-emergency-call-triage-evidence.svg
imageAlt: Emergency keyword routing review comparing alert decisions with independent policy review
related: after-hours-escalation-false-positive-study,urgent-intent-escalation-recall-study
---
## Finding and scope

OSHA and NIST publications emphasize emergency planning, defined responsibilities, and tested procedures. They do not validate a universal keyword list for deciding whether a business call is an emergency. This article proposes a local quality review; it does not report performance or replace emergency services.

## Evidence base

[OSHA's emergency action plan guidance](https://www.osha.gov/emergency-preparedness/guides/emergency-action-plan) describes core planning elements. [NIST SP 800-61 Rev. 2](https://csrc.nist.gov/pubs/sp/800/61/r2/final) illustrates documented incident handling, roles, and review in a cybersecurity setting. [NIST AI RMF 1.0](https://www.nist.gov/itl/ai-risk-management-framework) provides a framework for governing and measuring AI risk. These sources motivate controlled review, not clinical or operational triage rules.

## Proposed method

Define the organization's approved escalation policy before sampling. Draw a stratified sample of calls that triggered a keyword alert and calls from the same queues that did not. Two qualified reviewers, blinded to the system decision where feasible, independently label whether the policy required escalation; reconcile disagreements and retain the reason code.

Report missed-policy escalations and unnecessary alerts separately, with confidence intervals, queue, time band, and audio-quality flags. Inspect performance on negation, hypothetical statements, third-party reports, and repeated caller language. Do not publish raw sensitive audio or infer caller intent beyond the policy label.

## Inference limits and decision boundary

Reviewer agreement with a written policy does not prove real-world danger or safety. Keywords may correlate with queue, industry, language, or caller distress. A low miss rate in the sample cannot guarantee future detection. Any automation should support, not override, the organization's authorized emergency route.

## Limitations

Rare severe cases yield wide uncertainty. Reviewers may know local scripts, and documentation can omit context. Calls excluded for poor audio may contain disproportionate risk. Results do not transfer automatically across organizations, languages, emergency definitions, or jurisdictions.

## Sources

1. [OSHA, Emergency Action Plan](https://www.osha.gov/emergency-preparedness/guides/emergency-action-plan)
2. [NIST, SP 800-61 Rev. 2](https://csrc.nist.gov/pubs/sp/800/61/r2/final)
3. [NIST, AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
