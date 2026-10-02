---
slug: ai-call-summary-source-fidelity-study
title: Can an AI call summary be traced back to what the caller actually said?
description: A claim-level research method for evaluating additions, omissions, attribution errors, uncertainty, and human review in AI-generated call summaries.
datePublished: 2026-10-02
published: 2026-10-02
updated: 2026-10-02
category: Call notes and evidence quality research
image: /thumbnails/ai-call-summary-source-fidelity-study.svg
imageAlt: AI call summary research comparing individual summary claims with authorized source segments and reviewer decisions
related: /services/call-quality-assurance, /research/virtual-assistant-call-note-completeness-study, /contact
---

## A fluent summary is not automatically a faithful record

Call summaries promise a useful compression: turn a long conversation into the facts an owner needs for follow-up. Generative systems can make that compression fast and readable. They can also state an unsupported detail confidently, attach a request to the wrong speaker, remove a condition, or omit the one sentence that changes the next action.

The National Institute of Standards and Technology's Generative AI Profile describes “confabulation” as confidently presented false or erroneous content and recommends risk management across design, evaluation, deployment, monitoring, incident response, and change management. NIST's AI Risk Management Framework is voluntary and use-case agnostic. It supplies a structure for governing and measuring risk; it does not certify a particular summarizer or set an acceptable error rate for virtual receptionist notes.

For VirtualAssistantCallCenter, the practical research question is not whether a summary sounds professional. It is whether each material statement can be supported by an authorized source, whether important source content survived compression, and whether uncertainty remains visible enough for the next person to act safely.

**Source fact:** the recording or approved transcript contains observable speech and events. **System output:** the summary makes claims about that source. **Human analysis:** reviewers judge support, attribution, completeness, and actionability under a written rubric. **Inference:** a recurring error pattern may indicate a prompt, audio, workflow, or review-control weakness. **Uncertainty:** the study cannot always determine why the model produced an error.

## Start with the decision the note will support

One universal score cannot describe every call. A scheduling message needs the requested service, date constraints, callback details, and ownership. An urgent maintenance intake may depend on location, hazard indicators, access constraints, and the exact escalation made. A general inquiry may need only topic and next step.

Define the downstream decision before collecting examples. List material fields, prohibited content, evidence requirements, and the person accountable for accepting the note. Separate information the caller asserted from information the business verified. A summary that converts “I think my appointment is Tuesday” into “Appointment: Tuesday” changes epistemic status even if the words look similar.

Create severity levels tied to consequences. A punctuation difference is not equivalent to a wrong callback number. A missing courtesy phrase may have no operational effect, while a missing “do not enter the property” condition could materially alter follow-up. Have service owners approve severity definitions rather than allowing reviewers to invent them after seeing results.

## Construct a lawful and representative evaluation set

Use recordings or transcripts only when the organization is authorized to use them for the defined purpose. Apply recording-notice, consent, access, retention, contractual, and sector requirements. Prefer synthetic calls for dangerous edge cases and for testing changes before production. Never upload production calls to an unapproved model merely to conduct the study.

Sample across call type, length, audio quality, language pattern, transfer status, interruption, hold, multiple speakers, emotional intensity, and outcome. Include short, ordinary calls alongside unusual failures. If the system summarizes only calls meeting certain technical criteria, document that eligible population and report exclusions.

Freeze selection before reviewing outputs. Otherwise, choosing only amusing hallucinations exaggerates failure, while choosing polished examples understates it. Retain model name and version, configuration, system instructions, relevant prompt template, transcription version, output time, and source identifier. Store secrets and sensitive source data in their approved systems, not in the analytical report.

## Turn prose into reviewable claims

Split each summary into atomic claims. “Jordan called about a leaking sink and wants a technician tomorrow morning” contains at least four: the caller name is Jordan, the subject is a leaking sink, the requested outcome is a technician visit, and the time preference is tomorrow morning. Review each separately because one sentence can mix supported and unsupported content.

For every claim, assign one source relationship:

- **directly supported:** the source clearly contains the claim;
- **supported transformation:** formatting or normalization preserves meaning, such as rendering a spoken date in a standard form;
- **reasonable but unverified inference:** the output adds an interpretation not stated as fact;
- **contradicted:** the source provides incompatible information;
- **not found:** reviewers cannot locate support;
- **source indeterminate:** poor audio or missing context prevents a conclusion; or
- **prohibited:** the summary includes information the approved note should not retain.

Add attribution. Identify whether the caller, assistant, transferred employee, background speaker, or system message supplied the information. Then mark certainty: asserted, confirmed, disputed, corrected, conditional, or unknown. This prevents a later correction from being flattened into the initial claim.

Preserve a source locator—such as an authorized timestamp range or transcript line reference—without copying sensitive speech into the report. A reviewer should be able to reproduce the decision inside the controlled environment.

## Measure omissions separately from invented details

Claim review detects additions and distortions but cannot find content that disappeared. Build an independent checklist of material source elements for each call type. Review the source first and record required items without looking at the generated summary. Then compare the checklist with the output.

Classify each material element as present and accurate, present but degraded, absent, or not applicable. “Call back after 3 p.m.” degraded to “call back” preserves the action but loses a condition. A callback number copied correctly while the caller's correction is omitted may be more dangerous than leaving the number out entirely.

Measure material omission rate with its denominator: missing required elements divided by all applicable required elements. Also report calls with at least one high-severity omission. Do not combine omissions and unsupported additions into a single “accuracy” percentage; the controls that address them may differ.

## Evaluate numbers, names, dates, and negation explicitly

Small tokens often carry disproportionate operational weight. Create focused fields for telephone numbers, addresses, appointment times, quantities, names, spelling corrections, and negative statements. Compare canonical values only after preserving the raw source and the transformation rule.

Test correction sequences: “It is 415—sorry—451.” Test alternatives: “Tuesday or Thursday, but not Wednesday.” Test conditional language: “If the part arrives, morning works.” Test speaker attribution after a transfer. Test phrases such as “no gas smell,” where dropping “no” reverses urgency.

Report exact-match performance for critical structured fields separately from semantic review of narrative claims. A high narrative score cannot compensate for wrong digits. Conversely, a formatting difference in a phone number should not be counted as an error when normalized digits and country context are identical under policy.

## Use two-stage human review

Train reviewers on the rubric using examples outside the scored set. Double-review a declared sample, with reviewers working independently before reconciliation. Calculate agreement for support class, attribution, omission severity, and acceptability. Preserve the original ratings and adjudicated result.

Disagreement is evidence. If reviewers cannot agree whether “needs urgent help” is supported by “please call as soon as someone is available,” the output policy may need a clearer definition of urgency. Do not resolve every ambiguity by instructing reviewers to accept the model.

The operational reviewer should see enough source context to detect errors but no more data than necessary. A subject-matter owner can adjudicate business significance without receiving unrestricted access to all recordings. Separate access roles where feasible.

## Metrics that management can interpret

Report the number of eligible calls, sampled calls, excluded calls, generated summaries, claims, and material source elements. Useful measures include unsupported-claim rate, contradiction rate, attribution-error rate, critical-field exact match, material-omission rate, prohibited-content rate, high-severity defect prevalence, reviewer agreement, and percentage of summaries requiring correction before handoff.

Break results down by call condition and model version. Overall performance can hide failures on transfers, noisy audio, long calls, accented speech, code-switching, or corrections. Small subgroups should carry sample sizes and uncertainty rather than league-table rankings.

Track correction effort cautiously. Editing time includes interface usability and reviewer skill, not just model quality. A summary accepted without edits may still be wrong if nobody checked the source. Acceptance is a workflow event, not ground truth.

## Put the summary in its proper role

A generated summary can be a draft, an index, or a convenience layer. The underlying authorized source and accountable business record retain their defined roles. Label the output so recipients know whether it was machine-generated, human-reviewed, or corrected. Preserve revisions rather than silently replacing the first output when investigating quality.

High-consequence actions should not rely on summary prose alone when the approved process requires source confirmation. Route ambiguity to a named owner. Do not let a fluent paragraph expand a virtual assistant's authority to diagnose, approve refunds, give professional advice, or promise outcomes.

Provide a fast correction path. The assistant or receiving owner should be able to fix a material field, cite the source locator, and mark why it changed. Feed categorized findings into evaluation and workflow improvement under controlled change management, not into an uncontrolled prompt-editing loop.

## Monitor changes and failures over time

Establish a baseline before model, transcription, prompt, audio-processing, or integration changes. Re-run a stable challenge set plus a fresh sample. A vendor model name may remain the same while behavior changes; record the version information actually available and the observation date.

Define stop or fallback conditions. Examples include a high-severity contradiction, repeated wrong-number transcription, source-link failures, or a sudden rise in empty summaries. The response may be mandatory review, disabling summaries for an affected queue, or reverting to manual notes. Management should approve thresholds based on consequence, not copy them from an unrelated use case.

Incident review should identify affected calls and downstream actions. Correct records through the established process and preserve evidence. Avoid claiming that an edited summary proves the original system output was accurate.

## Limitations

Human reference notes are not perfect ground truth. Transcripts can misrecognize speech, recordings can omit channels, and reviewers can disagree. The study therefore reports source quality and adjudication, not an absolute intelligence score. Results from one call mix, language, model, or configuration do not generalize automatically.

This method does not establish legal compliance, fairness across all populations, caller satisfaction, productivity gain, or financial return. NIST guidance is voluntary and does not endorse a product. Organizations need qualified review for privacy, employment, recording, accessibility, sector, and contractual obligations.

The public report should use aggregated findings and synthetic examples. It should not reveal caller identities, protected details, security controls, proprietary prompts, or full transcripts. Evidence access belongs in the approved review environment.

## Decision standard for adopting call summaries

Adoption is supportable when the business has defined the note's purpose and material fields; the evaluation set represents actual conditions; every material claim can be traced to a controlled source locator; omissions and additions are measured separately; critical values receive exact checks; human disagreement is visible; high-risk actions retain required verification; and model changes trigger re-evaluation.

For a buyer assessing [call quality assurance](/services/call-quality-assurance), the useful question is not “Does the system use AI?” Ask what counts as a material claim, how omissions are found, whether corrections and uncertainty survive the summary, who reviews high-consequence notes, and what evidence triggers fallback. Those answers reveal whether a summary is treated as attractive prose or as a bounded operational artifact.

## Sources

- [Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile](https://doi.org/10.6028/NIST.AI.600-1) — National Institute of Standards and Technology. Checked October 2, 2026.
- [Artificial Intelligence Risk Management Framework (AI RMF 1.0)](https://doi.org/10.6028/NIST.AI.100-1) — National Institute of Standards and Technology. Checked October 2, 2026.
- [AI Risk Management Framework Playbook](https://airc.nist.gov/airmf-resources/playbook/) — National Institute of Standards and Technology. Checked October 2, 2026.
- [NIST Privacy Framework](https://www.nist.gov/privacy-framework) — National Institute of Standards and Technology. Checked October 2, 2026.
