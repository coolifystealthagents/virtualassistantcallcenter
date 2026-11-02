---
slug: transfer-acceptance-timeout-recovery
title: "Testing transfer acceptance timeout recovery"
description: "A study design for measuring what happens to callers when a transfer is not accepted, including the fallback, the abandonment point, and the final owner."
published: 2026-11-02
updated: 2026-11-02
category: "Transfer Research"
image: /images/nov02/research/transfer-acceptance-timeout-recovery.webp
imageAlt: "Illustration for Testing transfer acceptance timeout recovery"
---

**Published November 2, 2026**

A study design for measuring what happens to callers when a transfer is not accepted, including the fallback, the abandonment point, and the final owner. The note below separates what the team can verify from what still needs an owner. It is written for a busy queue where the next shift may not have heard the call. Use it to review one routine case and one exception before changing the workflow.

## Question and scope

This study asks what happened after a call transfer was not accepted within the configured timeout. It measures the fallback path, the caller's outcome, and whether a named owner received the work. It does not evaluate the receiving team's workload or the caller's patience. A timeout is a system event; the study looks for the recovery path that followed it.

Set the scope to one transfer type or one destination queue. A clinical transfer, a sales transfer, and a technical support transfer may have different timeout rules and fallback owners. Record the timeout setting and any change during the window. If the timeout was adjusted, separate the periods so the result is not a blend of two rules.

## Population and unit

The unit is one transfer attempt from the sending agent to a named destination. If the same call makes two transfer attempts, count both but keep the call identifier so the sequence is visible. A transfer that is accepted on the first attempt is part of the comparison group, not the timeout population. Record the destination, the time, and the attempt number.

Define the timeout as the configured wait before the system or agent returns control. Do not infer a timeout from a long hold without checking the system event. If the telephony data does not expose the event, mark the timing as estimated and describe the source. A precise-looking number built from memory is worse than an honest estimate. Include calls where the caller hung up during the transfer, calls where the sender chose the fallback before the timeout, and calls where the system returned an error. Each outcome has a different recovery question. Exclude transfers that were cancelled by the caller before the destination was dialed, with a recorded reason.

## Outcome definitions

Use a short outcome list: accepted by the destination, timed out and returned to sender, timed out and routed to fallback, caller abandoned, system error, and unknown. For each outcome, record whether the caller received a callback promise, a new transfer, or a closing message. The outcome list should describe the caller's path, not only the internal system state. Separate the immediate fallback from the final resolution. A caller may be returned to the sender and then receive a callback later. The study should record both events with timestamps. Otherwise a timeout that eventually produced a callback looks like a failure, or a timeout with a polite message looks like a success when nobody followed up.

Record whether the fallback owner was named and available. A fallback to a shared queue with no current coverage is not equivalent to a fallback to a person. Use a field for ownership and a field for availability at the time of the transfer. These fields help explain why two destinations with the same timeout produce different outcomes.

## Data sources and fields

Collect the telephony event log, the agent notes, the callback queue, and the receiving queue's acceptance record. Link them with the call identifier and the transfer identifier. If the systems do not share an identifier, record the linkage method and the uncertainty. Do not match calls by time alone unless there is no better option and the limitation is stated.

Capture the destination, the transfer start, the timeout event, the fallback, the callback creation, the first attempt, and the final state. Add the caller's stated reason and the priority trigger in a coded form. Keep sensitive call content in the approved system and use a case key in the analysis table. Check the time zone and daylight saving transitions if the service crosses regions. A timeout that occurs during a clock change can appear negative or double-counted in a naive export. Use UTC or a single reference zone for the analysis and record the original time. The caller experience is local, but the measurement must be consistent.

## Sampling and collection

Export the transfer frame for a fixed window and freeze it. Sample calls rather than transfer events, then review every transfer attempt in the selected call. This keeps a single complex call from dominating the result. Stratify by destination and by staffing period if those factors differ.

Use a random or systematic start and record the rule. If the timeout population is small, review every timeout and a sample of accepted transfers for comparison. A study of only failures cannot show whether the timeout is unusual or whether the destination is generally hard to reach. Have a second reviewer check the outcome coding for a subset. Pay particular attention to the boundary between returned to sender and routed to fallback, and between caller abandoned and system error. If the telephony log is ambiguous, record the ambiguity rather than forcing a clean category.

## Analysis and reporting

Report the number of transfer attempts, accepted, timed out, abandoned, errored, and unknown. Show the share with a completed fallback and the share with a callback created. Report the time from timeout to fallback, and the time from fallback to first callback attempt. These are different clocks and should not be collapsed into one average.

Compare destinations only when the call mix and the timeout rule are similar. A destination that receives complex clinical calls may have a different acceptance pattern from a general sales queue. Inspect the cases behind a high timeout rate before proposing a staffing change. The result should identify where the recovery path breaks, not just which destination looks slow.

Include the caller abandonment point in the report. A timeout that returns the caller to a clear message but loses them before the fallback is different from one that connects to a callback queue. If the caller abandons after hearing the fallback, the message or the wait may need work. The report should separate the technical timeout from the human outcome.

## Limitations

The telephony log may not capture a transfer that was handled manually, a call that was returned on another line, or a conversation that continued after the system event. The study can undercount successful recoveries. State the unobserved paths and avoid treating the system log as a complete record of the caller's experience. The destination's workload is not fully visible in the transfer data. A queue may be unavailable because of a staffing gap, a system outage, or an unexpectedly complex call. The study should not attribute a timeout to a team's effort without a separate operational review. The purpose is to improve the recovery path, not to assign blame. Public privacy and telemarketing guidance informs record handling and contact practices, not a local benchmark for transfer acceptance. The result describes one service during one window. Comparisons across teams or seasons should use the same definitions and account for call mix, staffing, and system changes.

## Review and next action

Choose one recovery change: a clearer pre-transfer message, a different timeout, a named backup destination, a callback template, or a daily review of timeouts. Assign an owner and a start date. Decide whether the target is a higher fallback completion rate, a shorter time to fallback, or a lower abandonment rate; do not optimize all three at once without understanding the tradeoff. Repeat the study after the change with the same definitions and a comparable call mix. Compare the timeout outcomes and the fallback completion separately. If the timeout rate falls but abandonment rises, the new path may be faster but less clear. Report that honestly and adjust. Close the review when the owner accepts the result and the next check is scheduled.

## Sources

- [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
- [FCC: Telemarketing and robocalls](https://www.fcc.gov/general/telemarketing-and-robocalls)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [HHS: HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html)
- [CISA Zero Trust Maturity Model](https://www.cisa.gov/zero-trust-maturity-model)
