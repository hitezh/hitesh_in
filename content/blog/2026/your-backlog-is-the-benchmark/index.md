---
title: "Your backlog is the only benchmark that matters"
slug: "your-backlog-is-the-benchmark"
date: "2026-07-09"
description: "Public coding benchmarks have decoupled from real work. The teams getting value from AI build a small evaluation from their own merged pull requests instead."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "llm"
  - "strategy"
image: images/cover.svg
draft: false
---

On the 8th of July, OpenAI published [an audit of the coding benchmarks](https://openai.com/index/separating-signal-from-noise-coding-evaluations/) everyone uses to rank models, including SWE-bench, and reported that roughly 30% of the tasks in the Pro set were broken in ways that quietly distort the scores. This from the company with every incentive to keep those numbers looking meaningful. When a lab audits the scoreboard it competes on and tells you the scoreboard is unreliable, the honest reading is that the number on the leaderboard has stopped measuring the thing you are trying to buy.

That matters because the leaderboard is how most teams still choose an AI coding tool. Pick the model at the top, wire it in, move on. I want to argue for the opposite habit: ignore the public ranking almost entirely, and build a small benchmark out of your own merged pull requests. It is a weekend of work, and it is the highest-return AI decision most engineering teams can make this quarter.

## A public benchmark has a half-life

The problem is structural, not a bug someone will fix. The day a benchmark is published it becomes a target, and anything measurable that becomes a target gets optimised for directly. Solutions leak into training data, models are tuned against the specific tasks, and the score climbs while the underlying capability moves much less. A public coding benchmark is therefore most informative the day it ships and decays from there. By the time it is famous enough for a procurement conversation, it is mostly contaminated.

There is a second problem the contamination hides. Even a clean benchmark is measuring generic tasks in common languages, and your codebase is neither generic nor common. When Databricks built their own evaluation they noted that SWE-bench did not reflect their [polyglot stack](https://www.databricks.com/blog/benchmarking-coding-agents-databricks-multi-million-line-codebase) of Python, Go, Rust, Scala, Bazel and Protobuf. A model that tops a Python-heavy leaderboard tells you very little about how it handles your Bazel build files or your ten-year-old Scala service. The score is real. It is just answering a question you did not ask.

## What you learn when you measure your own work

Databricks did the thing I am recommending, at scale. They took more than a hundred real merged pull requests, stripped the solutions out to turn them into tasks, and graded agents by actually running the tests rather than asking another model to judge the output. The findings are worth sitting with, because none of them are visible from a leaderboard.

The model was not the biggest lever. The *harness*, the scaffolding that feeds the model context and runs its tools, produced up to 2x cost differences for the same underlying model. Your integration choices, not the vendor you picked, dominated the bill. Price-per-token, the number every vendor puts on the slide, turned out to mislead: Sonnet 5 was cheaper per token than Opus and yet cost more per task, because a model that reasons its way to an answer through more tokens can be dearer than a pricier model that gets there directly. And roughly a quarter of the work was low-complexity, the kind a cheap model handles fine, yet the expensive model was the default for all of it. That last one is pure margin left on the table, invisible until someone measured it.

I have made the routing argument before, that [model choice is really a routing decision](/2026/your-model-was-never-your-moat/) rather than a single pick. What is new here is where the evidence comes from. You cannot route work you have never measured, and you cannot measure it against a benchmark built from somebody else's code.

## The eval is really a definition of "done"

Here is the part that has nothing to do with cost, and is the reason I push teams to do this even when the tooling budget is not the concern. To turn a merged pull request into a benchmark task, someone has to decide what "correct" means for that change. Not "the tests pass" in the string-matching sense, but does this change actually do what the reviewer intended. Databricks found they had to rewrite tests to check behaviour rather than surface, which is a polite way of saying their existing tests did not fully capture what done meant.

Most teams have never written that definition down. The eval forces it. You end up with a shared, executable statement of what good work looks like in your codebase, which is the same artefact you need for onboarding a new engineer, for reviewing AI output you can't fully trust, and for the [silent, plausible-but-wrong failures](/2026/when-ai-passes-every-test-and-still-gets-it-wrong/) that the newest models produce and that a tired reviewer waves through on a Friday. The benchmark is the visible output. The clarity about what you are actually trying to build is the thing worth having.

## What I would do

If I were advising a team on this, the plan is dull and cheap, which is usually the sign it is right. Pull fifty to a hundred recently merged pull requests that had real test coverage. Strip the solutions, keep the tests, and run your candidate tools end to end against them, grading on whether the tests pass rather than on how the diff looks. Measure cost per completed task, not per token. Then split the results by difficulty and route accordingly: the cheap model for the boilerplate majority, the expensive one reserved for the hard minority where it earns its price.

You will get three things a leaderboard can never give you. A tool decision grounded in your code instead of someone else's. A cost structure that reflects the work you actually do. And a definition of done that keeps paying off long after this month's model releases are forgotten. The eval is the one asset in this whole stack that does not commoditise, because it is built from something only you have.

Everyone is going to keep watching the leaderboards. The teams that get more out of these tools than their competitors will be the ones who quietly stopped trusting them and measured the work in front of them instead.

If you are trying to work out how to evaluate AI coding tools against your own codebase rather than a leaderboard, that is exactly the kind of question worth [an advisory hour](/work-with-me/).
