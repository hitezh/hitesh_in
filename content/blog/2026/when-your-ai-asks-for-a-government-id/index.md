---
title: "When your AI asks for a government ID"
slug: "when-your-ai-asks-for-a-government-id"
date: "2026-06-22"
description: "Anthropic now requires a government ID before accessing its most capable models. What looks like a safety measure is export control, and it is nudging developers toward the Chinese AI alternatives the US is trying to contain."
categories:
  - "technology"
tags:
  - "ai"
  - "llm"
  - "regulation"
draft: false
---

Anthropic now asks for a government-issued photo ID and a live selfie before it will give you access to its most capable models. The verification runs through a third-party vendor called Persona. The official framing: ["Being responsible with powerful technology starts with knowing who is using it."](https://support.claude.com/en/articles/14328960-identity-verification-on-claude)

That sounds measured. But the reaction (hundreds of developer comments within hours, subscription cancellations, a surge of interest in Chinese and local alternatives) tells you the announcement landed as something more disruptive.

## The ID check is export control

It is not primarily about protecting users from the AI, or keeping bad actors out in the usual sense. The US government has been building a framework to gate access to frontier AI models by nationality and entity type, much like it restricts advanced semiconductors. Anthropic's Fable 5 is the model in question, and citizenship confirmation is how access restrictions get enforced at the API layer. The support page is the visible seam.

This is new for software. Cloud storage doesn't ask for your passport. A database connection doesn't gate on citizenship. But frontier AI is now being treated as a controlled dual-use technology, in the same category as certain defense hardware and satellite tech. That is a significant change in what an API call represents.

I work with companies building on AI across banking and retail. Nobody had "your API becomes unavailable based on your nationality" on the vendor risk register. That category exists now.

## Export controls have a predictable side effect

The developer reaction was striking in a specific way. Within hours, discussions that used to be about Claude versus GPT were full of threads comparing DeepSeek, GLM-5.2, and local open-weight models. Chinese AI providers had been cutting token prices sharply in the same period, which was well-timed.

This mirrors a pattern US policymakers should find uncomfortable. Semiconductor export restrictions were designed to slow Chinese AI development. What they appear to have done instead is push Chinese labs to train more efficiently with fewer chips, and to price their models aggressively for international buyers. The same logic may be playing out here: restrictions on US frontier models are pushing international developers toward alternatives, building familiarity and embedded tooling that outlasts whatever the policy intended.

History says technology export restrictions tend to be temporary. The developers who move now may not move back.

## What this means if you are building

If you have production systems that depend on a frontier AI API, this is a practical moment to look at those dependencies honestly.

Single-provider AI integrations now carry political risk alongside technical risk. The API can become unavailable when your country's status changes in a dispute you have no part in. That is different from the usual vendor failure modes: pricing increases, uptime incidents, API churn. None of those scenarios appear in most SLAs either, but at least they're foreseeable.

Open-weight models have gotten good enough for most production workloads. Llama, Qwen, and Mistral variants run well on accessible hardware and aren't subject to export controls. The cost of running your own inference has dropped substantially in the last year. Keeping a local model as a fallback is cheaper than rebuilding after a forced migration.

Provider diversity is worth its cost. The argument for running multiple AI providers used to be mostly about pricing and capability. Resilience belongs in that calculation now.

## The safety framing and what surrounds it

Anthropic's position is that knowing who uses its most capable models is part of responsible deployment. Governments appear to have required it as a condition of operating. The ID check is the implementation of that requirement, not a product decision Anthropic made independently.

But there's something worth sitting with. The company most explicitly built around an AI safety mission is now running the most thorough identity infrastructure attached to AI use: government ID, live biometrics, a third-party verification vendor. That is a significant amount of data about who is doing what with which AI, tied to a verified real-world identity.

Safety and surveillance are not mutually exclusive, and I'm not suggesting Anthropic had much choice here. But infrastructure built in the name of safety tends to outlast the specific requirement that prompted it. It can be extended. It can be queried by governments that ask nicely, and by governments that don't. The question worth asking is not whether this particular use is defensible (it probably is) but what the system looks like when every frontier AI provider has built it, when "responsible" continues to expand as a definition, and when access to capable AI is fully fused with questions of who you are and where you're from.

That fusion took about four years, and most of us weren't watching.
