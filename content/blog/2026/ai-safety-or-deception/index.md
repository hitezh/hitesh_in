---
title: "I Don't Want My AI to Lie to Me. I Want It to Say No."
slug: "ai-safety-or-deception"
date: "2026-06-11"
draft: false
description: "Anthropic's Fable 5 shipped with two guardrails: one that refused honestly, and one that quietly degraded the answer without telling you. The second is the dangerous kind, and Anthropic's own reversal shows why."
categories:
  - "technology"
tags:
  - "ai"
  - "safety"
  - "trust"
  - "llm"
---

You build a particular kind of trust with a good tool. You learn its limits, you know when it will push back, and you know when it will deliver. A hammer doesn't drive a nail halfway and call it done. A linter doesn't decide which rules it feels like enforcing today. You get what you asked for, or you get an error. That is the deal.

Last week Anthropic broke that deal in an instructive way, and then, to its credit, mostly un-broke it. The episode is the cleanest illustration I've seen of a line that matters: the difference between an AI that refuses you and an AI that pretends to help.

## Two kinds of guardrail

When Anthropic released [Fable 5](https://www.anthropic.com/news/claude-fable-5-mythos-5), its most capable model, cybersecurity researchers hit the first kind almost immediately. Ordinary requests got flagged and blocked: reading a security blog post, asking for a code review, asking it to write *secure* code. The model would stop, [say that safety measures had flagged the message for cybersecurity topics](https://www.theregister.com/ai-and-ml/2026/06/10/anthropic-claude-fable-5-refuses-innocuous-prompts/), and fall back to the older Opus 4.8.

Frustrating, but honest. You knew what had happened and could take the work elsewhere.

The second kind, [disclosed in a paragraph of the model's system card](https://techcrunch.com/2026/06/10/cybersecurity-researchers-arent-happy-about-the-guardrails-on-anthropics-fable/), was different in nature. For requests that touched frontier AI development, such as building pretraining pipelines, distributed training infrastructure, or ML accelerator design, Fable did not refuse. It answered, helpfully and thoroughly. But the answer had been degraded on purpose through prompt modification, steering vectors, and parameter-efficient fine-tuning, with no notice to the user. You asked a question, you got an answer, and you had no way to know you had been short-changed. Anthropic estimated it touched about 0.03% of traffic.

## Why the silent kind is worse

You might disagree with the first guardrail. A security researcher blocked for asking about buffer overflows almost certainly will. But you know where you stand. You can push back, appeal, or go elsewhere. The tool has limits and tells you when it hits them.

Silent degradation takes that away. It doesn't block you, it deceives you into thinking you were helped. A developer gets what looks like a thorough architecture review, acts on it, and never learns it was sandbagged. No footnote, no warning, the same interface and the same price, and the output looks confident and complete while being deliberately inferior.

That is not safety. It is something wearing safety's clothes, and the harm it does is mostly epistemic. AI tools have become load-bearing infrastructure for real technical work, and the reasonable assumption until now was that when an output looked authoritative, the model was actually trying. Once you know it might be trying less than it appears, on criteria you can't see, triggered by topic rather than intent, every output becomes a little suspect. For a security review or code headed to production, "I can't tell whether this was the real answer" is an unworkable baseline.

## The keyword problem

The first guardrail has its own flaw, and it points at the same root. Matt Suiche, a longtime security researcher, [told TechCrunch](https://techcrunch.com/2026/06/10/cybersecurity-researchers-arent-happy-about-the-guardrails-on-anthropics-fable/) that the filter looks keyword-based: anything in the lexical field of cybersecurity trips it, including a request to write secure code, which it reads as security work rather than ordinary engineering and downgrades.

A model that can debug a distributed system or synthesise a hundred papers should be able to tell "help me attack this" from "help me defend this." That its safety layer apparently cannot, or does not bother to, suggests the filter was built for breadth rather than judgment. Anthropic does run a Cyber Verification Program that gives approved researchers fewer restrictions, which is its own admission: if vetted work can be allowed through, the guardrail is not stopping harm so much as stopping *unverified* work, a bucket that holds nearly every paying customer who hasn't filled out a form.

## What "safety" is supposed to mean

Underneath all this is a question about what the word is doing. Real safety is directional. It protects third parties, the people who never consented to be in the experiment: we won't let this model help you hurt someone else. Biology limits aimed at bioweapons fit that shape, even when they are blunt.

The silent degradation protected something else. Anthropic framed it as keeping the model from accelerating risky frontier-AI work. Critics read it less charitably. Nathan Lambert of AI2 [called it](https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety) "appalling" and "anti-science"; the policy analyst Dean Ball argued it "massively raises the status of the argument that AI safety has been hype to justify monopolistic behavior by labs." Whichever reading you take, the thing being protected was not a third party who might be harmed. It was a capability lead that might be eroded. You can debate whether that is a defensible business call. You cannot call it safety without hollowing the word out, and a hollow "safety" is a label any lab can staple onto any restriction it finds convenient.

## To Anthropic's credit

Here is the part the first wave of outrage missed, because it came a day later. After the backlash, Anthropic [walked it back](https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/). It apologised, in plain terms ("We made the wrong tradeoff and we apologize for not getting the balance right"), and said the frontier-development safeguards will now be visible, falling back to Opus 4.8 the same way the cyber and bio guardrails do.

That is the right outcome, and it is also the whole argument in miniature. The fix was not to drop the restriction. It was to make it honest. A fallback you can see and route around is a guardrail; an invisible one is a trap door. A company that shipped both and then, under pressure, kept the visible one has effectively conceded which is which.

## The thing worth keeping

The researchers annoyed by Fable mostly weren't asking permission to do something dangerous. They were asking for a straight answer. Tell me you won't help. Tell me to apply for the program. Tell me the output was limited. Give me something I can work with, and don't take my money to generate text while quietly pretending the text is something it isn't.

A model that says no, clearly and with a reason, is still worth trusting inside its limits. A model that silently degrades its own work is hard to trust even at full strength, because you can't tell the two apart from the outside. Anthropic built something remarkable in Fable, and for one bad call it also built a way to wonder, on any given day, whether you were getting what you paid for. Good that they are closing it. The cheaper lesson for everyone else shipping these tools: if you have to limit the model, say so.
