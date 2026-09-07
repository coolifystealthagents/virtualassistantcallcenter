---
slug: caller-name-spelling-confirmation-study
title: Caller name spelling confirmation: an evidence design
description: A source-based study design for testing whether respectful readback reduces name-record errors without burdening callers.
published: 2026-09-07
updated: 2026-09-07
category: Call Accuracy Research
image: /thumbnails/virtual-assistant-call-classification-confidence-study.svg
imageAlt: Research design comparing caller name spelling confirmation and corrected records
related: customer-name-pronunciation-call-note, callback-readback-error-detection-study
---
## Finding and scope

Public guidance supports accurate, understandable, privacy-aware communication, but it does not establish one universal script or an error-reduction percentage for spelling callers' names. This review therefore defines a testable local method. It does not report results from private calls.

## Evidence base

The [W3C guidance on input assistance](https://www.w3.org/WAI/WCAG22/Understanding/input-assistance.html) treats error identification and correction as important parts of accessible interaction. The [ADA effective communication guidance](https://www.ada.gov/resources/effective-communication/) emphasizes that communication methods depend on context and the person involved. The [NIST Privacy Framework](https://www.nist.gov/privacy-framework) and [FTC data-security guidance](https://www.ftc.gov/business-guidance/privacy-security/data-security) support purpose limitation and protected handling. These sources offer principles, not a telephone-script benchmark.

## Proposed method

Freeze a review period and include eligible calls where a name is needed for a defined business purpose. Randomly assign approved prompts: ordinary capture or capture followed by a neutral spelling readback. Preserve the audio reference only under policy, or use a separately verified customer record when lawful and reliable. Score exact field agreement, caller-initiated corrections, assistant corrections, time added, repeat contacts caused by name errors, and unavailable references.

Report numerators and denominators by name length, channel quality, language path, and use of an interpreter. Do not infer ethnicity, gender, or language from a name. Reviewers should be blinded to condition where practical, and disagreements should be adjudicated under a frozen rule.

## Decision boundaries

The assistant may ask “Would you spell that for me?” and read the result back respectfully. It should not challenge a spelling because it appears unfamiliar, normalize punctuation without permission, or reuse the field beyond its stated purpose. A human quality owner approves prompts, sampling, retention, and any workflow change.

## Limitations

Reference records can also be wrong. A readback may improve spelling while adding time or frustration, and averages can hide unequal effects. This design cannot establish legal compliance, identity, or pronunciation accuracy. Local results would apply only to the tested workflow, population, languages, and period.

## Sources

1. [W3C, Understanding Input Assistance](https://www.w3.org/WAI/WCAG22/Understanding/input-assistance.html)
2. [ADA.gov, Effective Communication](https://www.ada.gov/resources/effective-communication/)
3. [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
4. [FTC, Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security)
