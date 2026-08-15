---
title: "When 'we can't send that to AI' stops being an excuse"
slug: "we-cant-send-that-to-ai"
date: "2026-08-15"
description: "New cryptography lets AI run on data a provider never sees. The bigger shift is what happens to companies when their safest reason to say no quietly expires."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "banking"
tags:
  - "ai"
  - "ai-strategy"
  - "privacy"
  - "data"
  - "banking"
---

One sentence ends more AI projects in regulated industries than any other: *we can't send that data to a model.* Say it in a bank, a hospital, or an insurer and the room nods, the idea goes back in the drawer, and everyone moves on with a clear conscience. The data is sensitive, the model lives in someone else's cloud, and that is that.

Last week Google [made that sentence harder to say](https://blog.google/security/how-google-is-making-private-ai-practical-with-homomorphic-encryption/). It open-sourced HEIR, a compiler that turns an ordinary model into one that runs on encrypted data and hands back an encrypted answer, without decrypting anything in between. The provider computes on ciphertext it cannot read. Fraud detection, recommendations, intrusion detection, all shown running on data the server never sees in the clear. The word Google chose for this was *practical*.

That word is carrying a lot of weight, and I'll come back to it. The more useful question is what happens to your favorite reason for saying no once it stops being available.

## The excuse and the blocker are not the same thing

"We can't use AI on this data" is usually two claims wearing one coat. The first is technical: the data cannot safely leave our boundary. The second is everything else: we don't actually know where this data lives, who owns it, what our contracts let us do with it, or whether acting on it is worth the risk. Teams say the first claim out loud because it sounds like engineering and closes the meeting. The second claim is the one that really stops the project, and it has nothing to do with cryptography.

Homomorphic encryption attacks the first claim and does nothing for the second. So the interesting effect of a tool like HEIR is not that it unlocks a wave of encrypted inference next quarter. It won't. The effect is that it takes away the comfortable answer and leaves the uncomfortable one exposed. When "it isn't secure" stops working, someone eventually has to say the real thing: we were never sure this was worth doing, and we never did the work to find out.

## "Practical" still means slow

Be clear-eyed about the technology before betting on it. Google's own post concedes the "nontrivial cost overhead," and that is generous phrasing for a technique that can make a computation orders of magnitude more expensive than running it in the open. The latency figures in the announcement are single-threaded CPU numbers. There is a real hardware-accelerator ecosystem forming around this, and the cost curve is bending down, but *practical* today means practical for a narrow, high-value slice, not a default you reach for on a Tuesday.

For most versions of "we can't send it to the cloud," there is a boring answer that already works: run a capable open model inside your own trust boundary. The models good enough to do this stopped being toys a while ago, and I've argued the [open-weight ones now match frontier quality](/2026/local-models-stopped-being-toys/) for a large share of real tasks. If the data can't move, move the model to the data. That is unglamorous, available now, and solves more of these cases than any exotic cryptography will this year.

## The audit is most of the value

This is the part worth acting on immediately, and you can start today. To make any dataset ready for encrypted inference, you first have to do the least exciting work in the building: inventory the data, classify its sensitivity, establish who owns it, and pin down what you are permitted to do with it. That audit is roughly eighty percent of the value, and it pays off no matter which way the technology breaks. It is what lets you run your own model safely today, buy a vendor confidently tomorrow, and adopt homomorphic encryption sensibly whenever it is genuinely cheap enough. The crypto will be production-ready long before most companies' data governance is. The binding constraint is on your side of the fence.

There is also a quieter thing this technology does not do. It proves the ciphertext arithmetic was performed; it does not prove the provider ran the computation you agreed to, on your data and nothing else. You have not removed trust from the relationship. You have moved it from "I trust you with my data" to "I trust you about which program you ran." That is a better place for the trust to sit, but it is worth knowing it is still there. Every "trustless" claim in computing turns out, on inspection, to have relocated the trust rather than deleted it.

## What actually changes for a board

When privacy stops being a valid no, you lose your safest reason not to act, and that cuts both ways. The same board that once accepted "we can't, it's sensitive" will start asking why you aren't using AI on data you can now demonstrably use. Your best excuse quietly becomes a liability. The companies that handle this well won't be the ones with the fanciest cryptography. They'll be the ones that already did the dull inventory work, already know what each dataset is worth in a model, and can move the day a constraint lifts. That readiness is the moat, and it has been buildable this whole time.

So the question I'd put to a CTO is not "should we pilot homomorphic encryption." It is "if the privacy objection vanished tomorrow, do we even know which of our datasets is worth pointing a model at, and could we prove we're allowed to." Most teams can't answer that yet. The ones that can are the ones I'd bet on, and it's usually [the boring homework, not the frontier tech](/2026/the-homegrown-ai-that-wasnt/), that separates them. Data was [never the moat because it sat in a warehouse](/2026/your-model-was-never-your-moat/); it becomes one when you know exactly what you have and what you're allowed to do with it.

If you're trying to work out which of your locked-away datasets is actually worth unlocking, and what it would take, that is the conversation I have in an [AI advisory hour](/work-with-me/).
