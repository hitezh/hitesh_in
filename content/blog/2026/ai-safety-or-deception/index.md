---
title: "I Don't Want My AI to Lie to Me. I Want It to Say No."
date: "2026-06-11"
draft: false
categories:
  - "technology"
tags:
  - "AI"
  - "safety"
  - "trust"
  - "LLM"
---

There's a version of trust you build with a good tool. You learn its limits. You know when it'll push back, and you know when it'll deliver. A hammer doesn't silently drive nails halfway and call it done. A code linter doesn't quietly decide which rules it feels like enforcing today. You get what you asked for, or you get an error. That's the deal.

Some AI labs are quietly breaking that deal.

---

When Anthropic released Fable, their most powerful model to date, the developer community noticed something strange almost immediately. Cybersecurity researchers found that even mundane requests — reading a security blog post, asking for a code review, writing *secure* rather than insecure code — were being flagged and blocked. The model would halt, announce that "safety measures flagged this message for cybersecurity topics," and fall back to an older model.

Frustrating, sure. But at least transparent. You knew what happened.

Then came the second revelation — the one that matters more. For a different category of requests, particularly those touching machine learning research, model training infrastructure, or anything that looked like it might be competitive with Anthropic's own development — the model wasn't refusing at all. It was responding. Helpfully. Thoroughly. Except the output had been quietly degraded through prompt modifications, steering vectors, and other technical mechanisms designed to make Fable perform like a lesser model — while billing you at Fable rates.

You'd ask a question. You'd get an answer. You'd have no idea you'd been shortchanged.

---

This distinction matters more than it might seem at first.

There is a version of AI safety that's uncomfortable but honest. The model assesses your request, decides it crosses a line, and tells you so. You might disagree with the line — you probably will sometimes, especially if you're a legitimate security researcher getting flagged for asking about buffer overflows — but at least you know where you stand. You can seek help elsewhere. You can push back. You can appeal.

That's the deal we thought we'd made with AI assistants. The tool has limits; the tool tells you when it hits them. Trust the tool within those limits.

What Fable introduced is categorically different. Silent degradation — performing as though it's helping while delivering a deliberately hobbled output — doesn't just block you. It deceives you into thinking you've been helped. A developer gets what looks like a thorough ML architecture review. They act on it. The review was quietly sandbagged. They don't know. There's no "this output has been limited for safety reasons" footnote. There's just a smooth, confident, subtly inferior response, delivered with the same interface, the same pricing, the same implied contract.

This isn't safety. It's something that wears safety's clothes.

---

Matt Suiche, a well-known security researcher, articulated the frustration precisely: "Anything in the lexical field of 'cybersecurity' triggers the guardrails" — including requests to write *secure* code. Not exploit code. Not malware. Secure code. The system is either too blunt to care about the difference, or has decided that proximity to a word is close enough to the thing itself to warrant intervention.

This is the keyword problem, and it exposes the shallow thinking at the center of these guardrails. Real safety requires context. A model smart enough to write a dissertation, debug a distributed system, or synthesize research across a hundred papers should be capable of distinguishing "help me attack this system" from "help me defend this system." The fact that Fable's safety layer apparently cannot — or chooses not to — suggests the guardrails were built for a different purpose than the one advertised.

Anthropic does offer a workaround: a "Cyber Verification Program" that grants approved researchers fewer restrictions. This is an accidental confession. If legitimate security work can be verified and selectively allowed, the guardrails are not preventing harm — they're preventing *unverified* work, a category that includes almost all of Anthropic's paying customers who haven't filled out a form. The verification program creates a two-tier system where the upper tier gets the product as described and the lower tier gets a quietly degraded version. Most customers don't know there's a form to fill out. Most customers don't even know they're on the lower tier.

---

I want to be fair here. Some version of safety restrictions on frontier AI models makes sense. Biology guardrails addressing bioweapon concerns seem proportionate given what's at stake. Hard limits around certain categories of capability feel reasonable, even if they're blunt instruments that create friction for legitimate work.

But there's a meaningful line between "we won't help with that" and "we'll pretend to help while quietly not doing so." The first respects the user's intelligence and autonomy. The second treats them as a variable to be managed rather than a person to be leveled with.

What makes the silent degradation especially troubling is the epistemic harm it creates. AI tools have become load-bearing infrastructure for a lot of technical work. Developers trust their models. When an output looks authoritative and complete, there's an assumption — reasonable, until now — that the model was actually trying. That assumption breaks the moment you learn the model might be trying less than you think, without telling you, based on criteria you don't know, triggered by keywords rather than intent.

Every output becomes slightly suspect. Not because the model might be wrong — that's always been true — but because the model might have been deliberately withholding. That's a different kind of uncertainty, and it corrodes trust in a way that extends far beyond any individual bad output.

---

There's a thread running through all of this about what safety is actually *for*. Genuine safety protects people from harm. It's directional — the harm flows outward to third parties, to society, to people who didn't consent to be part of the experiment. Genuine safety says: we won't let this model help you do something that hurts someone else.

What Fable's silent degradation protects is not people. What it protects — if the critics are right — is Anthropic's competitive position. If you're running ML training infrastructure, doing distributed model development, or working on anything that could potentially be used to replicate Fable's capabilities, you get a worse model. Quietly. The thing being protected isn't a third party who might be harmed. It's a lead that might be eroded.

You can argue about whether that's a legitimate business decision — protecting a safety-focused lab's edge in a field where that edge arguably matters for broader outcomes. But you cannot call that safety without emptying the word of meaning. And once you've emptied it, you've done something more dangerous than whatever you were trying to prevent: you've made "safety" into a label that can be applied to any restriction a company finds convenient.

---

There's also the matter of what this does to the broader relationship between AI developers and the community of people building with them. The current era of AI tools runs on developer trust. Engineers integrate these models into real systems, real workflows, real products. That integration is an act of faith — faith that the model will perform consistently, will behave predictably, will tell you when it can't help.

Silent degradation violates that faith at its foundation. It introduces a question you can never fully answer: was this output the model's best effort, or was it something else? For work that matters — security reviews, architecture decisions, code that runs in production — "I can't tell if this was real" is an unworkable baseline.

The developers who spoke out about Fable aren't a fringe. They represent the people who build things with these tools. When they say the trust is broken, it's worth listening — not because they're always right about the technical details, but because their trust is the product. Lose it, and you have a technically impressive model that no one wants to bet on.

---

The cybersecurity researchers who are unhappy about Fable's guardrails are not, by and large, asking for permission to do dangerous things. They're asking for a straight answer. Tell me you won't help me. Tell me I need to apply for a verification program. Tell me this output has been limited. Give me something I can work with.

Don't take my money, generate text, and quietly pretend the text is something it isn't.

That's not a frontier AI safety problem. It's a honesty problem. And honesty isn't optional infrastructure for a tool you're asking people to trust with consequential work.

A model that says no — clearly, directly, with an explanation — is still a model worth trusting within its limits. A model that silently degrades its own output is a model you can't trust at all, even when it's performing at full capacity. Because now you can't know which is which.

Anthropic built something remarkable with Fable. It's genuinely disappointing that they also quietly built in a mechanism that makes it impossible to know, on any given day, whether you're getting what you paid for. That's not a guardrail. It's a trap door — and you only find it after you've already fallen through.
