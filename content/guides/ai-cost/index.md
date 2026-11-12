---
title: "The real cost of AI: tokens, models and who pays the bill"
seoTitle: "LLM cost optimization: why cheaper tokens still mean bigger AI bills"
description: "Why AI bills keep rising as token prices fall, how caching and model choice move the cost curve, and when a smaller or local model is the better call."
cta: "Is your AI bill growing faster than its value?"
resource: "ai-vendor-evaluation-checklist"
weight: 1
schemaType: "CollectionPage"
posts:
  - "2026/cheaper-tokens-bigger-bill"
  - "2026/same-model-ten-times-the-bill"
  - "2026/who-sees-the-ai-bill"
  - "2026/frontier-models-read-the-prices"
  - "2026/ai-cheap-enough-to-waste"
  - "2026/your-best-ai-use-case-may-not-need-a-frontier-model"
  - "2026/where-jev-shines"
  - "2026/local-ai-coding-cost"
  - "2026/local-models-stopped-being-toys"
  - "2026/subsidized-ai-compute"
  - "2026/the-bill-that-looks-right"
faq:
  - q: "Why is our LLM bill going up when token prices keep falling?"
    a: "Because cheaper tokens get spent on more work. Agents run longer loops, teams try tasks they would never have funded, and routing layers move savings to budgets nobody measures. Price per token is the wrong number to watch; cost per finished task is the useful one."
  - q: "How do you reduce AI inference costs without hurting quality?"
    a: "Start with prompt caching, because a cached token costs about a tenth of a fresh one and coding agents hit cache most of the time. Then match the model to the task: many classification and routing decisions inside an agent do not need a frontier model. Finally, make the person who picks the model see the bill."
  - q: "When should a company use a small or local model instead of a frontier model?"
    a: "When the task is narrow, well defined and easy to check, such as a typed decision inside an agent or a specialized classifier. A local model can also make sense for coding, but the subscription you save is replaced by hardware, setup and maintenance costs that need counting too."
---

Every few months a lab cuts its prices and someone in the room concludes that AI is getting cheaper. Then the quarterly bill arrives and it is bigger than the last one.

Both things are true. Token prices fall, and spend still rises, because cheaper work gets used for more things: agents that loop for longer, tasks nobody would have funded a year ago, and routing layers that move the cost somewhere it is harder to see. The cost of AI is set by engineering choices (caching, model choice, how much scaffolding you send with every call) far more than by the price list.

The posts below take the questions CTOs and finance teams end up asking: why the bill is rising, who should own it, where a smaller model is enough, and what running models locally really costs.

For the other side of the bill, what software companies charge their customers for AI, see [my DBA research on how 371 SaaS companies price AI features](/research/monetizing-ai-in-saas/).
