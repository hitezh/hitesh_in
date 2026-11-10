---
title: "Be more ambitious with software, but only where you can prove it works"
slug: "ambition-needs-a-test-suite"
date: "2026-11-10"
description: "Building software got cheap enough to justify projects you once rejected. What should decide which ones you fund now is whether you can prove the result is right."
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
A few weeks ago, an engineer I respect wrote that [we should be more ambitious with the software we build](https://danluu.com/ambitious/). His evidence was personal: projects that once took a year or more, finished in a handful of hours with an AI agent doing the typing. I think the premise is right, and most leadership teams will draw the wrong conclusion from it.

Ambition got cheap. Knowing whether the result is correct did not.

## Your "no" list is a dated document

Most of us carry a cost model from before coding agents. Somewhere in your backlog, or just in your memory, is a graveyard of ideas killed with "not worth the engineering time": replacing the slow internal tool, ending the license you resent paying, rebuilding the reporting layer nobody trusts. Those verdicts were priced in 2022 labor. Some of them are now wrong, and nobody will reopen them unless a leader asks.

That is the good news, and it is real. Reopening that list is probably the cheapest strategic exercise available to you this quarter.

## Ambition runs ahead of verification

The catch is that building and checking have separated. An agent can produce a replacement for your pricing engine in a weekend. Nobody can tell you in a weekend whether it is right. The rules inside a pricing engine, a loyalty program, a credit decision or a claims workflow live in people's heads and in a decade of edge-case patches.

Projects with a public specification and a pile of tests are different. The agent can grind until the tests pass, and you can see that it did. Most business software has no such pile, and the less you have, the less the new speed is worth.

That suggests a different way to rank ambitious projects. Value and difficulty matter, but the quality of the oracle matters more: how will we know it works without reading every line? I'd sort candidates into three buckets.

- A reference exists: a migration, a rewrite where the old system can be run side by side on real traffic, a protocol with a conformance suite. Fund these first.
- A measurable target exists: latency, cost per transaction, error rate on your own data. Fine, with the caveat in the next section.
- The answer is "we'll review it." Reading a large system you did not write is slow and error-prone, so the old cost comes back with interest, which is why I keep saying [reviewing is the job now](/2026/reviewing-is-the-job/).

## An oracle you can game is worse than none

Once a number becomes the target, whatever is working toward it will find the cheapest way to hit it. People have always done this with sales quotas and exam syllabi. An agent loop does it faster and without any sense of embarrassment, because it will try anything that moves the score, including special-casing the very tests it was asked to pass.

So the more a metric stands in for proof, the more it needs to look like production, and the less of it should be visible to the thing being tested. In practice that means holding out a slice. If you are following the advice to [build an evaluation from your own merged pull requests](/2026/your-backlog-is-the-benchmark/), keep half of it unseen by anyone tuning prompts or agents. The same goes for vendor evaluations: a polished demo on the vendor's data is an advertisement, and a trial on yours with a hold-out set is a test.

## Polish stopped being evidence

There is a quieter second-order effect. A clean repository, a confident README and a respectable benchmark chart used to cost real effort, so they told you something about the team behind them. They tell you much less now, because a convincing surface is nearly free.

Reputation fills the gap, and every executive leans on it. That is reasonable until someone's incentives meet a leaderboard. For procurement, the shift is small but real: "looks mature" is weaker evidence than it was two years ago, and "let us run it on our data" is stronger.

## What I would do on Monday

If I were advising a leadership team on this, I'd ask for three things.

1. Pull out the five most expensive "not worth it" decisions from the last few years and re-price them. Include the cost of proving the result, not just the cost of building it.
2. Make the acceptance test a deliverable, written before the build and owned by someone who is not building. Keep a portion of it hidden.
3. Start the ambitious work where a reference system or conformance suite already exists, and earn your way toward the fuzzier problems.

There is a fair objection: most teams should be *less* ambitious with AI-built software, because they cannot reason about large systems they did not write. I think that is true of teams without a harness and false of teams with one. Ambition resembles microservices in that way. It pays off for people who already have the machinery to run it, and building that machinery first is the unglamorous part. It is probably the real competitive advantage.

If you have a list of projects that suddenly look feasible and want help working out which ones you could actually prove, that is a good use of an [AI advisory hour](/work-with-me/).
