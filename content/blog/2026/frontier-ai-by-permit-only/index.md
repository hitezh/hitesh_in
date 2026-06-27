---
title: "Frontier AI, by permit only"
slug: "frontier-ai-by-permit-only"
date: "2026-06-27"
description: "The US government has moved from checking who uses frontier AI to deciding which institutions get to use it at all. Annex A is the permanent structure, and it changes the competitive picture for anyone not on the list."
categories:
  - "technology"
tags:
  - "ai"
  - "regulation"
  - "llm"
draft: false
---

Commerce Secretary Howard Lutnick [published a letter](https://www.semafor.com/article/06/27/2026/us-releases-powerful-anthropic-model-mythos-to-some-us-companies) that resolved two weeks of waiting: Anthropic can release Claude Mythos 5 to "more than 100 US institutions" listed in a document called Annex A, along with their foreign national employees. His stated determination: "I have determined that appropriate safeguards are in place to permit certain trusted partners to access the Claude Mythos 5 Model."

On the same day, the [Washington Post reported](https://www.washingtonpost.com/technology/2026/06/26/openai-says-us-government-will-vet-users-its-latest-ai-model/) that the US government will vet users of OpenAI's GPT-5.6 before they can access the frontier tier.

Two of the most capable AI models currently available now require a government approval to use.

## From verifying to deciding

I covered [the initial access suspension](/2026/the-jailbreak-that-wasnt/) on June 12, and [what identity verification means in practice](/2026/when-your-ai-asks-for-a-government-id/) when Anthropic added passport checks later that month. Both felt like friction added to a path that eventually led to the same place. Annex A is different. It is the destination.

With identity verification, the implicit deal is: show us who you are and you can proceed. With Annex A, being known is not enough. The question is whether the Commerce Department has put your institution on the list.

This is a qualitative change. An ID check applies universally. A government-curated approved list creates a defined group with access, and by implication everyone else without it. A US startup that did not make Annex A does not get Mythos 5, regardless of who they are or what they are building. The criterion is "trusted partner." The Commerce Department has not explained publicly what that means, how institutions were selected, or what grounds exist for appeal.

## The pattern this follows

The US tried to control cryptography exports in the 1990s. Phil Zimmermann was investigated for releasing PGP. Daniel Bernstein took the government to court over whether source code is protected speech. By 2000, the restrictions were largely dismantled, not because policymakers reversed course, but because the math was already out, the tooling was already built, and the world had moved on without waiting.

Developer reaction to the Annex A announcement followed a familiar shape. Within hours, threads that had spent years comparing Claude and GPT were filling with comparisons of DeepSeek and GLM-5.2. Chinese AI providers have been cutting token prices sharply in the same period that US frontier access has become harder to obtain. That is competitive timing worth noting.

The semiconductor export controls offer a related lesson. Designed to slow Chinese AI development, they appear to have pushed Chinese labs to train more efficiently with fewer chips and to price their outputs aggressively for international buyers. Restricting access to US technology built market for the alternatives. Whether the same dynamic plays out in models is the right question to be watching.

## What this means if you are building

If your institution is in Annex A, this is a concrete advantage. You access Mythos 5 while competitors who did not make the list work with Fable 5, which is the next tier down. For AI-intensive products, that capability gap is real.

If you are not on Annex A, you are building on technology your approved peers have and you do not. Most companies are not on it. "More than 100 institutions" is a narrow field when the global population of companies using AI is measured in millions.

For teams outside the US, the position from June 12 holds: your access to US frontier AI depends on political decisions you have no part in. Annex A confirms that is a stable feature of the system, not a temporary disruption.

I wrote then about treating AI API dependencies as vendor plus political risk. A fallback that is not subject to government access decisions is worth building now. Open-weight models are good enough for most production workloads, and the cost of running your own inference has dropped enough to make this practical before a crisis, not after one.

## The question that follows

Annex A now exists and will be updated as new models come out. The Commerce Department has made itself the access manager for frontier AI. That role is more likely to expand than to contract.

Whether this produces better security outcomes or primarily advantages the 100 institutions already on the list is a question worth following carefully. The organizations with the most to gain from staying on Annex A are probably the ones with the most access to the process that decides who stays on it.
