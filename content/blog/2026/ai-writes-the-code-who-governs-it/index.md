---
title: "AI Writes the Code. Who Governs It?"
slug: "ai-writes-the-code-who-governs-it"
date: "2026-06-11"
draft: false
description: "Almost every team now codes with AI; only a third governs it. The teams pulling ahead review AI's output as seriously as they once reviewed their own code."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "security"
  - "governance"
  - "engineering-leadership"
---

A new survey of 831 engineers found that 97% of teams now use AI coding assistants. Only 30% have a fully governed way of overseeing what those assistants produce, and a quarter have no AI coding policy at all.

I wrote recently about the [sovereign engineer](/2026/beyond-the-chatbox-the-rise-of-the-sovereign-engineer/), the engineer who owns outcomes rather than just output. This is the other half of that argument, and a less flattering one. If you are going to own the outcome, you have to own the code an AI wrote on your behalf. Most teams have skipped that part.

## Adoption is real; governance lags

The numbers come from a [March 2026 survey](https://www.infosecurity-magazine.com/news/ai-coding-adoption-governance-lags/) run by UserEvidence for Black Duck. GitHub Copilot is in 83% of teams and Claude Code in 63%, and most run more than one. This stopped being early-adopter enthusiasm a while ago. It is how software gets written now.

Control has not kept pace. Two-thirds of teams called automated tracking of AI-generated code extremely important, then admitted they still flag it by hand in pull-request comments, when they flag it at all. We industrialised the writing and left the reviewing on the honour system.

A CISO quoted in the survey put it plainly: *faster code is not the same thing as safer code.* That sentence belongs above every engineering manager's desk this year.

## What the unreviewed code actually contains

It is tempting to treat this as a paperwork problem of missing policies and dashboards. What makes it urgent is what sits inside the code.

Veracode's [2025 GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/) tested over 100 models across 80-plus coding tasks and found that **45% of AI-generated code introduced a security vulnerability**. These were not exotic flaws. They were OWASP Top 10 issues we have known how to prevent for fifteen years. The models failed to defend against cross-site scripting in 86% of relevant cases and log injection in 88%. Java fared worst, failing about 72% of the time.

The most sobering part is that newer and larger models did not do better. Scale does not seem to fix this, because generating plausible code from patterns is a different activity from reasoning about a threat model.

Volume compounds the rate. Apiiro tracked roughly 7,000 developers across 62,000 repositories and watched monthly security findings climb from about 1,000 to over 10,000 in six months, a [tenfold jump](https://apiiro.com/blog/4x-velocity-10x-vulnerabilities-ai-coding-assistants-are-shipping-more-risks/) by mid-2025. AI-assisted developers commit three to four times faster than their peers. A 45% defect rate multiplied by 4x throughput gives you a backlog of risk that grows faster than anyone can read it.

Worse, the *kind* of flaw shifted. Syntax errors dropped 76% and logic bugs fell 60%; AI is genuinely good at the small stuff. But privilege-escalation paths rose 322% and architectural design flaws rose 153%. The mistakes moved up the stack, from the typos a compiler catches to the design decisions only a human reviewer can catch. AI cleaned up the cheap bugs and multiplied the expensive ones.

## The bottleneck moved, and we didn't

For most of my career the constraint on shipping was writing the code. That constraint is mostly gone, and validating the code has taken its place. Almost no one has staffed for that or built process around it.

That is the trap. Productivity dashboards light up because output went up, while the work that should have grown with it (review, threat modelling, testing the security properties of generated code) stays invisible until something breaks. Teams feel faster while their risk-adjusted throughput sits flat or worse.

The Apiiro researchers put it well: if you mandate AI coding, you have to mandate AI security review alongside it, or you scale risk at exactly the pace you scale productivity. Governance is not something you bolt on after the incident.

## What governing it actually looks like

The encouraging finding in the same survey is that governance pays for itself. Where AI use was fully governed, 90% of teams reported a major efficiency gain. Among teams without governance, that fell to 44%. For these teams the structure is what let them trust the speed.

In practice this is unglamorous and does not need a new platform purchase:

- **Know what's AI-written.** You can't review what you can't see. Tag it automatically at commit time instead of asking developers to remember in a PR comment.
- **Write a real policy, not a memo.** Which assistants are approved, what they may touch, what must never be pasted into them. A quarter of teams have nothing here, which makes it the easiest gap to close this quarter.
- **Treat AI output as guilty until proven innocent.** At a 45% defect rate, trusting generated code by default is indefensible. Run the same SAST, dependency, and secrets scanning you run on human code, harder and earlier.
- **Review architecture, not just diffs.** The dangerous flaws are design-level now. Approving a 600-line AI patch on vibes is not review; it is laundering.

None of this is new. It is the discipline we already knew we needed, finally made non-negotiable by the volume.

## The dividing line

We will look back on this period as the moment we found out whether we could be trusted to supervise the software we had AI write. The 97% who adopted and the 30% who govern are turning into two different groups of companies, with two very different incident logs.

Owning the outcome of code you did not type, from a tool that is wrong almost half the time, is the harder and more honest version of the job. The teams that manage it will be the ones who actually read what the machine wrote.
