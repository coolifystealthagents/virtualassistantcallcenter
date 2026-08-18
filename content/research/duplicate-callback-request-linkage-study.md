---
slug: duplicate-callback-request-linkage-study
title: Duplicate callback request linkage study
description: A completed source-corpus review of callback linkage uncertainty, contact choice, record history, privacy, and ownership.
published: 2026-08-17
updated: 2026-08-17
category: Callback evidence research
image: /thumbnails/callback-queue-aging-cohort-study.svg
imageAlt: Callback linkage evidence review separating repeat requests, protected matching, caller choice, ownership, and unresolved records
related: callback-queue-aging-cohort-study, call-center-callback-ownership-evidence
---

## Headline finding

This completed seven-source evidence review found no authoritative basis for treating a shared phone number, similar wording, or close timestamp as proof that two callback records are the same request. NIST's de-identification report presents de-identification as a managed process with re-identification risk, not as a guarantee that transformed records have no identity implications [7](https://doi.org/10.6028/NIST.IR.8053). FCC and FTC contact guidance also shows that caller choice and stop signals remain material after linkage [4](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts) [5](https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule). The defensible result is graded linkage with preserved history and human review before suppressing work.

All 7 sources were examined. Three principally addressed records, privacy, or de-identification, 2 addressed contact controls, and 2 addressed security or governance. No private callback cohort, candidate pair, contact attempt, merged record, or operational outcome was measured. Corpus counts are not a duplicate rate.

## Research question

What source-backed controls should govern the linkage of apparently repeated callback requests in a virtual assistant call center? The practical concern is both underlinking, which can create competing owners and repeated calls, and overlinking, which can hide a distinct issue or stop request. The review asks what can be supported without claiming that records belong to one person.

## Methodology

The source corpus was frozen on August 17, 2026. Seven public sources qualified because they addressed privacy risk, cyber controls, data protection, records management, unwanted call choice, telemarketing contact controls, or de-identification. The primary unit of analysis was one document. The extraction codes were identity caution, purpose limitation, historical accountability, contact preference, access protection, unresolved-risk disclosure, and owner decision.

Counts use 7 as the denominator. Each source received a code only for an explicit finding. Vendor matching claims and local callback statistics were excluded. The review did not tokenize phone numbers, generate candidate pairs, or inspect notes. The related route list was limited to existing records in this corpus site.

## Results and evidence matrix

| Authority | Concrete source finding | Callback-linkage implication |
|---|---|---|
| NIST Privacy Framework [1](https://www.nist.gov/privacy-framework) | Its 5 functions require privacy risk to be identified, governed, controlled, communicated, and protected. | Define a purpose and human owner before linking records across queues or subjects. |
| NIST Cybersecurity Framework [2](https://www.nist.gov/cyberframework) | CSF 2.0 contains 6 functions, including governance and recovery. | A bad merge needs detection, correction, and recoverable history. |
| FTC data security guidance [3](https://www.ftc.gov/business-guidance/privacy-security/data-security) | The FTC emphasizes minimizing collection, limiting access, protecting information, and disposing safely. | Candidate matching should use the minimum protected signals rather than broad note copies. |
| FCC unwanted-call guidance [4](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts) | The FCC describes consumer blocking, complaint, and consent-revocation options for unwanted calls and texts. | A repeated record cannot erase a caller's latest stop or channel preference. |
| FTC telemarketing rule guide [5](https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule) | In its covered context, the guide includes calling-time, do-not-call, recordkeeping, and prerecorded-message controls. | Contact authorization and request linkage are separate decisions with separate evidence. |
| National Archives records guidance [6](https://www.archives.gov/records-mgmt) | NARA frames records management around lifecycle controls and authorized disposition. | Preserve parent, child, merge, suppression, and correction events instead of overwriting history. |
| NIST IR 8053 [7](https://doi.org/10.6028/NIST.IR.8053) | The report explains de-identification techniques and the need to assess re-identification risk. | Protected tokens can reduce exposure but do not prove that shared tokens represent one person or purpose. |

## Evidence interpretation

Three of 7 sources principally govern data and record handling. Two of 7 constrain contact behavior, and 2 of 7 support security or decision governance. The 5 Privacy Framework functions and 6 CSF functions are framework structures. They do not supply a matching threshold. No source sets an acceptable duplicate percentage.

The synthesis supports six local classes: confirmed same request, probable same request, distinct request, update to a prior request, system retry, and unresolved. Only an explicit parent identifier, caller reference, or equivalent approved event could support a confirmed class. A shared number can represent a household, office, proxy, or reassigned number. Similar text may simply reflect common service language.

A future denominator could be all candidate pairs created by one frozen rule plus a separately sampled set used to look for missed links. Measuring only merged pairs would hide overlinking and missed candidates. No such pair sample was analyzed in this review, so there is no observed precision, recall, repeated-contact count, or ownership result.

## Decision boundaries

A human queue owner should approve candidate rules and adjudicate ambiguous or consequential pairs. The virtual assistant may expose a prior reference and ask for clarification, but it should not infer identity, merge sensitive purposes, or suppress a safety, healthcare, legal, financial, or complaint request because another record looks similar.

Stop requests and updated contact preferences require their own evidence and responsible review. Keeping two records can create repetition, while merging them can lose separate work. The correct action depends on purpose, authority, and evidence, not on minimizing queue count.

## Limitations

The sources do not study callback queues directly and provide no labeled pair dataset. Consumer contact rules vary by call purpose and context. Federal records concepts are used as accountability guidance, not as a claim that every callback record is governed by NARA. De-identification lowers some exposure but can also remove clues needed for adjudication.

No private caller identity, consent, intent, final satisfaction, or lost request was assessed. Candidate generation can miss changed details and overselect shared details. Manual reviewers may lack context. The source sample therefore cannot establish a universal linkage algorithm or operational effect.

## Reproducibility

Retrieve the seven numbered sources, freeze versions and access dates, and code one row per source for the seven criteria. Retain exact section references. Report principal-role counts over a denominator of 7 and distinguish source-backed controls from analyst inference.

A later callback review should preserve the queue definition, schema version, candidate rule, protected-token method, sample seed, pair codebook, both reviewer judgments, adjudication, stop-request evidence, owner events, and unresolved count. Report both candidate and sampled noncandidate denominators. These are requirements for future local evidence, not a claim that a callback cohort was measured here.

## Sources

1. [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
2. [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
3. [FTC data security guidance](https://www.ftc.gov/business-guidance/privacy-security/data-security)
4. [FCC guidance on stopping unwanted robocalls and texts](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts)
5. [FTC guide to complying with the Telemarketing Sales Rule](https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule)
6. [National Archives records management guidance](https://www.archives.gov/records-mgmt)
7. [NIST IR 8053 on de-identification of government datasets](https://doi.org/10.6028/NIST.IR.8053)
