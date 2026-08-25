---
title: "Your 'local' AI has a remote control plane"
slug: "local-ai-remote-control-plane"
date: "2026-08-25"
description: "Microsoft's Paint stamps a server-issued ID into images generated on your own machine. For AI deployment, what matters is where control lives, not where compute runs."
categories:
  - "technology"
tags:
  - "ai"
  - "infrastructure"
  - "governance"
image: images/cover.svg
draft: false
---

A security researcher recently [pulled apart Microsoft Paint](https://xusheng.dev/posts/reversing/mspaint_invisible_watermark/main/) and found something most people missed. When you use it to generate an image, the app sends your prompt to a Microsoft server, which returns a unique identifier. That ID then gets woven invisibly into the pixels of the picture and recorded in a provenance manifest attached to the file.

The detail that matters: this happens even on the new Copilot+ PCs, where the image model runs on your own hardware. The generation is local. The prompt still leaves your machine, and the finished file still gets signed remotely before it lands in your folder. "Offline" turns out to mean the math ran locally while the paperwork was filed elsewhere.

Most of the coverage read this as a privacy story, and it is one. But the more useful lesson for anyone deploying AI is about a word we have all started using loosely.

## "Local" quietly became two claims

When a vendor says a model runs on-device, we hear one thing: it all happens here, nothing leaves, I am in control. That was roughly true for the first wave of small on-device models. It is no longer safe to assume.

"Local" has split into two separate claims that vendors are happy to let blur together. One is where the computation happens. The other is where the control lives: moderation, policy, signing, the identifier. Paint gives you the first and keeps the second. The chip in your laptop does the work; the decision about what you made, and the record of it, sits on a server you do not run.

This is worth naming because the gap is where the surprises hide. A team can satisfy a data-residency requirement by pointing at on-device inference and still route every prompt through a remote endpoint for the part that actually creates the audit trail.

## Provenance is a control layer, not just a feature

The signing itself is not the villain. Content provenance is becoming law. The EU AI Act's [Article 50](https://artificialintelligenceact.eu/article/50/), in force since August, requires AI-generated content to carry a machine-readable mark, and the industry's answer is [C2PA](https://c2pa.org/), the standard that stamps a signed manifest into the file. In a world where anyone can produce a convincing image in seconds, being able to prove what a thing is, and where it came from, is genuinely valuable. I have argued before that [once evidence can be synthesized cheaply](/2026/when-the-evidence-is-ai-generated), provenance becomes the scarce good.

The strategic catch is who operates the layer. A provenance system is a registry plus a signer. Whoever runs it sits between you and your own work product, and sees the metadata flowing through. That is the same shape as the toll booth [Cloudflare built for AI crawlers](/2026/ai-toll-booth-cloudflare): sold to the public as trust and safety, and functioning for the operator as a position in the middle of everyone else's traffic. Payment rails work the same way. The party who verifies also meters.

So provenance carries two faces at once. To the reader of a document it is a trust feature. To the vendor it is distribution: a chokepoint every piece of content passes through, with an identifier that ties each artifact back to a prompt on their servers.

## What this changes for how you build

Three things I would act on if I were advising a company that produces digital content at any scale, which today is every company.

First, treat tool metadata as part of your data perimeter. Your governance policy almost certainly covers where files are stored and who can read them. It probably says nothing about what your creation tools silently embed in those files, or which server issued the ID sitting inside your quarterly report's cover image. A hidden identifier that links a document to a prompt logged on someone else's infrastructure is a data-residency event, and it arrives by default. That default deserves the same scrutiny [we finally gave cookie banners](/2026/consent-theater). Name it before an auditor does.

Second, separate local inference from local control in every vendor conversation. "Runs on-device" is a latency and cost claim. It is not, by itself, a sovereignty claim. Ask the boring questions: where does moderation happen, where does signing happen, and what leaves the machine even on the offline path. The answer is often different from the datasheet.

Third, choose your provenance posture rather than inheriting one. For public, brand-facing content you may want strong, verifiable provenance and should adopt it early. For confidential or regulated work, a tool that phones a prompt home and stamps a traceable ID into the output is exactly what you do not want. Same technology, opposite decision, and the tool will not ask which case you are in.

The reflex to fix is treating "local," "private," and "offline" as synonyms. They stopped being synonyms the moment the control plane and the compute plane split. The teams that get AI governance right over the next few years are the ones that read the second layer, not just the first line of the spec.

If you are trying to work out what your own stack quietly sends home, that is exactly the kind of question worth [an hour together](/work-with-me/).
