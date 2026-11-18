---
slug: estimating-the-cost-of-repeated-identity-checks-in-one-call
title: "Estimating the cost of repeated identity checks in one call"
description: "A review method for measuring repeated identity checks inside a single call, including extra turns, added seconds, and caller burden."
published: 2026-11-18
updated: 2026-11-18
category: "Call operations research"
image: /images/nov18/research/estimating-the-cost-of-repeated-identity-checks-in-one-call.webp
imageAlt: "Estimating the cost of repeated identity checks in one call"
related: /blog/write-a-caller-identity-check-for-financial-intake-calls, /research/caller-identity-verification-outcomes
---

An identity check is meant to be a single gate, not a series of small gates. In practice a caller may verify a name at the menu, a date of birth at intake, and a phone number again after a transfer. Each request feels minor to the agent and cumulative to the caller. This review describes a method for measuring the repetition and its cost within one call.

## Key takeaways

- Count each verification request as a separate event in the call.
- Measure the turns and seconds added by each repeat.
- Separate a required recheck from a preventable repeat.
- Compare calls with a transfer against calls without one.
- Treat caller frustration as evidence, not as a coding failure.

## Research question and scope

The review asks how often a caller is asked to verify identity more than once in a single call, what information is requested each time, and how much time the repeats add. The unit is the verification request, not the caller record. A call with three requests has three units even when the same fact is checked twice. Each request is timed and classified before the next call is read.

The scope covers inbound calls handled by a small phone team with at least one identity check. It includes calls that stay with one agent and calls that pass through a transfer. It excludes calls where no identity check is required by policy. The review does not judge whether the policy itself is appropriate.

Record the identity policy version, the transfer path, and the systems used at each step. A new system may cache a verified caller and remove a repeat. A transfer to a team without access may create one. The reader should know which setup produced the measurement.

## Definitions and unit of analysis

Define a verification request as any agent utterance that asks the caller to provide an identity fact. A request for a name, date of birth, account number, or one-time code counts. A request to repeat a fact that was already provided counts as a separate event. Do not merge two requests just because they arrive in the same sentence.

Define a required recheck as a request that policy or access rules make necessary after a handoff. Define a preventable repeat as a request for a fact the current agent already has on screen or heard earlier. The distinction matters because the fixes are different. One needs a policy change and the other needs a workflow change.

Define the cost as the number of caller turns, the seconds from the request to the confirmed answer, and the number of failed attempts. A repeat that takes one turn is still a cost, but a repeat that takes three turns is a larger one. Report the components separately rather than blending them into a score. A repeat with a failed attempt is a larger cost than a repeat that is answered at once.

## Sampling and coding

Select calls that contain at least one verification request and that have a complete recording. Include calls with and without a transfer so the comparison has a baseline. Keep the call length and the queue in the sample file. A sample drawn only from long calls will overstate the repeats.

Listen to the full call and mark each request with a timestamp. Write the fact requested and whether the caller had already provided it. Note the agent's source of truth, such as a screen, a note, or a prior statement. Add whether the caller commented on the repeat.

Use a second reviewer on a small overlap sample. Compare the count of requests and the classification of required versus preventable. Discuss disagreements before scoring the full sample. Report the disagreement rate so the reader can judge the coding.

## Measuring time and caller burden

Measure the seconds from the first request to the confirmed answer for each event. Include the caller's response and the agent's readback. Stop the clock when the agent moves to the next topic. Report the median and the range rather than only the average.

Count the number of turns the caller takes to satisfy the request. A caller who answers once has one turn. A caller who repeats, spells, or corrects has more. The turn count captures effort that seconds alone may miss. Report the distribution beside the time.

Code the caller's reaction as neutral, confused, or frustrated. Use the words and tone in the recording, not a guess about feelings. A caller who says "I already told you" is showing frustration. A caller who simply repeats the fact may be neutral. The [identity check guide](/blog/write-a-caller-identity-check-for-financial-intake-calls) offers wording that can reduce the repeat.

## Comparing calls with and without a transfer

Split the sample by transfer status. Compare the number of requests per call and the share that were preventable. A transfer is a common source of repeats because the receiving agent may not inherit the verification. The comparison shows whether the handoff is the main driver.

Also split by agent group and by system. A group with access to a shared verification screen may repeat less. A group that relies on a note may repeat more. These comparisons are descriptive, not causal, because the groups may differ in other ways.

Measure the outcome of the call after the last request. A caller who completes the request and continues is a different result from a caller who abandons. Report the abandonment count beside the repeat count. A short repeat with a high abandonment rate is still a serious problem.

## Analysis and limitations

The method cannot show that a repeat caused the caller to leave. The caller may have left for an unrelated reason. The association between repeats and abandonment is a signal for further review. State that limitation plainly.

The sample may overrepresent cooperative callers. A caller who refuses the first request may never reach a second one. Pair the sample with the total call volume and the refusal count. A low repeat rate may mean good design or it may mean early exits.

The reviewers may disagree about whether a request was preventable. The screen state at the time of the call may not be visible in the recording. Use the agent's note and the system log when available. Report how often the evidence was insufficient.

The policy may require a recheck for good reason. A repeat is not automatically a defect. The review should separate a necessary control from a clumsy handoff. That separation is the main value of the method.

## Repeating the review

Repeat the review after a workflow change with the same definitions and the same sample window. A change in either can move the result without a change in behavior. Record the policy version and the system version beside the numbers. The comparison should be reproducible.

Use the result to fix one handoff, such as adding a verified flag to the transfer screen. Test the change for two weeks and compare the preventable repeat rate. Keep the old process available in case the new one fails. Share the finding with the agents and ask which repeat they see most often.

The goal is a single, calm identity gate that follows the caller through the call. A shorter call is a useful outcome, but the caller's trust is the real measure. Count the repeats, fix the handoff, and check again. A clear handoff is the practical fix.

## Sources

- [U.S. Department of Health and Human Services, HIPAA minimum necessary requirement](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html)
- [National Institute of Standards and Technology, digital identity guidelines](https://www.nist.gov/itl/applied-cybersecurity/tig)
- [U.S. Government Accountability Office, GAO-20-283G: assessing data reliability](https://www.gao.gov/products/gao-20-283g)
- [International Organization for Standardization, ISO 18295-1 customer contact centres](https://www.iso.org/standard/64739.html)
