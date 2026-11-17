---
slug: a-method-for-linking-repeat-questions-to-script-gaps
title: "A method for linking repeat questions to script gaps"
description: "An audit method that connects a caller's repeated question to a specific line in the call script, so the fix targets the script instead of the agent."
published: 2026-11-17
updated: 2026-11-17
category: "Call operations research"
image: /images/nov17/research/a-method-for-linking-repeat-questions-to-script-gaps.webp
imageAlt: "A method for linking repeat questions to script gaps"
related: /blog/set-a-rule-for-a-caller-who-repeats-the-same-question-on-every-callback, /research/customer-call-record-integrity
---

A repeat question can look like a caller problem when it is really a script problem. The agent answers, the caller asks again, and the note records the call as resolved. A few days later the same question arrives with a different agent. This review describes a method for linking the repeated question to the line in the script that failed to answer it.

## Key takeaways

- Capture the caller's question in their own words before coding it.
- Link each repeat to the script line the agent used, not just to the topic.
- Separate a missing answer from an answer the caller did not trust.
- Use a small sample of recorded calls to validate the coding.
- Change one script line and measure the repeat rate again.

## Research question and scope

The review asks which script lines are followed by a repeat question and whether the repeat points to a missing fact, an unclear phrase, or a delivery failure. The unit is a caller question that appears at least twice across linked calls. The review links the question to the script line, the agent, the answer given, and the next call. It does not judge whether the policy behind the answer is fair.

The scope covers inbound calls handled by a small phone team during business hours. It includes calls linked by a case number, a phone number, or a name plus a date. It excludes calls about different orders or different service periods, because those are new questions rather than repeats. It also excludes calls where no answer was given at all.

Record the script version, the case system, and the phone queue. A script change in the middle of the period can alter the repeat pattern without changing caller behavior. Split the sample by script version and report each version separately. The reader should know which wording produced the result.

Define the observation window before collecting data. A question that repeats after thirty days may reflect a new event rather than a failed answer. A window of seven to fourteen days is often enough for a service follow-up. Use the same window for every case in the comparison.

## Definitions and unit of analysis

Define a repeat question as a question with the same subject and the same missing fact as an earlier question from the same caller or case. A question about an arrival date and a question about a shipping date share a subject but ask for different facts, so they are not automatically a repeat. The coder should compare the underlying fact, not only the wording. Write the fact in a short phrase beside each question so a second reviewer can check the match.

Define a script gap as the absence of a clear answer at the point where the caller asks. A gap may be a missing policy, a vague phrase, a contradiction between two sections, or an answer the agent cannot access. The gap is a property of the script and the available information, not of the agent's effort. Code the gap type so the fix can target the right cause.

The unit is the question event, not the call. One call may contain two repeat questions about different facts. Counting the call once would hide the second gap. Linking each question to its own script line makes the pattern visible.

Define a linked call as a later call from the same case within the observation window. A call from a different person at the same company may still be linked if the case record connects them. State the linkage rule and apply it consistently. Weak linkage produces false repeats and misleading results.

## Sampling and coding

Start with cases that have two or more inbound calls in the window. Select a random sample if the volume is large, or include every case if it is small. Keep the export date, the case filter, and the row count with the report. A sample built from complaints alone will overstate the problem.

For each question event, capture the caller's wording, the script section the agent used, the answer given, the caller's response, and the time to the next call. Add whether the caller asked a follow-up in the same call. Leave a free-text field for tone and context that the codes cannot capture. Record the script version in every row so the analysis can separate calls taken before and after a revision.

Use a coding sheet with plain categories. "Missing fact" means the script does not contain the answer. "Unclear phrase" means the answer exists but the caller misread it. "Access gap" means the agent could not see the fact in the system. "Trust gap" means the caller heard the answer but did not believe it. These categories point to different fixes.

Validate the coding with a second reviewer on a small overlap sample. Discuss disagreements before scoring the full sample. A short calibration session improves consistency and reveals categories that are too broad. Report the disagreement rate beside the result.

## Measuring repeat questions

Report the number of question events and the share that repeated within the window. Show the count beside the share, because a small sample can produce a large percentage. Group the repeats by script section and by gap type. The grouping is more useful than a single overall rate.

Compare the repeat rate for calls that used the script with calls that did not. A lower rate without the script may mean the script is the problem, or it may mean the agents who skip it are more experienced. Check the agent mix before drawing a conclusion. The comparison is a clue, not proof.

Measure the time between the first answer and the repeat. A repeat within an hour suggests the caller did not understand or trust the answer. A repeat after several days may reflect a new event or a missed follow-up. Report the distribution rather than only the average.

Measure the outcome of the repeat call. A repeat that ends with the same answer is a stronger signal than a repeat that produces a new fact. The first suggests a communication gap, while the second suggests a record gap. Code the outcome so the report can distinguish them.

## Analysis and limitations

The method cannot prove that a script line caused the repeat. A caller may forget an answer, misunderstand a policy, or call again for an unrelated reason. The link between the question and the script line is an association, not a causal finding. State that limitation in the report.

The sample may overrepresent callers who call back. A caller who gives up after the first answer never appears in the repeat data. Pair the sample with the total case volume to see what share of cases is represented. A low repeat rate may mean good answers or silent abandonment.

The script itself may change during the period. A line that was unclear in week one may be revised in week three. Record the version and exclude or separate the revised calls. Pooling versions can hide the effect of a fix.

The coder's interpretation of the caller's wording may vary. Use the recording when the note is ambiguous, and report how often the note alone was insufficient. A high rate of ambiguity suggests the note template needs a field for the caller's exact question. That finding is itself useful.

## Repeating the review

Repeat the review after a script change with the same window and the same coding categories. A change in either can move the result without a change in behavior. Record the script version and the sample dates beside the numbers. The comparison should be reproducible.

Use the result to change one script line, such as adding a specific date or removing a phrase the caller misreads. Test the change for two weeks and compare the repeat rate with the baseline. Keep the old wording available in case the new line performs worse. The [repeat question rule](/blog/set-a-rule-for-a-caller-who-repeats-the-same-question-on-every-callback) shows how agents should handle the calls while the script is being revised.

Share the findings with the agents and ask which answers they repeat most often. Their experience can explain a gap that the coding sheet records as a category. The review should end with a better sentence, not a longer report. That sentence is the unit of improvement.

## Sources

- [Agency for Healthcare Research and Quality, Health Literacy Universal Precautions Toolkit](https://www.ahrq.gov/health-literacy/improve/precautions/index.html)
- [U.S. Government Accountability Office, GAO-20-283G: assessing data reliability](https://www.gao.gov/products/gao-20-283g)
- [U.S. Bureau of Labor Statistics, customer service representatives](https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm)
- [U.S. Small Business Administration, manage your business](https://www.sba.gov/business-guide/manage-your-business)
