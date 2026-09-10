---
slug: interpreter-request-routing-delay-study
title: Measuring delays in routing callers who request an interpreter
description: A privacy-conscious study design for timing interpreter-request handoffs without treating speed as proof of effective language access.
published: 2026-09-10
updated: 2026-09-10
category: Language Access Research
image: /thumbnails/call-center-language-access-measurement.svg
imageAlt: Timeline from interpreter request to connection with documented exclusions
related: language-identification-interpreter-handoff-study,language-preference-routing-accuracy-study
---
## Finding and scope

Elapsed time between an interpreter request and a successful handoff is one observable part of language access. It does not measure comprehension, interpreter quality, equitable service, or the caller's final outcome. This article specifies a local study and presents no performance claim.

## Evidence base

[HHS National CLAS Standards](https://thinkculturalhealth.hhs.gov/clas) describe a framework for culturally and linguistically appropriate services in health and health care. [Section 1557 resources from HHS OCR](https://www.hhs.gov/civil-rights/for-individuals/section-1557/index.html) address nondiscrimination in covered health programs. [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final) supports reliable event logging. Applicability depends on the organization and setting; these sources do not create a single timing threshold for every call center.

## Methodology

Define the eligible call types, request event, connection event, failed handoff, and observation period before extraction. Include calls with an explicit interpreter request or an agent-coded request under the approved workflow. Exclude test calls and records without usable timestamps, while publishing the number and reason for exclusions.

The primary measure is median elapsed time from recorded request to interpreter connection, with a distribution rather than an average alone. Report failed connections separately. Stratify only by operational factors needed for action, such as time block, channel, vendor path, and requested language when sample size and privacy rules permit. Audit a random sample against call events, and suppress small cells according to the organization's privacy policy.

## Inference boundaries

Shorter routing time does not prove the caller understood the conversation or received an appropriate interpreter. Longer time may reflect rare-language availability, caller choice, technical failure, or workflow problems. Observational comparisons cannot assign causation without a controlled design.

## Limitations

Request timestamps may depend on agent entry and can lag the spoken request. Successful connection events may not capture dropped or poor-quality sessions. Small language groups create unstable estimates and privacy risk. The study does not assess legal compliance or individual staff performance.

## References

1. [U.S. Department of Health and Human Services, National CLAS Standards](https://thinkculturalhealth.hhs.gov/clas)
2. [HHS Office for Civil Rights, Section 1557](https://www.hhs.gov/civil-rights/for-individuals/section-1557/index.html)
3. [NIST, SP 800-92 Guide to Computer Security Log Management](https://csrc.nist.gov/pubs/sp/800/92/final)
