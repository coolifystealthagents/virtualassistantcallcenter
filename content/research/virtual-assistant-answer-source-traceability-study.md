---
slug: virtual-assistant-answer-source-traceability-study
title: Virtual assistant answer source traceability study
description: A completed source-corpus review of answer provenance, version control, evidence links, uncertainty, and human ownership.
published: 2026-08-17
updated: 2026-08-17
category: Answer governance research
image: /thumbnails/virtual-assistant-knowledge-base-maintenance.svg
imageAlt: Answer source traceability evidence review connecting caller question, approved source, source version, answer, uncertainty, and owner
related: virtual-assistant-knowledge-base-maintenance, phone-intake-source-traceability-study
---

## Headline finding

This completed eight-source review found that a plausible answer is not a traceable answer. Traceability requires a preserved chain from the caller's question to an approved source passage and version, through any transformation, to the words delivered and the responsible owner. NIST's AI Risk Management Framework organizes risk work into Govern, Map, Measure, and Manage [1](https://www.nist.gov/itl/ai-risk-management-framework). Its generative AI profile identifies confabulation as confidently stated erroneous or false content [2](https://doi.org/10.6028/NIST.AI.600-1). Together with federal information-quality and records guidance, the corpus supports source-bound answers, explicit uncertainty, change history, and human review for consequential uses.

All 8 documents were examined. Three principally addressed AI risk and evaluation, 3 addressed records, controls, or provenance, and 2 addressed information clarity and quality. No private call cohort, caller question set, generated-answer sample, correction rate, or operational result was measured. The source counts are documentary findings, not evidence that any virtual assistant answered accurately.

## Research question

What evidence should connect a virtual assistant's spoken answer to an authoritative source, and which claims remain untested without reviewing actual calls? The question is narrower than whether an answer sounds useful. It concerns authority, source version, passage support, transformation, delivered wording, uncertainty, and later correction. Citation availability, factual support, and policy authority are separate propositions.

## Methodology

The corpus was frozen on August 17, 2026. Eight public-authority sources were selected for explicit treatment of AI risk, generative content, accountability, audit controls, content provenance, federal information quality, records lifecycle, or plain communication. The primary unit of analysis was one publication or guidance page. Vendor retrieval claims, model leaderboards, private knowledge bases, and unsourced commentary were excluded.

Seven extraction codes were prespecified: accountable owner, source identity, source version or history, evidence-to-output link, quality assessment, uncertainty or correction, and understandable presentation. A source received a code only for an explicit control or finding. Counts use 8 as the denominator. One principal role was assigned for summary counts while overlap was retained in the worksheet. This completed method reviewed public documents only; it did not submit prompts or score answers.

## Results and evidence matrix

| Source | Concrete extracted finding | Answer-traceability consequence |
|---|---|---|
| NIST AI Risk Management Framework [1](https://www.nist.gov/itl/ai-risk-management-framework) | The voluntary framework uses four functions, Govern, Map, Measure, and Manage, and treats context and continuing risk work as material. | Bind each allowed answer domain to an owner, context, measurement rule, and response when support is missing. |
| NIST generative AI profile [2](https://doi.org/10.6028/NIST.AI.600-1) | The profile describes confabulation as confidently presented erroneous or false content and recommends risk actions across the AI life cycle. | Fluency is not evidence. Unsupported output needs an abstain, correction, or human route rather than a fabricated source. |
| GAO AI accountability framework [3](https://www.gao.gov/products/gao-21-519sp) | GAO organizes accountability around governance, data, performance, and monitoring, with questions for evidence and oversight. | Preserve source selection, performance review, exceptions, and owner action as separate artifacts. |
| NIST SP 800-53 Rev. 5 [4](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) | The control catalog includes Audit and Accountability, Configuration Management, and System and Information Integrity families. | Keep protected events for source changes, answer versions, access, detected error, and corrective action. |
| NIST report on synthetic-content transparency [5](https://doi.org/10.6028/NIST.AI.100-4) | The report analyzes provenance data tracking, watermarking, content authentication, and detection, while describing limits and tradeoffs. | A provenance marker can support origin evidence, but it does not prove that an answer's factual claim is true or authorized. |
| NIST Information Quality Standards [6](https://www.nist.gov/director/nist-information-quality-standards) | NIST's standards frame information quality through utility, objectivity, and integrity and discuss transparency and reproducibility for influential information. | Define why a source is fit, preserve its context, and make the answer-to-passage judgment repeatable. |
| National Archives records management guidance [7](https://www.archives.gov/records-mgmt) | NARA frames records management across creation, maintenance and use, and disposition under accountable schedules. | Do not silently overwrite the source and answer history needed to explain a later correction. |
| Federal plain-language guidelines [8](https://www.plainlanguage.gov/guidelines/) | The guidance emphasizes audience needs, logical organization, informative headings, familiar words, and testing material with users. | A supported passage still needs a clear, bounded spoken rendering that does not broaden the source claim. |

## Evidence interpretation

Three of 8 sources principally address AI evaluation and accountability, 3 of 8 address provenance, records, or technical controls, and 2 of 8 address information quality or presentation. The four NIST AI RMF functions and four GAO principles are framework structures, not accuracy scores. The generative AI profile's confabulation finding establishes a known risk category, not the frequency of unsupported answers in a particular assistant.

The corpus supports a trace record with question event, interpreted intent, policy identifier, source and revision, supporting passage, transformation version, delivered answer, and correction state. A URL alone is insufficient when content can change. An authentic source can be outdated or outside scope, while an answer can match a passage but omit a material qualification.

Traceability should be evaluated at the claim level. One spoken response may contain several claims from different passages. A future denominator could be all material claims in a prespecified answer sample, with classes for directly supported, supported with missing qualification, conflicting sources, stale source, unsupported, outside allowed scope, and evidence unavailable. Answer-level scoring alone can hide one unsupported consequential claim inside otherwise correct wording.

## Decision boundaries

A human knowledge owner should approve authoritative source classes, effective dates, conflict priority, answer scope, review cadence, and stop conditions. A virtual assistant may retrieve approved material, state a bounded answer, identify uncertainty, and transfer unresolved questions. It should not invent authority, hide disagreement, merge incompatible passages, or present a general source as a case-specific decision.

Healthcare, legal, financial, safety, eligibility, complaint, consent, and account decisions remain with authorized human owners. A citation does not transfer decision authority. Where sources conflict, are stale, or do not answer the caller's facts, the defensible result is unresolved with a named route, not an improvised conclusion.

## Limitations

The corpus is purposive and mostly cross-domain. NIST and GAO guidance supplies governance and evaluation concepts, not a telephone-answer benchmark. NARA guidance concerns federal records and is used for lifecycle principles, not to classify every call artifact as a federal record. Plain-language guidance improves presentation but cannot establish factual truth.

No private knowledge article, retrieval log, prompt, spoken answer, caller correction, source-change event, or downstream decision was inspected. References can move, dynamic pages can change without obvious version labels, and some claims require several sources. This review cannot estimate support coverage, hallucination frequency, caller trust, compliance, or any operational effect.

## Reproducibility

A repeat reviewer can retrieve the eight numbered sources, record access dates and document versions, and code one row per source for the seven prespecified criteria. Preserve section locations and short quotations for every code. Calculate principal-role counts over 8, report overlaps, and document any source replacement. A second reviewer should independently verify the confabulation and provenance interpretations because they carry the central distinction between origin and truth.

A later answer review should freeze the eligible call period, answer-policy version, question sampling unit, claim-splitting rule, approved-source register, passage capture method, result codebook, reviewer agreement, adjudication, exclusions, and unavailable count. Report claim and answer denominators separately. This is a specification for future evidence. No private call cohort or operational result was measured here.

## Sources

1. [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
2. [NIST AI 600-1 generative AI profile](https://doi.org/10.6028/NIST.AI.600-1)
3. [GAO artificial intelligence accountability framework](https://www.gao.gov/products/gao-21-519sp)
4. [NIST SP 800-53 Rev. 5 security and privacy controls](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
5. [NIST AI 100-4 on synthetic-content transparency](https://doi.org/10.6028/NIST.AI.100-4)
6. [NIST Information Quality Standards](https://www.nist.gov/director/nist-information-quality-standards)
7. [National Archives records management guidance](https://www.archives.gov/records-mgmt)
8. [Federal plain-language guidelines](https://www.plainlanguage.gov/guidelines/)
