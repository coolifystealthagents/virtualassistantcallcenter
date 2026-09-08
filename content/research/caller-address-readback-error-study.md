---
slug: caller-address-readback-error-study
title: Does structured address readback catch call-intake errors?
description: A controlled study design for testing whether field-by-field address readback catches more errors than one uninterrupted repeat.
published: 2026-09-08
updated: 2026-09-08
category: Intake Accuracy Research
image: /thumbnails/appointment-intake-error-provenance.svg
imageAlt: Address readback study comparing captured call fields with a verified destination record
related: caller-name-spelling-confirmation-study,appointment-timezone-readback-study
---
## Finding and scope

USPS guidance defines standardized delivery-address elements, while NIST and W3C guidance support accurate records and correctable input. None of these sources proves that a particular spoken readback reduces errors in business calls. This article proposes a local comparison and reports no customer results.

## Evidence base

[USPS Publication 28](https://about.usps.com/publications/welcome.htm) covers delivery lines, city and state information, directional abbreviations, and secondary-unit designators. [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) includes controls concerned with information integrity. [W3C input-assistance guidance](https://www.w3.org/WAI/WCAG22/Understanding/input-assistance.html) addresses identifying errors and giving users a chance to correct them. These are design inputs, not evidence about call-center performance.

## Proposed method

Select eligible calls that create or change a service address during a fixed review period. Randomly assign the current approved readback or a structured readback that pauses after street number and name, unit, city, state, and postal code. Compare the saved record with an independently verified destination record. Do not use the same agent's note as the reference.

Prespecify the primary outcome as calls with at least one material address error remaining after confirmation. Secondary measures can include errors corrected during the call, extra handling time, caller requests to repeat, and records excluded because no reliable reference exists. Report results by apartment or suite presence, directional terms, alphanumeric street numbers, and poor audio quality if sample sizes permit.

## Inference limits and decision boundary

An association between structured readback and fewer recorded errors would not prove fewer dispatch failures. Agents, callers, audio conditions, and address complexity may differ despite random assignment if the sample is small. The assistant may repeat captured fields and invite correction, but it should not silently standardize an ambiguous address or claim that postal validity proves a physical service location.

## Limitations

The verified reference may itself be wrong. Excluding unresolved addresses can make performance look better. Results may not transfer to international, rural, campus, or emergency locations. The study does not establish legal compliance, accessibility, or a universal script.

## Sources

1. [USPS, Publications directory for Publication 28](https://about.usps.com/publications/welcome.htm)
2. [NIST, SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
3. [W3C, Understanding Input Assistance](https://www.w3.org/WAI/WCAG22/Understanding/input-assistance.html)
