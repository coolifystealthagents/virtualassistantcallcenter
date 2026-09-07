---
slug: appointment-timezone-readback-study
title: Appointment time-zone readback error study
description: A reproducible design for testing whether explicit time-zone readback reduces scheduling corrections and missed handoffs.
published: 2026-09-07
updated: 2026-09-07
category: Scheduling Research
image: /thumbnails/appointment-call-confirmation-evidence.svg
imageAlt: Appointment research comparing local time zone readback against verified calendar records
related: appointment-request-vs-booking-boundary, scheduled-callback-timezone-interpretation-research
---
## Finding and scope

Technical standards define time-zone identifiers and accessible guidance supports clear error correction, but public sources do not establish that one phone readback script prevents scheduling errors. This article proposes a local evaluation. It reports no private appointment outcomes.

## Evidence base

The [IANA Time Zone Database](https://www.iana.org/time-zones) maintains rules and identifiers for civil time. [NIST time and frequency services](https://www.nist.gov/pml/time-and-frequency-division/services) document official time resources. [W3C input-assistance guidance](https://www.w3.org/WAI/WCAG22/Understanding/input-assistance.html) supports identifying and correcting input errors. These sources justify explicit, versioned handling; they do not endorse a call-center script.

## Proposed method

Include eligible appointments involving different time zones during a frozen period. Randomize between the current approved confirmation and an approved explicit readback that names the date, local clock time, time-zone label, and corresponding participant time where needed. Compare both with the final calendar record and independently confirmed intended time.

Measure corrected time-zone errors before booking, post-booking corrections, missed or late attendance plausibly linked to time interpretation, call duration, unavailable outcome records, and caller requests for clarification. Prespecify daylight-saving transitions and ambiguous abbreviations as strata. Preserve the tz-database version used for conversions.

## Decision boundaries

The assistant may repeat stored times and ask the caller to confirm. It should not guess a location from an area code, treat “EST” as unambiguous year-round, or mark a request booked before calendar acceptance. A scheduler owns exceptions and corrections.

## Limitations

Calendar records may encode the wrong intention consistently, so record agreement alone is insufficient. Missed appointments have many causes. Findings would apply only to the sampled services, callers, seasons, systems, and approved prompts, and would not establish accessibility or legal compliance.

## Sources

1. [IANA Time Zone Database](https://www.iana.org/time-zones)
2. [NIST Time and Frequency Services](https://www.nist.gov/pml/time-and-frequency-division/services)
3. [W3C, Understanding Input Assistance](https://www.w3.org/WAI/WCAG22/Understanding/input-assistance.html)
