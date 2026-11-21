---
slug: measuring-the-gap-between-first-ring-and-agent-greeting-on-a-small-business-line
title: "Measuring the gap between first ring and agent greeting on a small business line"
description: "A method for measuring answer delay, covering timestamps, sample design, distribution, queue differences, and a fair service target."
published: 2026-11-21
updated: 2026-11-21
category: "Call operations research"
image: /images/nov21/research/measuring-the-gap-between-first-ring-and-agent-greeting-on-a-small-business-line.webp
imageAlt: "Measuring the gap between first ring and agent greeting on a small business line"
related: /research/after-hours-acknowledgment-delay-study, /blog/build-a-caller-wait-time-message-script-for-a-service-queue
---

The time between the first ring and a human greeting is one of the first signals a caller receives. A short gap suggests the business is ready, while a long gap suggests a queue or a neglected line. Measuring the gap is simple in principle and easy to do badly. The method has to use system timestamps, include the right calls, and report a distribution rather than one flattering average.

## Key takeaways

- Measure from the first ring to the first human word.
- Use system timestamps and verify a sample by ear.
- Separate queue time from ring time.
- Report the median and the slow tail, not only the mean.
- Set the target by call type and re-measure after changes.

## Define the interval

Start the clock at the first ring the caller hears. End it at the first human word, not at the end of the greeting. A long recorded message before a person is part of the wait. The caller experiences the whole interval, so the measure should too.

Decide how to treat automated attendants. If the caller must press a menu option, the menu time is part of the path. Record it as a separate segment so the report can show where the delay occurs. Do not hide the menu inside a single number.

Exclude calls that never reach a person. Those need their own abandonment measure. Mixing them into the greeting average would make the line look faster than it is. Keep the two measures side by side.

## Choose a fair sample

Draw calls from a fixed period and a fixed set of lines. Include the main line, the after-hours line, and any line that forwards to a mobile phone. A forwarded line often has a different delay. State the filter and the export date.

Include calls from every shift and every day of the week. A sample from one quiet morning will flatter the line. A sample that includes the Monday rush will show the real experience. If the volume is low, extend the window.

Record the call type for each call. A sales call and an emergency service call may have different targets. A single target for both can hide a problem in the more urgent queue. The [after-hours acknowledgment study](/research/after-hours-acknowledgment-delay-study) shows how to handle a low-volume period.

## Measure with system timestamps

Use the phone system's ring and answer timestamps where available. If the system records only the answer time, use the call recording and mark the first ring by ear. Verify a small sample against the system to check the offset. Write the method down.

Watch for clock differences between systems. A recorder and a phone platform may disagree by several seconds. Compare a few calls before measuring the full sample. A consistent offset can be corrected, while a random one cannot.

Check whether the greeting starts with a recorded message. If so, mark the end of the recording and the start of the human voice separately. The gap between them is often the most useful number. The [response time measure](/research/virtualassistantcallcenter-measuring-response-time-for-call-disposition) offers a related timestamp method.

## Break the result down by queue

Report the median and the 90th percentile for each queue. The median shows the typical caller, while the 90th percentile shows the slow tail. A good median can hide a tail that damages trust. Both numbers belong in the report.

Compare the queue time with the ring time. A line may ring quickly and then wait in a queue, or ring for a long time before an answer. The split shows whether the fix belongs to staffing, forwarding, or the phone system. That split also prevents a staffing fix from being applied to a forwarding problem.

Look at the longest calls separately. A handful of very slow answers may come from a single forwarded mobile or a shift change. Read those calls before concluding that the whole line is slow. The pattern is more useful than the outlier.

## Report the distribution, not one average

Show a simple histogram of the gaps. A chart makes the shape visible in a way an average cannot. Mark the median and the target on the chart. The reader can then see how much of the volume falls outside the target.

State the share of calls answered within the target. This is easier for a team to act on than a mean. Pair it with the longest gap in the sample. The two numbers describe both the typical and the worst experience.

Explain what the measure excludes. It may exclude abandoned calls, transfers, and calls that reach voicemail. Naming the exclusions keeps the report honest. The [wait message script](/blog/build-a-caller-wait-time-message-script-for-a-service-queue) can help manage the calls that do wait.

## Set a target and re-measure

Choose a target that fits the call type. An emergency line needs a faster answer than a general inquiry. Write the target beside the queue, not in a generic policy. A specific target is easier to review.

Test one change at a time. A new forwarding rule, an extra agent at the peak hour, or a shorter menu can each affect the gap. Measure the same sample design after the change. Keep the version that improves the slow tail without hurting the median.

Share the result with the people who answer the line. A shared chart is more persuasive than a private score. Then check the target again after a month. The goal is a reliable answer, not a perfect number.

## Sources

- [Federal Communications Commission, phone service quality complaints](https://www.fcc.gov/consumers/guides/phone-service-quality)
- [International Organization for Standardization, ISO 18295-1 customer contact centres](https://www.iso.org/standard/64739.html)
- [U.S. Government Accountability Office, GAO-20-283G: assessing data reliability](https://www.gao.gov/products/gao-20-283g)
- [U.S. Small Business Administration, manage your business](https://www.sba.gov/business-guide/manage-your-business)
