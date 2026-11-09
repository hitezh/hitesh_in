---
title: "DeepSeek R1 just made reasoning a commodity"
slug: "deepseek-r1-why-it-matters"
description: "R1 roughly matches OpenAI o1 on math benchmarks, costs about 27x less per output token and ships as open weights. Plan your AI roadmap for falling model prices."
date: "2025-01-29"
draft: false
categories:
  - "technology"
tags:
  - "ai"
  - "llm"
  - "deepseek"
---

Last week DeepSeek, a Chinese AI lab, released R1, a reasoning model it says achieves "performance comparable to OpenAI-o1 across math, code, and reasoning tasks" ([GitHub](https://github.com/deepseek-ai/DeepSeek-R1)). By Monday its chat app had [overtaken ChatGPT](https://www.theguardian.com/technology/2025/jan/28/we-tried-out-deepseek-it-works-well-until-we-asked-it-about-tiananmen-square-and-taiwan) as the most popular free app in Apple's US and UK app stores, and Nvidia had [lost about $593 billion](https://www.dawn.com/news/1888233) in market value in a single day, with its shares down almost 17%. No Wall Street company had lost more in a day.

Most of the commentary since has been about chips: if a capable model can be trained cheaply, who needs all those GPUs? That is a question for investors. If your company buys AI, R1 tells you something more useful. Reasoning, the most expensive tier of AI anyone sells, just became a commodity, and your roadmap should assume model prices keep falling.

## The $5.6 million figure measures less than it seems

The number everyone is quoting comes from DeepSeek's [V3 technical report](https://arxiv.org/abs/2412.19437), which describes the base model R1 is [built on](https://huggingface.co/deepseek-ai/DeepSeek-R1). It works out to 2.788 million H800 GPU hours on a cluster of 2,048 GPUs, at an assumed rental price of $2 an hour, which comes to $5.576 million. The report says plainly that this covers "only the official training of DeepSeek-V3" and leaves out the earlier research and ablation experiments. It is one final run of the base model, before the reinforcement learning that produced R1.

The efficiency is still real. The model has 671 billion parameters but uses only 37 billion for any given token, a mixture-of-experts design that keeps serving costs down. But if you are a CTO, the training bill is someone else's problem. The number that touches your budget is the price list.

## The price list is the real news

R1 costs $0.55 per million input tokens and $2.19 per million output tokens, against $15 and $60 for OpenAI's o1 ([DataCamp's comparison](https://www.datacamp.com/blog/deepseek-vs-openai)). On output that is about 27 times cheaper. Output is also where reasoning models spend your money, because the thinking the model does before it answers is [billed as output tokens](https://developers.openai.com/api/docs/guides/reasoning).

The quality gap, on DeepSeek's [own benchmarks](https://github.com/deepseek-ai/DeepSeek-R1), is small. R1 scores 79.8% on AIME 2024 against o1's 79.2%, 97.3% on MATH-500 against 96.4%, and 90.8% on MMLU against o1's 91.8%. These are the vendor's numbers, so test them on your own work, but o1-class reasoning is no longer something only one company sells.

Nature [called R1](https://www.nature.com/articles/d41586-025-00229-6) "an affordable and open rival" to o1. I would underline the word "open".

## Open weights change the build-versus-rent maths

R1's weights are released under the [MIT license](https://huggingface.co/deepseek-ai/DeepSeek-R1), which allows commercial use, modification, and even distillation into other models. DeepSeek also released six smaller distilled versions, from 1.5 billion to 70 billion parameters, built on Qwen and Llama. A mid-sized company can run the 70B one in its own cloud account.

For a bank or a hospital in India that cannot send customer data to an API hosted abroad, that is a new option. Until last week, reasoning at this level meant renting it from a US lab on that lab's terms.

## The fair objection is trust

The strongest case against R1 is where it comes from. The Guardian [found the DeepSeek app](https://www.theguardian.com/technology/2025/jan/28/we-tried-out-deepseek-it-works-well-until-we-asked-it-about-tiananmen-square-and-taiwan) refusing or deflecting questions about Tiananmen Square and Taiwan, in line with Chinese rules on what generative AI may say. For many companies, that rules out the hosted app.

Most of that worry, though, is about where the model runs and who sees your data. Open weights let you run it on infrastructure you control, test it on your own tasks, and drop it if it fails. Whether the censorship lives in the weights or only in the app is something to test, not assume.

## What I would change in an AI roadmap this week

1. Rerun your AI business cases at a fraction of today's token prices, and prepare the projects that only work at that price.
2. Put a thin layer between your product and any single model provider. If swapping models would take more than a week, fix that first.
3. Build an evaluation set from your own work, a few dozen real tasks with known good answers, so you can judge a new model in a day instead of from its benchmark table.
4. Reprice the use cases you shelved because reasoning was too expensive per call.
5. Write down which data can go to a hosted API and which needs a self-hosted model, so the next open release is a quick decision.

The labs will keep competing on the model. Your advantage sits in what you build around it: your data, your workflow, and how quickly you can switch. If a model as good as the one you use today became 27 times cheaper tomorrow, which project on your list would you start first?

If you are working out what falling model prices mean for your own roadmap, that is a good use of [an advisory hour](/work-with-me/).
