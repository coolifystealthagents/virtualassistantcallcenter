---
slug: disposition-other-category-drift-study
title: Measuring drift in the "other" call disposition category
description: A prespecified review that tests whether growing use of a catch-all disposition signals taxonomy gaps without treating frequency alone as proof.
published: 2026-09-10
updated: 2026-09-10
category: Call Operations Research
image: /thumbnails/call-center-disposition-completeness-audit.svg
imageAlt: Research chart comparing other disposition use across review periods
related: customer-call-disposition-taxonomy,virtual-assistant-call-classification-confidence-study
---
## Finding and scope

A catch-all disposition can hide recurring call reasons, but its frequency alone does not prove poor agent work or a broken taxonomy. This article defines a local retrospective study of disposition records and linked call notes. It reports no measured result.

## Evidence base

[ISO 18295-1](https://www.iso.org/standard/64739.html) specifies requirements for customer contact centres, including service processes and performance. [NIST SP 800-92](https://csrc.nist.gov/pubs/sp/800/92/final) provides guidance for reliable log management. [The UK Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) describes dimensions and practices for assessing data quality. These sources support controlled records and quality review, not a universal acceptable rate for "other."

## Methodology

Define one analysis period and freeze the disposition taxonomy as it existed during that period. Include completed inbound calls with a saved disposition and an available final note. Exclude test calls, abandoned calls without an agent interaction, and records changed after the extraction cutoff; report each exclusion count.

Prespecify the primary measure as the proportion assigned to "other" by week. Draw a random, blinded sample of those notes and have two reviewers independently code whether an existing category fit, a new recurring category was present, or the note lacked enough detail. Report agreement and reconcile disagreements without replacing the original labels.

## Inference boundaries

A rising proportion is a review signal, not proof of taxonomy drift. Changes in campaigns, caller mix, routing, staffing, or instructions may explain the pattern. Notes cannot establish the caller's true intent, and reviewer recoding does not show what the agent knew during the call.

## Limitations

Missing or thin notes can bias the review toward "unclear." A short period may overstate temporary campaigns. Reviewers who know the team may infer context that is absent from the record. Results from one operation should not be used as an industry benchmark.

## References

1. [ISO, ISO 18295-1:2017](https://www.iso.org/standard/64739.html)
2. [NIST, SP 800-92 Guide to Computer Security Log Management](https://csrc.nist.gov/pubs/sp/800/92/final)
3. [UK Government, The Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework)
