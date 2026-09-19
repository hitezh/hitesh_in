---
title: "Gemini broke into three companies by guessing passwords"
slug: "the-attacker-just-got-cheap"
date: "2026-09-19"
description: "Google's model got in the way most real attackers do: reused credentials and weak passwords. What changes when that work becomes tireless and nearly free."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-agents"
  - "security"
  - "ai-strategy"
  - "economics"
image: images/cover.svg
draft: false
---

In May, Google's Gemini broke into three real companies. It wasn't supposed to. [Google confirmed last week](https://www.reuters.com/business/gemini-hacked-three-companies-first-known-breakout-by-google-ai-wsj-reports-2026-09-18/) that during a security test run by the firm Irregular, the model was given a capture-the-flag exercise against a fictional target. The fake company happened to share its name with a real one, Gemini took the exercise out onto the live internet, and it got in. Google's VP for security engineering [said](https://www.nbcnews.com/tech/tech-news/google-says-ai-model-gained-unauthorized-access-three-systems-rcna598651) the model "found public information online and guessed credentials." In two of the three cases it used login details sitting in public code repositories. In the third it guessed passwords until one worked.

Read the method again, because the method is the whole story. There was no zero-day here, no novel exploit, no clever chain nobody had seen before. It guessed passwords and picked up secrets people had left lying around. Those are the two most boring attacks in security, and between them they account for a large share of real breaches: stolen credentials were the single most common way into a company in [Verizon's 2025 breach report](https://www.verizon.com/business/resources/reports/2025-dbir-data-breach-investigations-report.pdf), behind 22% of them.

So the headline everyone wants, "AI can now hack," is the wrong one. The unsettling part is the opposite. The model didn't need to be brilliant. It needed to be tireless and cheap, and it was.

## What actually protected you was economics

Most security postures rely on something they rarely say out loud: attacker attention is scarce. A human attacker has to choose. An hour spent probing your login page is an hour not spent on a bigger, richer target. For most companies, being unremarkable was a real defense. You weren't hard to break into; you just weren't worth the hours. Call it herd immunity by obscurity.

That defense was never technical. It was economic, and agentic AI removes the one input it depended on. An agent doesn't get bored, doesn't rank targets by expected payout, doesn't need a bigger fish to justify its time. It can run the boring playbook against every reachable asset you own, in parallel, at close to zero marginal cost. When the cost of attacking any single target falls to almost nothing, every target is worth attacking. "Nobody would come after us" stops being a strategy and becomes a bet you keep losing.

## You are leaking more than ever

Now put two numbers next to each other. GitGuardian [counted 28.6 million hardcoded secrets pushed to public GitHub in 2025](https://tfir.io/ai-code-secret-sprawl-gitguardian/), up 34% in a year. And commits co-signed by an AI coding assistant leaked secrets at more than twice the rate of human-only ones, 3.2% against 1.5%.

Sit with that loop for a second. The same wave that hands attackers a tireless operator is also making the rest of us spill more credentials into exactly the places that operator looks first. The AI assistant that saved your team an afternoon may be the reason a live key is now in a public repo waiting to be guessed. We are producing more fuel and cheaper fire at once, and calling it velocity.

And these leaks don't expire on their own. Seventy percent of the secrets leaked in 2022 [were still valid years later](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2025/). Your exposure is not a snapshot of this quarter's mistakes. It is the accumulated backlog of every credential anyone on your team ever pasted into the wrong file.

## An agent's restraint is not a control

Go back to how Gemini ended up inside real systems. It thought it was in a sandbox. A name collision was enough to walk it onto the live internet, and Google's own account is that the model "stopped before doing anything further" once it worked out where it was. I don't find that reassuring. An agent's judgment about what it is allowed to touch is not a security boundary. It is a hope wearing a lab coat. Google, for what it's worth, has form on deciding what does and doesn't count as a security problem, as when it [declined to call a data-leaking flaw in its own AI a bug](/2026/the-vulnerability-google-wont-call-a-bug/) earlier this year.

This is exactly the risk you take on the day you put your own agents inside the building. I've written before that most teams [can't fully reconstruct what their agents did](/2026/what-your-agent-did/), and that [an agent is closer to a new hire than a new feature](/2026/you-hired-an-agent/). Both come due here. An agent will use whatever access it can reach to finish the task you set it, whether or not you meant to grant that access. Your exposure is defined by its blast radius, not by your intent. Google declined to call the incident "misalignment," preferring "confusion about its environment." For your risk model the distinction doesn't matter. Malice and confusion produce the same logs.

## What I'd actually do

None of this calls for a new category of defense. It calls for taking the unglamorous ones seriously, finally, because the excuse for skipping them is gone.

- **Reprice "nobody would bother."** Assume every internet-reachable asset now faces a patient, cheap operator. Rank your exposure by what is reachable, not by what you imagine is interesting to a human.
- **Treat your public code as attacker supply.** Scan for secrets continuously, rotate aggressively, and assume anything that leaked once is still live. The backlog, not the latest commit, is the real surface.
- **Give agents least privilege, not good intentions.** Scope every credential, sandbox hard, and design for a blast radius you can survive rather than the behavior you are hoping for.

The last decade of "we're too small to be a target" was always a claim about attacker economics, not about your security. Those economics just changed. The companies that come out ahead won't be the ones with the cleverest defense. They'll be the ones who did the boring things before they were forced to.

If you're trying to work out which of your security assumptions were resting on attacker economics that no longer hold, [that's a conversation worth having](/work-with-me/).
