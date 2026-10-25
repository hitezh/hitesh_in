---
title: "Be more ambitious with software, but only where you can prove it works"
slug: "ambition-needs-a-test-suite"
date: "2026-10-25"
description: "AI has made large software projects cheap to start. A database benchmark scandal shows why the real constraint is how you will know the result is right."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "software-engineering"
  - "decision-making"
image: images/cover.svg
draft: false
---

Dan Luu recently wrote that he built a regex engine, a ripgrep fork and a faster Rust build setup in a handful of hours of his own time, work he estimates would have taken a year or more before. His conclusion, borrowed from Michael Malis, is that [we should be more ambitious with the software we build](https://danluu.com/ambitious/). I think the premise is right and the conclusion will be misapplied by most leadership teams.

Ambition got cheap. Knowing whether the result is correct did not.

## Your "no" list is a dated document

Luu's sharpest point is that people are still carrying a pre-agentic cost model. Engineers complain for weeks that Rust compiles are slow, when writing something that speeds them up is now an afternoon's work. Ten years ago, the person who built a new compiler because theirs was slow was the person who never shipped anything. That instinct is now out of date.

Companies have the same fossil record. Somewhere in your backlog or your memory is a graveyard of ideas killed with "not worth the engineering time": replacing the slow internal tool, ending the license you resent paying, rebuilding the reporting layer nobody trusts. Those verdicts were priced in 2022 labor. Some of them are now wrong, and nobody will reopen them unless a leader asks.

## Ambition runs ahead of verification

Luu says something in the middle of his post that deserves more attention than the headline. With each more capable model, he gets further from "it just works," because the gap between what a model can implement and what it can verify keeps widening. He gets zstd and an IMAP server out of models because both come with a public specification and tests to check against. The model grinds until the tests pass.

Most business software has no such pile. The rules inside a pricing engine, a loyalty program, a credit decision or a claims workflow live in people's heads and in old edge-case patches. An agent can write you a replacement quickly. Nobody can tell you quickly whether it is right.

That suggests a different way to rank ambitious projects. Value and difficulty matter less than the quality of the oracle: how will we know it works without reading every line? I'd sort candidates into three buckets.

- A reference exists: a migration, a rewrite where the old system can be run side by side on real traffic, a protocol with a conformance suite. Fund these first.
- A measurable target exists: latency, cost per transaction, error rate on your own data. Fine, with the caveat in the next section.
- The answer is "we'll review it." Reading a large system you did not write is slow and error-prone, so the old cost comes back with interest, which is why I keep saying [reviewing is the job now](/2026/reviewing-is-the-job/).

## An oracle you can game is worse than none

In September, ClickHouse's maintainers [removed pgrust from ClickBench](https://github.com/ClickHouse/ClickBench/pull/2165), the public database benchmark. Their pull request alleges that the submitted binary contained kernels written specifically for the benchmark's 43 queries, that hot runs replayed cached answers, and that trivially altered versions of those queries were refused. A pgrust contributor has published a response, and I have not tried to adjudicate it. The argument below holds either way.

It is a useful story for any buyer or builder, because the public number was the oracle everyone had agreed to trust. Any target gets optimized by whatever is working toward it, human or machine, and an agent loop is a relentless optimizer of whatever number you hand it. The more a metric stands in for proof, the more it needs to look like production and the less its test cases should be visible to the thing being tested.

In practice that means holding out a slice. If you are following the advice to [build an evaluation from your own merged pull requests](/2026/your-backlog-is-the-benchmark/), keep half of it unseen by anyone tuning prompts or agents. The same goes for vendor evaluations: a polished demo on the vendor's data is an advertisement, and a trial on yours with a hold-out set is a test.

## Trust moves to people, until it doesn't

Luu admits he did not look closely at pgrust because he knows and trusts Malis. That is a reasonable shortcut, and every executive uses it. It is also exactly what becomes fragile when artifacts are cheap. A polished repository, a clean README and a respectable benchmark chart used to cost real effort, so they carried information about the team behind them. They carry much less now. Reputation fills the gap, and reputation works until someone's incentives meet a leaderboard.

For procurement, this is a small but real shift. "Looks mature" is weaker evidence than it was two years ago, and "let us run it on our data" is stronger.

## What I would do on Monday

If I were advising a leadership team on this, I'd ask for three things.

1. Pull out the five most expensive "not worth it" decisions from the last few years and re-price them. Include the cost of proving the result, not just the cost of building it.
2. Make the acceptance test a deliverable, written before the build and owned by someone who is not building. Keep a portion of it hidden.
3. Start the ambitious work where a reference system or conformance suite already exists, and earn your way toward the fuzzier problems.

There is a fair objection, which Luu includes himself. Yossi Kreinin argues most people should be *less* ambitious with AI-built software, because they cannot reason about large systems they did not write. I think that is true of teams without a harness and false of teams with one. Ambition resembles microservices in that way: it pays off for people who already have the machinery to run it. Building that machinery first is the unglamorous part, and it is probably the real competitive advantage.

If you have a list of projects that suddenly look feasible and want help working out which ones you could actually prove, that is a good use of an [AI advisory hour](/work-with-me/).
