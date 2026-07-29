---
title: "Point your AI where the checking is cheap"
slug: "point-ai-where-checking-is-cheap"
date: "2026-07-29"
description: "Claude found a novel cryptographic attack in about a week; human experts needed close to a month to trust it. That gap, not model quality, decides where AI pays off."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "strategy"
  - "security"
---

Last week Anthropic published something that should reframe how you decide where to put AI to work. An agentic system it calls Claude Mythos Preview [found a genuinely new weakness](https://www.anthropic.com/research/discovering-cryptographic-weaknesses) in HAWK, a post-quantum signature scheme that had sat under NIST review for two years without anyone spotting it, and separately produced a faster attack on a reduced version of AES. The AES run went for roughly a week, mostly unsupervised, and cost about $100,000 in compute. Then human cryptographers spent close to a month confirming the result was real.

Read those two numbers next to each other. A week to find it. A month to trust it. The generation was the fast, cheap, almost hands-off part. The expensive part, the part that needed scarce expert attention and could not be rushed, was checking the work.

That ratio is the whole story, and it is the thing most companies are getting backwards.

## The scarce resource flipped

For as long as knowledge work has existed, the expensive step was production. Finding a novel cryptographic attack took a rare mind and years of effort; verifying it, once found, was comparatively quick. AI has inverted that. Producing a candidate answer is now a metered commodity you buy by the token. Deciding whether the candidate is correct is the constraint.

I keep meeting leadership teams who budget as if generation is still the hard part. They price the model, the seats, the inference bill, and treat verification as a rounding error handled by "the team." In a verification-bound task, that rounding error is the actual cost. Anthropic's own run makes the point cleanly: the $100,000 of compute was the small line item next to a month of PhD-level time.

## Better models raise the checking bill

There is a second-order effect almost nobody prices in. The intuition is that a smarter model means less human checking. In verification-bound work the opposite happens.

A weak model produces obvious garbage, and obvious garbage is cheap to reject. You glance at it and move on. A strong model produces output that is plausible, internally consistent, and wrong in ways that look right, which is exactly the kind of thing that demands full scrutiny before you can dismiss it. The better the generator, the higher the cost of verifying each thing it generates. Capability and trust-cost move in the same direction. This is why the crypto result took a month rather than an afternoon: the proof was good enough that no one could wave it through.

So the comforting story, that we will grow into these systems as they improve, has the causality backwards. Improvement raises the verification bill per output at the same time as it lowers the generation bill. The gap widens.

## The question to ask before you deploy

If verification is the constraint, then the decisive question for any AI deployment stops being how good the model is. It becomes: what does one verification cost, and who can pay it?

Put another way, every deployment needs an oracle, something that tells you whether a given output is right. The economics turn entirely on how cheap that oracle is:

- **Cheap, automatic oracles.** Does the code compile and pass the test suite. Does the transaction reconcile. Does the extracted field match the source document. Here verification is close to free, so you can let the model run hot and deploy aggressively. This is why coding agents landed first: the compiler and the test are a fast, honest oracle.
- **Expensive, human oracles.** A legal argument, a diagnosis, a novel proof, a strategy memo. Here every output needs scarce expert judgment to confirm, and no amount of model quality removes that. This is where the demos dazzle and the deployments stall.

The pattern I keep noticing is teams pointing AI at the domains where it looks most impressive rather than the domains where checking is cheapest. Impressive and deployable are not the same axis. The fastest returns are boring: the places where you already have a test, a reconciliation, a ground truth sitting right there. If a domain has no cheap oracle, your first AI investment is the oracle itself. Fail to build one and what you have is a demo that a human will quietly babysit forever.

## You rent generation. You build verification.

This is the strategic edge. Generation is rentable, and [as open-weight models close the gap it is getting cheaper by the month](/2026/your-model-was-never-your-moat/). You cannot buy verification capacity off a menu. A month of expert cryptographer time is not a SKU. The [eval harness, the test corpus, the reconciliation logic, the staged rollout](/2026/your-backlog-is-the-benchmark/) that let you trust output at scale are slow, organizational assets, and they are the actual moat. The company with the cheaper, more trustworthy checking pipeline wins, even against a competitor renting a better model.

There is an old institution that already understood this. NIST's standardization process is deliberately slow and adversarial precisely because it is a verification-first system, and this episode vindicates it: the process was built to stress-test candidates for years before anyone deploys them, which is exactly why catching a two-year-old weakness now is the system working as designed. Science's peer review and a newsroom's fact-checking desk run on the same logic. Cheap conjecture, expensive proof. AI is turning every knowledge domain into that shape, and the organizations that thrive will be the ones that treat verification as a first-class product rather than overhead to be trimmed.

The founders and CTOs who get the next two years right win on something most people will overlook. Model access will be universal. Their edge comes from having asked, before deploying anything, what one check costs, and pointing their AI where the answer was smallest.

If you are trying to work out which parts of your business have a cheap oracle and which are quietly waiting for one, that is exactly the conversation I have in an [AI advisory hour](/work-with-me/).
