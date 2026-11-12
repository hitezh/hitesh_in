---
title: "Monetizing AI in SaaS: an empirical study of pricing and packaging models for AI features"
shortTitle: "Monetizing AI in SaaS"
seoTitle: "How SaaS companies price AI features: DBA research on 371 companies"
date: "2026-03-01"
pubType: "DBA dissertation"
degree: "Doctor of Business Administration"
institution: "IIBM Institute and SIMA Switzerland"
supervisor: "Dr. Latika V Shanbhag"
completed: "March 2026"
image: "cover.jpg"
bookCover: "book-cover.jpg"
subtitle: "An empirical study of pricing and packaging models for AI features"
blurb: "My doctoral research on how 371 B2B SaaS companies price and package AI features, with interviews of senior executives, a five-stage path for AI monetization and a five-step framework for choosing a pricing model."
download: "monetizing-ai-in-saas-dissertation-hitesh-sarda.pdf"
downloadPages: 101
slidesPdf: "monetizing-ai-in-saas-slides-hitesh-sarda.pdf"
description: "My DBA research on how 371 B2B SaaS companies price and package AI features, with interviews of nine executives and a five-step framework for pricing AI."
talk: "/talks/iibm-monetizing-ai-in-saas"
related:
  - "/guides/ai-cost"
  - "/blog/2026/cheaper-tokens-bigger-bill"
  - "/blog/2026/who-sees-the-ai-bill"
faq:
  - q: "How do SaaS companies price AI features?"
    a: "In a study of 371 B2B SaaS companies with $1M to $100M in annual recurring revenue, 51.5% used pure subscription pricing and 18.1% combined a subscription with usage charges. Purely usage-based pricing was rare. For packaging, 42.3% spread AI capabilities across their plan tiers."
  - q: "Should you charge separately for AI features?"
    a: "Basic AI is becoming a baseline feature that customers expect at no extra cost, because consumer tools anchor their expectations. The companies in this study charge for advanced AI: through higher tiers, paid add-ons, or credits tied to a distinct, tangible output."
  - q: "What is the best pricing model for AI in SaaS?"
    a: "For most mid-market companies the practical answer is a hybrid: a subscription base for predictability, with usage caps or credits to recover variable AI costs. Outcome-based pricing is the long-term ideal but is still hard to execute."
---

AI breaks one of the oldest assumptions in software pricing. A classic SaaS product costs almost nothing to serve one more user, which is why per-seat subscriptions worked so well. An AI feature has a real variable cost for every request, because model inference is billed per token and that cost rises with usage. Software companies now have to choose between pricing for consumption, which covers their costs, and keeping flat prices, which enterprise buyers find easier to budget.

My Doctor of Business Administration dissertation, completed in March 2026 at IIBM Institute and SIMA Switzerland under the guidance of Dr. Latika V Shanbhag, looks at how B2B SaaS companies are actually making that choice. I presented it at an [IIBM alumni talk](/talks/iibm-monetizing-ai-in-saas/) in June 2026.

<div class="stat-grid">
<div><strong>371</strong><span>SaaS companies analyzed</span></div>
<div><strong>58%</strong><span>offer AI features (215)</span></div>
<div><strong>51.5%</strong><span>use pure subscription pricing</span></div>
<div><strong>18.1%</strong><span>combine subscription and usage</span></div>
<div><strong>42.3%</strong><span>package AI across plan tiers</span></div>
<div><strong>9</strong><span>executive interviews</span></div>
</div>

## The problem

The question the research starts from is how SaaS companies can price AI features so that the price is profitable, scales with use, and matches what customers think the feature is worth. Four things make that hard:

- **Variable cost.** Inference costs grow with usage, which is a break from the near-zero marginal cost of traditional SaaS.
- **Predictability anxiety.** Enterprise buyers fear surprise bills, and some avoid AI features even when free credits are offered.
- **Customer anchoring.** Consumer tools such as ChatGPT Plus at $20 a month set expectations that do not fit enterprise pricing.
- **A gap in the research.** Most academic work on SaaS pricing predates AI, so practitioners have had no validated framework to work from.

## How I studied it

The study used two phases. First, I reviewed the public pricing pages of 371 B2B SaaS companies with $1M to $100M in annual recurring revenue (ARR), using a fixed codebook to classify the pricing model, the value metric, the number of tiers, how AI features were labeled, and overage terms. The sample split into three revenue bands: 87 companies at $1M to $10M, 207 at $10M to $50M, and 77 at $50M to $100M. Agencies, consultancies and non-SaaS firms were excluded, and where a company hid its pricing details behind a sales form, they were recorded as unknown.

Second, I interviewed nine senior executives at the CEO, CPO and CRO level, from companies in ERP, real estate, customer analytics, retail, FinOps, portfolio management and UX validation, and analyzed the interviews thematically using Braun and Clarke's six-phase method. All firms are anonymized.

## What the pricing data shows

Pure subscription still dominates, despite how much the industry talks about usage-based pricing: 191 of the 371 companies (51.5%) use it. The next largest group, 67 companies (18.1%), combines a subscription with usage charges. Only 20 combine a subscription with credits, 11 are purely usage-based, and one is purely credit-based. For 81 companies the model could not be determined from the public page.

{{< resfig src="figures/pricing-models.jpg" caption="Pricing models across the 371 companies in the study." >}}

Subscription is the leading model in every revenue band. The hybrid of subscription and usage grows as companies get larger, and pure usage-based pricing stays rare at every size.

{{< resfig src="figures/pricing-by-revenue.jpg" caption="Pricing models by annual revenue band (companies with a known model)." >}}

On packaging, the most common approach is tiered (42.3%): AI capabilities are spread across plan levels and used to differentiate Basic from Pro and Enterprise. Next is hybrid packaging (20.5%), with basic AI in the core plan and advanced AI as a paid add-on. Custom or enterprise packaging (14.0%) puts AI behind a sales conversation, and freemium (6.2%) gives basic AI away up to a limit.

{{< resfig src="figures/packaging.jpg" caption="AI packaging strategies across the sample." >}}

## What the executives said

Three themes came through in the interviews.

1. **Managing AI cost uncertainty.** Executives treat infrastructure cost as the main constraint on packaging. Some limit model usage to customer-specific trained models, some absorb costs in the short term to win adoption, and some separate deterministic features they can charge for from probabilistic ones they offer free with guardrails.
2. **Customer resistance to usage-based pricing.** Enterprise buyers want predictable bills and reject granular consumption metrics. One real estate executive's advice was to "avoid over-complicating usage models early on." Credits work best for distinct, tangible outputs, such as AI-generated e-receipts, and pricing works better when it follows the job the customer wants done rather than raw token consumption.
3. **Competitive pressure and feature parity.** Consumer generative AI tools anchor what B2B customers expect to pay, close to nothing. Basic AI gets embedded as a baseline to avoid friction, competitors set a ceiling on what AI features can cost, and in some domains, such as banking and treasury, hesitancy limits how far AI can be monetized at all.

## A five-stage path for AI monetization

Putting the data and the interviews together, companies seem to move through five stages:

1. **AI feature bundling.** AI is a table-stakes feature with no extra charge.
2. **Tiered differentiation.** Basic AI sits in lower tiers and advanced AI unlocks at premium tiers.
3. **Credit-based add-ons.** Distinct AI tasks are sold through credits tied to tangible outputs.
4. **Hybrid metering.** A subscription base with variable usage caps to recover costs.
5. **Outcome-based pricing.** Prices tied to measurable business outcomes, the strategic ideal.

Most mid-market companies with $1M to $100M in ARR are somewhere between stages one and three. Stage four becomes more common as ARR grows, and stage five is still aspirational.

## A framework for pricing AI features

The dissertation ends with a five-step framework for executives deciding how to price AI:

1. **Diagnose the cost structure.** Map direct costs, such as per-token API fees, and indirect ones, such as R&D, talent and infrastructure, and work out unit economics at the usage you expect.
2. **Assess customer readiness.** Find out how buyers want to be billed, whether consumption or outcome metrics make sense to them, and what they are anchored to.
3. **Define the value metric.** Pick a billing unit tied to a tangible output, such as a credit, a job or monthly active users. Avoid tokens or compute minutes for enterprise customers.
4. **Design a hybrid architecture.** Use a subscription base for predictability, add usage caps or credit overages for cost recovery, and make the guardrails clear.
5. **Instrument and iterate.** Track usage in real time, watch margin per customer, and move toward outcome-based pricing as evidence of return on investment builds up.

The practical recommendations that follow are to default to a subscription with a soft cap and buyable credits, to make overages transparent, to use credit rollover to reduce customer anxiety, to absorb early AI costs only as a deliberate market-entry choice, and to publish quantifiable ROI figures for AI features, which only about 30% of firms currently do.

## Limitations

The sample is not random, so the results describe these 371 companies rather than the whole market. Companies that publish no prices are under-represented, which may tilt the sample toward smaller firms, public pricing pages do not show regional differences, the study is a single snapshot rather than a trend over time, and nine interviews are too few to generalize from. Longer studies that link pricing models to retention, revenue per user and net revenue retention would be the natural next step.

## Read the full dissertation

The full dissertation runs to 101 pages: the literature review, the research design, the complete results with tables for every revenue tier, the interview themes, and the theoretical and managerial implications. [Download it as a PDF](monetizing-ai-in-saas-dissertation-hitesh-sarda.pdf), or flip through [the 19 slides](#slides) I presented at IIBM.

## Citation

Sarda, H. (2026). *Monetizing AI in SaaS: An empirical study of pricing and packaging models for AI features* [Doctor of Business Administration dissertation, IIBM Institute and SIMA Switzerland].
