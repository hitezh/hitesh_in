---
title: "Anthropic replaced git because git assumes a human is typing"
slug: "tools-built-for-human-speed"
date: "2026-10-14"
description: "Merges grew tenfold in five months and source control became the bottleneck. The lesson for other companies is to find which of your tools still assume a person is the user."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "software-engineering"
  - "architecture"
  - "engineering-leadership"
---

Anthropic's merges per day went from about 2,500 in May to over 30,000 by September. In [its own account](https://www.anthropic.com/engineering/redesigning-source-control), source control became "our biggest development bottleneck." Seven engineers spent five months replacing git for the monorepo with an in-house system called Scion.

Most companies should not copy that. The more useful thing to copy is the diagnosis, because the thing that broke was not a model, a prompt, or an agent framework. It was a tool that had quietly assumed who its user was.

## Every tool has a user in mind

Git was designed for people. A person works offline, makes a few changes an hour, keeps a full copy of history on their laptop, and tolerates a clone that takes a few minutes. Those assumptions are invisible when the user is a person, which is why nobody wrote them down.

Now put an agent in that seat. Anthropic runs about 25 million CI checkouts a day against a working copy over 25 GB compressed. Fetched naively, that is more than 600 petabytes of traffic daily. The agents never need offline mode and have no patience to spend on a clone, so they were paying for features built around a different kind of user.

That is why Scion starts from the opposite assumption: [clients are always online](https://www.anthropic.com/engineering/redesigning-source-control), commits happen on the server, and nothing keeps a full copy of the repository anywhere.

## Find your own human-scale assumptions

You probably don't have a source control problem. You almost certainly have a few tools, or processes, built around a person's pace. Look at where work waits:

- A change approval that meets weekly.
- An access request that goes through a ticket and an email.
- A staging environment that one team can use at a time.
- A security review sized for ten releases a quarter.
- A procurement or vendor check that takes six weeks.

None of these were mistakes when a human produced the work. They become the constraint the moment the work arrives ten times faster. I wrote earlier that [the constraint moves to review](/2026/reviewing-is-the-job/). The broader pattern is that it moves to whichever system was sized for human throughput, and that is rarely the one leadership is watching.

A simple test for any tool in your stack: who is the user it assumes? If the honest answer is "a person, working at a person's speed," then AI adoption will eventually push on it, and it is better to find that on your own schedule.

## Don't copy the fix, measure the wait

Anthropic itself says Scion is not a general replacement for git. It would force a company to migrate code review, search and CI along with it, and their versions of those are bespoke. At 30,000 merges a day, a custom system is rational. At 300, it would be a very expensive hobby.

For most teams the equivalent move is cheaper and duller. Time every handoff between "work finished" and "work live," and look at the median wait at each one. I'd expect the longest wait to be a human queue rather than a technical limit, and a human queue is usually fixable with a policy change, not a platform. This also fits the rule that most companies should buy before they build. Wait for the vendors to ship the server-side features Anthropic is asking git platforms to add.

## Agent-first can mean auditable by design

Scion puts every commit, rebase and merge on the server. Commenters were quick to object that this gives up the local, offline workflow that makes git pleasant for a developer, and they are right about the cost.

There is a side effect worth noticing, though. When every action runs through a central API, you get per-directory permissions and a complete record of what each agent did without bolting anything on. Anthropic describes review rules that treat a comment-only edit differently from a change to sensitive logic. For an executive worried about what agents are allowed to do, this matters more than the speed. The cheapest governance is a system where an agent can't act without leaving a trace.

When you choose tools for an agent-heavy workflow, ask whether its actions are addressable by an API and logged by default. That tells you more about future risk than a feature checklist does. It is the same question I raised in [who chose your agent's default stack](/2026/your-agents-default-stack/): somebody should decide, deliberately, what an agent is allowed to touch.

## What the seven engineers actually did

One detail in the account is easy to skim past. Anthropic says the engineers' most valuable contribution was often telling Claude "no," when a proposed design broke a constraint of the system. A small team, five months, a tenfold increase in volume, and the scarce skill was knowing which invariants must never move.

That changes how I'd think about hiring and about where senior people sit. The person who can say "that violates how the system must behave" is worth more with agents than without them, because the agents will happily produce a plausible violation at scale.

## What I'd do on Monday

1. List the five slowest handoffs between finished work and live work, and mark which ones wait on a person.
2. For each core tool, write down the user it assumes. Flag anything that relies on offline work, one change at a time, or a human reading every line.
3. Before buying any agent tooling, check whether its actions are logged and permissioned by default.

The model race gets the headlines, and companies compete on execution anyway. The firms that pull ahead will be the ones that noticed which of their systems still assumed a person was typing. If you want to work out where yours are, that is the kind of problem an [advisory hour](/work-with-me/) is good for.
