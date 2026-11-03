---
slug: holiday-coverage-gap-arrival-analysis
title: "Estimating holiday coverage gaps from arrival data"
description: "A method for comparing holiday call arrivals with staffed coverage so the gap is visible before the schedule is final."
published: 2026-11-03
updated: 2026-11-03
category: "Workforce Research"
image: /images/nov03/research/holiday-coverage-gap-arrival-analysis.webp
imageAlt: "Illustration for Estimating holiday coverage gaps from arrival data"
---

**Published November 3, 2026**

A method for comparing holiday call arrivals with staffed coverage so the gap is visible before the schedule is final. The analysis is a planning aid, not a promise about the next holiday. Read it with the proposed roster and the historical arrivals open, and mark the hours where the assumptions are weakest. The review should end with one staffing or backup decision that has an owner.

## Question and scope

This analysis asks where holiday call arrivals are likely to exceed the staffed coverage in a proposed roster. It compares historical arrival patterns with the planned positions by hour, then identifies the intervals where the gap is largest. The analysis does not predict individual calls or prove that a particular roster will fail. It gives the scheduler a structured way to see risk before the holiday.

The scope should name the call types, channels, and hours covered. A holiday roster for urgent service calls is different from one for general inquiries. Include the day before and after the holiday if the team handles shifted demand. State whether the analysis covers inbound calls only or also callbacks and messages, because those create work that the live queue data may not show.

## Historical arrival data

Use at least three comparable holidays if the data exists, and label the years and dates. If the team has only one prior holiday, describe the result as a single case and avoid presenting it as a stable pattern. Clean the data for system outages, marketing campaigns, and one-off events that are not expected to repeat. Record every exclusion with a reason. A comparison year with a different service catalog belongs in a separate series rather than the same average.

Aggregate arrivals by hour and by call type, then calculate the median and the range across the comparison days. The range is more useful than a single average because holiday demand is often skewed. Keep the raw counts for the busiest hours so the scheduler can see the actual volume behind the percentage. A percentage without the base count can exaggerate a small change.

Check the time zone and the daylight-saving transition if the holiday falls near one. A one-hour shift can move an entire peak into the wrong staffing block. Record the time zone used for the analysis and the roster. If the team serves multiple time zones, produce a separate view for each rather than averaging them into one clock.

## Coverage model

Convert the proposed roster into staffed positions by hour, not just names on a schedule. Subtract breaks, meals, meetings, and planned training so the model reflects available time. If an agent splits time across queues, allocate a documented share to each queue. A roster that looks full on paper can have less than one effective position during a peak.

Calculate the work the team can handle in each interval using the average handling time for the relevant call mix. Include after-call work if it keeps the agent unavailable. Use a range for handling time rather than a single average, because a complex call can block the queue longer than expected. The model should show the sensitivity to that assumption.

Compare the offered load with the available capacity and mark the intervals where the ratio exceeds the team's planned threshold. Do not present the ratio as a forecast of wait time unless the team has validated that relationship. The purpose is to find risky intervals, not to promise a precise queue simulation. Show the threshold on the table so a reader can see how a small assumption change moves an interval across the line.

## Gap metric and reporting

Report the number of intervals in the holiday window, the number with a projected gap, and the largest gap in calls or minutes. Show the hour, the projected arrivals, the staffed capacity, and the difference. A table is usually clearer than a chart for a small number of intervals. Include the assumptions beside the table so the reader can challenge them.

Separate a volume gap from a skill gap. The team may have enough people but not enough people who can handle the urgent call type. A skill gap is often more serious on a holiday because the backup pool is smaller. Record the skill mix in the model and flag intervals where the required skill is not covered.

Show the effect of the proposed backup and overflow routes. If the roster includes a backup on call, model the interval when that person would be activated. If the overflow route goes to another queue, mark the capacity as borrowed rather than owned. The report should make clear which capacity is committed and which is contingent. A borrowed queue that is also busy on the holiday should not be counted as free capacity.

## Validation

Compare the model with the actual holiday after it occurs. Record the arrivals, the staffed positions, the overflow activations, and the abandonment. The comparison shows whether the assumptions were reasonable. A model that consistently overstates or understates capacity can be recalibrated with the evidence.

Ask the supervisors who worked the holiday whether the risky intervals matched their experience. Their observations can reveal a missing factor such as a system slowdown or a client event. Treat their input as a hypothesis to check, not as a replacement for the data. The best model combines the two. Record the factor they identify so the next analysis can include it explicitly.

Keep a short assumptions log with the date, the owner, and the source of each input. When the roster changes, the log shows which assumptions need review. A model without a log becomes a black box that nobody trusts after the first disagreement. Review the log at the start of the next holiday cycle so stale inputs do not carry forward by default.

## Limitations

Historical holiday demand may not repeat. Client hours, marketing, weather, and service changes can shift the pattern. The analysis should describe the range and the assumptions rather than a single expected value. A wide range is honest and still useful for planning.

The capacity model simplifies real queue behavior. It does not capture every transfer, system delay, or caller abandonment. The gap metric identifies risk, not a guaranteed wait time. If the team needs a precise forecast, it should validate a queue simulation against observed data before relying on it. A simple model that the scheduler understands is often more useful than a complex one that cannot be checked.

The analysis may miss work that arrives through messages, web forms, or callbacks. Those channels can consume the same staff during the holiday. Include them where the data exists and state the gap where it does not. A partial view is better than an unstated omission, as long as the reader knows what is missing.

## Decision and follow-up

Use the result to adjust the roster, the backup plan, or the overflow route. Record the change and the interval it addresses. If the team decides to accept a known gap, state the reason and the mitigation. An accepted risk with a named owner is different from an unnoticed gap.

After the holiday, compare the forecast with the actual result and update the assumptions. Keep the report with the roster so the next scheduler can see the reasoning. The goal is a repeatable planning method, not a perfect prediction. A clear method lets the team improve each holiday instead of starting over.

## Sources

- [DOL: Work hours and holidays](https://www.dol.gov/general/topic/workhours/holidays)
- [DOL: Wage and Hour Division](https://www.dol.gov/agencies/whd)
- [BLS: Occupational outlook handbook](https://www.bls.gov/ooh/)
- [OSHA: Emergency preparedness](https://www.osha.gov/emergency-preparedness)
- [CISA: Incident and vulnerability response](https://www.cisa.gov/resources-tools/resources/incident-and-vulnerability-response)
