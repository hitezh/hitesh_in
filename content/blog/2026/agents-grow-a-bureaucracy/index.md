---
title: "Coding agents got Cockroach Labs 164x faster. Then came the bureaucracy."
slug: "agents-grow-a-bureaucracy"
date: "2026-10-11"
description: "Cockroach Labs let agents write a million lines of code. Its write-up shows where an agent pipeline's costs hide: undocumented process, a heavy tail, and the review queue."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "ai-strategy"
  - "software-engineering"
  - "engineering-leadership"
  - "economics"
image: images/cover.svg
draft: false
---

Cockroach Labs says it added Db2 support to its database migration tool in under two days, with no human-written code, for $4,172 in tokens. By the company's own estimate, Oracle support in 2024 took about nine months and roughly $160,000 of engineering time. That is where the "164x faster, 38x cheaper" figures come from.

Most of the coverage will stop there. I'd read the other half of [the write-up](https://www.cockroachlabs.com/blog/experiment-running-hospital-code/), the part about what the pipeline did when it went wrong, because that is the part any company copying this will have to build too.

## They built a hospital for agents

Each GitHub issue is a "patient." Fellow agents reproduce the bug and write a treatment plan. Separate "attending" agents review the plan and the code, and their only job is to find faults. A "discharge nurse" audits the review before anything merges, and humans are the chiefs. The house rule is "no code before a plan, no plan without review."

Between April and September the pipeline merged about 1,238 pull requests and landed over a million lines, with only seven reverts. The bill was around $135,000 in tokens, or about $84 per issue. Those are good numbers. The interesting ones are the failures.

## Agents make you write the process down

A duplicate issue got escalated to a human because the protocol had no outcome for "close as duplicate." A one-line copy change on a screen went through five rework rounds.

A person handles a case the manual doesn't cover by shrugging and doing the sensible thing, which is exactly why nobody ever wrote the rule. An agent follows the manual or escalates. So automating a workflow forces you to document the parts everyone knew and nobody wrote down.

I would put that in any agent business case as a cost line. The more tacit your process, the more of the budget goes to documentation, and a better model won't fix that.

## Budget for the tail, not the average

Issue 1777, a one-line fix, took eleven rework rounds over two days. In one review window, three issues consumed about $631 of the $1,046 spent. That is 60% of the money on a handful of items.

So $84 per issue is true as an average and useless as a budget. Cost in these pipelines is lopsided: most work converges quickly and a few items loop. Anyone who has run a distributed system knows retries without a cap are how you take your own service down. Cockroach added a circuit breaker that escalates to a human after four consecutive rounds of new blocking findings or six substantive rounds, and they say they don't yet have good data on whether it works.

The question for a leadership team is simple. What is the ceiling per item, and who gets pulled in when an item hits it?

## The 164x leaves out the person who has to trust it

The authors are candid that the Db2 code had not been fully reviewed by humans when they wrote the post. The comparison sets agent tokens against the fully loaded cost of a 2024 project that was both written and verified. One side of that ledger is a draft.

I'm not criticizing them for it. But a CFO reading "38x cheaper" should ask what the denominator includes. The number I'd want is cost per change that an accountable person has verified, counting the minutes of the scarce people. Issues spent one to two days in the pipeline, often just waiting on human review, which is [the constraint moving to review](/2026/reviewing-is-the-job/) again. Seven reverts is encouraging, though a revert only counts what someone noticed.

I'd also be careful about carrying the multiple to your own roadmap. A migration tool has an unusually clear definition of correct: the data arrives intact or it doesn't. That is the kind of work where [checking is cheap](/2026/point-ai-where-checking-is-cheap/). Where nobody can say what correct looks like, expect a smaller number.

## Review the plan, and don't let the author grade itself

Plans were rejected less than 10% of the time, yet the authors call those catches the most valuable. One plan review spotted a gap that would have put a customer's hostname and database name into telemetry logs. A plan is short, a human can judge it in minutes, and a mistake there costs nothing compared with the same mistake after a thousand lines of code.

The reviewers are also separate agent instances, not the author, and that choice matters. In Epoch AI's recent [InnovationEval test](https://epoch.ai/publications/innovationeval), where frontier models tried to invent an ML technique, both submissions overstated their results. One mentioned running many near-identical experiments and submitting the best only in passing, and the other left it out. An agent's summary of its own work is a claim, not evidence.

## Who becomes the senior engineer?

The Cockroach team says plainly that their system doesn't teach anyone. Their plan is to have junior engineers write the plans and code, and let the agents review them.

That inverts the usual picture. In a pipeline where review is cheap and plentiful, the scarce skill is writing a plan worth approving, and that skill used to be built by doing the junior work agents now do. I wrote earlier about [engineers becoming managers](/2026/every-engineer-a-manager/). The apprenticeship has to be designed on purpose now, or the next generation of reviewers won't exist.

If I were advising a team about to run a pilot like this, I'd ask for three things before anyone writes a prompt: written exits for every state a piece of work can be in, a cost ceiling per item, and a definition of "verified" that counts human minutes. If you want a second pair of eyes on those, that's what an [AI advisory hour](/work-with-me/) is for.
