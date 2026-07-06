---
title: "The code you can't explain"
slug: "the-code-you-cant-explain"
date: "2026-06-24"
draft: false
description: "AI agent loops have made code fast and cheap to generate. The hard part, knowing what to build and staying in ownership of it, is still entirely yours."
categories:
  - "technology"
tags:
  - "ai"
  - "software-engineering"
  - "opinion"
image: images/cover.svg
---

Velocity is up, defects are stable, deployments are more frequent. Ask who in the team could refactor the payment module from scratch, and the room goes quiet. The understanding that used to build up through the act of writing has been offloaded somewhere faster and less visible.

Armin Ronacher wrote about this last week in [a piece about what he calls "the coming loop"](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/). His technical concern is specific: AI harnesses that drive coding agents past their natural stopping points, cycling until something passes a test, tend to produce code that is defensive, patchy, and local in its reasoning. Present-day agents add null checks rather than eliminating bad states through strong types; they patch locally rather than preventing the class of problem at the source. But the discussion his post sparked turned personal fast.

One developer wrote that they had basically stopped writing code in their spare time. The analogy they used was transcribing a phonebook while standing next to a photocopier. Another was thinking about leaving the industry. Overwork was not the complaint. The word that kept coming up was estrangement.

## The spec is still yours

The hard work of software development is deciding what to build, why, and what trade-offs are acceptable. Writing the code is, comparatively, the easy part. What the agent loop changes is that code now arrives faster than most teams can reason about it, which moves the bottleneck to the hardest part of the job while making the gap invisible in your metrics.

Writing a spec precise enough for an agent to deliver the right thing takes nearly as long as a capable engineer would have taken to write the feature. The speed gain is genuine, but it requires front-loading every architectural decision. Teams that skip this end up correcting outputs and wondering why the productivity gains feel hollow.

## The debt you can't see

Old technical debt was at least legible. You could grep for the hacks, point at the layers that needed a rewrite, schedule the cleanup. The new kind lives in the gap between what the code does and what the team understands.

Ronacher's specific warning is about dependency: if your codebase can only be maintained by continuously running expensive AI sessions against it, the complexity has not gone away. It has moved somewhere the team can no longer see. Lose access to powerful models or face a cost spike, and you are holding a system nobody fully comprehends. That is an architectural constraint you accepted without pricing it in.

The gap shows up in post-mortems where nobody can explain root cause. In onboarding, when a new engineer asks why the data model is structured this way and the team has to ask an AI to reconstruct the reasoning. In architectural drift, when there is no shared mental model left to push back against a bad decision.

## Use the loop for verification

The loop Ronacher describes is genuinely useful for bounded tasks: porting code, security scanning, performance benchmarking, writing tests against an existing interface. Where it creates problems is in the parts of the codebase where long-term understanding matters: the core domain model, the API contracts, the data schema.

Write those yourself. Then let the agent audit, test, and hunt edge cases. The code you write is code you can explain, defend, and fix when something breaks at 2 AM.

## What I do with clients

At OptCulture and across the advisory work I do with banks and retail teams, I've been watching this play out up close. The teams that are getting it right have settled on a few practices.

Before any agent generates a line of code, I ask for a written plan: what is being built, how it fits the existing architecture, what the approach will be. The agent can produce the plan; a human reviews and approves it before coding starts. This is just the spec work made explicit, and it slows down the first five minutes to save hours later.

Tasks stay small enough to be reviewable in one sitting. A 400-line PR touching seven files is difficult for anyone to genuinely own, regardless of how it was written. If you cannot summarise a PR in two sentences, it needs to be split.

Validation happens at every commit, not just CI. A human reads the diff with one question: does this do what the plan said, and does anything here surprise me? If the answer is yes, stop and ask before merging.

Reviews are not sign-offs. A reviewer who finds something they cannot explain sends it back rather than approving it with a comment. The loop continues until the reviewer can genuinely describe what they are merging. This takes longer than a one-pass approval workflow, and that is the point.

I also run automated code review as a first pass before any human reviewer touches a diff: linters, static analysis, and increasingly an AI reviewer checking for common patterns. This filters the surface noise and lets the human reviewer focus on what actually requires judgment.

None of this is complicated. The hard part is holding the line when the team is moving fast and the output looks polished.
