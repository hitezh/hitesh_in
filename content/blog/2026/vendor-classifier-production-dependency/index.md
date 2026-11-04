---
title: "Your AI vendor's classifier is a production dependency"
slug: "vendor-classifier-production-dependency"
date: "2026-11-01"
description: "Safety classifiers decline a small share of legitimate requests, and agents make thousands of calls. Here is how to find out whether a vendor's refusals can stall your roadmap."
linkedin_hook: "At a 0.1% false-positive rate, an agent that makes 1,000 model calls gets refused at least once about 63% of the time. Your vendor's classifier is a production dependency."
takeaways:
  - "Count refusals by stop reason, not HTTP status. If you cannot say how many requests your vendor declined last week, you are not monitoring this dependency."
  - "Replay a week of real prompts against a second provider. If it handles 90% acceptably you have a fallback. If it handles 40%, you have a single point of failure."
  - "List the workflows near your vendor's restricted categories. The closer a use case sits to them, the less the vendor's average block rate tells you."
linkedin_question: "Has an AI vendor ever refused, downgraded or stalled a workflow your team depended on, and how long did it take you to notice?"
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "governance"
  - "engineering-leadership"
  - "build-vs-buy"
image: images/cover.svg
---

A researcher said this week that Anthropic flagged his work as "training a competitor" and then [blocked, downgraded or ended sessions](https://www.squaredtech.co/anthropic-training-restrictions-raise-a-critical-research-question) that touched fine-tuning or larger models. His account is that he never distilled Claude: the training data came from an open model, and Claude only submitted jobs and read results. Anthropic has not commented, and I have only his side. Other users report the same classifier tripping on something innocent, after which a fresh session and a rephrased prompt worked fine.

I can't tell from outside who is right, and for planning it doesn't matter. The useful fact is that every frontier vendor now ships a policy layer that can say no to a request at runtime, and most companies have never measured how often it says no to them.

## A small error rate is not small for an agent

[Anthropic says](https://alphasignal.ai/news/anthropic-now-charges-developers-for-claude-s-blocked-safety-refusals) its classifiers are tuned to a false-positive rate below 0.1%, and that 99.7% of accounts hit none of the billable blocks in recent testing. I have not confirmed that against Anthropic's own announcement, but take the numbers at face value. They are good.

Now do the arithmetic an agent forces on you. One request at 0.1% is a rounding error. A coding or research agent that makes 1,000 calls in a run has a 63% chance of at least one refusal, and 100 calls gives you about 10%. Real refusals are not independent, because a flagged session tends to stay flagged, so the run-level number is lower but the failures are stickier. Either way, the per-call figure that sounds reassuring in a vendor blog post is the wrong unit for anyone running agents.

## The vendor's average hides your concentration

That 99.7% is an average across accounts. The categories being filtered are biology safety, distillation, and frontier model development, and they sit close to what ML engineers, life-sciences teams and security researchers do all day. A customer-support bot will never see a refusal. A team building its own fine-tuned models on top of a vendor's coding assistant lives next to the boundary.

This is the pattern I'd watch for: the more specialized your use case, the less the vendor's headline rate describes you, and the more your results depend on a classifier you cannot inspect. The riskiest customers are often the ones with the most interesting work.

## Nobody evaluates the refusal surface

Teams spend weeks comparing models on accuracy and cost. Almost nobody compares what each vendor declines on their own real workload. That is a gap, because a refusal doesn't look like a failure. [Anthropic's documentation](https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback) says a classifier refusal comes back as a normal response, not an error, with a `stop_reason` of `refusal`. A pipeline that checks for HTTP 200 will log it as a success and pass an empty or partial answer downstream.

The researcher's other complaint is worse for a business: a silent downgrade to an older model, not a ban. A ban is loud. A quiet drop in quality shows up weeks later as a customer complaint nobody can trace. This is close to what I argued in [your model was never your moat](/2026/your-model-was-never-your-moat): the model is the easy part to swap, and the policy and plumbing around it are what you actually depend on.

## What I would do before it happens to you

1. Map your exposure. List each workflow that calls a vendor model and mark the ones near its restricted categories: model training, security testing, biology or chemistry, anything that looks like extracting outputs. Those get the most attention.
2. Count refusals. Log `stop_reason` and category on every call and alert on a rising rate, not on errors. If you cannot say how many requests were declined last week, you have found the gap.
3. Replay real prompts. Take a week of production prompts, run them through a second provider or a strong open-weight model, and have someone who knows the work grade the results. If it handles 90% acceptably, you have a fallback. If 40%, you have a dependency.
4. Build the fallback path before you need it. A thin routing layer lets you retry elsewhere on a refusal, with the caveat from [your AI gateway holds every key](/2026/your-ai-gateway-holds-every-key): that layer now holds your credentials, so protect it accordingly.
5. Budget for refusals. Anthropic has reportedly said it will bill for requests blocked in those three categories. Even a small charge on a high-volume agent belongs in the cost model, along with the engineering time to retry.
6. Read the usage policy as a contract clause. Ask who decides a block, how you appeal, how fast, and whether you get a named contact. Enterprises get these answers in a negotiation. Startups mostly never ask.
7. Keep a human path for any workflow where a block costs real money. It can be slow, as long as it exists.

[Rent the harness, own what it learns](/2026/rent-the-harness-own-what-it-learns) argued that the durable asset is your own evaluation data and workflow knowledge. This is the same point from the other side. If a vendor's refusal can stall a workflow, then your ability to run that workflow somewhere else is a strategic asset, and you only know whether you have it if you have tested it.

If you want a second opinion on where your own dependencies sit, that is a good use of an [AI advisory hour](/work-with-me/).
