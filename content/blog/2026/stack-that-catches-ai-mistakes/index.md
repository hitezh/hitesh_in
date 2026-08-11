---
title: "Pick the stack that catches your AI's mistakes"
slug: "stack-that-catches-ai-mistakes"
date: "2026-08-11"
description: "A popular claim says exotic languages save tokens when AI writes your code. On real tasks that edge disappears, and the number worth optimizing is the cost of being wrong."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "developer-tools"
  - "strategy"
---

A claim has been making the rounds among engineering teams: choose a terse language and your AI coding agent will spend fewer tokens, so you pay less and move faster. The early numbers looked convincing. Then Dan Luu [tested them on real work](http://danluu.com/pl-tokens/), and the advantage mostly fell apart. On toy problems, a dense language like J or Clojure did use a third to half the tokens of the alternatives. On a substantial task, writing a Zstd decoder from the spec, or a full Pandoc feature, the gap closed. What actually predicted a good result was how popular and well-documented the language was.

I keep coming back to that result, because most teams reaching for the "token-efficient" language are optimizing the wrong number, and the reason has almost nothing to do with tokens.

## The visible cost is the small one

The tokens spent generating code are the most visible cost of AI-assisted development, and close to the smallest. The expensive line is the one you can't see on the invoice: review and rework, the hours a human spends catching output that is confident, plausible, and wrong. I wrote about this pattern in [automation is cheap, understanding is the bill](/2026/automation-is-cheap-understanding-is-the-bill/). Picking a stack to shave the visible number while inflating the invisible one is a trade most teams would refuse if they could see both sides of it.

A niche language makes the invisible cost worse in two ways at once. The model has seen less of it, so it makes more subtle mistakes. And fewer of your engineers can read it, so those mistakes take longer to catch. You saved some input tokens and bought yourself rarer bugs on code that fewer people understand.

## What a language is actually for now

For decades we chose languages for human productivity: how quickly a person can write them, how easily the next person reads them, who you can hire to maintain them. When a machine writes most of the first draft, that question quietly changes shape. The value of a stack moves from how fast a human writes it to how cheaply a machine can prove it correct.

Seen that way, a lot of "matters of taste" turn into economics. Static types, a compiler that refuses to build nonsense, exhaustive pattern matching, a fast test suite, a strict linter: these become the cheapest place to catch an agent's mistake, before a human ever looks at it. That is the same argument I made in [point your AI where the checking is cheap](/2026/point-ai-where-checking-is-cheap/). The constraint has moved to verification, so the stack that lets a machine catch errors is worth more than the one that saves twenty percent on the way in.

## Boring gets a second reason

"[Choose boring technology](https://boringtechnology.club/)" was already good advice. The agent era hands it a second justification. A model is better at your stack the more of that stack exists in the world to train on. Popular, dull, heavily documented languages are exactly where the agent guesses least, because that is what it learned from. Reach for a clever niche language to save tokens and you inherit the least-supported failure modes, on the code you understand worst, reviewed by the fewest people on the team. That is a poor bargain before you even count the tokens.

## What I'd tell a CTO standardizing for AI

If I were advising a team picking a default stack for heavy AI use, I'd weight three things in this order:

1. **Ignore the token cost of the language.** It is the smallest, most visible number in the equation, and any saving is repaid many times over in review time.
2. **Buy verifiability.** Prefer stacks where a machine, not a person, catches the mistake: strong types, a strict compiler, good tests, fast static analysis. Judge a language by how much wrong output it refuses to accept.
3. **Default to boring and popular.** Treat an exotic choice as a tax paid in hallucinations and thin review, worth it only when the domain genuinely demands it.

There is a larger shift underneath this. For years the fashion ran toward polyglot everything, the perfect small language for each small service. When agents write the code and humans mostly review it, the gravity reverses. Consolidating onto fewer mainstream, verifiable stacks stops being an ops preference and becomes an AI-productivity decision. The teams that get the most out of coding agents over the next year won't be the ones who found the most token-efficient language. They will be the ones who made their own code cheap for a machine to check, which, as I've argued before, is [where the real job has moved](/2026/reviewing-is-the-job/).

If you're trying to work out which parts of your stack to consolidate before you lean harder on agents, that's exactly the kind of decision I like to think through with teams in an [AI advisory hour](/work-with-me/).
