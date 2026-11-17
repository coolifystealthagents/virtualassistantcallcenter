---
slug: estimating-lunch-hour-coverage-gaps-from-call-arrival-records
title: "Estimating lunch-hour coverage gaps from call arrival records"
description: "A method for estimating lunch-hour coverage gaps by pairing call arrival records with the actual break schedule of a small phone team."
published: 2026-11-17
updated: 2026-11-17
category: "Call operations research"
image: /images/nov17/research/estimating-lunch-hour-coverage-gaps-from-call-arrival-records.webp
imageAlt: "Estimating lunch-hour coverage gaps from call arrival records"
related: /blog/build-a-lunch-hour-call-coverage-plan-for-a-two-person-office, /research/abandoned-call-rate-measurement
---

A small phone team can look fully staffed on a weekly schedule and still lose calls every day at noon. The schedule shows two agents, but one is at lunch and the other is finishing a call. Call arrival records can expose that gap if they are paired with the actual break times. This review describes a method for estimating lunch-hour coverage without a workforce management system.

## Key takeaways

- Pair call arrival timestamps with the actual break log, not the planned schedule.
- Measure the gap in minutes when no agent is available to answer.
- Separate calls that waited from calls that abandoned during the gap.
- Report the gap by day of week so a single bad day does not define the pattern.
- Compare the estimate with a manual observation before trusting it.

## Research question and scope

The review asks how many minutes of the lunch window have no available agent and how many calls arrive during those minutes. The unit is a minute of the lunch window, labeled as covered or uncovered. A covered minute has at least one agent available to answer an inbound call. The review does not measure the quality of the conversation or the outcome of each call.

The scope covers inbound calls to a small business phone line during a defined lunch window, such as eleven thirty to one thirty. It includes calls that were answered, queued, or abandoned. It excludes outbound calls and calls handled by an external answering service. If an external service covers part of the window, measure that coverage separately rather than counting it as uncovered.

Record the phone system, the number of agents, the break policy, and the actual break log. A planned schedule is not enough, because breaks often start late or run long. Note whether the team uses a shared queue or individual lines. A shared queue can show a gap that individual lines would hide.

Define the lunch window before looking at the data. A window chosen after seeing the busiest period will exaggerate the gap. Use the written break policy or a fixed two-hour window around midday. The same window should be used for every day in the comparison.

## Definitions and unit of analysis

Define availability as the state in which an agent is logged in, not on a break, and able to take a call. An agent who is on a call is busy, not unavailable, because the call may end within seconds. An agent who is in a meeting or away from the desk is unavailable. The distinction matters when the team has only two people.

Define an uncovered minute as a minute in the lunch window with no available agent. A minute with one busy agent and one available agent is covered. A minute with both agents on break is uncovered. Use the break log, the phone system login record, and the call record together to assign the state.

Define a coverage gap as a continuous run of uncovered minutes. A gap of two minutes may be normal, while a gap of fifteen minutes is a planning problem. Report the number of gaps and the length of each one. The longest gap is often more useful than the average.

Define a waiting call as an inbound call that entered the queue during a covered minute but was not answered within the stated threshold. A call that arrived during an uncovered minute is a different case, because no agent was present to answer. Code the two separately so the report does not blame agents for a scheduling gap. Add the waiting time for each queued call so the report can show how long the caller stayed before disconnecting.

## Sampling and data sources

Collect the call detail records for at least four weeks. Each record should include the arrival time, the queue entry time, the answer time, the disconnect time, and the final disposition. Export the data with the time zone stated. A daylight saving change in the period can shift an hour without any change in staffing.

Collect the actual break log for the same weeks. If the team does not keep a break log, use the phone system's away status or a shared calendar. A retrospective estimate from memory is weaker, and the report should say so. The break log is the key input that separates this method from a simple call-volume chart.

Collect the staffing roster for the same period. The roster shows who was scheduled, and the break log shows who was actually away. Comparing the two reveals whether the plan or the behavior caused the gap. A gap that appears on the plan needs a schedule change, while a gap that appears only in practice needs a handoff fix.

Mask caller identities before analysis. The method needs timestamps and dispositions, not phone numbers. Replace the calling number with a study identifier if the records must be linked across days. Store the export in a restricted folder and delete it on the agreed date.

## Measuring the gap

Build a minute-by-minute table for the lunch window. For each minute, record the number of available agents, the number of calls in progress, and the number of calls waiting. Mark the minute as covered or uncovered. A simple spreadsheet can handle four weeks of a two-hour window without special software.

Count the uncovered minutes and divide by the total minutes in the window. Report the result as a share and as an absolute number. A team that is uncovered for twenty of one hundred twenty minutes has a different problem from a team that is uncovered for two. The absolute number makes the operational cost visible.

Count the calls that arrived during uncovered minutes. Compare that count with the calls that arrived during covered minutes and waited beyond the threshold. The two measures answer different questions. The first shows exposure, and the second shows queue performance when someone is present.

Report the longest gap and the day it occurred. A single long gap may point to a missed break relief or a meeting that ran over. A recurring short gap may point to the schedule itself. The pattern, not the average, tells the team what to change.

## Analysis and limitations

The minute-level method assumes that the phone system records availability accurately. An agent who forgets to set an away status will appear available while standing in the kitchen. Check a small sample against the break log and the recordings. If the two disagree often, the estimate is not reliable.

The method also assumes that calls arriving in the same minute are equally urgent. A single urgent call during a gap may matter more than ten routine calls. The review does not weight urgency, because doing so would require a separate coding scheme. State that limitation and keep the urgency question for a different review.

A small sample can produce unstable estimates. Four weeks of a two-person team may contain only a few hundred calls, and one unusual day can move the share by several points. Report the count and the range rather than a single percentage. Avoid presenting a precise figure that the data cannot support.

The break log may be missing for some days. Do not fill the missing days with the planned schedule, because that would hide the behavior the review is trying to measure. Exclude the days and report how many were excluded. A smaller honest sample is better than a complete but invented one.

## Repeating the estimate

Repeat the estimate after any change to the break schedule or the queue. Use the same lunch window, the same definitions, and the same time zone. Record the roster version and the break policy version beside the result. A comparison without those labels is hard to interpret.

Use the estimate to choose one change, such as staggering the breaks by thirty minutes or naming a relief agent for the peak. Test the change for two weeks and compare the uncovered minutes with the baseline. Keep the [lunch coverage plan](/blog/build-a-lunch-hour-call-coverage-plan-for-a-two-person-office) beside the data so the team can see the rule behind the schedule. Record the change date and the people involved so the next estimate can separate the effect from a seasonal shift.

Share the minute chart with the agents. A visible gap is easier to fix than an abstract complaint about lunch. The chart also shows the days when the plan worked, which is useful for repeatability. The estimate should lead to a schedule that the team can keep, not a perfect chart.

## Sources

- [U.S. Department of Labor, Fact Sheet #22: hours worked under the Fair Labor Standards Act](https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked)
- [U.S. Bureau of Labor Statistics, customer service representatives](https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm)
- [U.S. Government Accountability Office, GAO-20-283G: assessing data reliability](https://www.gao.gov/products/gao-20-283g)
- [International Organization for Standardization, ISO 18295-1 customer contact centres](https://www.iso.org/standard/64739.html)
