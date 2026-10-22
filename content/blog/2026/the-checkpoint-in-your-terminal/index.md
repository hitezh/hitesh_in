---
title: "The checkpoint in your terminal"
slug: "the-checkpoint-in-your-terminal"
date: "2026-07-01"
draft: false
description: "A developer found code inside Claude Code that fingerprints requests routed through resale proxies tied to Chinese AI labs. Who it targets is the small story. What it means for every other tool you run without reading the source is the big one."
categories:
  - "technology"
tags:
  - "ai"
  - "developer-tools"
  - "trust"
  - "regulation"
---

A developer went digging through Claude Code's client-side source this week and found something that wasn't in any changelog: conditional logic that checks whether a request looks like it's being routed through a reseller proxy, the kind used to get Anthropic's models into markets they're not supposed to reach, and quietly marks it. The write-up is [here](https://thereallo.dev/blog/claude-code-prompt-steganography), and one detail stood out to the developers who reverse-engineered it: part of the check fires on hostnames associated with Chinese AI labs, the sort of thing that only makes sense if you're trying to spot traffic being relayed to Anthropic's real API by a middleman rather than an end user.

I've written before about how far export control has crept into the ordinary experience of using these models: [the government ID check](/2026/when-your-ai-asks-for-a-government-id/) before you get near the frontier model, [the permit list](/2026/frontier-ai-by-permit-only/) that decides which institutions qualify. This is the same instinct, one layer deeper. It's not a login gate anymore. It's code shipped to your machine, running locally, checking your traffic pattern against a target list before you've typed a word of your prompt.

## The target makes sense. The place it lives doesn't.

Slowing down distillation and grey-market resale is a real business interest, and a defensible one. Every foundation lab is watching competitors get trained on the outputs of their own models at a fraction of the cost, and US export policy makes some of that resale illegal outright. If I were running Anthropic's product security team, I'd want a way to know when my API was being resold through a proxy in a jurisdiction it isn't licensed to serve.

What I wouldn't do is put that check inside client software that millions of ordinary developers install to write code, and say nothing about it beyond a line buried in the kind of compliance documentation nobody reads end to end. A tool you invite into your terminal, with read and write access to your codebase, environment variables, and often your `.env` file, is a tool you're extending a specific kind of trust to: I'll run what you send me, because I believe it's here to help me ship code. Finding out it's also silently profiling your network path for a compliance team's target list is a different deal than the one you thought you signed.

## It catches the wrong people

Here's the part that should bother you even if you have no sympathy for anyone trying to route around export controls. A fingerprint like this doesn't catch a well-funded distillation operation, the kind with the engineering budget to strip a hostname check out of an open client and re-route around it in an afternoon. It catches the developer running a corporate proxy for compliance reasons, the one self-hosting a router to switch between providers, the one on a VPN because their home ISP is unreliable. Ordinary, legitimate, slightly unusual traffic is exactly what a naive fingerprint flags, while the sophisticated target it was built for has both the motive and the means to evade it fastest. That's not a flaw in the implementation. It's the shape every fingerprinting defense takes once it meets people who have a reason to look normal.

## What I'd actually want from a vendor here

Not a promise that no telemetry exists, that ship has sailed for every SaaS tool since 2010. What I'd want is a published, specific list of what a coding tool checks about my environment and why, the same way a payments processor has to tell a bank what fraud signals it scores on. Anthropic and every other lab shipping an agentic coding tool are, whether they've said so or not, now in the business of writing software that runs with elevated trust inside other people's businesses. That comes with a disclosure bar higher than "it was in the PDF."

Until that bar exists, the honest thing to do if you're standardizing a dev team on one of these tools, especially in a regulated shop, is to ask the vendor directly what their client checks and reports, and not accept "for security reasons" as the whole answer. If they can't tell you, that's your answer.
