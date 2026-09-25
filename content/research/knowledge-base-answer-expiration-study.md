---
slug: knowledge-base-answer-expiration-study
title: Does a phone-support answer expire when its source changes?
description: A research method for testing source ownership, answer versioning, expiration triggers, assistant access, and correction evidence.
datePublished: 2026-09-25
published: 2026-09-25
updated: 2026-09-25
category: Knowledge research
image: /thumbnails/knowledge-base-answer-expiration-study.svg
imageAlt: Knowledge answer expiration study linking source owner, approved version, change signal, assistant access, correction, and review
related: /services/virtual-assistant, /research/virtual-assistant-knowledge-base-maintenance, /contact
---

## Research question

A phone answer may have been accurate when approved and still become unsafe after hours, eligibility, service area, pricing, or policy changes. Searchability is not freshness. The operational question is whether each answer retains a named source, review condition, version, and removal path so an assistant can distinguish approved guidance from stale memory.

This article presents a prospective research protocol for VirtualAssistantCallCenter's small-business audience. It does not claim that the company has measured a customer cohort, reached a compliance conclusion, or established a market benchmark. A Philippines-based virtual assistant can apply the client business's approved script, capture stated facts, perform permitted readbacks, and route uncertainty. The assistant should not invent authority, make a legal or clinical determination, expose unrelated records, or promise an outcome controlled by another person.

## What the sources establish

[Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) from National Institute of Standards and Technology is an authoritative design input. [Security and Privacy Controls for Information Systems and Organizations, SP 800-53 Rev. 5](https://doi.org/10.6028/NIST.SP.800-53r5) from National Institute of Standards and Technology is an authoritative design input. [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) from World Wide Web Consortium is an authoritative design input. These sources support governance themes such as data minimization, accountable ownership, access control, traceable changes, and accessible interaction. They do not prescribe this exact phone workflow or a universal performance threshold.

The study therefore separates sourced principles from operational analysis. The checkpoint model, classifications, measures, and decision rule below are proposed methods for a business to test its own process. They should be reviewed against the business's contracts, jurisdiction, industry duties, technology, and risk tolerance. A source being authoritative does not make every local inference a fact.

## Method and unit of analysis

Use a prospective record review with a protocol frozen before results are inspected. The unit is one caller question and the answer source available at handling time, followed through use, escalation or correction, source change, and final review state. Define the observation period, included queues, operating hours, system of record, responsible owner, and exclusion rules. Select all eligible cases in a small period or a reproducible random or interval sample. Do not select only resolved or successful records.

Distinguish three layers. A fact is a timestamped event or controlled field available to an authorized reviewer. An analysis is a classification made under the published protocol. An inference is a possible explanation that remains uncertain. Missing evidence is not proof that an action did or did not occur. Preserve unknown as a result instead of converting it to a pass.

Exclude test records, obvious duplicates, and events outside scope only under written rules. Report each exclusion count. If one case produces several tasks, define whether the case or each task is the denominator before analysis. Mark outages, policy changes, and integration migrations as cohort boundaries because they can change evidence availability and case handling.

## Evidence model

The minimum research record contains question class; knowledge-record identifier; source owner; source URL or controlled record; approval time; review-by date or change trigger; version presented to the assistant; retrieval time; answer disposition; uncertainty route; correction notice; affected-record search; and reviewer outcome. Keep direct identifiers, free-text messages, recordings, and account details in protected operational systems. The analysis table should use pseudonymous identifiers and controlled categories wherever possible. Access should be limited to the roles needed to answer the research question.

Classify every required checkpoint as supported, contradicted, unknown, or not applicable. Supported means reliable evidence matches the written rule. Contradicted means reliable evidence shows a different event or state. Unknown means records are missing, inconsistent, inaccessible, or too ambiguous to decide. Not applicable requires a protocol-defined reason. Reviewers should never use not applicable simply to improve the result.

Preserve provenance for corrections. Keep the original value, corrected value or protected token, correcting role, time, reason, and downstream effect when the field matters to the research question. A clean final screen is not sufficient because it can conceal the sequence that produced the state. Event time and ingestion time should both be retained when synchronization delay is possible.

## Required checkpoints

For each instance, test whether:

- The answer had a named authoritative source.
- The source owner and version were visible.
- An expiration or change trigger was defined.
- The assistant used the current approved version.
- Uncertainty produced escalation instead of invention.
- A changed source withdrew or replaced the old answer.
- Affected calls were reviewable after correction.

The checklist is a chain, not a menu. A downstream success cannot repair missing authority or provenance upstream. At the same time, one failed checkpoint should not erase evidence about later recovery. Recording the full path allows the business to find the stage where control weakened and whether the fallback limited the effect.

## Measures and calculations

The primary measure is the count and proportion of eligible cases with supported evidence at every required checkpoint. The denominator includes unknown cases, with unknown also reported separately. Publish numerator, denominator, and exclusion counts next to every percentage. A percentage without its case count can make a small or selective sample look more certain than it is.

Secondary measures can include the checkpoint-specific contradicted rate, unknown rate, exception count, correction count, and elapsed time from initiating event to owner acknowledgment or closure. For time measures, publish the clock source, timezone, business-hours rule, pause rule, and treatment of events that cross the observation boundary. Use medians and ranges for small cohorts; an upper percentile is useful only when the sample can support it.

Do not treat a local baseline as a service-level promise. Compare periods only when definitions, sources, channels, hours, and case mix are materially comparable. If a platform, script, routing rule, or owner changes, label the change and start a new cohort. A before-and-after difference is descriptive unless the design addresses seasonality, volume, outages, training, and other plausible causes.

## Review and reproducibility

Before extraction, version the protocol, data dictionary, rule, and query. Reconcile the extracted population to a source-system total when possible. Check for impossible timestamp order, orphan tasks, reused identifiers, conflicting final states, and records with no owner. Keep the extraction time because a later sync can change what the reviewer sees.

Train reviewers on several neutral examples, then double-review a declared subset. Agreement does not prove that the operation is safe, but disagreement shows that the classification rule is unstable. Log whether disagreement arose from ambiguous language, conflicting sources, missing evidence, or an unclear precedence rule. Send unresolved cases to a named adjudicator while preserving the first classifications.

Store source title, publisher, URL, and checked date with the protocol. Preserve query parameters or an export recipe without publishing credentials or personal data. Another authorized reviewer should be able to reproduce the population and classification logic. Corrections to the research output should identify what changed and why instead of silently rewriting the result.

## Privacy, accessibility, and assistant boundaries

Collect only evidence needed for the declared question. Limit recordings, phone numbers, free text, health details, payment information, and account data to approved systems and roles. Aggregate public reporting and screen examples for reidentification risk. Retention should follow a documented purpose and schedule rather than indefinite convenience.

Give callers clear pacing, a correction opportunity, and an alternate path when the ordinary interaction does not work. Do not infer competence, consent, urgency, or identity from fluency, accent, disability, caller ID, or speed. The assistant follows the approved boundary and escalates ambiguity to the client business. Accessibility is part of process quality, not an afterthought added only when a complaint occurs.

## Limitations and uncertainty

Operational records measure documentation and system behavior, not the whole caller experience. A missing event may be an unrecorded action or an actual failure. A successful API event may not mean a person saw, understood, or accepted the information. Timestamps can reflect queueing or clock drift. Small samples are unstable, and findings from one business, season, channel, or platform should not be generalized to other organizations.

This design does not establish causation, certify legal compliance, or prove caller satisfaction. It cannot identify unrecorded work performed outside the declared systems. Reviewers may make mistakes even with written instructions. Report those limitations with the result, retain the unknown category, and keep conclusions bounded to the sampled population, protocol version, and checked evidence.

## Decision rule and improvement loop

An answer is current only when its approved source, version, and applicable review condition are supported at the time of use. Availability alone is not a pass. A missing owner, ambiguous effective date, or conflicting source yields unknown and routes to the business rather than inviting an improvised answer.

Define corrective actions before viewing aggregate results. Repeated failures at one checkpoint may justify a change to a script, form, routing map, integration, permission, or training example. Record the expected mechanism, owner, effective time, affected queues, validation method, and rollback path. Prefer one controlled change at a time when practical, then begin a new cohort under the new version.

The purpose is not to manufacture a favorable rate. It is to give the responsible business enough traceable evidence to choose a safer next action. Supported, contradicted, and unknown results each lead to different work. Keeping them separate prevents a clean dashboard from concealing uncertainty.

## Conclusion

The defensible answer is a bounded account of what the declared records support, where they conflict, what remains unknown, and who owns the next step. This research structure connects everyday phone work to source authority, observable state changes, and explicit recovery. It also keeps client policy decisions with the client while giving a virtual assistant a clear, reviewable operating boundary.

## Sources and checked dates

- National Institute of Standards and Technology, Cybersecurity Framework 2.0, https://www.nist.gov/cyberframework, checked 2026-09-25.
- National Institute of Standards and Technology, Security and Privacy Controls for Information Systems and Organizations, SP 800-53 Rev. 5, https://doi.org/10.6028/NIST.SP.800-53r5, checked 2026-09-25.
- World Wide Web Consortium, Web Content Accessibility Guidelines 2.2, https://www.w3.org/TR/WCAG22/, checked 2026-09-25.

## Related paths

- [Virtual assistant services](/services/virtual-assistant)
- [Knowledge-base maintenance research](/research/virtual-assistant-knowledge-base-maintenance)
- [Discuss an owner-controlled workflow](/contact)
