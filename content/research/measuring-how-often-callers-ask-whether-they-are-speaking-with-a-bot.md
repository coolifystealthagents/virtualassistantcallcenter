---
slug: measuring-how-often-callers-ask-whether-they-are-speaking-with-a-bot
title: "Measuring how often callers ask whether they are speaking with a bot"
description: "A review method for counting bot-disclosure questions in recorded calls, coding the answer given, and tracking what the caller does next."
published: 2026-11-18
updated: 2026-11-18
category: "Call operations research"
image: /images/nov18/research/measuring-how-often-callers-ask-whether-they-are-speaking-with-a-bot.webp
imageAlt: "Measuring how often callers ask whether they are speaking with a bot"
related: /blog/set-a-rule-for-callers-who-ask-if-they-are-speaking-to-a-bot, /research/what-share-of-voicemail-messages-lack-a-call-back-number
---

Callers sometimes ask a question that is easy to miss in a quality review. They want to know whether the voice on the line belongs to a person or to software. The answer affects how much they share and whether they stay on the call. This review describes a method for counting that question, coding the answer, and tracking the outcome without turning the audit into a technology debate.

## Key takeaways

- Count the caller's question separately from the agent's disclosure.
- Code whether the answer was direct, evasive, or absent.
- Track what the caller did after the answer.
- Use a small random sample and a second reviewer.
- Report the limit that the recording cannot show the caller's expectation.

## Research question and scope

The review asks how often callers ask whether they are speaking with a bot, what answer they receive, and whether the call continues after the answer. The unit is the caller question event, not the whole call. A call may contain more than one question if the caller asks again after a transfer. Each question is coded on its own.

The scope covers inbound calls handled by a small phone team during a defined period. It includes calls answered by a live agent, calls that begin with an automated greeting, and calls that pass through a menu. It excludes outbound calls and calls that never reached a person or a menu. The review does not evaluate whether the service should use automation.

Record the greeting version, the menu version, and the agent group in the sample file. A change in the greeting can change how often the question appears. Keep the versions separate so the report can show whether the question follows the wording. The reader should know which setup produced the count.

## Definitions and unit of analysis

Define a bot question as any caller utterance that asks whether the entity on the line is a person, a machine, a recording, or software. The wording does not need to include the word bot. "Am I talking to a real person?" and "Is this automated?" belong in the same category. Write the caller's exact words beside the code so a second reviewer can check the match.

Define a disclosure answer as the agent's first response to that question. Code it as direct when the agent names what the caller reached, evasive when the agent changes the subject, and absent when no answer is given. A direct answer may still be incomplete if it omits recording or transfer details. Code completeness as a separate field.

The unit is the question event, not the caller. A caller who asks twice has two events because the second answer may differ. Counting the caller once would hide the effect of the first response. Keep a case identifier so the events can be linked without merging them.

Define call continuation as the caller staying on the line for at least one more substantive turn. A caller who hangs up immediately after the answer is a non-continuation. A caller who asks for a human is a continuation with a transfer request. Code the next action so the report can separate a change of channel from a refusal to engage.

## Sampling and coding

Start with a list of calls that reached a live agent or a menu during the period. Draw a random sample if the volume is large, or include every call if it is small. Keep the export date, the queue filter, and the row count with the report. A sample built only from complaints or escalations will overstate the question.

Listen to the first two minutes of each call when the question is likely to appear. If the question arrives later, continue to the end of that exchange. Use the recording rather than the agent note, because notes rarely capture this question. Record the timestamp so the clip can be found again.

Use a coding sheet with plain categories and a free-text field. Capture the caller's words, the agent's first response, the tone of the response, and the next action. Add whether the agent offered a transfer without being asked. These details turn a count into a useful description of the interaction.

Validate the coding with a second reviewer on a small overlap sample. Discuss disagreements before scoring the full sample. Report the disagreement rate beside the result. A high rate may mean the categories are too broad or the question is hard to hear.

## Measuring disclosure outcomes

Report the number of question events and the share of calls that contain at least one. Show the count beside the share because a small sample can produce a large percentage. Group the events by greeting version and by agent group. The grouping is more useful than a single overall rate.

Report the share of answers coded direct, evasive, and absent. Then report the share of callers who continued, asked for a human, or ended the call. Cross-tabulate the answer type with the next action. A direct answer followed by continuation is a different result from a direct answer followed by a hang-up.

Measure the time between the question and the next substantive turn. A long pause may mean the caller is deciding whether to trust the answer. A short pause followed by a new question may mean the answer was accepted. The timing is a clue rather than proof, so report the distribution.

Measure the transfer outcome when a caller asks for a person. Record whether the transfer was accepted and how long it took. A caller who asks for a human and waits in silence is not a successful disclosure. The [callback promise guide](/blog/designing-a-callback-promise-that-callers-can-trust) offers related language for the follow-up.

## Analysis and limitations

The method cannot show why the caller asked. The caller may have heard a recorded greeting, read a news story, or had a previous bad experience. The link between the greeting and the question is an association, not a cause. State that limitation in the report.

The sample may miss callers who hung up before saying anything. A caller who hears a greeting and leaves never appears in the question count. Pair the sample with the total call volume and the abandonment count. A low question rate may mean trust or it may mean silent exit.

The recording may not capture the caller's tone or the agent's expression. A short answer can sound warm or cold depending on delivery. Use two reviewers when the tone code matters. Report how often the reviewers disagreed.

The agent may answer differently when the call is being reviewed. A quality program can change behavior during the sample window. Keep the review quiet until the sample is complete, or use calls recorded before the review began. Note the method in the report.

## Repeating the review

Repeat the review after a script change with the same window and the same categories. A change in either can move the result without a change in behavior. Record the script version and the sample dates beside the numbers. The comparison should be reproducible.

Use the result to change one line, such as adding a plain disclosure to the greeting. Test the change for two weeks and compare the question rate and the continuation rate. Keep the old wording available in case the new line performs worse. Share the finding with the agents and ask which answer felt natural.

The review should end with a better sentence, not a longer report. A single clear disclosure can reduce the need for the caller to ask at all. That is the outcome worth measuring. The [bot question rule](/blog/set-a-rule-for-callers-who-ask-if-they-are-speaking-to-a-bot) shows how to put the finding into practice.

## Sources

- [Federal Trade Commission, consumers and artificial intelligence](https://www.ftc.gov/business-guidance/resources/consumers-artificial-intelligence-ai)
- [National Institute of Standards and Technology, AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [U.S. Government Accountability Office, GAO-20-283G: assessing data reliability](https://www.gao.gov/products/gao-20-283g)
- [International Organization for Standardization, ISO 18295-1 customer contact centres](https://www.iso.org/standard/64739.html)
