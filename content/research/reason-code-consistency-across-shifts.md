---
slug: reason-code-consistency-across-shifts
title: "Testing reason code consistency across shifts"
description: "A repeatable test for whether agents on different shifts apply the same call reason codes to comparable requests."
published: 2026-11-03
updated: 2026-11-03
category: "Call Data Research"
image: /images/nov03/research/reason-code-consistency-across-shifts.webp
imageAlt: "Illustration for Testing reason code consistency across shifts"
---

**Published November 3, 2026**

A repeatable test for whether agents on different shifts apply the same call reason codes to comparable requests. The test works best when the code owner and the agents who use the codes are in the same review. Read it with the current definitions and a week of coded calls open, and mark the pair of codes that causes the most hesitation. The review should end with one definition or training change.

## Question and design

This study asks whether agents on different shifts assign the same reason code to comparable calls. It uses a set of standardized scenarios plus a sample of real calls, so the result reflects both the definitions and the live queue. The study does not measure whether the code set is complete; it measures whether the existing definitions are applied consistently. A consistent code set can still be the wrong set, which is a separate review.

The design has two parts. First, agents code a short set of written scenarios without seeing each other's answers. Second, reviewers code a sample of real calls against the same definitions. Comparing the two shows whether disagreement comes from the definitions or from the pressure of live work. If the scenario answers agree but the live calls do not, the problem may be time, screen design, or training rather than the code wording.

## Scenario set

Build scenarios that sit on the boundaries between codes, not easy cases that everyone will classify the same way. Use one clear example for each code and at least two near misses. Keep each scenario short enough to read in under a minute, and avoid details that are irrelevant to the reason. The scenario should describe the caller's stated need, not the agent's guess about the outcome.

Have the code owner review the scenarios before the test. The owner should confirm that each has a defensible answer under the current definitions. If the owner cannot choose, the definition is ambiguous and should be fixed before the test. The test is not a trick quiz; it is a way to find where the definitions fail.

Include a written rationale field for each answer. The rationale shows why the agent chose the code and whether the disagreement is about the definition or about reading the scenario. Code the rationales for themes, such as focusing on the department or the caller's urgency. Those themes point to the training fix.

## Live call sample

Draw the live sample from the same call types covered by the scenarios. Stratify by shift and include enough calls per shift to compare, or report the shift as a case series if the volume is small. Exclude calls with missing recordings or notes that make the reason impossible to determine. Report the exclusions and the final sample size.

Have reviewers assign the reason code from the call record and, where needed, the recording. Do not show the agent's original code until the reviewer has made an independent choice. This avoids anchoring. If the record is too thin to code, mark it as insufficient rather than guessing from the queue name.

Compare the reviewer code with the agent code and with the other reviewers. A disagreement between reviewers means the definition is hard to apply even for trained staff. A disagreement between the agent and a unanimous reviewer panel points to a training or time problem. Report both kinds separately.

## Measurement

Report agreement as the share of cases where the agent code matches the panel's code, with the sample size. Also report the distribution of codes, because high agreement on a single catch-all code can look good while hiding poor discrimination. A code set where most calls land in other is not consistent in a useful sense. A single agreement rate can therefore make a narrow, unhelpful code set look reliable, so the distribution belongs beside it.

Use a confusion matrix to show which codes are swapped. The matrix is more actionable than a single agreement rate because it identifies the boundary that needs work. If the team is small, a table of cases may be more honest than a matrix with many empty cells. The report should not imply statistical precision that the sample cannot support. Include row and column totals so a small cell is visible rather than hidden by a percentage.

Repeat the scenario test after training with the same scenarios and a comparable live sample. Compare the agreement rate and the confusion pattern. If the training improved the scenarios but not the live calls, the issue may be the screen or the time pressure. Adjust the intervention to the setting where the disagreement occurs.

## Sources of disagreement

Classify disagreements by cause: unclear definition, mixed call, time pressure, screen design, or training gap. Ask agents to comment on the cases where they hesitated, and review the comments with the code owner. A pattern of hesitation around one code is a design signal. Do not treat every disagreement as an agent error.

Mixed calls are a common source of noise. If a caller raises two needs, the primary reason may depend on the intake question rather than the agent's judgment. Review the intake script and the order of the questions. A clearer first question can reduce disagreement without adding another code.

Time pressure is harder to measure but visible in the pattern. If disagreements cluster at the busiest hour or on the shortest calls, the disposition step may be too slow. Test a shorter picker or a default that the agent can change. Measure the effect on both agreement and handling time, because a faster picker that produces worse data is not an improvement.

## Limitations

The panel's code is a reference judgment, not an objective truth. If the panel is trained on the same ambiguous definition, it may agree on an answer that the code owner would reject. Include the code owner in the panel or have the owner review a subset. The study measures consistency with a reference, not correctness in an absolute sense.

The live sample may not represent the full call mix, especially if reviewers choose calls with clear notes. Use a sampling rule and report it. If the sample overrepresents easy calls, the agreement rate will be too high. The report should describe the sampling frame and the exclusions.

Agents may change their coding behavior when they know they are being studied. Keep the scenario test separate from individual performance review, and explain the purpose. The goal is to improve the definitions and the workflow. A test used as a punitive audit will produce compliance, not useful evidence.

## Reporting and action

Present the scenario results, the live results, and the confusion pattern in one short report. Include the number of participants, the number of calls, the observation window, and the definitions version. Avoid ranking individual agents; the sample is too small and the purpose is process improvement. Share the report with the agents who participated.

Choose one change based on the largest confusion pair. It might be a clearer definition, a new example, a different picker order, or a shorter required note. Assign an owner and a review date. The next test should use the same scenarios so the comparison is meaningful.

Close the loop by publishing the revised definition and the reason for the change. Agents are more likely to use a code set they helped improve. If the change does not move the agreement rate, say so and try a different intervention. Consistency is built through repeated, small corrections, not a single training event.

## Sources

- [NIST Privacy Framework](https://www.nist.gov/privacy-framework)
- [BLS: Occupational outlook handbook](https://www.bls.gov/ooh/)
- [FTC: Data security guidance](https://www.ftc.gov/business-guidance/privacy-security/data-security)
- [HHS: HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/privacy/index.html)
- [CISA: Zero Trust Maturity Model](https://www.cisa.gov/zero-trust-maturity-model)
