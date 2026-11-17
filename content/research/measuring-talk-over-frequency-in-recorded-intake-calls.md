---
slug: measuring-talk-over-frequency-in-recorded-intake-calls
title: "Measuring talk-over frequency in recorded intake calls"
description: "A review method for counting talk-over in recorded intake calls, separating interruptions from backchannel, and using the result to tune a script."
published: 2026-11-17
updated: 2026-11-17
category: "Call operations research"
image: /images/nov17/research/measuring-talk-over-frequency-in-recorded-intake-calls.webp
imageAlt: "Measuring talk-over frequency in recorded intake calls"
related: /blog/write-a-hold-music-and-silence-policy-for-a-small-call-queue, /research/interrupted-call-recovery-procedure
---

Two people speaking at once can be a sign of engagement or a sign that the caller cannot get a word in. On a recorded intake call, the difference matters because the agent may be missing a detail while trying to move the script forward. This review describes a method for measuring talk-over frequency and separating the kinds that help a call from the kinds that hurt it. The method uses a small, carefully coded sample rather than an automated transcript.

## Key takeaways

- Count talk-over events, not only total overlap time.
- Separate an interruption from a backchannel such as "yes" or "okay".
- Code who started the overlap and whether a fact was repeated afterward.
- Use a small double-coded sample to test the definition.
- Report the result by call stage so the fix targets the right moment.

## Research question and scope

The review asks how often talk-over occurs in recorded intake calls, who starts it, and whether it is followed by a repeated fact. The unit is one overlap event between the agent and the caller. The review links the event to the call stage, the speaker who started it, and the next few seconds of the conversation. It does not measure the agent's tone or the caller's satisfaction.

The scope covers inbound intake calls handled by a small business phone team. It includes calls where both parties speak and the audio is clear enough to annotate. It excludes calls with an interpreter, because the three-party turn-taking pattern needs a different definition. It also excludes calls with severe audio loss that cannot be scored reliably.

Record the recording system, the headset, and the call stage labels. A compressed recording can blur the boundary between speakers, which makes overlap harder to time. Note the sample rate and whether the system records both sides on separate channels. Separate channels make annotation more reliable.

Define the observation window as the first substantive conversation after the greeting. The greeting and the closing have different turn-taking patterns, and mixing them can distort the result. If the review includes the whole call, report the stages separately. The comparison should hold the stage constant.

## Definitions and unit of analysis

Define talk-over as a segment where both speakers are audible at the same time for at least a short threshold, such as two hundred milliseconds. A shorter sound may be a breath or a click rather than speech. Set the threshold before coding and apply it consistently. The threshold should be stated in the report.

Separate an interruption from a backchannel. An interruption takes the floor, while a backchannel signals listening without taking a turn. "Mm-hmm" and "yes" are backchannels, and they should be counted separately. An interruption that changes the topic or answers a question is a different event from a brief overlap at a turn boundary.

Define the starter as the speaker who begins while the other is still talking. The starter is not always the person who caused the overlap, because a slow turn transition can create one. Code the starter anyway, because the pattern is useful. If the starter is the agent in most events, the script may be too long.

Define a repeated fact as a detail the caller states again after the overlap. A repeated phone number or address suggests that the overlap damaged the first attempt. A repeated "yes" does not. Link each overlap to the next fact so the report can show whether the event mattered.

## Sampling and annotation

Draw the sample from recorded calls for a fixed period. Select calls across agents, days, and times so the sample is not dominated by one person or one shift. Keep the export date and the selection rule with the report. A sample of convenience from a single afternoon will not represent the queue.

Annotate each call in a quiet environment with the same playback tool. Mark the start and end of each overlap, the starter, the type, and the next fact. Use a simple coding tool or a spreadsheet with timestamps. A second pass after a short break catches many missed events.

Double-code a small overlap sample with a second reviewer. Compare the event counts and discuss the disagreements. A difference of one or two events in a short call may be acceptable, while a large difference means the definition is too loose. Report the disagreement rate so the reader can judge the result.

Transcribe only the segments needed to understand the event. A full transcript is expensive and can introduce errors. Keep the recording as the source of truth and use the transcript as a note. Quote sparingly and remove identifying details before sharing.

## Measuring frequency and duration

Report the number of overlap events per call and the total overlap time per call. A call with many short events is different from a call with one long event. The count shows the rhythm, while the duration shows the burden. Report both as a median and a range, not only as an average.

Break the events down by starter and type. If the agent starts most interruptions, the script may be too dense or the agent may be rushing. If the caller starts most interruptions, the caller may be anxious or the agent may be pausing too long. The pattern points to different coaching or script changes.

Compare the overlap rate with the call outcome. A call with a high overlap rate may still resolve the request, and a call with a low rate may fail. Do not assume that less overlap is always better. Use the repeated-fact measure to see whether the overlap had a cost.

Report the result by call stage. The intake questions may produce more overlap than the closing, because the caller is eager to explain. A stage-level view helps the team target the exact moment. A single overall rate hides that difference.

## Analysis and limitations

The method cannot capture meaning from timing alone. Two speakers may overlap because they are both laughing, or because one is confirming a detail. The coding categories reduce the ambiguity but do not remove it. State that the measure describes the conversation's mechanics, not its quality.

The recording may not preserve the true overlap. A system that records each side on a separate channel can make overlap easier to see, while a mixed channel can hide one speaker. Check the recording setup before comparing calls. A difference between systems is a measurement artifact, not a behavior change.

The sample may be too small for a stable rate. Intake calls are short, and a few events can move the percentage by a large amount. Report the count and the confidence range. Avoid presenting a precise figure from a handful of calls as a team benchmark.

The annotator's own turn-taking may influence the coding. A reviewer who expects interruptions may hear them more often. Use a written definition and a calibration sample to reduce that bias. When the two coders disagree, discuss the case rather than averaging the scores.

## Repeating the review

Repeat the review after a script or coaching change with the same threshold and the same stage definitions. Record the script version and the recording setup beside the result. A comparison across different systems is hard to interpret, so keep the setup stable. Use the same annotators for the baseline and the follow-up when the schedule allows.

Use the result to change one behavior, such as adding a pause after each intake question or shortening the opening explanation. Test the change for two weeks and compare the event count with the baseline. Keep the [hold and silence policy](/blog/write-a-hold-music-and-silence-policy-for-a-small-call-queue) in mind, because a caller who hears silence may start talking to fill it. Write down the one behavior in the coaching note so the next review can confirm it was actually tried.

Share the sample with the agents in a coaching session, not as a scoreboard. Most agents can hear their own talk-over when it is played back. The goal is a conversation where the caller finishes a sentence and the agent captures the fact. That goal is more useful than a lower count.

## Sources

- [Federal Communications Commission, recording phone calls and conversations](https://www.fcc.gov/consumers/guides/recording-phone-calls-and-conversations)
- [U.S. Government Accountability Office, GAO-20-283G: assessing data reliability](https://www.gao.gov/products/gao-20-283g)
- [International Organization for Standardization, ISO 18295-1 customer contact centres](https://www.iso.org/standard/64739.html)
- [U.S. Bureau of Labor Statistics, customer service representatives](https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm)
