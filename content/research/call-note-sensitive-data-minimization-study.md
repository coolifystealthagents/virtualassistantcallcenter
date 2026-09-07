---
slug: call-note-sensitive-data-minimization-study
title: Sensitive-data minimization in call notes
description: A source-corpus review and audit design for testing whether call notes retain only the information needed for a handoff.
published: 2026-09-07
updated: 2026-09-07
category: Privacy Research
image: /thumbnails/virtual-receptionist-data-retention-policy.svg
imageAlt: Call note privacy study separating required handoff fields from unnecessary sensitive details
related: privacy-by-design-call-notes, call-intake-minimum-necessary-information
---
## Finding and scope

Authoritative privacy and security guidance consistently supports collecting and retaining information for a defined purpose, restricting access, and disposing of data safely. The sources do not provide one universal list of acceptable call-note fields. This review creates an audit design and does not inspect private calls or claim compliance.

## Evidence base

The [NIST Privacy Framework](https://www.nist.gov/privacy-framework) organizes privacy-risk activity across identification, governance, control, communication, and protection. The [FTC data-security guidance](https://www.ftc.gov/business-guidance/privacy-security/data-security) advises businesses to take stock, scale down, secure, dispose, and plan. [CISA data-protection guidance](https://www.cisa.gov/topics/cyber-threats-and-advisories/data-protection) describes safeguarding sensitive data. The [HHS minimum-necessary guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html) applies within HIPAA's scope; it is informative for scoping but must not be generalized to every business.

## Proposed method

Define each call queue's purpose, required fields, prohibited free-text categories, access group, and retention rule before review. Draw a reproducible sample and have trained reviewers code whether every field is required, optional but relevant, unnecessary, or unable to assess. Separately flag credentials, payment data, health details, government identifiers, children's data, and unstructured copies of documents.

Report notes reviewed, fields reviewed, unnecessary-field prevalence, records with high-risk content, reviewer agreement, missingness, and remediation status. Do not reproduce sensitive examples in the report; use synthetic patterns or redacted categories.

## Decision boundaries

An assistant should use approved fields, summarize only what the next owner needs, and route uncertain sensitive material to a privacy owner. It must not collect “just in case,” paste full credentials, or decide retention and disclosure rules. Authorized privacy, security, legal, and operational owners set the policy.

## Limitations

Reviewers may disagree about necessity, and a brief note can still be harmful or inaccurate. The audit does not test access enforcement, downstream exports, deletion, legal bases, consent, or caller outcomes unless those are separately measured. Requirements vary by jurisdiction and industry.

## Sources

1. [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
2. [FTC, Data Security](https://www.ftc.gov/business-guidance/privacy-security/data-security)
3. [CISA Data Protection](https://www.cisa.gov/topics/cyber-threats-and-advisories/data-protection)
4. [HHS Minimum Necessary Requirement](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html)
