---
title: "Your best AI use case may not need a frontier model"
slug: "your-best-ai-use-case-may-not-need-a-frontier-model"
date: "2026-10-26"
description: "A ten-year-old neural network beat GPT-6 and Claude at spotting skin cancer. What the result says about where a general-purpose model belongs on your AI roadmap."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "decision-making"
  - "strategy"
---

Dermatologist Magnus Lynch showed [200 biopsy-proven skin lesions](https://lynchlab.net/llm-skin-cancer) to GPT-6 Astra and Claude Fable 5.1, then to a ten-year-old image network (Inception v3) fine-tuned for about twenty minutes on one GPU. The old network named the right diagnosis 62% of the time. Both frontier models got 42%.

It is tempting to read that as a gotcha about LLMs. I think it is more useful as a procurement story, because it is what happens when a company picks the model first and the task second. Lynch himself says the old network is only a baseline, that regulated products do far better, and that 200 cases from a single run can't rank close results. None of that weakens the lesson.

## The accuracy number hides the real failure

Lynch also asked each model whether a lesion could be safely discharged. GPT-6 and Claude kept 97 and 96 of the 100 dangerous lesions, which sounds responsible. But they discharged only 32 and 22 of the 100 harmless ones. The old network, at its preset threshold, discharged 76. Asked as a patient, both models told people to see a doctor for nearly every lesion, harmless ones included.

So the LLMs were safe mostly because they hedged. A model that escalates everything scores well on the metric that sounds like safety and removes none of the work you bought it to remove. I would check this in any triage, fraud, support or compliance use case: report what the model refuses to decide, not just how often it is right.

## A dial versus a disposition

The old network wasn't safe at its default setting. It discharged 18 of the 30 melanomas, which is unacceptable. When Lynch matched its threshold to the LLMs' caution, it kept 98 or 99 of the 100 dangerous lesions and discharged only one or two melanomas.

What matters is that somebody could look at that trade-off, choose a point on it and write the choice down. Risk appetite is a leadership decision, and a classifier lets leadership make it as a number. With an LLM the operating point comes from the vendor's training and your prompt, and it can move when the vendor ships the next version. The two models also failed in different directions: GPT-6 called 75 lesions basal cell carcinoma when 25 were, and Claude called 53 actinic keratosis when 20 were. Each had a favorite answer. You can tune a dial. A disposition you mostly have to live with.

## The asset was the data

The obvious objection is that Lynch had 68,011 labeled images from the public ISIC archive, and most companies have nothing like that. True, and it is the part executives should notice. The network's edge came from labeled examples of the exact decision, not from architecture.

That changes how I would sequence a build. A frontier model needs no labels, so it makes a fast first version. Every time a human corrects it, you collect a labeled example of your own work. After a few months you may have the training set that lets a small specialist take over the high-volume, stable part of the job. The frontier model is the MVP, which exists to reduce uncertainty, and the specialist is the product. A small network also costs electricity to run, not a per-token meter, and Lynch's runs [inside a phone browser](https://lynchlab.net/llm-skin-cancer) without uploading anything, which matters for regulated data. Cheaper tokens don't remove the meter, as I wrote in [Cheaper tokens, bigger bill](/2026/cheaper-tokens-bigger-bill/).

## Where the general model still wins

Use a frontier model when the task is varied, language-heavy, low in volume, or when the categories change every few weeks. And for skin cancer itself, almost nobody should train their own model. The right move is to buy a cleared product built on larger ensembles, which Lynch notes perform considerably better than his baseline. Most companies should buy before they build, and that includes buying the boring specialist.

## Three questions for your roadmap

1. **What is the decision, and how often does it repeat?** High volume, narrow and stable is where a small specialist model tends to beat a general one on cost and control.
2. **What does the model do when unsure?** Ask for the operating point, the share of cases it hands back to a human, before you ask for accuracy.
3. **Are you keeping the corrections?** If the frontier prototype's human fixes are discarded, you've paid for a prototype and thrown away the only thing that would let you graduate from it.

A recurring mistake I notice is treating "which LLM?" as the first question on an AI roadmap. It is the third or fourth. This is the same instinct behind [choosing boring technology](/2026/boring-technology-is-an-ai-strategy/): spend the novel, expensive thing only where nothing duller will do. And it only works if you [measure your own work](/2026/nobody-benchmarked-your-work/) instead of a leaderboard.

If you want a second opinion on which items on your roadmap deserve a frontier model and which deserve something duller, an [AI advisory hour](/work-with-me/) is built for that.
