---
slug: estimating-the-cost-of-repeat-calls-caused-by-unclear-voicemail-greetings
title: "Estimating the cost of repeat calls caused by unclear voicemail greetings"
description: "A method for estimating repeat-call cost from unclear voicemail greetings, covering attribution, wage inputs, assumptions, and limits."
published: 2026-11-20
updated: 2026-11-20
category: "Call operations research"
image: /images/nov20/research/estimating-the-cost-of-repeat-calls-caused-by-unclear-voicemail-greetings.webp
imageAlt: "Estimating the cost of repeat calls caused by unclear voicemail greetings"
related: /research/voicemail-greeting-version-drift-study, /blog/build-a-voicemail-to-ticket-workflow-for-after-hours-calls
---

An unclear voicemail greeting produces a second call, and that second call has a cost. The cost is not the greeting itself, which is nearly free to change. It is the staff time spent answering questions the greeting should have prevented. A careful estimate separates that cost from the many other reasons a caller dials again.

## Key takeaways

- Attribute a repeat call to the greeting only when the caller says so.
- Count the full handling time of the repeat contact.
- Use a documented wage figure and state the burden rate.
- Keep savings as a range, not a single number.
- Test a clearer greeting and measure the change.

## Define the repeat call

Start with a definition of a repeat call. The caller must have heard the greeting and called back within a set window. The window should match the business's normal response time. A call the next day may have a different cause than a call ten minutes later.

Separate a repeat call from a callback. A callback happens when the business returns the caller's message. A repeat call happens when the caller dials again on their own. The two have different costs and different owners. Mixing them inflates the estimate.

Require a reason from the caller or the note. A caller who says "the message did not say when you open" has given a direct link. A caller who gives no reason should be coded as unknown, not assumed. The [voicemail greeting drift study](/research/voicemail-greeting-version-drift-study) shows how greetings change without review.

## Count the full handling time

Measure the time from answer to close for each repeat call. Include the greeting, the explanation, and the actual request. The repeat call often takes longer because the caller is already frustrated. A short call is not the same as a cheap one.

Add the time spent before the call, such as reading the greeting and deciding to hang up. That time belongs to the caller, not the business, so keep it separate. Report it as a caller burden rather than a staff cost. The distinction keeps the estimate honest.

Include the notes and follow-up the repeat call creates. A call that generates a ticket has a cost beyond the conversation. Use the team's own average for that step. The [callback cost method](/research/estimating-the-cost-of-repeat-calls-with-public-wage-data) offers a comparable approach.

## Choose the wage inputs

Use a documented wage figure for the staff who answer the calls. A public occupational estimate is a reasonable starting point. Add the employer's burden for taxes and benefits, and state the rate you used. Do not use a round number without a source.

Apply the same rate to every role only if the roles are similar. A supervisor who handles escalations costs more than a first-line agent. Split the time by role when the data allows. The estimate should reflect who actually did the work.

Show the calculation in the report. A reader should be able to replace the wage and rerun the number. That transparency is more useful than a precise-looking total. The [wage data guidance](https://www.bls.gov/oes/) explains the source of the figures.

## Attribute with care

Attribute a repeat call to the greeting only with evidence. The caller's own reason is the strongest evidence. A note that says the caller "seemed confused" is weaker. Use a tiered code so the reader can see how much of the total rests on strong links.

Exclude repeat calls with an obvious other cause. A caller who dialed again because a delivery was late is not a greeting problem. A caller who wanted a different department is a routing problem. Keep those in a separate bucket.

Report the attributed share as a range. Use a low estimate that counts only direct statements and a high estimate that includes probable cases. The gap between them is the uncertainty. The [data reliability guidance](https://www.gao.gov/products/gao-20-283g) supports this approach.

## Present the estimate

Show the number of repeat calls, the attributed share, the average handling time, and the wage rate. Multiply only after the inputs are visible. Present the result as staff hours first and currency second. Hours are easier to check and harder to inflate.

Compare the estimate to the cost of the fix. Rewriting a greeting is a small, one-time task. If the annual cost of repeat calls exceeds that task, the fix is easy to justify. If it does not, the estimate has still clarified the priority.

Do not present the estimate as a saving until the change is made. The number is a potential, not a result. Label it as an estimate and date it. The reader should know what was measured and what was assumed.

## Test the change

Rewrite the greeting to answer the most common questions. Include the hours, the service area, and the fastest way to leave a message. Keep it short enough to listen to. Record the version and the date it went live.

Measure repeat calls again with the same definitions and window. Compare the attributed share and the handling hours. A drop in both is stronger evidence than a drop in one. The [voicemail to ticket workflow](/blog/build-a-voicemail-to-ticket-workflow-for-after-hours-calls) shows how the greeting fits the wider process.

Keep the estimate conservative when you report the result. A modest, well-supported saving is more credible than a large, fragile one. Share the method with the team that owns the phone line. A repeatable estimate is more useful than a one-time slide.

## Sources

- [U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics](https://www.bls.gov/oes/)
- [U.S. Government Accountability Office, GAO-20-283G: assessing data reliability](https://www.gao.gov/products/gao-20-283g)
- [Federal Communications Commission, consumer phone guidance](https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts)
- [U.S. Small Business Administration, manage your business](https://www.sba.gov/business-guide/manage-your-business)
