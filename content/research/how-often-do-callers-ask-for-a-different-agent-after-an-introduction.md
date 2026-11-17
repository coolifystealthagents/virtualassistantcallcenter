---
slug: how-often-do-callers-ask-for-a-different-agent-after-an-introduction
title: "How often do callers ask for a different agent after an introduction?"
description: "A measurement approach for tracking agent-change requests, the reasons behind them, and whether the handoff actually resolves the caller's issue."
published: 2026-11-16
updated: 2026-11-16
category: "Call operations research"
image: /images/nov16/research/how-often-do-callers-ask-for-a-different-agent-after-an-introduction.webp
imageAlt: "How often do callers ask for a different agent after an introduction"
related: /blog/set-a-rule-for-a-caller-who-asks-for-a-different-agent, /research/call-handoff-context-loss-analysis
---

A request for a different agent can reveal a training gap, a routing problem, or a customer who simply prefers a familiar voice. The request is easy to notice and hard to interpret without a consistent record. This review describes a small measurement method for tracking those requests and their outcomes. It treats the request as a handoff event, not as a verdict on the first agent.

## Key takeaways

- Count requests per hundred calls, not per agent, before comparing performance.
- Record whether the request is about the person, the answer, or the channel.
- Track whether the caller reached the requested destination and whether the issue closed.
- Review the pattern by queue and topic before coaching an individual.
- Keep the measure descriptive and separate it from disciplinary decisions.

## Research question and scope

This review asks how often callers ask for a different agent after the opening introduction, why they ask, and whether the handoff resolves the issue. The unit is one request event linked to the original call and the receiving agent. The review does not attempt to rate agent likeability. It tests whether the request record is specific enough to support a routing or training change.

The scope covers inbound calls handled by a small phone team where the caller speaks with a live agent. It excludes transfers that are part of a normal service path, such as a billing queue or an interpreter handoff. Those transfers are designed, not requested. Keep the two categories separate so the baseline is meaningful.

The review does not decide whether the caller was right to ask. A request can be reasonable even when the first agent followed the script. The review measures the frequency and the outcome, not the fairness. That distinction keeps the review from becoming a blame exercise.

Record the queue, the shift, the team size, and the routing rules in force. A team that changed its transfer policy during the period will produce a misleading result if the events are pooled. Split the sample by policy version and report the versions separately. The reader should know which rule produced which pattern.

## Definitions and unit of analysis

Define an agent-change request as a caller's explicit request to speak with someone other than the current agent before the issue is resolved. A caller who asks for a supervisor is a related but different event, because the supervisor may review the same answer rather than replace the agent. Code the two separately. The distinction keeps a policy question from looking like a personal rejection.

Define a completed handoff as one where the caller reaches a live person or an approved callback owner. A transfer to a general voicemail is not a completed handoff unless the voicemail belongs to a named owner with a response promise. Record the destination and the wait. A transfer that ends in silence is a failed route.

The unit is the request, not the call. One call may contain two requests if the caller asks for a different agent and then asks for a manager. Each event has its own reason and outcome. Counting the call once can hide the second request.

Decide how to treat a request made after the call ends, such as a callback asking for another agent. Include it if it is linked to the same issue and occurs within the observation window. Record the channel separately so phone and written requests are not mixed. State the window before collection so the boundary does not move later.

## Sampling and data dictionary

Draw the sample from the call records for a fixed period. Include every request event that meets the scope, or a random sample if the volume is large. Record the export date, the queue, and the row count. Keep the export with the report so another reviewer can rebuild the sample.

For each event, capture the call date, the queue, the agent, the caller's stated reason, the requested destination, the wait, and the final outcome. Add whether the issue was resolved on the same call and whether the caller called back within the observation window. These fields let the reviewer see both the request and the result. Leave a free-text note for anything the codes cannot capture.

Use plain reason codes. "Preference for a named person" means the caller asked for a specific staff member. "Dissatisfied with the answer" means the caller rejected the policy or information. "Communication difficulty" means the caller could not understand the agent or the line. "Personal conflict" means the caller named a behavior or relationship issue. Clear codes make the pattern readable.

Mask or remove sensitive content that is not needed for the review. The request reason and the outcome are usually enough. Do not include full account details or unrelated call history. Store the sample in a restricted location and delete it on the agreed date.

## Measuring request frequency

Report the number of requests per hundred calls and the number per queue. A raw count favors the busiest queue, so the rate is the fairer comparison. Show both the count and the denominator. A queue with two requests out of twenty calls is different from two out of two hundred.

Report the share of requests by reason code. A high share of "preference for a named person" suggests a relationship-routing issue. A high share of "dissatisfied with the answer" suggests a script or policy clarity issue. A high share of "communication difficulty" suggests a language, audio, or training issue. Each pattern points to a different fix.

Report the wait time and the completion rate for each destination. A request that is honored quickly is a different event from one that ends in voicemail. The caller's experience depends on the handoff, not only on the request. Show the median wait and the share of completed handoffs.

Compare the request rate with the later callback rate. A caller who asks for another agent and then calls back may not have received a resolution. A caller who asks and does not call back may have been satisfied or may have given up. The callback is a signal, not proof. Pair it with the final disposition.

## Analysis and limitations

The review cannot know whether the caller would have stayed with the first agent if the request had been refused. The request changes the call, so there is no clean comparison. The measure describes the event and the outcome, not a counterfactual. State that limitation rather than presenting the request as pure agent failure.

The reason code is self-reported and may be incomplete. A caller may say "I want someone else" without explaining why. The agent may infer a reason that is not accurate. Use a short note and avoid guessing. Report the share of requests with no stated reason instead of forcing a code.

The sample may exclude requests made to an automated system or a self-service menu. Those events may never reach a live agent. The review covers live-agent requests only. Report the scope clearly so the reader does not generalize to all callers.

The policy may change during the period. A new transfer rule can make the request rate rise or fall without a change in caller behavior. Record the policy version and the training date. Compare only periods with the same rule, or report the change as a separate finding.

## Repeating the review

Repeat the review with the same scope, definitions, and reason codes. A change in any of these can move the result without a change in behavior. Record the policy version and the sample dates beside the numbers. The next reviewer should be able to reproduce the comparison.

Use the result to change one thing, such as a clearer opening, a named-owner route, or a language-matching rule. Test the change on one queue before applying it everywhere. A small trial is easier to interpret than a site-wide change. The [agent-change rule](/blog/set-a-rule-for-a-caller-who-asks-for-a-different-agent) is the operational companion to this measurement.

Share the result with the agents and the supervisor who own the queue. Ask which requests are easy to honor and which ones create a dead end. The people closest to the phones often know where the directory is stale or the queue is closed. Their context can turn a number into a practical fix. The [handoff context loss analysis](/research/call-handoff-context-loss-analysis) covers the related problem of what disappears during a transfer.

Keep the request log visible during the shift. A supervisor who can see the current destination and wait is more likely to close a stuck handoff. A log that is reviewed only at month end is easy to forget. The record should support the work, not just the report.

## Sources

- [U.S. Bureau of Labor Statistics, customer service representatives](https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm)
- [U.S. Small Business Administration, manage your business](https://www.sba.gov/business-guide/manage-your-business)
- [U.S. Department of Justice, ADA information and technical assistance](https://www.ada.gov/)
