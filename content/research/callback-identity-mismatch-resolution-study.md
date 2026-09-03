---
slug: callback-identity-mismatch-resolution-study
title: What should a callback study measure when caller identity details do not match?
description: Evidence-led research on resolving callback identity mismatches without exposing personal data, guessing identity, or overstating successful contact.
published: 2026-08-23
updated: 2026-08-23
category: Callback research
image: /thumbnails/call-center-caller-authentication-boundaries.svg
imageAlt: Callback identity mismatch study mapping conflicting details, verification boundaries, ownership, and final disposition
related: /research/caller-authentication-challenge-failure-study, /research/call-intake-identity-verification-controls
---
## Research question

When the details on a callback request do not match the person or record reached, what evidence shows that a virtual assistant resolved the mismatch without guessing identity, disclosing information, or falsely counting the callback as completed? A mismatch may involve a transposed digit, reused number, changed contact preference, shared line, stale account record, or caller correction. The visible event, an answered call, does not establish that the intended person received the intended message.

The virtual assistant's role should remain narrow. The assistant can follow an approved verification path, state a neutral reason for contact when permitted, record a mismatch, stop disclosure, and route the exception. The business must define what counts as sufficient verification, which information may be revealed, when contact must stop, and who can amend an authoritative record.

## Cohort and evidence model

Define the cohort from callback requests that encounter a documented mismatch or failed approved verification step. Set a review period and state the systems used to identify eligible records. Do not select only callbacks later marked resolved, since that removes unresolved and abandoned episodes from view. Use a study identifier in analysis and keep direct identifiers out of public results.

Build an event chain for each request: original source, contact detail as captured, any read-back, callback consent or preference, assignment, attempt, mismatch signal, assistant response, escalation, correction source, and final known disposition. Preserve the original and corrected values in protected systems when policy allows, but public analysis should use mismatch categories rather than the values themselves.

The [NIST Privacy Framework](https://www.nist.gov/privacy-framework) supports identifying privacy risk and governing data processing. The [FTC guidance on protecting personal information](https://www.ftc.gov/business-guidance/privacy-security) recommends knowing what information a business holds and limiting unnecessary retention. These are general sources. They do not establish a universal identity-verification rule for callback operations.

## Classifying a mismatch

Separate capture mismatch from contact mismatch. Capture mismatch means the callback detail differs from the caller's supported statement, perhaps because of transcription or an uncorrected read-back. Contact mismatch means the recorded detail is dialed accurately but reaches an unexpected person, mailbox, or service. Record mismatch occurs when the phone detail and an internal record disagree. Preference mismatch occurs when the caller's current instruction differs from an older contact permission.

Add unknown as a legitimate class. An unanswered attempt does not reveal whether the number was wrong. A generic voicemail greeting does not prove identity. A person who declines to verify should not be classified as the wrong person without supporting evidence. Reviewers should use the minimum claim justified by the event.

Measure mismatch incidence only among requests with enough evidence to determine whether a mismatch occurred, and report indeterminate requests separately. Measure safe-stop behavior among confirmed or signaled mismatches. Measure correction completion among episodes where an authorized correction path was available. Report attempts, answered contacts, verified intended contacts, declined verification, mismatches, and unresolved cases as different states.

## Resolution quality

A resolution is not simply a corrected number. It should identify who supplied the correction, whether that source was authorized under the business rule, when the authoritative record changed, and whether pending work moved to the right owner. The assistant should not merge records or infer that two similar names identify the same person unless the approved process permits it.

Review disclosure before verification. Code whether the assistant stated only the approved neutral context, exposed appointment or service details, asked for unnecessary information, or continued after a stop signal. The [NIST Digital Identity Guidelines](https://pages.nist.gov/800-63-4/) provide technical guidance for digital identity risk and assurance. They do not automatically apply a particular assurance level to a business's telephone callback, but they help explain why verification strength should match risk rather than convenience.

Resolution time can be reported from mismatch detection to an accepted disposition. Name the time unit and distinguish elapsed from business time. Break out time waiting for the caller, a business owner, or a record administrator. A shorter result is not inherently better if it comes from bypassing verification or overwriting uncertain data.

## Review procedure

Train reviewers with redacted examples and a written decision tree. Double-code all episodes involving possible disclosure and a sample of ordinary mismatches. Record disagreements about mismatch type, verification state, and final disposition. If reviewers cannot resolve a case from approved evidence, leave it unknown.

Compare cohorts only when callback policy, verification steps, and source systems remained stable. A new read-back practice may change capture errors. A carrier spam label may change answer rates without changing record quality. A campaign that reaches more shared business lines may create a different mismatch mix. Describe these changes before comparing rates.

Facts from external guidance should be cited directly. Local observations should show counts and denominators. Analysis may propose that a read-back or ownership field explains a pattern, but it must label that claim as an interpretation unless the design tests causation. Avoid turning a small cluster into a claim about all callers or all virtual assistants.

## Accessibility and fairness considerations

Verification can burden callers who use relay services, interpreters, shared household numbers, or alternative communication methods. The study should record whether an approved accommodation or alternate channel was offered without inferring disability or identity from behavior. The [FCC Telecommunications Relay Services guide](https://www.fcc.gov/consumers/guides/telecommunications-relay-service-trs) explains relay services in the United States; it does not tell a business how to authenticate every relay call.

Review whether the assistant allowed correction and escalation without pressuring the person to disclose more than the process needed. A failed challenge may mean the wrong person answered, but it may also show that the approved challenge was unusable. Keep those explanations separate.

## Limitations

Many mismatch episodes remain unknowable because unanswered calls, generic mailboxes, and incomplete notes reveal little. Carrier reassignment and number sharing may not appear in internal records. Reviewers may lack permission to inspect a correction source. Privacy safeguards can appropriately restrict the evidence available for research.

This study cannot prove legal compliance, fraud, intent, or identity. It cannot set a universal verification standard. A resolved callback does not establish service quality or caller satisfaction. Results apply only to the documented rules, cohort, and evidence sources.

## Evidence-led conclusion

Callback mismatch research is credible when it distinguishes an answered call from verified intended contact and a changed field from an authorized correction. The evidence chain should show what conflicted, what the assistant safely did, who owned the exception, and what remained unresolved. VirtualAssistantCallCenter can help businesses structure that record while avoiding guesses and unnecessary disclosure. The business retains authority over verification, record changes, and final customer decisions.
