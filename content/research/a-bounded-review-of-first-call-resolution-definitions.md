---
slug: a-bounded-review-of-first-call-resolution-definitions
title: "A bounded review of first call resolution definitions"
description: "First call resolution depends on how the team defines the call, the resolution, and the window, and the differences change the result."
published: 2026-11-04
updated: 2026-11-04
category: "Quality Research"
image: /images/nov04/research/a-bounded-review-of-first-call-resolution-definitions.webp
imageAlt: "Illustration for A bounded review of first call resolution definitions"
---

**Published November 4, 2026**

First call resolution is a common quality measure and a common source of disagreement. One team counts a call as resolved when the agent finishes the note, another counts it when the caller confirms the answer, and a third waits a week to see whether the caller returns. The same call can be resolved under one definition and unresolved under another. A review that does not state the definition is comparing habits rather than outcomes. This report sets out the choices and the limits.

## Question and scope

This review asks how different definitions of first call resolution change the measured result for the same queue. The unit is one inbound call that reached an agent. The observation window is the call plus a defined follow-up period, such as seven days. The review excludes calls that never reached an agent, because those calls cannot be resolved on the first contact.

The scope also excludes the quality of the answer. A call can be resolved in the sense that the caller does not return, and the answer can still be wrong. A separate review of accuracy is needed. This report focuses on the definition and the counting, not on whether the agent gave good advice.

## The three definition choices

The first choice is the event that counts as resolution. It can be the agent's disposition code, the caller's confirmation, or the absence of a repeat contact. Each event is observable in a different system and carries a different meaning. The disposition code is the easiest to collect and the most likely to reflect the agent's impression.

The second choice is the window. A call resolved at the end of the conversation may produce a repeat contact the next day. A seven-day window captures more repeats and makes the rate look lower. A thirty-day window captures even more and may include contacts that are unrelated to the original issue. The window should match the decision the measure is meant to support.

The third choice is the treatment of transfers. A call that transfers to another queue may be resolved in the first queue and unresolved for the caller. Counting it as resolved flatters the first queue and hides the caller's experience. Counting it as unresolved may penalize a queue that did its part. The rule should be stated and applied consistently.

| Definition choice | Common option | Effect on the rate |
| --- | --- | --- |
| Resolution event | Agent disposition | Higher and easier to collect |
| Resolution event | Caller confirmation | Lower and harder to collect |
| Resolution event | No repeat contact | Depends on the window |
| Window | Same day | Higher, misses next-day repeats |
| Window | Seven days | Lower, captures more repeats |
| Transfers | Count as resolved in first queue | Higher for the first queue |

## Build a comparison

Choose one queue and one period, and calculate the rate under each definition. Use the same call population for every version so the difference comes from the definition rather than the sample. Report the count and the rate for each version. A table is more useful than a single number because the reader can see the range.

Do not average the versions into one score. The average hides the choice and implies a precision that does not exist. Present the versions side by side and explain which one the team uses for which decision. A quality review may use the caller confirmation, while a staffing review may use the repeat contact.

## Read the gap between versions

A large gap between the disposition rate and the repeat contact rate suggests that agents believe they resolved calls that later came back. That gap is a useful finding. It may point to a script that closes too early, a knowledge gap, or a handoff that fails after the call. The gap is not proof of any one cause, and it is a good place to look.

A small gap suggests that the disposition and the caller behavior agree. That agreement is reassuring and does not prove accuracy. An agent can give a confident wrong answer and the caller may not discover the error within the window. Pair the resolution review with an accuracy sample.

A second reviewer can code the same sample and compare the results. A disagreement rate above a simple threshold points to a definition that needs tightening. Record the disagreements rather than resolving them silently. The exercise turns the definition into a shared standard rather than one analyst's habit, and the next review starts from a clearer rule. It also gives the team a way to explain the measure to a supervisor who was not part of the review.

## Sample the repeat contacts

Pull the repeat contacts for a sample of calls and read the reason. A caller who returns with the same question is a different case from a caller who returns with a new request. The first suggests a resolution failure, and the second may be a normal follow-up. Code the repeat reason before counting it against the first call.

Check whether the repeat contact reached the same agent or a different one. A different agent may indicate that the first agent was unavailable, not that the answer failed. The record should show the route and the reason. The coding is more useful than a raw repeat rate.

## Where the evidence stops

The measure cannot show that the caller was satisfied. A caller may not return because the answer was good, because the issue was too small to pursue, or because the caller gave up. The absence of a repeat contact is not proof of resolution. The measure describes behavior, not satisfaction.

The measure also cannot show that a low rate is a problem. A queue that handles complex issues may have a lower first call resolution rate and a higher quality of answer than a queue that closes calls quickly. The rate should be read with the call mix and the accuracy review. A single number cannot carry the whole judgment.

## A protocol for one queue

Choose a month and define the resolution event, the window, and the transfer rule. Export the calls and the repeat contacts, and reconcile them by caller identifier. Review the first twenty calls with the supervisor and code the repeat reasons. Freeze the definitions and log exceptions.

Report the rate under each definition, the repeat reason counts, and the accuracy sample result. Add a short note on the call mix and the staffing. Repeat the review after a script or routing change with the same definitions. The comparison is more useful than a single month.

## Limitations and next action

The sample is one queue and one month, and the results depend on the call mix and the systems. A small queue may have too few repeat contacts to support a rate, and a count is more honest than a percentage. The protocol should be repeated before it is used as a baseline. A single review is a description, not a benchmark.

The next action is to state the definition before changing the scorecard. A team that agrees on the event, the window, and the transfer rule can compare its own periods. The team can then test a script change and see whether the caller behavior moves. That is a more useful question than whether the rate is high.

## Sources

- [FCC Telemarketing and Robocalls](https://www.fcc.gov/general/telemarketing-and-robocalls)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [CISA Incident and Vulnerability Response](https://www.cisa.gov/resources-tools/resources/incident-and-vulnerability-response)
- [BLS Occupational Outlook Handbook](https://www.bls.gov/ooh/)
- [DOL Work Hours and Holidays](https://www.dol.gov/general/topic/workhours/holidays)
- [Census Bureau Quarterly Workforce Indicators](https://www.census.gov/programs-surveys/qwi.html)
- [Federal Reserve Economic Data](https://fred.stlouisfed.org/)
- [U.S. Small Business Administration](https://www.sba.gov/)
