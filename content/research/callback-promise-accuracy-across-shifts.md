---
slug: callback-promise-accuracy-across-shifts
title: "Measuring callback promise accuracy across shifts"
description: "A study protocol for comparing the callback window a caller was promised with the first documented attempt, without hiding censored or unreachable cases."
published: 2026-11-02
updated: 2026-11-02
category: "Callback Research"
image: /images/nov02/research/callback-promise-accuracy-across-shifts.webp
imageAlt: "Illustration for Measuring callback promise accuracy across shifts"
---

**Published November 2, 2026**

A study protocol for comparing the callback window a caller was promised with the first documented attempt, without hiding censored or unreachable cases. The note below separates what the team can verify from what still needs an owner. It is written for a busy queue where the next shift may not have heard the call. Use it to review one routine case and one exception before changing the workflow.

## Question and scope

This study asks how often a callback occurs inside the window the caller was promised, and whether the result differs across shifts. It measures the interval between a recorded promise and the first documented attempt. It does not measure whether the caller answered, whether the issue was resolved, or whether the agent was courteous. A call can happen on time and still fail the caller's need; the study keeps those questions separate.

Set the observation window and the call types in scope before collecting records. Include inbound calls that produced a callback promise and outbound promises created from a voicemail or web request if the same queue handles them. Exclude promises that were cancelled by the caller or replaced by a different channel, with a recorded reason. The exclusion count belongs in the report.

## Population and unit

The unit is one promise made to one caller during one interaction. A caller who receives two separate promises during the same call has two units only when they cover different requests. A promise that is rescheduled remains one unit with a change history. Record the case identifier, the promise time, the promised window, the owner, the shift, and the final state at the cutoff.

Decide how to treat a promise made for a future date, such as a callback requested for next week. It belongs in the population if the observation window reaches the promise date; otherwise mark it as out of window rather than counting it as a miss. A promise made after the cutoff should not be used to judge the earlier period. Include promises that were never assigned to a named owner. Those cases are part of the process failure, not a separate category to drop. If the queue only records a team name, mark the owner as unassigned and analyze that group separately. The count of unassigned promises is often the most actionable result.

## Promise definitions

Separate the requested time from the promised time. The requested time is what the caller asked for; the promised time is what the agent committed to. The study measures against the promised time, because that is the expectation the caller was given. Record both so the team can see whether the promise was realistic or whether the script systematically overpromises.

Define the first attempt as the first documented outreach after the promise, not the first successful conversation. If the agent called and reached voicemail, that is an attempt. If the agent sent an approved message instead of calling, record the channel and whether the promise allowed it. The definition must be fixed before the sample so a channel change does not look like a miss.

Define lateness in whole minutes or hours, not in vague labels. Record whether the attempt happened before the window, inside it, or after it. For a window that spans a shift change, record the time zone and the handoff time. A promise that crosses midnight is a different operational problem from one that stays inside a single shift.

## Data sources and fields

Collect the call record, the callback queue, the agent notes, and the shift roster. Join them with a stable case identifier. Do not rely on the caller's phone number alone, because a household may share a number and a caller may use several channels. If the systems cannot be linked, mark the record as unlinked rather than guessing the match.

Record the promise wording, the promised window, the owner, the shift, the first attempt, the attempt result, and the final state. Add the call type and the urgency signal because a queue may treat an urgent request differently. Preserve the original promise and any later change; do not overwrite the window with the actual callback time. Mask names, phone numbers, and sensitive call content in the analysis file. The study can use a case key and a category without exposing the caller's identity. Keep the raw records in the approved system and record who has access. A callback study does not need a copy of every recording.

## Sampling and collection

Export the promise frame at a fixed time and freeze it. The sample should include promises that are still open at the cutoff, not only closed callbacks. Otherwise the study will overstate accuracy because the late and unresolved cases have been removed from the denominator. Mark each open case as censored with the last observation time.

Stratify by shift, call type, and owner role if those groups have different workflows. Use a random or systematic start within each stratum and record the rule. If a stratum is too small to sample separately, report it as a case series rather than pretending the rate is stable. The point is to describe the process, not to produce a ranking.

Have a second reviewer check a subset of the promise windows and first attempts. Compare the classifications, especially the boundary between inside and outside the window. If the reviewers disagree because the promise wording was ambiguous, that ambiguity is a finding about the script. Clarify the coding rule before continuing.

## Analysis and reporting

Report the number of promises, the number attempted inside the window, the number attempted late, the number still open, and the number excluded. Show the share inside the window with the denominator and the observation window. Report the median delay for late callbacks and the longest delay, but do not use an average alone to describe a skewed distribution. Compare shifts only after checking the call mix, the urgency levels, and the staffing. A night shift may receive different requests, not worse agents. If the difference remains after the mix is considered, inspect the handoff and the queue ownership. The result should lead to a staffing or process question, not a public leaderboard.

Include the promises that were never assigned and those that were rescheduled. A high on-time rate among assigned promises can coexist with a large unassigned group. Show the unassigned share beside the main result. If the team wants a single headline, it should be the share of all promises that received an attempt inside the window, with the caveats.

## Limitations

The record may miss attempts made through a personal phone, a side channel, or a conversation that was never logged. A promise may look late because the agent did not document the first call. The study should report the documentation gap and avoid treating every missing timestamp as a service failure. The direction of the error is not always known.

A callback inside the window may still be a poor experience if the caller was not ready, the owner lacked the information, or the promised action was wrong. The timing measure is necessary but not sufficient. Pair it with a small qualitative review of caller complaints and a sample of resolved cases if the team needs to understand quality. The study describes one queue during one window. Call volumes, staffing, holidays, and the definition of a promise can change. A comparison across months should use the same fields and a comparable window. Public telemarketing and privacy guidance informs the handling of contact records, not a local benchmark for callback accuracy.

## Review and next action

Choose one change based on the result: a clearer promise script, a shorter default window, a named backup owner, or a shift-change review of open promises. Record the owner and the start date. Decide which measure should improve and which guardrail should remain stable, such as the share of calls that receive a callback at all. Repeat the study after the change with the same definitions and a comparable volume. Compare the on-time share, the late share, and the unassigned share. If the change moved the promise but increased abandoned callbacks, report the tradeoff. Close the review when the owner accepts the result and the next sample is scheduled.

## Sources

- [FCC: Telemarketing and robocalls](https://www.fcc.gov/general/telemarketing-and-robocalls)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
- [CISA Zero Trust Maturity Model](https://www.cisa.gov/zero-trust-maturity-model)
