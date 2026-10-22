---
title: "Your AI agent's memory has no owner. Documentation does."
slug: "agent-memory-has-no-owner"
date: "2026-10-04"
description: "Memory plugins let coding agents recall past sessions, but nobody reviews what they store. Written documentation gives the same benefit with an owner, a diff and an audit trail."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-agents"
  - "governance"
  - "engineering-leadership"
image: images/cover.svg
draft: false
---

Kevin Liao makes a blunt case that [agents don't need memory, they need documentation](https://liao.gg/blog/agents-dont-need-memory). Most memory plugins work the same way: mine old sessions for snippets, store them in a vector database, and paste the five most similar ones into every prompt. Liao's complaint is that similarity is not correctness. The agent retrieves what sounds related, not what is current, and nobody can tell which of the ten thousand stored snippets are stale. His alternative is a folder of plain Markdown the agent reads before working and updates afterwards.

I agree with the engineering argument. The reason it matters more to a leadership team is one level up: a memory store is a policy document that nobody wrote.

## Memory is policy without an author

When a coding agent "remembers" that you prefer a certain library, that refunds above a threshold need approval, or that the payments module must never be touched on Fridays, it will act on that as if it were a rule. Where did the rule come from? From a summarizer's reading of a past conversation, possibly a bad one, possibly one where someone was venting.

Compare that with how a company normally changes a rule. Someone proposes it, someone else reviews it, it has a date and a name attached, and it can be reverted. A document in a repository has all of that for free. A row in an embedding store has none of it. So the first question I'd put to any team adopting agent memory is simple: who approved what your agent currently believes about your business, and could you find out?

Most can't answer, which is the same gap I wrote about in [what your agent did](/2026/what-your-agent-did), only one step earlier. You can't audit the actions if you can't audit the beliefs behind them.

## Documentation fails in public, memory fails in private

Every knowledge system goes stale. The useful distinction is whether you can see it happening.

A stale wiki page has a last-edited date, an owner and a history. Someone reads it, sees it describes the old billing flow, and fixes it or complains. A stale memory snippet looks exactly like a fresh one, scores well on similarity, and gets injected anyway. Liao puts it well when he says the past is treated as truth, in a codebase that changes every day.

This changes how I'd think about the cost argument that came up in the discussion. Several people pointed out that maintaining documentation burns tokens, because agents read and rewrite files constantly. True, and it's a real bill. But it's a bill for keeping knowledge correct, which is the part you'd otherwise pay for later in incidents. Memory looks cheaper mostly because it hides its maintenance cost.

## The agent will find your documentation debt

Here is the observation I find most useful in practice. An agent that works from documentation is only as good as the documentation, and most companies have never been forced to write the important things down: why the pricing tiers look the way they do, which integrations are fragile, what was decided in the last architecture argument and why.

Humans cope with that gap through hallway knowledge. Agents can't. Teams that adopt agents often discover that their first real constraint is not the model or the harness but the state of their own written knowledge. A pattern I've noticed is that the teams who already kept decision records and a decent README get better results from the same model, and they assume the tool must be better.

Seen this way, documentation work stops being a chore and becomes the cheapest AI investment on the list. It improves the agent, it onboards new engineers, and it survives a change of vendor. Memory formats are usually proprietary to the tool that wrote them. A folder of Markdown moves anywhere, which is the same argument I made about [owning what the harness learns](/2026/rent-the-harness-own-what-it-learns).

## The honest objection

Peter Naur argued in [Programming as Theory Building](https://gwern.net/doc/cs/algorithm/1985-naur.pdf) that a program's real value is the theory in its builders' heads, and that documentation can't fully carry it. That's fair, and it's why I wouldn't try to document everything. Preferences and quirks, such as a user's formatting habits, are fine to keep as lightweight memory. The line I'd draw is by consequence: anything that changes what the agent is allowed to do, or how it interprets your business, belongs in a document a person can review. Anything that merely makes it more pleasant to work with can stay in memory.

## What I'd do on Monday

1. **List what your agents currently remember.** If you can't export it in a readable form, treat that as a finding.
2. **Move decisions and constraints into reviewed files.** Architecture decisions, escalation rules and the reasons behind them. Put them through the same pull request process as code.
3. **Give each file an owner and a review date.** Staleness should be something a person gets pinged about, not something a similarity score decides.

The companies that get the most out of agents will probably be the ones that were already good at writing things down. If you want to find out how ready your knowledge is for agents, that's a good use of an [AI advisory hour](/work-with-me/).
