---
slug: knowledge-base-answer-source-traceability-study
title: Can reviewers trace a phone answer to its approved source?
description: A blinded review design for measuring whether call answers point to the correct policy version, passage, and approval state.
published: 2026-09-08
updated: 2026-09-08
category: Knowledge Control Research
image: /thumbnails/call-answering-policy-for-new-leads.svg
imageAlt: Answer traceability study linking a call response to the approved policy version and passage
related: virtual-assistant-answer-source-traceability-study,virtual-assistant-knowledge-base-change-control-study
---
## Finding and scope

Records and internal-control guidance support provenance, version control, and review, but they do not establish how often call-center answers cite the correct source. This article proposes a local blinded audit. It reports no performance rate.

## Evidence base

The [GAO Green Book](https://www.gao.gov/greenbook) calls for quality information, documented controls, monitoring, and timely remediation. [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) includes controls for configuration management, audit records, and information integrity. [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework) treats governance and protection as parts of organizational risk management. These sources inform the control design; they do not certify a knowledge base or answer.

## Proposed method

Sample calls where an agent gave a policy, price, eligibility, scheduling, or process answer from an approved knowledge source. Freeze the source inventory and its version history. Give independent reviewers the answer, the source identifier recorded by the agent, and the source version available at call time. Hide agent identity where practical.

Reviewers should classify the record as exact support, partial support, conflicting source, obsolete version, missing citation, or answer outside the agent's authority. Prespecify exact support as the primary measure. Report reviewer agreement, unavailable recordings, answers with several sources, and cases where the source itself is ambiguous.

## Inference limits and decision boundary

A correct citation does not prove that the answer was clear, complete, lawful, or appropriate for the caller. A poor citation does not prove the spoken answer was false. Agents should use only approved, current material and escalate when the source conflicts with the request. Content owners approve policy meaning and revisions.

## Limitations

The study depends on reliable version history and timestamps. Reviewers may interpret broad passages differently. Calls selected because they contain a citation may exclude the weakest records. Findings apply only to the sampled topics, source inventory, approval process, and review rules.

## Sources

1. [GAO, Standards for Internal Control in the Federal Government](https://www.gao.gov/greenbook)
2. [NIST, SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
3. [NIST, Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
