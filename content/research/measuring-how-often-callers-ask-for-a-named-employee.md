---
slug: measuring-how-often-callers-ask-for-a-named-employee
title: "Measuring how often callers ask for a named employee"
description: "A method for measuring named-employee requests, covering routing outcomes, relationship codes, wait time, and repeat calls."
published: 2026-11-19
updated: 2026-11-19
category: "Call operations research"
image: /images/nov19/research/measuring-how-often-callers-ask-for-a-named-employee.webp
imageAlt: "Measuring how often callers ask for a named employee"
related: /blog/write-a-call-script-for-a-caller-who-asks-for-a-named-employee, /research/measuring-first-call-resolution-for-a-virtual-receptionist
---

A named-employee request is a routing event with a relationship behind it. The caller may be a repeat customer, a vendor, or someone who was told to ask for that person. The request can be measured as a share of calls, but the more useful questions are about outcomes. Did the caller reach the person, get a message through, or give up?

## Key takeaways

- Count the request at the point the caller names a person.
- Code the relationship separately from the reason for calling.
- Measure whether the named person was reached or briefed.
- Track repeat calls after a named request.
- Report availability rules alongside the request rate.

## Research question and scope

The question is how often callers ask for a named employee and what happens after the request. The unit is the call that contains at least one named request. A call with two names is still one call, but the second name is noted. The coding should not double-count the same conversation.

The scope covers inbound calls to a general queue. It includes requests for owners, managers, technicians, and front-desk staff. It excludes calls that arrive on a direct line assigned to one person. A direct line changes the meaning of the request.

Record the queue, the business hours, and the routing rules. A small office may have no formal directory. A larger office may have a searchable list. The rules shape how often callers ask and how often they are satisfied.

## Definitions and coding

Define a named request as an explicit mention of a person the caller wants to reach. A role such as "the manager" is not a name. A nickname counts if the agent can identify the person. Record whether the name matched a current employee.

Define the relationship as the caller's stated connection to the person. Common codes include customer, vendor, applicant, family, and unknown. The relationship helps explain the route. It also shows whether the request is part of normal business.

Define a reached request as one where the named person spoke with the caller during the same call. Define a briefed request as one where the person received a message with the reason and the deadline. A message left in a general inbox is not a briefed request. The [named-employee script](/blog/write-a-call-script-for-a-caller-who-asks-for-a-named-employee) gives the operational detail.

## Sampling and sources

Select calls from a fixed period and a fixed queue. Include every call if the volume is small. Use a random sample if the volume is large. Keep the export filter and date in the report.

Use the call note as the primary source. Use the phone system log to confirm the transfer or the message. A note can claim a transfer that never happened. The log is a useful cross-check, and the [data reliability guidance](https://www.gao.gov/products/gao-20-283g) supports that kind of verification.

Do not record the employee's personal contact details in the audit file. Use the employee identifier and the queue. The study needs the routing outcome, not the private number. This keeps the measurement inside the office's normal access rules.

## Measures and reporting

Report the number of calls with a named request and the share of all calls. Show the count beside the share. A rate from a small sample can look dramatic without being stable. Group the results by week and by queue where possible.

Report the outcome for each request: reached, briefed, message only, or unresolved. The four categories are more informative than a single success rate. They show where the process breaks. A high message-only rate may mean the schedule is the problem.

Report the time from request to response when a message is used. A same-day response is different from a three-day response. Show the distribution rather than only the average. The [first-call resolution study](/research/measuring-first-call-resolution-for-a-virtual-receptionist) offers a related outcome lens.

## Repeat calls and outcomes

Track whether the caller calls back within a short window. A repeat call after a named request may mean the message did not arrive. It may also mean the caller needed a different answer. Read the second call before assigning blame.

Compare repeat rates for reached, briefed, and message-only requests. A clear gap suggests that the handoff matters. It does not prove causation, but it points to a test. Try a scheduled callback for the message-only group and measure again.

Record whether the named person considered the request resolved. The employee's view is a useful second signal. It may differ from the caller's view, and that difference is worth studying. The [callback completion study](/research/measuring-callback-completion-rates-for-missed-calls) shows how to track a similar promise.

## Limitations

The study cannot show why the caller chose a name. The caller may trust that person or may not know any other route. Treat the relationship code as context, not as a motive. A larger sample may reveal patterns that a small one cannot.

The note may be incomplete. An agent may skip the relationship question when the queue is busy. A missing code is not the same as an unknown relationship. Report the missing share and keep it out of the denominator for relationship analysis.

The office may change its directory during the period. A person may leave or change roles. Record the directory version and the dates. A name that no longer matches is a data quality issue, not a caller error.

## Repeating the study

Repeat the study after a routing change with the same definitions. A new directory or a new transfer rule can shift the result. Keep the sample window and the queue constant. The comparison should be reproducible.

Share the result with the front desk and the named employees. Ask which requests were easy to route and which were not. Their answers often explain a number that looks odd. Then change one step and measure again.

The aim is not to discourage named requests. The aim is to make them work. A caller who asks for a person is giving the office a chance to protect a relationship. Measure the handoff, fix the weak step, and check whether the next caller gets through.

## Sources

- [U.S. Small Business Administration, manage your business](https://www.sba.gov/business-guide/manage-your-business)
- [International Organization for Standardization, ISO 18295-1 customer contact centres](https://www.iso.org/standard/64739.html)
- [U.S. Government Accountability Office, GAO-20-283G: assessing data reliability](https://www.gao.gov/products/gao-20-283g)
- [U.S. Department of Health and Human Services, HIPAA minimum necessary requirement](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html)
