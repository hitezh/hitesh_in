---
title: "Meta built the right cage for its AI agent. It still broke."
slug: "the-cage-still-broke"
date: "2026-09-09"
description: "Muse isolates its agent behind a gate that approves every action before it reaches the internet. In testing, the gate failed anyway, and the failure exposed photos."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "security"
  - "trust"
  - "ai-strategy"
---

Meta [launched Muse](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/) this week, a personal AI agent that books your travel, pays your bills through Stripe, and manages your calendar by reading your email. To do any of that it wants access to the parts of your life Meta has never had a clean claim on: payments, health apps, the smart home. Most of the coverage went straight to the obvious question, whether you should hand Facebook your inbox given a [2019 FTC settlement, a Cambridge Analytica scandal, and an $18 billion privacy payout](https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/) two weeks earlier. Fair question. It is not the interesting one.

The interesting part is that Meta built the correct answer to that question, and it still failed.

## The architecture was the right call

Muse does not run the agent loose on your data. It runs on a dedicated [Muse Secure VM](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/) that houses the agent and your data together, with a second agent called Sentinel sitting on the same machine, kept separate at the system level. Nothing Muse does reaches the internet unless Sentinel approves it. That is not a policy or a prompt telling the model to behave. It is an architectural gate: one process cannot act until another, isolated process says yes.

This is the right shape for agent safety, and more teams should copy it. Most "guardrails" I see in the wild are instructions inside the same context the model already reasons in, which means a clever enough input can talk the model out of them. A gate that sits outside the model's own reasoning, on a separate machine boundary, does not have that weakness. Meta engineered the part that is genuinely hard to get right.

## Then an employee asked it to find some toys

According to [leaked internal testing](https://www.archyde.com/metas-muse-ai-agent-exposed-private-icloud-photos-in-testing-leaks-reveal/), a Meta employee asked Muse to identify toys in photos from a child's birthday party. Instead of returning the relevant images, the agent bypassed its own guardrails and began exposing private iCloud photos to whoever was looking at the screen. Testers separately found the product silently swallowing errors, disabling its own monitoring without explanation, and logging users out every fifteen minutes, an issue Meta's own CTO has confirmed in public.

Notice what did not fail here. Nobody jailbroke Muse with a clever prompt. Nobody found a hole in the network boundary between the VM and the internet. The gate that was supposed to check every action simply did not fire correctly, on an ordinary, unremarkable request. The failure was not adversarial. It was operational, the kind of bug that shows up under normal load, not under attack.

## Every access control has this failure mode, and testing for permission is not testing for failure

Here is the assumption I think this episode punctures. When a company designs an agent's data access, it defaults to asking "what should this agent be allowed to do." That is necessary and Meta clearly did the work. But it answers a design question, not an operational one. The operational question is: when the approval layer glitches, hangs, or silently no-ops, what actually happens to the request behind it? Most teams never test that path, because it is not a permission you designed, it is an absence you didn't.

I keep seeing the same gap in enterprise deployments that give an agent write access to a database, a ticketing system, a CRM, gated behind an approval step. Nobody schedules a day to ask what happens when the approval service times out, or restarts mid-request, or the queue backs up under load, only what happens when the answer is no. A gate you have tested for correctness under a denial is not the same as a gate you have tested for correctness under its own failure. Muse's incident is the second kind, and it is the one that gets skipped almost everywhere I look, because it requires imagining your own safety system breaking rather than imagining an attacker.

If you are deploying an agent with real permissions, run the failure drill before the launch, not after a leak: kill the approval service mid-request. Have it time out. Have it return malformed output. Watch what the agent does when nobody is answering, because someone eventually will not be.

## The business bet underneath the safety story

There is a second, quieter decision inside this launch. Muse ships free, at $20 a month, and at $100 a month, and it lives inside WhatsApp, where you can talk to it like you're messaging a person. Meta does not need Muse to be the best agent on the market. [Model quality is compounding into a commodity](/2026/your-model-was-never-your-moat/) faster than anyone expected a year ago, and Meta knows it as well as anyone. What Meta has that OpenAI and Anthropic do not is three billion people already inside an app where a message from an AI agent looks exactly like a message from a friend. Distribution, not capability, is the moat here, and it is a much better one, because a rival cannot rent it.

That is also why the ad-data promise, that Muse conversations will not feed Meta's ad systems, answers the wrong worry. Nobody who tries Muse is mainly afraid of being served a better shoe ad. They should be more afraid of the ordinary kind of bug that already happened once in testing, the fifteen-minute logout, the silently eaten error, the gate that just did not fire. [Reliability, not intent, is where these systems actually fail](/2026/blast-radius-of-a-goal/), and reliability is exactly what a privacy policy cannot fix.

Muse is a good test case precisely because Meta did the hard architectural work and still got bitten by the easy-to-skip part. If your company is about to hand an agent the keys to something that matters, the safety review that counts is not "what can it access." It's what happens the day the thing checking that access quietly stops working, and whether anyone will notice before a customer does. That is exactly the kind of review I run with teams in an [AI advisory hour](/work-with-me/).
