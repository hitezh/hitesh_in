---
title: "The AI gave better advice to people who needed it least"
slug: "ai-advice-needed-it-least"
date: "2026-08-02"
description: "An MIT and Stanford study found AI gives sound financial advice, but the gains went to sophisticated users. Closing that gap is a product decision, not a literacy problem."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-strategy"
  - "product-strategy"
  - "prompt-engineering"
  - "finance"
image: images/cover.svg
draft: false
---

A team at MIT Sloan and Stanford ran a study I keep thinking about. They asked 1,000 adults to write their own prompts asking a language model for financial advice, then [simulated what would happen](https://mitsloan.mit.edu/ideas-made-to-matter/ai-financial-advice-surprisingly-good-especially-if-you-ask-right-questions) if people aged 22 to 89 followed that advice across a lifetime. The headline is cheerful: the advice was good. It pushed people to save more, hold stocks, diversify, and take less risk as they aged. The lead researcher said the team was "somewhat surprised by how good the advice was."

The part worth stopping on is buried under that. The quality of the advice tracked the quality of the question. A bare prompt ("where should I put $50 a month?") produced a mediocre answer. A prompt loaded with age, income, job risk, and economic assumptions produced advice a finance professor would sign off on. And the people writing the bare prompts were the ones who most needed the help.

The receipts, from the same study: women and less financially literate users ended up with roughly $50,000, about 4%, less wealth by 60. People unfamiliar with AI came out around $100,000, or 6%, behind. Two-thirds of the gender gap came from how people wrote their prompts. One-third came from the model itself.

## A capable model is not a level playing field

The comforting story leaders tell about AI is that it democratizes expertise: give everyone a model and everyone gets a private financial advisor, lawyer, or analyst. This study is a clean, quantified counter. Raw access to a capable model reprices the expertise gap rather than flattening it. The expert gets a better expert. The novice gets confident mediocrity and no way to tell the difference. That last part is the real danger, because a wrong answer delivered fluently is exactly how [the money myths a good finfluencer repeats](/2026/finfluencer-money-myths) do their damage. Left as a blank box, a general-purpose model launders the inequality that was already in the room.

This is an old pattern wearing new clothes. Every powerful general tool has done it first. The spreadsheet made whoever knew the formula more productive and left everyone else retyping numbers by hand. Web search rewarded people who knew the right query and made everyone else scroll. Each one created a skill premium, and each premium shrank only when someone productized the skill away: templates, autocomplete, "did you mean." AI advice is sitting at the raw-query-box stage of that curve right now. We are still asking people to know the formula.

## The blank prompt box is the bug

The instinct in the study, and in most of the coverage, is to treat this as a literacy problem: teach people to prompt better. That is the wrong end of the rope to pull. If your product's value depends on the user already knowing what to ask, you have handed the hardest part of the job to the person least equipped to do it. The gap is a product decision dressed up as a user skill.

So the fix is not education. It is design. The difference between $100,000 short and advice that holds up was a better-structured question, and a structured question is something software can build. Do not wait for a prompt. Run an interview. Ask the four things that actually move the answer, age, income, how stable the job is, and what the money is for, then assemble the finance professor's version of the prompt on the user's behalf. The user brings their situation. The product brings the expertise of knowing what to ask.

That reframes where the advantage lives, which I have argued [before](/2026/your-model-was-never-your-moat). The model is rented and identical for everyone who pays. The structured knowledge of what to ask, in what order, and how to read the answer is yours: testable, improvable, and hard to copy. In an advice-shaped product, the prompt is the intellectual property, not the model behind it.

## What I would hold an AI feature to

Three checks I would apply to any AI feature aimed at non-experts.

**Ship an interview, not an oracle.** An oracle answers exactly what you asked. An interviewer works out what you should have asked. The AI features that actually help people are interviewers. If your interface is a single empty box, you have quietly chosen the oracle, and the oracle rewards whoever walks up already knowing the answer.

**Measure the gap, not the average.** "The advice is good" is an average, and the average hides that your worst-served users are often your target market. Instrument outcomes by user sophistication. If your least-expert cohort gets systematically worse results, that is not a footnote. That is the headline metric.

**Own the defaults, because you will answer for them.** One-third of that gender gap came from the model, not the user. Once you can measure that the system itself skews outcomes, "the AI said so" stops being a shield. Advice-shaped products inherit the kind of scrutiny we put on advisers, and the audit surface is your elicitation and your defaults, not the model weights. That is a [governance question](/2026/ai-writes-the-code-who-governs-it), and it lands on whoever shipped the box.

The lesson travels well past money. Legal, medical, tax, hiring, benefits enrollment: anywhere you are tempted to drop a chatbot in front of a hard question and call it access. Access to a capable model is not the same as benefit from it, and the distance between those two is precisely the product you have not built yet. If you are deciding where AI genuinely helps your customers rather than your demo, that distance is the first thing worth mapping, and it is the kind of problem I am always happy to think through in an [AI advisory hour](/work-with-me/).
