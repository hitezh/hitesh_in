---
title: "AI Writes the Code. Who Governs It?"
date: "2026-06-11"
draft: false
description: "Almost every team now codes with AI, but only a third govern it. The teams pulling ahead aren't the ones adopting fastest — they're the ones who treat reviewing AI's output as seriously as they treated writing their own."
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

A new survey of 831 engineers found that 97% of teams now use AI coding assistants. Only 30% have a fully governed way of overseeing what those assistants produce. A quarter have no AI coding policy at all.

I wrote recently about the [sovereign engineer](/2026/beyond-the-chatbox-the-rise-of-the-sovereign-engineer/) — the engineer who owns outcomes, not just output. This is the other half of that argument, and it is less flattering. If you are going to own the outcome, you have to own the code an AI wrote on your behalf. Most teams have skipped that part.

## The adoption is real. The governance isn't.

The numbers come from a [March 2026 survey](https://www.infosecurity-magazine.com/news/ai-coding-adoption-governance-lags/) run by UserEvidence for Black Duck. GitHub Copilot is in 83% of teams, Claude Code in 63%, and most run more than one. So this is not early-adopter enthusiasm anymore. It is the default way software gets written.

What hasn't kept pace is anything resembling control. Two-thirds of teams said automated tracking of AI-generated code is extremely important — and then admitted they still flag it by hand in pull-request comments, when they flag it at all. We have industrialised the writing and left the reviewing in the era of the honour system.

A CISO quoted in the survey put it plainly: *faster code is not the same thing as safer code.* That sentence should be printed above every engineering manager's desk this year.

## What the unreviewed code actually contains

It would be easy to treat this as a paperwork problem — missing policies, missing dashboards. The reason it matters is what's inside the code itself.

Veracode's [2025 GenAI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/) tested over 100 models across 80-plus coding tasks and found that **45% of AI-generated code introduced a security vulnerability**. Not exotic ones, either — these were OWASP Top 10 flaws we have known how to prevent for fifteen years. The models failed to defend against cross-site scripting in 86% of relevant cases and log injection in 88%. Java fared worst, failing about 72% of the time.

The part I find most sobering: newer and larger models did not do better. This isn't a bug that scale will quietly fix. It is a structural property of generating plausible code from patterns rather than reasoning about a threat model.

And the volume compounds the rate. Apiiro tracked roughly 7,000 developers across 62,000 repositories and watched monthly security findings rise from about 1,000 to over 10,000 in six months — a [tenfold jump](https://apiiro.com/blog/4x-velocity-10x-vulnerabilities-ai-coding-assistants-are-shipping-more-risks/) by mid-2025. AI-assisted developers commit three to four times faster than their peers. Multiply a 45% defect rate by 4x throughput and you don't get a productivity story; you get a backlog of risk growing faster than anyone can read it.

Worse, the *kind* of flaw shifted. Syntax errors dropped 76% and logic bugs fell 60% — AI is genuinely good at the small stuff. But privilege-escalation paths rose 322% and architectural design flaws rose 153%. The mistakes moved up the stack, from the typos a compiler catches to the design decisions only a human reviewer can catch. AI cleaned up the cheap bugs and multiplied the expensive ones.

## The bottleneck moved, and we didn't move with it

For most of my career the constraint on shipping was writing the code. That constraint is largely gone. The new constraint is *validating* the code — and almost no one has staffed for it or built process around it.

This is the quiet trap. Productivity dashboards light up because output went up. The work that should have grown in proportion — review, threat modelling, testing the security properties of what was generated — is invisible until something breaks. So teams feel faster while their actual risk-adjusted throughput may be flat or negative.

The Apiiro researchers framed it well: if you mandate AI coding, you have to mandate AI security review in parallel, or you are scaling risk at exactly the pace you are scaling productivity. You can't bolt the governance on after the incident.

## What governing it actually looks like

The encouraging finding in that same survey is that governance pays for itself. Where AI use was fully governed, 90% of teams reported a major efficiency gain. Among teams without governance, that fell to 44%. Governance isn't the brake on AI productivity — for these teams it was the thing that *unlocked* it. The structure is what let them trust the speed.

In practice, governing AI-generated code is not glamorous and doesn't require a new platform purchase. It looks like:

- **Knowing what's AI-written.** You can't review what you can't see. Tag it automatically at commit time rather than asking developers to remember in a PR comment.
- **A real policy, not a memo.** Which assistants are approved, what they may touch, what must never be pasted into them. A quarter of teams have nothing here — that's the easiest gap to close this quarter.
- **Security review that assumes AI output is guilty until proven innocent.** Given a 45% defect rate, treating generated code as trusted-by-default is indefensible. The same SAST, dependency, and secrets scanning you run on human code — run harder, run earlier.
- **Reviewers who read architecture, not just diffs.** The dangerous flaws are now design-level. Approving a 600-line AI patch on vibes is not review; it's laundering.

None of this is novel. It is the discipline we already knew we should have, finally made non-optional by the volume.

## The actual dividing line

We are going to look back on this period not as the moment AI started writing our software, but as the moment we learned whether we could be trusted to supervise it. The 97% who adopted and the 30% who govern are, increasingly, going to be two different groups of companies with two very different incident logs.

The sovereign engineer owns the outcome. Owning the outcome of code you didn't type, from a tool that's wrong almost half the time, is the harder and more honest version of the job. The teams that figure that out won't be the ones using AI the most. They'll be the ones reading what it wrote.
