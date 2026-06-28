---
title: "The fintech engineering rules that actually hold"
slug: "fintech-engineering-rules-that-hold"
date: "2026-06-28"
description: "A fintech engineering handbook is making the rounds, and the debate around it is more instructive than the document itself: three principles survive every context, and organizations still break them anyway."
categories:
  - "technology"
  - "banking"
tags:
  - "fintech"
  - "payments"
  - "banking"
  - "engineering"
draft: false
---

Three separate people sent me the [Fintech Engineering Handbook](https://w.pitula.me/fintech-engineering-handbook/) this week, which is usually a sign the document is answering a frustration engineers already had. It covers the fundamentals of building payment systems: represent money as integers, implement double-entry bookkeeping, make operations idempotent, treat external webhooks as unreliable hints. Solid, clearly written, and worth circulating.

The reaction from practitioners who work in this space was predictably divided.

## The debates that reveal context

The float-vs-integer argument ran longest. One camp: monetary values stored in anything other than integers is a category error, full stop. The other: quantitative finance has run on IEEE 754 doubles for decades without systemic failure.

Both camps are right in their domain. Consumer payments amplify rounding errors across millions of transactions; a few basis points of float imprecision, compounded across daily settlement runs, become a reconciliation problem and then a regulatory conversation. Quantitative trading operates on probability models where 15 significant digits already exceed the precision the model warrants. The context resolves the debate, not the handbook.

I've seen the consumer-facing version of this fail. A tax calculation bug that produced two-rupee discrepancies per transaction, harmless-looking in isolation, traced back after three weeks to a rounding assumption someone made quickly and marked "to review." For retail payment systems, the handbook's caution is earned.

The PII and compliance thread was more interesting. The handbook recommends separating personally identifiable information from transaction records so you can delete customer data once the purpose expires while retaining transaction history for audits. The architecture is clean.

The regulatory reality is messier. In India, RBI's KYC guidelines tie customer identity to transaction records for audit purposes. The Digital Personal Data Protection Act requires deleting personal data when the purpose is served. These two obligations don't fully reconcile through an architectural pattern. The data model follows the compliance review; no engineering handbook can substitute for that conversation with your lawyers.

## What holds regardless

Strip the context-specific arguments and three principles survive without serious challenge.

Idempotency first. Every operation in a payment flow must produce the same result whether it runs once or ten times. ACH times out. Webhooks get resent. Servers restart mid-transaction. If a retry is treated as a new transaction, a customer gets double-charged; it is a question of when, not whether. Every engineer who has shipped payment systems has a version of this story. The details vary; the "we thought it was too edge-case to prioritize" explanation does not.

Immutable ledgers second. Financial records cannot be edited, only corrected through new entries that reference the original. Overwrite a row and the history is gone permanently. Auditors ask for it. Regulators expect it. Post-mortems depend on it. The pattern is not complicated: a correction is a debit and a credit that net to zero against the original entry. Four hundred years of double-entry bookkeeping exist for this exact reason.

External reconciliation third. Internal ledger totals reconciled independently against the PSP, the correspondent bank, every external counterparty. Idempotency and immutability handle the failures you can observe. Reconciliation catches what they miss: the webhook that arrived but wasn't acknowledged, the settlement that matched against the wrong transaction.

None of this is technically exotic. Idempotency keys are a well-understood pattern. Append-only ledger tables are straightforward to build. Reconciliation jobs are standard batch processes. The difficulty is organizational.

## The part no handbook covers

At OptCulture and in the advisory work I do with banks and retail finance teams, the failure mode I see most is not ignorance of these principles. It is time pressure applied to them. The idempotency key gets skipped because the feature is "basically working." The audit log grows large and someone proposes archiving old rows to manage storage costs. The reconciliation job runs weekly instead of daily because there haven't been mismatches in months.

These are not engineering trade-offs. Idempotency has no safe shortcuts. Audit records have no acceptable deletions before the regulatory retention period expires. Reconciliation frequency is a business risk decision, and it belongs in a risk review, not an infrastructure cost meeting.

The handbook is worth reading and worth sharing with your team before the first payment goes live. What it cannot provide is the organizational standing to hold the line when a release is imminent and someone wants to cut one of these three. That part requires having sat through enough payment system post-mortems to know which shortcuts are survivable and which ones aren't.
