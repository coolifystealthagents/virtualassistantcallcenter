---
slug: callback-latency-analysis-method
title: Analyzing callback latency from missed calls
description: A method for measuring the time from missed call to first callback attempt, including censoring and after-hours effects.
published: 2026-10-22
updated: 2026-10-22
category: research
image: /thumbnails/callback-latency-analysis-method.png
imageAlt: Research illustration for callback latency analysis
related: /research
---

# Analyzing callback latency from missed calls

*October 22, 2026*

Callback latency is the time between a missed call and the first attempt to reach the caller. It is a useful service measure because it describes the part of the response the team controls, before the caller answers.

The measurement is easy to distort. This note covers the main traps.

## Set the start and stop events

Start at the missed-call event recorded by the phone system, not at the time the ticket was created. Stop at the first outbound attempt, not at the conversation.

Record both times and the timezone. If the callback is attempted after hours, note that the clock is still running.

## Handle censoring

Callbacks not attempted by the reporting cutoff have no latency. Excluding them flatters the result. Report them as open with their age, and calculate the distribution only for calls that had a fixed window to receive an attempt.

## Separate business hours from calendar hours

A missed call at 18:00 with a callback at 09:00 is fifteen hours by the clock and a short wait by business hours. Choose one definition, state it, and apply it consistently.

For a team that advertises after-hours coverage, calendar hours may be the right choice.

## Report the attempts

Record the number of attempts, the channels used, and whether the caller was reached. A first attempt within ten minutes that nobody answers is not the same service as a successful callback.

## Compare by queue and hour

Aggregate latency hides the queue that is failing. Publish the median, the 90th percentile, and the open count by queue and by hour band.

## Limitations

The method cannot measure the quality of the callback or the time to resolve the issue. It measures the first attempt, which is only one part of the service.

## Sources

- Federal Communications Commission, consumer guidance on unwanted calls: https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts
- Federal Trade Commission, Telemarketing Sales Rule guidance: https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule
