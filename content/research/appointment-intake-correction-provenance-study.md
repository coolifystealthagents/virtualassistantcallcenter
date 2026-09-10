---
slug: appointment-intake-correction-provenance-study
title: Can appointment-intake corrections be traced to their source?
description: A field-level study of whether corrected appointment records retain enough provenance for review without assuming the final value is accurate.
published: 2026-09-10
updated: 2026-09-10
category: Appointment Data Research
image: /thumbnails/appointment-intake-error-provenance.svg
imageAlt: Appointment intake fields linked to original and corrected source records
related: caller-correction-propagation-study,phone-intake-field-validation-study
---
## Finding and scope

A corrected field can look complete while losing the reason, source, or actor behind the change. This article proposes a retrospective review of appointment records and their audit trails. It does not report local findings and does not test whether the final appointment information is true.

## Evidence base

[NIST SP 800-53 Revision 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) includes controls for audit records, accountability, and information integrity. [ISO/IEC 25012](https://www.iso.org/standard/35736.html) defines a data-quality model. [The UK Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) provides practical guidance for data ownership and quality assessment. These materials support provenance review but do not define a universal pass rate for appointment systems.

## Methodology

Choose a fixed period and include appointment records where a required intake field changed after initial save. Prespecify the fields in scope, such as caller name, callback number, service, location, date, and time zone. Exclude system formatting changes and documented test accounts, and report exclusions.

For each eligible change, test whether the audit trail retains the earlier value, later value, timestamp, actor or system, reason, and source channel. The primary measure is the proportion with all prespecified provenance elements. A second reviewer checks a random sample, with agreement reported before reconciliation. Store no copied sensitive values in the analysis file; use record identifiers and element-present flags.

## Inference boundaries

Complete provenance does not prove the corrected value is accurate, authorized, or appropriate. Missing provenance may reflect an integration limitation rather than individual misconduct. The study cannot infer caller intent or measure appointment outcomes.

## Limitations

Audit retention settings may exclude older changes. Field definitions can differ across locations and booking tools. Automated synchronizations may obscure the human source. A review limited to changed fields says nothing about errors that were never corrected.

## References

1. [NIST, SP 800-53 Revision 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
2. [ISO, ISO/IEC 25012:2008](https://www.iso.org/standard/35736.html)
3. [UK Government, The Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework)
