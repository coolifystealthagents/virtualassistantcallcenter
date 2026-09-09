---
slug: repeat-caller-record-linkage-study
title: Can a review queue improve repeat-caller record linkage?
description: A precision-and-recall study for suggested record matches that keeps uncertain identity decisions out of automated call handling.
published: 2026-09-09
updated: 2026-09-09
category: Record Quality Research
image: /thumbnails/returning-caller-recognition-workflow.svg
imageAlt: Repeat caller linkage study comparing suggested customer matches with adjudicated records
related: duplicate-customer-record-call-intake-study,caller-identity-match-confidence-study
---
## Finding and scope

NIST identity guidance distinguishes asserted attributes from adequately verified identity, while NIST data-quality material emphasizes fit-for-purpose evaluation. Neither establishes that a telephone number or similar name is enough to merge customer records. This article describes an offline evaluation and reports no customer finding.

## Evidence base

[NIST SP 800-63A](https://pages.nist.gov/800-63-4/sp800-63a.html) covers identity proofing and enrollment concepts. [NISTIR 8114](https://csrc.nist.gov/pubs/ir/8114/final) discusses attribute metadata and confidence. [NIST's Data Quality discussion](https://www.nist.gov/system/files/documents/2017/05/09/NISTDataQualityReport.pdf) describes dimensions and evaluation concerns for data quality. These are governance inputs rather than proof of a matching rule's accuracy.

## Proposed method

Freeze a sample of suggested repeat-caller matches before any merge. Have authorized reviewers compare permitted source fields and label same record, different record, or unresolved under a documented rubric. Include hard negatives such as shared household numbers, common names, recycled numbers, and business switchboards.

Prespecify precision among suggested matches as the primary measure. Report recall only against a sampling design that can estimate missed matches. Also report the unresolved rate, subgroup error counts where lawful and adequately powered, reviewer agreement, and the share sent to manual review.

## Inference limits and decision boundary

High precision in one dataset does not prove identity and may hide missed matches. Phone, address, and spelling agreement can reflect shared or stale data. The assistant may suggest candidates for authorized review, but should not merge records, disclose account details, or authenticate a caller from a similarity score.

## Limitations

Reviewer labels may be imperfect and can depend on privileged fields unavailable during live intake. Historical data may encode earlier duplicate handling. Privacy constraints can limit subgroup analysis. Findings may drift as customers, phone numbers, sources, and matching rules change.

## Sources

1. [NIST, SP 800-63A](https://pages.nist.gov/800-63-4/sp800-63a.html)
2. [NIST, NISTIR 8114](https://csrc.nist.gov/pubs/ir/8114/final)
3. [NIST, Data Quality Report](https://www.nist.gov/system/files/documents/2017/05/09/NISTDataQualityReport.pdf)
