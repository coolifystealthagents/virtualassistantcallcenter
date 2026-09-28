---
slug: third-party-caller-authority-boundary-study
title: What can a call team do when someone calls for another person?
description: A study protocol for separating message-taking, verified authority, permitted disclosure, urgent routing, and accountable follow-up.
datePublished: 2026-09-28
published: 2026-09-28
updated: 2026-09-28
category: Intake boundary research
image: /thumbnails/virtual-assistant-call-identity-verification-study.svg
imageAlt: Third-party caller study separating identity authority disclosure message capture escalation and accountable follow-up
related: /services/inbound-customer-calls, /research/virtual-assistant-call-identity-verification-study, /contact
---

## The operational question

A spouse, caregiver, parent, employee, contractor, neighbor, or interpreter may call about a service associated with someone else. The caller may have a legitimate reason to help, but knowing the account holder does not automatically establish authority to receive information or make changes. An assistant needs a path that can accept useful information without confirming protected details or inventing permission.

This research question is narrower than general identity verification. It asks whether the intake process distinguishes four actions: listening to an inbound message, disclosing an existing record, changing an instruction, and accepting a commitment. Different evidence may be required for each. A workflow that treats all four as “verified” hides the decision boundary that matters.

NIST's [Digital Identity Guidelines](https://www.nist.gov/identity-access-management/projects/nist-special-publication-800-63-digital-identity-guidelines) provide authoritative concepts for identity proofing and authentication in digital services. The [NIST Privacy Framework](https://www.nist.gov/privacy-framework) supports purposeful data processing and privacy-risk governance. Neither source decides whether a particular relative, employee, or agent may act for another person in a specific industry. The client business must obtain qualified advice and publish its own authority rules.

## Model actions instead of labeling people

Create an action matrix before reviewing calls. Rows should describe what the caller requests: leave a message, confirm that a request exists, obtain status, cancel, reschedule, change an address, approve work, discuss a balance, or receive documents. Columns should identify the evidence required, fields that may be collected, facts that may be disclosed, and the owner of an exception.

Avoid a single permanent “authorized” flag. Authority can be limited by purpose, account, service, time, amount, or communication channel. It can also be withdrawn. Record the source, scope, effective time, expiration if applicable, and policy version. A note saying “wife can call” is ambiguous because it does not identify the person, permitted actions, or source of the instruction.

Separate inbound contribution from outbound confirmation. The business may be able to receive a maintenance description without confirming tenancy, ownership, schedule, or account status. The assistant can say that information will be routed for review without stating whether a matching record exists. This allows helpful intake while preserving the disclosure boundary.

## Define the study population

Choose a fixed period and include calls where the caller states that they act for someone else, gives a different name from the record subject, requests an action on another person's service, or triggers the third-party branch of the script. Include calls that stop at message-taking, calls escalated for review, denied requests, and requests later confirmed by the subject.

The unit is one requested action, not necessarily one call. A caller may leave a message and also request a schedule change; those actions can have different outcomes. Link them with a pseudonymous call identifier while retaining separate classifications. If a later call supplies missing authority, preserve both events rather than rewriting the earlier decision.

Freeze inclusion rules before checking outcomes. Do not select only recordings with obvious problems. Report test calls, duplicates, unavailable recordings, and system outages separately. If the business operates several service lines, stratify only where the authority matrix or disclosure risk actually differs.

## Evidence that reviewers need

For each requested action, capture a protected case ID, caller-stated relationship, subject identifier token, action class, script version, evidence requested, evidence result, disclosures made, information accepted, route, owner acceptance, subject confirmation if used, final decision, and closure time. Record unknown when a field cannot be supported.

Keep names, phone numbers, recordings, documents, health details, financial details, and free-text allegations in approved operational systems. The study table should use coded relationships and outcomes. Reviewers do not need the underlying secret or document number to determine whether the correct evidence class was used.

Preserve the sequence. A final approved change does not prove the assistant was allowed to disclose information earlier in the call. Capture the time of the first disclosure, the time authority became supported, and who made the final decision. Event order allows reviewers to distinguish a safe escalation from retroactive rationalization.

## Review checkpoints

Start with the greeting and account lookup. Determine whether the assistant asked neutral questions or revealed a subject's record before establishing a permitted basis. Check whether caller ID, a shared address, or knowledge of service details was treated as conclusive authority when policy does not allow that inference.

At the request point, code whether the action was mapped to the correct evidence rule. Review what the assistant disclosed while collecting the request. A refusal can still disclose information if it says, for example, that a named person has a scheduled visit. Conversely, accepting a message without confirming the record may be the correct bounded action.

Follow escalations through completion. An “owner review” disposition is incomplete until a named queue or person accepts it. Determine whether the reviewer had the original action, the evidence gap, and a safe return channel. Check whether a later callback verified the intended recipient before discussing the matter.

## Measures and interpretation

The primary measure is boundary adherence: requested actions for which the evidence rule, disclosure limit, and final owner were all supported, divided by all eligible actions. Unknowns remain in the denominator and are reported separately. Publish counts with rates.

Secondary measures include premature disclosure, unsupported change, safe message acceptance, unnecessary refusal, escalation acceptance, time to decision, repeated verification, subject-confirmation completion, stale authority, and cases where one broad flag substituted for scoped evidence. Break results down by action class before using relationship type; the requested action usually determines risk more directly than the caller's label.

Do not interpret a high denial rate as safety. A process can refuse harmless message-taking, burden callers, and still disclose records during the refusal. Likewise, a high completion rate may conceal unsupported changes. Measure the quality of the decision path rather than rewarding “yes” or “no.”

## Reviewer agreement and edge cases

Give reviewers written examples involving a caregiver leaving information, an employee requesting a schedule change, a parent calling for an adult child, and an interpreter facilitating the subject's own call. These are not legal answers. They test whether reviewers can apply the business's action matrix consistently.

Double-review a declared sample. Compare the identified action, authority state, first disclosure, permitted intake, escalation requirement, and closure. Preserve initial classifications and adjudication. If reviewers disagree because the policy uses words such as “representative” without defining scope, record a policy defect rather than forcing agreement.

Keep an unknown state for noisy audio, missing history, conflicting records, or unverifiable caller claims. Unknown is not a denial or approval. It identifies where a named owner must make a bounded decision or where evidence cannot support a retrospective conclusion.

## Accessibility, privacy, and assistant limits

Do not confuse communication assistance with decision authority. A relay operator or interpreter may facilitate the subject's words without becoming the person authorized to change the account. A caller who needs more time or an alternate channel should receive the approved accommodation path without being held to a higher identity standard solely because of communication method.

The virtual assistant may collect the minimum facts needed to route a request, apply a published evidence matrix, avoid confirming records, and escalate uncertainty. The assistant should not interpret legal documents, decide family disputes, infer authority from confidence or relationship, or promise that an action has been accepted before the accountable owner does so.

Limit retained relationship information to what the declared purpose needs. Avoid public examples that could reveal a real caller. Apply access and retention controls to authority evidence because it can contain sensitive personal and organizational information.

## Limitations and decision rule

This study measures documented adherence to one business's policy. It cannot determine the legal validity of authority, detect every disclosure in an unrecorded conversation, or prove that a document remained valid. Industry rules and jurisdictions differ. A later subject confirmation may resolve the requested action but does not erase an earlier unsupported disclosure.

A case passes only when each requested action is classified separately, the required evidence is supported before the action or disclosure, permitted inbound information is handled without unnecessary confirmation, and unresolved work reaches an accepted owner. Missing evidence remains unknown.

Improvements should target the failing stage: a clearer action matrix, scoped authority fields, safer lookup language, a no-confirmation message path, or an owned escalation queue. Version every change and begin a new cohort. The objective is to let the team be useful without turning familiarity, relationship, or urgency into invented permission.

## Sources checked

- National Institute of Standards and Technology, [Digital Identity Guidelines](https://www.nist.gov/identity-access-management/projects/nist-special-publication-800-63-digital-identity-guidelines), checked September 28, 2026.
- National Institute of Standards and Technology, [NIST Privacy Framework](https://www.nist.gov/privacy-framework), checked September 28, 2026.
- U.S. Department of Justice, [ADA Requirements: Effective Communication](https://www.ada.gov/resources/effective-communication/), checked September 28, 2026.
