---
slug: measuring-the-gap-between-stated-urgency-and-assigned-priority
title: "Measuring the gap between stated urgency and assigned priority"
description: "A review method for comparing how callers describe urgency with the service priority a phone team assigns, and where the gap creates risk."
published: 2026-11-10
updated: 2026-11-10
category: "Call operations research"
image: /images/nov10/research/measuring-the-gap-between-stated-urgency-and-assigned-priority.webp
imageAlt: "Measuring the gap between stated urgency and assigned priority"
related: /research/urgent-queue-priority-override-audit, /blog/call-queue-priority-matrix
---

Callers use the word urgent for many different situations. A burst pipe and a billing question can both be described as urgent, and the person answering the phone has to decide what happens next. The assigned priority is a judgment, not a direct copy of the caller's words. This review describes a way to measure where that judgment diverges from the caller's stated need and whether the gap matters.

## Key takeaways

- Score stated urgency and assigned priority on separate scales.
- Use a fixed definition for emergency, same-day, and routine work.
- Review the gap by call type, not only as a team average.
- Treat an under-priority as a risk signal and an over-priority as a capacity signal.

## Research question and scope

This review asks how often the priority assigned by a phone team differs from the urgency described by the caller. The unit is one inbound service call with a stated reason and a final priority. The review measures the direction and size of the gap and links it to the next action taken. It does not assume that a higher priority is always the better answer.

The scope covers service, maintenance, and appointment calls handled by a receptionist or a small support team. It excludes sales calls and calls that were transferred before any priority was assigned. It also excludes calls where the caller refused to describe the issue. Fix the scope before sampling so the comparison is consistent.

The review does not measure whether the assigned priority was clinically or technically correct. That judgment belongs to the service owner. The review measures whether the process records and routes the caller's stated urgency in a way that can be reviewed. A correct outcome can still come from a lucky guess.

Record the call type, the queue, the shift, and the priority scale in use. A team that changed its scale during the period will produce a misleading result if the calls are pooled. Split the sample by scale version and state the version beside each rate. The reader should know which rule was in force.

## Definitions and unit of analysis

Define stated urgency as the caller's own description of how soon the issue needs attention. Use a small fixed set of categories, such as emergency, same day, next business day, and routine. The agent should record the caller's words before selecting the team priority. Keeping the two fields separate is the core of the method.

Define assigned priority as the category the team uses to route the work. The two fields may share labels, but they are not the same measurement. A caller may say "as soon as possible" while the team assigns a next-day slot because the issue is not dangerous. That is a gap, not necessarily an error.

The unit is the call, not the work order. A call that creates two work orders should be counted once with a note about both. A call that is escalated later should keep its original priority and record the change separately. This prevents a later escalation from erasing the original judgment.

Decide how to treat a caller who cannot state urgency. Some callers are unsure, and some are describing a problem for someone else. Use an "unknown" category rather than forcing a guess. Report the unknown share because it affects the denominator and may point to a script problem.

## Sampling and data dictionary

Draw the sample from calls in a fixed period that meet the scope. Include every eligible call or a random sample if volume is high, and record the export date, queue, and row count. Keep the export with the report so another reviewer can rebuild the sample. A sample of only escalated calls will overstate the under-priority rate.

For each call, capture the caller's stated urgency, the assigned priority, the reason, the next action, and the time to that action. Add the agent, the call type, and whether a supervisor changed the priority. These fields let the reviewer see whether the gap was corrected and how quickly. Record the caller's own words when the urgency is ambiguous.

Use a data dictionary with examples for each urgency category. "Emergency" should mean an immediate risk to safety or property, not merely an upset caller. "Same day" should mean the work must happen before the next business day. Clear examples reduce the chance that two reviewers apply different standards.

Mask or remove sensitive content that is not needed for the review. The issue description may be necessary for judging urgency, but the caller's full record usually is not. Store the sample in a restricted location and delete it on the agreed date. A priority review should not become a new privacy exposure.

## Measuring the gap

Report the share of calls where assigned priority matched stated urgency, the share where it was lower, and the share where it was higher. A single mismatch rate hides the direction, which is the part that matters for risk. Under-priority is a potential safety or service failure, while over-priority is a capacity problem. Report the two directions separately even when the overall mismatch rate is low.

Break the result down by call type and by agent. A single call type may account for most under-priorities because its urgency language is ambiguous. A single agent may be applying a stricter rule than the rest of the team. The breakdown should lead to a specific fix rather than a general reminder.

Compare the gap with the time to the next action. An under-priority that still received a fast response may be a labeling issue rather than a service failure. An over-priority that delayed a routine call may be a capacity issue. The timing gives the gap a practical meaning.

Review the calls where a supervisor changed the priority. These are cases where the first judgment was overridden, and they often reveal the boundary examples the team needs. Use them to update the definitions rather than to blame the original agent. A pattern of overrides is a sign that the scale is unclear.

## Analysis and limitations

The review cannot know whether the caller's stated urgency was accurate. A caller may exaggerate to get a faster response, or may understate a serious problem. The measure compares the record to the assignment, not the record to the underlying reality. State that limitation clearly.

The assigned priority may reflect information the caller did not state. An agent may see a service history or a safety note that changes the judgment. Record whether such context was available. A gap that looks like an error may be a reasonable use of additional information.

Reviewer judgment is another source of uncertainty. One reviewer may read "as soon as possible" as same-day, while another may read it as routine. Use the data dictionary and a short calibration session before scoring. Report disagreement on a small overlap sample so the reader can judge the method.

The sample may not include calls that were abandoned before a priority was assigned. Those calls may be the most urgent ones. Link the abandoned calls to the queue where possible and report them separately. A priority review that ignores abandoned calls misses an important part of the risk picture.

## Repeating the review

Repeat the review with the same categories, examples, and observation window. A change in the scale can move the gap without a change in behavior. Record the scale version and the sample dates beside the result. The next reviewer should be able to reproduce the comparison.

Use the result to update one part of the intake script, such as the question that asks how soon the caller needs help. Test the change on one queue before applying it everywhere. A small trial is easier to interpret than a site-wide change with many moving parts. The [call queue priority matrix](/blog/call-queue-priority-matrix) shows how the assigned categories can be written for agents.

Keep the boundary examples in the operations folder so new agents can apply the same standard. A measure that depends on one supervisor is fragile. The examples should be short enough to use during a call. They should also be reviewed when the service catalog changes.

Share the result with the agents and the service owners together. The agents know what callers say, and the owners know what the work requires. A conversation between the two groups is more useful than a report sent to one side. The goal is a shared definition of urgency that the team can apply under pressure. The [urgent queue priority override audit](/research/urgent-queue-priority-override-audit) is a useful next check when the gap clusters around overrides.

## Sources

- [U.S. Bureau of Labor Statistics, customer service representatives](https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm)
- [U.S. Small Business Administration, manage your business](https://www.sba.gov/business-guide/manage-your-business)
- [Ready.gov, business emergency plans](https://www.ready.gov/business/emergency-plans)

The gap between stated urgency and assigned priority is not automatically a failure. It becomes a problem when no one reviews it and the team cannot explain the difference. A simple measure with a clear direction and a short review can turn that gap into a useful conversation. The result is a priority process that is easier to trust and easier to improve.
