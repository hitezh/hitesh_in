---
title: "When your TAM is bigger than US GDP"
slug: "when-your-tam-is-bigger-than-gdp"
date: "2026-06-17"
description: "SpaceX just paid $60 billion for a coding tool. The price is interesting. The justification -- a $26 trillion addressable market -- reveals more about how we price AI right now than about what it's actually worth."
categories:
  - "technology"
tags:
  - "ai"
  - "startups"
  - "software-engineering"
draft: false
---

SpaceX is [buying Cursor for $60 billion](https://www.reuters.com/legal/transactional/spacex-buy-anysphere-60-billion-2026-06-16/). The price alone would fill a week of tech news, but the detail that has stayed with me is the addressable market figure reportedly used to justify it: $26 trillion. Roughly the size of US GDP.

I want to take the number seriously rather than just laugh at it, because it actually reveals something about how the industry prices AI right now.

## The logic isn't crazy

The math isn't irrational on its face. There are roughly a billion knowledge workers globally. If AI can accelerate each one enough to replace $5,000 to $10,000 in annual labour value, you're already at $5-10 trillion. Push the productivity assumption further and the number grows. If you believe AI eventually touches every form of paid cognitive work, $26 trillion starts to feel conservative.

But TAM measures potential revenue for one player, and revenue captured is not the same as value created. The history of general-purpose technologies is that they create enormous amounts of value and distribute most of it to users. The market for computers and internet access never approached US GDP in revenue, even though those technologies almost certainly created that much value or more. The surplus went to users, not to platform vendors.

For AI to generate $26 trillion in software revenue, users would have to be left with essentially none of their productivity gains. That is what a monopoly looks like, not a market. It is a coherent analytical maximum -- if AI could replace all knowledge work and charge workers their entire salary to use it, you get to $26 trillion -- but as a business scenario it requires market conditions that would presumably trigger regulatory responses and a race to free alternatives.

## What actual deployment looks like

The gap shows up in ground-level economics. The businesses running AI in production rather than just demoing it are finding that inference costs are harder than pilots suggest. Agent loops against frontier models can cost more per task than the human work they were meant to replace, once you factor in reliability, retries, and the engineer hours spent keeping the thing on-rails.

That's not an argument against AI. It's an argument for precision about which tasks actually clear the economics. Some workflows do so comfortably: code review, first-draft generation, data extraction, pattern-matching across large document sets. Others don't, at least not yet. The teams making money have found the former and built around them. The teams burning money are trying to apply the technology first and find the use case later.

## Cursor's specific position

Cursor is a genuinely good product. But it is substantially a user interface sitting on top of models it doesn't own -- Anthropic's, OpenAI's, Google's. Those same model providers now all have their own coding tools: Claude Code, Codex, Gemini Code. The foundation is building the house on top of itself.

That doesn't make Cursor worthless. Distribution matters a lot in enterprise software, and Cursor has millions of developers who have built their workflows around it. But the moat is narrower than $60 billion implies. The margin of safety at that valuation requires either the underlying models to remain dependent on third-party interfaces (which the providers are actively working against) or for Cursor to develop capabilities that frontier models can't fold into themselves. That is a very specific and time-sensitive bet.

## What the $26T claim is actually doing

Large TAM figures in acquisition materials serve a particular function: they establish that the space is big enough to justify the price, without committing to a capture rate. No one is actually claiming Cursor will earn $26 trillion. The claim is that even a small fraction of a $26 trillion market is a large absolute number, so paying $60 billion is rational.

The problem is that this framing works equally well to justify almost any price for almost any AI company right now. When you can always zoom out to a sufficiently large addressable market, the discipline of valuation disappears. The dot-com era had the same move -- eyeballs and mindshare at internet-scale justified prices that had no connection to the underlying businesses.

What actually matters for whether Cursor is worth $60 billion is not the total value AI might create across all knowledge work. It is the unit economics of Cursor specifically, how defensible its position is as the models it depends on get better and more self-sufficient, and whether it can build the kind of customer relationships that survive the model providers building their own tools.

Those are answerable questions. The $26 trillion number is not an answer to any of them.

---

*The Reuters report on the acquisition is [here](https://www.reuters.com/legal/transactional/spacex-buy-anysphere-60-billion-2026-06-16/).*
