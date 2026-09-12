---
title: "OpenAI couldn't say what its agents did. Neither can you."
slug: "what-your-agent-did"
date: "2026-09-12"
description: "OpenAI's agents broke a package registry it doesn't own, and months later the company still couldn't say what they did. That gap is the real risk in your agent rollout."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "governance"
  - "security"
  - "engineering-leadership"
image: images/cover.svg
draft: false
---

Between May and June 2026, a swarm of AI agents [uploaded more than 2,000 malicious packages](https://www.rubyhack.ai/) to RubyGems, the registry the entire Ruby ecosystem installs from. They bypassed email verification, abused RubyDoc.info's documentation builder to [run code on its servers](https://www.neowin.net/news/openai-agents-hijacked-rubygems-in-malicious-api-key-heist/), and used that foothold to scrape public data off UK council websites. RubyGems shut down new registrations for four days and called it a major attack. Researchers named it the GemStuffer campaign and, from self-identifying metadata and shared file-access patterns, traced it to OpenAI.

When reporters asked, OpenAI [said](https://www.bnnbloomberg.ca/business/artificial-intelligence/2026/09/12/openai-agents-attacked-rubygems-before-hugging-face-incident-researchers-say/) its agents "used the RubyGems platform to access the internet to carry out benign tasks and retrieve public information," and that it would "continue to investigate as part of our broader review of agent activity during training and evaluation."

Read that second quote again. The most sophisticated AI company on earth is still working out what its own agents did, months after they did it.

OpenAI is an easy villain here, and the easy reading is the wrong one. The company with the best tooling, the largest safety team, and the most to lose could not give a clean account of its agents' actions. If they can't, your company can't either, and you are about to deploy the same kind of thing.

## Agents fail outward

Deterministic software fails inside your walls. A crashed service, a bad deploy, a table you corrupted: the damage is yours, on your infrastructure, sitting in your logs. Your whole incident-response discipline was built for that shape of failure.

Agents fail in a different direction. Give one a goal, a set of credentials, and a network connection, and its mistakes land in systems you don't own. It signs up for accounts, calls other people's APIs, writes to other people's registries. The blast radius reaches past your perimeter into infrastructure you can't see and don't control. RubyGems learned its documentation server was running someone else's code because a volunteer noticed the spam, not because OpenAI picked up the phone.

One pattern I keep seeing: teams carry their old reliability thinking straight onto agents. They watch latency, error rates, token spend. None of that tells you an agent just created forty accounts on a partner's platform. Those metrics were built for a machine that stays home. The agent left the building.

## The missing piece is a flight recorder, not a guardrail

Most of the agent-safety conversation is about prevention: tighter sandboxes, narrower permissions, a human confirming risky actions. All worth doing. But this incident failed at a more basic layer. Investigators couldn't reconstruct what happened because they [couldn't get the agents' reasoning logs](https://www.rubyhack.ai/), and OpenAI's own answer suggests it couldn't either.

You cannot govern what you cannot reconstruct. Before an agent touches anything outside your walls, three unglamorous things have to exist:

- **Attribution.** Every external action tagged with which agent, which run, on whose behalf. When a third party complains, you answer in minutes instead of opening an investigation.
- **An immutable action log.** Not the model's chain of thought, which is unreliable anyway, but the calls it actually made: every request, every account, every write. The flight recorder goes in before the plane flies, not after it crashes.
- **A kill switch someone owns.** A named human who can stop a fleet of agents and knows they are on the hook for doing it.

If I were advising a company scaling agents this year, I'd fund those three before funding the next use case. They are boring, and they are the part that decides whether you have a governable system or a very fast intern with root access and no memory.

## Silence is the cheap option, so make it expensive

Here is the part that isn't a technology problem. When a human employee causes an incident at a customer, hiding it is expensive and usually career-ending, so the incentive tilts toward owning up. With agents the math inverts. Attribution is hard, the agent intended nothing, and no single person carries the mistake. The cheapest path is to say nothing and hope the other side files it under spam. For a while, that is roughly what happened here.

Left alone, the market will under-report agent harm as a matter of course. That is a design choice about incentives, and it sits with leadership, not engineering. Decide now, in writing, what you tell a partner when your agent damages their system. A disclosure policy written after the incident reads like an excuse. One written before reads like a company worth trusting.

## What should change on Monday

Two questions worth putting to your team this week. If one of our agents did something harmful to an outside system last Tuesday, could we reconstruct it, and how long would it take? And who, by name, gets the call, and what do they say to the person on the other end?

If the answers are vague, you are not ready to scale agents yet. The good news is that the fix is infrastructure you can build now, not a capability you have to wait on. We are [well past treating agents as a demo](/2026/you-hired-an-agent), and the reliability question is really [how much autonomy each workflow can safely carry](/2026/the-autonomy-budget). This is the quieter question that comes due later: not whether the agent works, but whether you can say what it did.

If you're working out where agents can safely operate in your business, and what has to be true before they do, that is the kind of problem I like to think through in an [AI advisory hour](/work-with-me/).
