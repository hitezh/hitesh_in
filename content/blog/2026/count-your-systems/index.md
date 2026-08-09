---
title: "Shopify scaled checkout by removing a system, not adding one"
slug: "count-your-systems"
date: "2026-08-09"
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "software-engineering"
  - "engineering-leadership"
  - "architecture"
  - "databases"
  - "strategy"
image: images/cover.svg
---

On Black Friday last year, Shopify was clearing [$5.1 million in sales a minute at peak](https://shopify.engineering/scaling-inventory-reservations). The piece of software deciding whether the last unit of a sold-out hoodie is yours or the person's next to you just got rebuilt. The interesting part is how they did it: they made checkout faster by removing a system, not adding one. They pulled inventory reservations out of Redis and folded them into the MySQL database that already held the inventory ledger.

Read as a headline, that sounds backwards. You are supposed to put a fast in-memory store in front of the slow relational one, not retreat to the relational one. But that framing is wrong. The speed was never the problem. What cost Shopify was the seam between the two systems: one fact, the count of what exists, living in two places that had to agree and sometimes didn't.

## Where correctness went to die

Reservations lived in Redis. The authoritative count of what actually existed lived in MySQL. That split meant the two operations that matter, reserving a unit and later claiming it, could not sit inside one transaction. Depending on which finished first, you either sold the same last unit twice or marked something reserved that was already gone. Two customers get the same hoodie, or one customer gets told "sold out" about a hoodie sitting in the warehouse.

That bug is not a mistake anyone made in the code. It is baked into the shape of the system. The moment one fact lives in two places, the fact is allowed to disagree with itself, and no amount of careful engineering on either side closes the gap. Folding both into one database turned reserve-and-claim into a single [ACID](https://en.wikipedia.org/wiki/ACID) transaction, and a whole class of corruption bugs stopped being possible. The clever bits underneath (one database row per sellable unit, plus MySQL's `SKIP LOCKED` so concurrent checkouts grab different rows instead of queuing) are real, but they are downstream of the decision that mattered: put the fact in one place.

One pattern I keep seeing: the reflex to drop a fast specialized store in front of a general one is really a bet that speed is your scarcest resource. Usually it isn't. Correctness and the attention of your on-call engineers are. You optimize the cheap axis and mortgage the expensive one without noticing. The bill still arrives; it just [shows up somewhere you weren't watching](/2026/automation-is-cheap-understanding-is-the-bill/).

## The bottleneck was in the plumbing

Here is the part worth sitting with. Even after the redesign, the ceiling on throughput was not lock contention or query speed in the reservation system at all. It was database connections running out, held too long by unrelated checkout code doing long transactions elsewhere. The team found it only by tagging every query with the business process that issued it, then watching how long each caller held a connection. Fixing those neighbors removed half the reads and a third of the transactions on the primary database. The system they had just rebuilt was fine. Its noisy roommates were the problem.

The lesson travels well past databases. The thing that limits you is almost never the thing you are optimizing. Shopify's own summary puts it plainly: if the numbers don't add up, low CPU but high queuing, the answer is usually in the plumbing, not the engine. And you cannot fix what you cannot attribute. Most teams watch aggregate load and never see the one caller quietly holding the shared resource, because nothing on the dashboard looks broken.

## Count your systems, not your features

If I were advising a team here, the metric I would push is boring: count the number of datastores in your critical path, and treat each one like a hire. Every system is something to staff, patch, monitor, and reason about at two in the morning. It earns its place by doing something the boring store you already run genuinely cannot, not by being the tool everyone reached for last year. The [fintech teams that stay reliable](/2026/fintech-engineering-rules-that-hold/) tend to be the ones with the fewest moving parts, not the most modern ones.

This gets harder to hold in the AI rush, not easier. The instinct now is to bolt on a vector database, a new queue, a separate store for every AI feature that ships. Some of that is warranted. Most of it is a seam you added for a demo and will own for a decade. Postgres does a surprising amount of this work today. The tooling was [never the moat anyway](/2026/your-model-was-never-your-moat/); the discipline is.

So the question I would put to any team choosing infrastructure is not which system is fastest. It is what guarantee you are giving up by splitting one fact across two of them. Answer that honestly and you often find the fastest system is the one you didn't add.

*If you're weighing whether a new AI feature needs its own infrastructure or can live inside what you already run well, that's exactly the kind of call worth thinking through together. My [advisory hour](/work-with-me/) is built for it.*
