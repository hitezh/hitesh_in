---
title: "Anthropic cut 80% of its AI's instructions. Most teams are adding more."
slug: "your-ai-outgrew-your-rulebook"
date: "2026-07-26"
description: "Anthropic stripped most of its coding agent's system prompt and lost nothing. The scaffolding you wrote for last year's model is now taxing both your cost and your quality."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "llm"
  - "strategy"
image: images/cover.svg
draft: false
---

Anthropic just [removed more than 80% of the system prompt](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models) behind Claude Code and reported no drop in performance. The instructions were not wrong. The model had simply outgrown needing them, and every line that stayed was working against it.

I keep seeing companies move the other way. A new model lands, it is visibly more capable, and the response is to wrap it in more rules, more guardrails, more prompt scaffolding than the last one carried. The intuition feels responsible. It is also, increasingly, the thing holding the output back.

## The junior-to-senior handoff, run on a model

Any manager who has grown a team knows this shape. A new hire gets a checklist: here is exactly how we write the ticket, here is the template, do not deviate. It works, because judgment has not arrived yet and structure substitutes for it. Then the person gets good, and the same checklist that trained them starts to annoy them, then to slow them down. The competent version of that employee needs the goal and the constraints that actually matter, not the numbered steps. Keep handing a senior engineer a junior's checklist and you get worse work from a better person.

That is precisely what an over-specified prompt does to a capable model. Anthropic's own example is a rule like "never write multi-paragraph docstrings," which was useful when older models over-wrote and useless clutter once the model could read the surrounding code and match it. The instruction that raised the floor for a weaker model now caps the ceiling for a stronger one. The discipline has quietly inverted. With last year's model the job was to constrain; with this year's it is to delegate. Most teams are still doing the first job because nobody told them the model got promoted.

## Your prompt is a cost line, not just a quality knob

There is a version of this that shows up on the invoice. Every instruction in a system prompt is tokens, and those tokens are re-read on every single call. A bloated prompt is not a one-time setup cost. It is a per-request tax you pay forever, on traffic you hope will grow. When the guidance stops improving the answer, you are paying to make the answer slightly worse.

Most teams cannot tell you what their prompt scaffolding costs them, because they have never separated the instructions that change the output from the ones that just make the authors feel safe. That is the same blind spot I wrote about when frontier and cheap models started converging: the teams that win treat the model as an interchangeable part and [invest in the layer around it](/2026/your-model-was-never-your-moat/) instead of hoarding instructions. Prompt bloat is a margin lever hiding in plain sight, and unlike most cost cuts, tightening it usually improves the product at the same time.

## Most prompts are archaeology

Open a mature AI system's prompt and you are usually reading strata. This paragraph was added the week GPT-4 kept hallucinating a field. This block was a patch for a tool-calling quirk that got fixed two releases ago. This whole section is cargo cult, copied from a blog post nobody remembers. The prompt grew the way legacy code grows: every incident left a sediment layer, and nothing was ever removed because removing it felt risky and adding it felt free.

The uncomfortable part is that a good chunk of it was written for a model that no longer exists. Models ship every few months now, and each generation changes what it needs told. Almost no team re-audits the scaffolding when the model underneath it changes. So the rules accumulate, calcify, and start describing a machine that has been replaced twice. If I were advising a team here, the first exercise would be boring and high-return: take the current prompt, delete the half you cannot prove earns its place, run your evals, and see what actually breaks. Usually less than you fear.

## Debug by subtraction, and design the interface instead

The deeper reflex to unlearn is what you do after a bad output. The instinct is to add a rule: the model did X, so write "do not do X." Sometimes that is right. Often the real fix is to delete the instruction that made the model overfit in the first place, or to change what it can see rather than what it is told. Debugging capable systems by subtraction is counterintuitive and it is where a lot of the quiet wins are.

The other half of Anthropic's shift is a product lesson wearing engineering clothes. Instead of showing a model examples of how to use a tool, they now put the guidance into the tool's own design: expressive parameters, a clear name, an enum that lists the valid states so the right behaviour is the obvious one. Treat the model as a user of your tools and design the affordances the way you would for a person, and you need far fewer words telling it what to do. That is the same discipline as deciding [how much autonomy a workflow can safely carry](/2026/the-autonomy-budget/): you shape the environment so the capable actor does the right thing by default, rather than narrating every step.

## What this actually changes

The executive version is short. Managing capable AI is a delegation problem, not a control problem, and your instinct to add oversight after every stumble is the instinct that made junior teams slow. Put re-auditing your AI scaffolding on the same cadence as your model upgrades, because the constraints you wrote a year ago are now costing you on both the invoice and the output. The teams pulling ahead are not the ones with the most elaborate prompts. They are the ones who trust a capable model enough to get out of its way, and who know exactly which few instructions are earning their keep.

If you are trying to work out which parts of your AI scaffolding are helping and which are just expensive habit, that is exactly the kind of question worth [an advisory hour](/work-with-me/).
