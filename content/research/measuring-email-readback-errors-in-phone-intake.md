---
slug: measuring-email-readback-errors-in-phone-intake
title: "Measuring email readback errors in phone intake"
description: "A measurement protocol for finding where email readback fails and whether the error starts with the caller, the agent, or the record."
published: 2026-11-10
updated: 2026-11-10
category: "Call operations research"
image: /images/nov10/research/measuring-email-readback-errors-in-phone-intake.webp
imageAlt: "Measuring email readback errors in phone intake"
related: /blog/set-a-rule-for-reading-back-a-callers-email-address, /research/callback-readback-error-detection-study
---

Email addresses are collected by voice and used by machines, which makes them a useful place to study handoff quality. A caller can say an address clearly and still be recorded incorrectly. A readback can catch the error, or it can become a ritual that everyone agrees to without checking. This review describes a way to measure where the error occurs and what the team can fix.

## Key takeaways

- Compare the spoken address, the typed address, and the delivered address.
- Separate caller pronunciation from agent transcription.
- Use a short overlap sample to check reviewer agreement.
- Report errors by call type and by readback style before changing the script.

## Research question and scope

This review asks how often an email address changes between the caller's statement and the final record, and whether the readback step catches the change. The unit is one call that collects an email address for a promised follow-up. The review measures the error rate at intake, the correction rate during readback, and the delivery outcome for a small sample. It treats a corrected address as a caught error rather than a final failure.

The scope covers inbound service, booking, and intake calls handled by a receptionist or a small support team. It excludes addresses collected only through a web form or a chat transcript. It also excludes calls where the caller declined to give an address. Fix the scope before drawing the sample so the denominator is stable.

The review does not measure whether the customer was satisfied with the call. A correct address can still come from a poor interaction. Keep the email measure separate from a service-quality score. Combining the two makes it hard to tell whether a change improved accuracy or just changed the sample.

Record the number of agents, the call types, and the email domains in the sample. A team that handles many international domains may see more spelling corrections than a local team. The count is context for the result, not a grade. Report it beside the rate so the reader can judge comparability.

## Definitions and unit of analysis

Define an email error as a difference between the address the caller intended and the address in the record. Because intent is not directly observable, use the readback conversation and the delivery result as evidence. An address that bounces is a confirmed error if the caller cannot be reached again. An address that was corrected during readback is a caught error, not a final error.

Separate three moments: the caller's first statement, the agent's typed entry, and the readback confirmation. The comparison shows whether the agent misheard, mistyped, or repeated a wrong value back to the caller. A readback that repeats the same wrong value can create false confidence. That is the failure this measure is designed to expose.

Define a readback as a deliberate confirmation of the full address or its parts, not a casual "got it." A scripted readback should include the local part, the domain, and any unusual punctuation. If the agent only says the name and not the domain, record the readback as partial. The distinction matters because partial checks miss a common class of errors. A full readback also gives the caller a clear moment to correct the record.

The unit is the call, not the email message. A call that collects two addresses should be counted once with a note about both. A call that produces a corrected address is still one call. This keeps the denominator tied to the interaction and avoids inflating the sample with multiple records.

## Sampling and data dictionary

Draw the sample from calls in a fixed period that meet the scope. Include every eligible call or a random sample if volume is high, and record the export date, queue, and row count. Keep the export with the report so another reviewer can rebuild the sample. A convenience sample of recent calls will overrepresent whatever the team is worried about this week.

For each call, capture the agent, the call type, the first spoken address, the typed address, the readback result, and the delivery outcome. Add whether the caller self-corrected and whether the agent used a chunked readback. These fields let the reviewer locate the failure without listening to every recording from the beginning. Keep the address itself in a restricted field if the review does not need the full value.

Use a data dictionary with plain definitions for each field. "Corrected during readback" should mean the caller changed at least one character after hearing the readback. "Delivered" should mean the message reached the intended inbox, not merely that it was sent. Clear definitions reduce the chance that two reviewers score the same call differently.

Remove or mask sensitive content that is not needed for the review. The email address itself may be necessary for delivery checks, but the message body usually is not. Store the sample in a restricted location and delete it on the agreed date. A measurement process should not create a new privacy problem.

## Measuring readback errors

Report the share of calls with a final address error, the share caught during readback, and the share that failed delivery. A high caught-error share may mean the readback is working, even if the first transcription is weak. A low caught-error share combined with failed delivery is the more serious pattern. Report the three numbers together rather than a single accuracy rate.

Break the result down by readback style. Compare a chunked readback with a single-string readback, and compare a full readback with a partial one. If the chunked style catches more errors, the script can be changed with evidence. If it makes no difference, the team may have a different problem, such as background noise or unclear speech.

Compare calls where the caller spelled the address voluntarily with calls where the agent asked for spelling. A caller who spells without prompting may be used to a difficult name or domain. A caller who is asked may feel tested. The comparison can show whether the request for spelling is helping or just adding time.

Look at the delivery outcome for a small subset of addresses. A bounce is strong evidence of an error, but a delivered message is not proof that the right person received it. A shared inbox or a catch-all domain can accept a wrong address. Use delivery as one signal, not as a complete validation.

## Analysis and limitations

The review cannot know the caller's true intent when the address is never used again. A record can be wrong and still avoid a bounce if the domain accepts it. This limitation means the measured error rate is a lower bound in some cases. State that clearly rather than presenting the rate as exact.

Reviewer judgment is another source of uncertainty. One reviewer may treat a missing domain as an error, while another may treat it as a partial address that the agent would have completed later. Use the data dictionary and a short calibration session before scoring. Report disagreement on a small overlap sample so the reader can judge reliability.

The sample may not represent calls handled by the busiest agents or the overnight shift. A team that rotates staff should stratify by shift and call type. A single overall rate can hide a problem that appears only in one queue. The review should name the groups it can and cannot compare fairly.

The measure also cannot separate a bad connection from a bad process. A call with poor audio may produce an error even with a perfect script. Record a simple audio-quality label and compare within it. If errors cluster in poor-audio calls, the fix may be a callback or a different channel rather than more readback training.

## Repeating the review

Repeat the review with the same scope, definitions, and readback categories. A change in any of these can move the result without a change in performance. Record the date, the sample size, and the script version beside the number. The reader should be able to see what was tested and what changed.

Use the first result to choose one change, such as a chunked readback for all addresses or a required domain confirmation. Train the change with examples and observe a new sample after a few weeks. A second sample shows whether the behavior reached the calls. It also protects the team from judging a new script on its first day. The [email readback rule](/blog/set-a-rule-for-reading-back-a-callers-email-address) is the operational counterpart to this review.

Keep the data dictionary and the scoring form in the operations folder. A measure that depends on one reviewer is fragile. A new reviewer should be able to apply the same standard without a long explanation. The method should survive a staff change and a busy season.

Share the result with the agents who make the calls, not only with management. Ask which addresses are hardest to hear and which domains cause the most corrections. The people on the calls often know where the script breaks. A short conversation can produce a better fix than another page of guidance. Compare the pattern with the [callback readback error detection study](/research/callback-readback-error-detection-study) before changing the form.

## Sources

- [U.S. Bureau of Labor Statistics, customer service representatives](https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm)
- [National Institute of Standards and Technology, Privacy Framework](https://www.nist.gov/privacy-framework)
- [Federal Trade Commission, protecting personal information](https://www.ftc.gov/business-guidance/privacy-security)

Treat the email readback as a small control with a measurable effect. The point is not to prove that every agent is careless. The point is to find the step where a correct spoken address becomes a wrong record. Once that step is visible, the team can fix the script, the form, or the training with a clear target.
