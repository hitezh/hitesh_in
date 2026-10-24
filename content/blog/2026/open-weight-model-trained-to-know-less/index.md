---
title: "The open-weight model that was trained to know less about security"
slug: "open-weight-model-trained-to-know-less"
date: "2026-10-24"
description: "Kimi K3.1 removed cyber data from training before release and published the score it cost. Why open weights no longer mean unrestricted, and what to ask a model vendor now."
categories:
  - "technology"
tags:
  - "ai"
  - "llm"
  - "ai-strategy"
  - "security"
  - "open-source"
image: images/cover.svg
draft: false
---

When Moonshot released [Kimi K3.1 Pro](https://www.kimi.ai/blog/kimi-k3-1-pro) this week, the benchmark table was the usual one: 65.7% on Terminal-Bench 4.0 against 66.4% for Claude Opus 5.5, a 1-million-token context window, weights promised by November 4. The line that matters for a buyer is further down. "For the open-weight release of K3.1 Pro, we identified and removed cyber-related data from both training stages."

They also published what it cost. Without the removal, the checkpoint solves 90.5% of their cyber benchmark problems at pass@3. The final model solves 81.0%. That is a vendor-reported number on a vendor-chosen benchmark, so treat it as a direction, not a measurement. But it is a rare thing: a lab telling you exactly how much capability it took out on purpose.

## Subtraction is a different kind of restriction

We are used to models that refuse. A refusal is a policy applied at the moment of use, and policies have exceptions. I wrote about [Annex A](/2026/frontier-ai-by-permit-only/) in June: the most capable US models now go to vetted institutions, which means a refusal can be lifted for the right customer.

Removing data before training is a different mechanism. There is no verification form that gets the knowledge back, and no enterprise tier either. The model was never taught it. Whatever you think of the decision, it moves the choice from the moment of use to the moment of training, and from your contract to the vendor's judgment.

That inverts an assumption many technical teams carry. Open-weight has meant the permissive option: you hold the weights, so nobody can tell you no. Here the open model is the one with the capped capability, while the gated closed models may be the more capable ones for anyone on the right list. Openness and permissiveness have separated.

## The vendor has a fair argument

Moonshot says it doesn't want to release open weights that extend the absolute frontier of cyber capability, and that gradual diffusion of the capability makes software more secure over time. I think the first half is reasonable. Putting an unrestricted, near-frontier offensive tool in anyone's hands is a real risk, and [attacking got cheap](/2026/the-attacker-just-got-cheap/) without any help from this release.

My concern is who else loses. Security work is dual-use all the way down. Reviewing a pull request for injection flaws, triaging a suspicious binary, reproducing a vulnerability before patching it, writing detection rules: a defender does all of this by understanding how attacks work. A bank's red team and an attacker are drawing on the same knowledge. A model trimmed for the second audience is also trimmed for the first, and nothing on a leaderboard will tell you by how much.

## The aggregate score hides it

Terminal-Bench puts Kimi within a point of Opus 5.5. That is useful for general coding work and says almost nothing about the 9.5 points that were deliberately removed. I argued earlier this month that [nobody has benchmarked most of your work](/2026/nobody-benchmarked-your-work/), and this is a specific case of it. The average hides the one capability your security team may care about most, and the vendor has now removed it by design.

There is a second, quieter point. The model is around three trillion parameters, which is beyond most companies' hardware. For nearly everyone, "open-weight" will mean a third-party host. What the open weights give you is price pressure and portability, which still matters, as I argued in [your model was never your moat](/2026/your-model-was-never-your-moat/). It does not give you control over what the model knows.

## What I'd do differently

If I were advising a team choosing models this quarter, I'd change three things.

- **Ask what was removed, not only what is refused.** Model cards now sometimes say. If a vendor can't tell you what was filtered from training, price that uncertainty in.
- **Build a small test from your own security-adjacent work.** Twenty real tasks will do: vulnerability review on your code, log triage, a past incident reconstructed. Run every candidate model on them. It takes a day and answers a question no public benchmark can.
- **Route by task.** Use the cheaper open model for general engineering work, and keep a second path for security-adjacent tasks where the capability gap shows up. One model for everything was always a convenience, and it is now a risk.

The larger shift is that a model's contents are now a vendor decision with a published price tag. Procurement checklists written for refusals and rate limits don't cover it yet. If you want a second pair of eyes on how to evaluate models against your own workloads, that's what an [AI advisory hour](/work-with-me/) is for.
