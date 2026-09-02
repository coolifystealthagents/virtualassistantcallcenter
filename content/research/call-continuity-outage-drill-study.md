---
slug: call-continuity-outage-drill-study
title: Call continuity outage drill study
description: A structured drill for evaluating backup routing, safe fallback notes, owner readiness, and reconciliation after system recovery.
published: 2026-09-02
updated: 2026-09-02
category: Continuity research
image: /thumbnails/after-hours-call-continuity-cohort.svg
imageAlt: Simulated call outage testing backup routing, fallback records, and recovery reconciliation
---

## Research question

Can the team maintain its approved minimum call service during a simulated connectivity outage and reconcile every fallback record after recovery? The drill evaluates the routine, not individual speed under surprise conditions.

## Method

Define a safe scenario, start and end signals, participating queues, prohibited actions, and observer roles. Use synthetic caller records. Test backup routing, staff notification, access to current contact lists, minimum fallback capture, escalation, status messaging, and recovery handback.

## Measures and interpretation

- Record routing success, notification time, fallback-record completeness, unsafe capture attempts, and reconciliation status.
- Track duplicates and records that cannot be matched after recovery.
- Note dependencies that worked only because a participant used undocumented knowledge.

A successful route test alone is insufficient if the backup owner lacks authority or records cannot be reconciled. Conversely, a slow first drill can still be useful when it exposes specific control gaps without affecting real callers.

## Operating response

Assign every observation an owner, due date, risk level, and retest condition. Remove synthetic data after evidence requirements are met, and keep the approved procedure version with the drill record.

## Sources

1. [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
2. [CISA cyber guidance for small businesses](https://www.cisa.gov/resources-tools/resources/cyber-guidance-small-businesses)
3. [NIST small-business cybersecurity resources](https://www.nist.gov/itl/smallbusinesscyber)
