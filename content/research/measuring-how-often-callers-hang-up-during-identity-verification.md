---
slug: measuring-how-often-callers-hang-up-during-identity-verification
title: "Measuring how often callers hang up during identity verification"
description: "A measurement method for hang-ups during identity verification, covering definitions, stages, denominators, consent, and honest limits."
published: 2026-11-20
updated: 2026-11-20
category: "Call operations research"
image: /images/nov20/research/measuring-how-often-callers-hang-up-during-identity-verification.webp
imageAlt: "Measuring how often callers hang up during identity verification"
related: /research/caller-identity-verification-outcomes, /blog/building-a-caller-identity-check-that-does-not-slow-intake
---

A hang-up during identity verification looks like a lost call, but it may be a lost customer or a protected one. The caller may have lost patience, doubted the request, or decided the call was not worth the information. The event only becomes useful when the team defines where verification starts and what counts as a hang-up. A careful measure separates a process problem from a healthy boundary.

## Key takeaways

- Define the exact start and end of the verification stage.
- Count hang-ups per verification attempt, not per call.
- Separate a hang-up before the request from one after it.
- Report the denominator and the queue beside every rate.
- Treat a refusal to verify as different from a dropped line.

## Define the verification stage

Write down the first and last moment of verification. The stage may begin when the agent asks for the first identifier and end when the record is matched. Some teams include the security question, and others stop at the name and date of birth. The choice changes the rate, so it must be stated.

Decide which actions require verification and which do not. A general question may need none, while an address change needs a full check. The [identity verification outcomes study](/research/caller-identity-verification-outcomes) shows how to split these cases. The measure should cover only the calls that actually enter the stage.

Record the verification method and the script version. A new question or a new system can change the hang-up rate without any change in caller behavior. The reader needs that context to compare periods. Keep the version beside the result.

## Count attempts, not calls

Use the verification attempt as the unit. A single call may contain two attempts if the first identifier fails. Counting calls hides the second attempt and understates the burden. Counting attempts shows where the caller gave up.

Mark whether the attempt succeeded, failed, or ended in a hang-up. A failed attempt followed by a success is not a hang-up. A hang-up after a failed attempt is a different case from one at the first question. These distinctions matter for the fix.

Record the stage at which the hang-up occurred. The first identifier, the second factor, and the final confirmation are different pressure points. Group the results by stage before drawing a conclusion. A single rate across all stages hides the weak spot.

## Separate the reasons

A caller who hangs up may be frustrated, suspicious, or simply interrupted. The note cannot always tell which, and the team should not guess. Use a small code set for the cases the note can support. Leave the rest as unknown rather than inventing a cause.

Distinguish a refusal from a hang-up. A caller who says "I would rather not give that" and ends the call has made a choice. A caller whose line drops has not. The first is a boundary, and the second is a technical event. Mixing them distorts the measure.

Treat a repeated hang-up from the same number as a signal, not a duplicate. The caller may be trying again and giving up at the same point. Link the attempts without merging them. The [callback identity mismatch study](/research/callback-identity-mismatch-resolution-study) offers a related method.

## Report the denominator

Show the number of verification attempts beside the number of hang-ups. A rate without the base hides whether the sample was ten or ten thousand. Include the queue, the date range, and the shift pattern. Small samples should be marked as small.

Report the overall call volume as well. A high hang-up rate on a low volume may be less important than a moderate rate on a large one. The two numbers answer different questions. Present them together so the reader can judge.

Break the rate down by agent only when the sample supports it. A single agent with a high rate may be following a stricter script. Check the script version before attributing the result to the person. The [data reliability guidance](https://www.gao.gov/products/gao-20-283g) is a useful frame for these limits.

## Protect the callers in the sample

Use record identifiers instead of names in the audit file. Do not copy the identifiers the caller provided into the coding sheet. The measure should not create a new privacy risk. Store the sheet separately from the customer record.

Limit access to the sample to the people who need it. A reviewer needs the stage and the outcome, not the full account. Share the minimum necessary detail. The [minimum necessary guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html) applies to internal review as well.

Do not contact callers to ask why they hung up. A follow-up call after a privacy check can feel intrusive. Use the recorded facts and the aggregate pattern instead. If the team wants caller feedback, use a separate opt-in survey.

## Interpret with care

The measure cannot show whether the caller was legitimate. A high hang-up rate may mean the check is too heavy, or it may mean the check is working. Read the stage-level results before choosing an explanation. A cluster at the second factor points to a different fix than a cluster at the first.

Compare the rate to the outcome that follows. If verified callers complete their requests at a high rate, the check is doing its job. If many verified callers still abandon later, the problem is elsewhere. The [first call resolution study](/research/measuring-first-call-resolution-for-a-virtual-receptionist) offers a related outcome measure.

Change one part of the check and measure again. Try a shorter opening explanation or a different order for the questions. Keep the version that reduces hang-ups without weakening the control. Then document the change beside the new rate.

## Sources

- [Federal Trade Commission, protecting personal information](https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business)
- [National Institute of Standards and Technology, digital identity guidelines](https://pages.nist.gov/800-63-3/)
- [U.S. Government Accountability Office, GAO-20-283G: assessing data reliability](https://www.gao.gov/products/gao-20-283g)
- [U.S. Department of Health and Human Services, HIPAA minimum necessary requirement](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html)
