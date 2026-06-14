---
title: "When the evidence is AI-generated"
slug: "when-the-evidence-is-ai-generated"
date: "2026-06-14"
categories:
  - "technology"
tags:
  - "ai"
  - "accountability"
  - "law"
draft: false
---

A police officer in Derbyshire, England, is under [investigation](https://news.sky.com/story/derbyshire-police-officer-investigated-for-using-ai-to-create-evidence-in-multiple-cases-13553661) for using AI to create or alter evidence across multiple criminal cases. The investigation is ongoing and details are still emerging, but the core claim is stark: some of what appeared in those case files, apparently, was generated.

The temptation is to read this as a misconduct story. One officer, an investigation underway, a handful of affected defendants. That framing might hold. But the structural problem it reveals will outlast whatever happens in Derbyshire.

## AI made the barrier disappear

Manipulating evidence used to require real skill. Doctoring a photograph, forging a document, fabricating a witness account -- each required effort, and the effort left traces. Forensic labs could detect them. The difficulty was a practical safeguard.

AI has erased most of that difficulty. Generating a convincing image, enhancing a grainy surveillance photo, producing text that reads like a statement: these are now minutes of work, not days. And unlike manual editing, AI-generated content doesn't leave consistent forensic fingerprints. The tools courts and labs use to detect tampering are in an arms race with the generation tools, and they're currently losing it.

## The enhancement trap

The harder version of this problem involves no malice at all.

Say an officer has a blurry surveillance image and runs it through an AI upscaling tool before adding it to an evidence file. The intent is to make a grainy truth clearer. What the AI actually did was fill in pixels using a statistical model of what typically appears in such images -- patterns learned from training data, not a magnification of what was physically there. The enhanced photo looks more convincing. It might also be wrong in ways that look right.

Courts run on chains of evidence. Every link is supposed to be independently verifiable. The moment AI processes a piece of evidence, even modestly and in good faith, that link becomes harder to verify. If the processing wasn't disclosed, the chain rests on an assumption no one flagged.

This is not a hypothetical. It's the question at the center of the Derbyshire case.

## What courts weren't built for

Legal authentication was designed around analog evidence: photographs, signatures, fingerprints, paper documents. The frameworks are good at catching human-scale manipulation: obvious edits, timestamp mismatches, inconsistent handwriting. They weren't built for a world where any digital artifact can be regenerated convincingly in under a minute.

Some forensic tools for detecting AI-generated content exist. But they require someone to run them, know what to look for, and be motivated to look in the first place. More importantly, the legal framework in most jurisdictions doesn't require disclosure when AI tools are used to process evidence. That gap is the vulnerability.

## The trust layer problem

Police, courts, and forensic labs run on assumed reliability. Their outputs are treated as grounded in reality unless challenged, because you can't re-examine every step of every case from scratch. The system is efficient precisely because it doesn't demand that level of scrutiny by default.

AI-assisted manipulation exploits that efficiency. A fabricated or enhanced piece of evidence doesn't arrive looking suspicious. It arrives looking like evidence. The system's trust layer (what makes it work) becomes a vulnerability the moment the tools generating that evidence can't be independently verified.

What needs to change is infrastructure: chain-of-custody rules that treat AI processing as a material change, mandatory disclosure when AI tools touch evidence, and auditing of how those tools are used in case preparation. A basic standard that's currently absent.

My guess is that this Derbyshire case will be treated as an isolated incident and closed. That would be the easier lesson -- and the wrong one.

The technology arrived. The accountability layer is still catching up.
