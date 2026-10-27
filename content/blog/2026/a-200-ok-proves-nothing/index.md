---
title: "A 200 OK from your AI vendor proves nothing"
slug: "a-200-ok-proves-nothing"
date: "2026-10-27"
description: "Cloudflare returned other customers' data in 155 long-context AI responses, and every one looked healthy. Why tenant isolation belongs in your AI vendor review, and what to ask."
image: images/cover.svg
draft: false
categories:
  - "technology"
tags:
  - "ai"
  - "ai-strategy"
  - "security"
  - "infrastructure"
  - "governance"
---

Between August 27 and September 9, 155 responses from Cloudflare's GLM-5.3 endpoint on Workers AI contained text from other customers' requests. [Cloudflare's postmortem](https://blog.cloudflare.com/kv-cache-exposure-remediation/) says each one came back as a normal success, read coherently, and arrived slightly faster than it should have. Nothing in an ordinary monitoring stack would have flagged it. A security researcher did.

Cloudflare handled the aftermath well. The model was offline within 40 minutes of declaring an incident, the logs were good enough to identify exactly which responses were affected, and the report is unusually frank about what their own testing missed. I'd rather read it as a description of how the AI supply chain fails, because most buyers have not priced that in.

## What actually broke

The mechanics matter, so briefly. The model was deployed with a 1,048,576-token context window, but the memory pool on the GPUs that process prompts held only 681,280 tokens. Cloudflare knew about the mismatch and expected the engine to reject anything too long. In their disaggregated setup, the open-source engine SGLang had a bug: a rejected request was treated as live, and the machine generating the answer read memory pages that still held other people's prompts. Those pages are not wiped between requests, because wiping costs throughput.

Only prompts above 681,280 tokens triggered it. Cloudflare found no sign of anyone exploiting it deliberately.

## A healthy-looking failure is the dangerous kind

Classic software fails loudly. You get an error, a timeout, a stack trace. Probabilistic software fails in the same register it succeeds in. A reply built from someone else's session is, to the person reading it, indistinguishable from a model that wandered off topic, and anyone who has used these APIs for a year has seen a reply that answered a question they never asked and shrugged.

That is the part I'd underline. The normal noise of AI behavior gives cover to a data leak, so you can't count on users or monitoring to notice it. Cloudflare's own pre-launch testing had the same blind spot: it checked status codes and throughput at long context, not whether the output made sense for the prompt. Most enterprise pilots do the mirror image. They score whether answers are good and never ask whether the answers are theirs.

## Isolation is priced into the token

Skipping the memory wipe is a performance choice, and shared GPUs are why per-token prices are low in the first place. So tenant isolation sits on the same dial as price and latency, and the vendor sets that dial unless you ask. Single-tenant hosting exists, and it costs more for exactly this reason.

I am not arguing against shared inference. For public documentation, marketing drafts and most internal summarization, shared is the right trade, and the vendor's engineering will usually be better than yours. The decision is about classification: which of your prompts would you be unable to take back? Contracts, source code, customer records, board material. That list should decide the tenancy tier, and it rarely does, because the choice gets made by whoever picked the model. I made a related point about [the gateway that holds every key](/2026/your-ai-gateway-holds-every-key/): the box built for convenience quietly becomes the place where risk concentrates.

## The edge of the spec is where the risk sits

Look at who was exposed. Only the longest requests, roughly 700,000 tokens and up, hit the bug. Those are whole codebases and whole contract archives loaded into one prompt, the most data-rich use of the product and, I would guess, the most sensitive.

Vendors test the typical request. Bugs collect at the advertised maximum, and the customers who push to the maximum are the agentic and long-context ones, who hand over the most. There is also a gap between the spec on the pricing page and the spec the vendor actually validated. Cloudflare advertised the full window while knowing its memory pool fell short. That's easy to do, and I'd expect most vendors have some version of it. It's the same logic as [a vendor's rounding error becoming your outage](/2026/vendors-rounding-error-your-outage/): their edge case is rare for them and central for you.

## What I'd ask before signing

1. **What is shared between customers, and what is the evidence?** Memory, caches, queues and batches each deserve an answer, not "we isolate tenants."
2. **How do you test outputs, not just availability?** Ask whether they plant marker strings in one tenant and check that no other tenant ever sees them. Then do your own: put unique canary tokens in your own traffic at the largest context size you use, and look for them where they should not appear.
3. **Could you tell me which of my responses were affected?** Cloudflare could answer that. If a vendor's logging can't, an incident becomes unscoped, and you'll have to assume the worst.

None of this is exotic, and a procurement team can do all of it in an afternoon. The harder shift is accepting that, for AI, "the call succeeded" and "the answer is mine" are two separate facts, and only one of them is monitored today. If you want help working out which of your workloads deserve which tenancy tier, that is a good use of an [AI advisory hour](/work-with-me/).
