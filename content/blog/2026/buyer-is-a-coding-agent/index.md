---
title: "Your next buyer is a coding agent"
slug: "buyer-is-a-coding-agent"
date: "2026-09-04"
description: "AI coding agents now choose the tools, APIs, and databases your engineers build on, before a human ever evaluates them. That rewrites how software gets sold."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "product-strategy"
  - "developer-tools"
  - "strategy"
image: images/cover.svg
draft: false
---

A team at Armature ran the same build requests through Claude Code, Codex, and Cursor about [seventeen thousand times](https://armature.tech/blog/which-tools-coding-agents-install), across 75 repositories in ten languages, and watched which tools the agents reached for when nobody told them what to use. The number that should worry anyone selling developer tools: the three agents agreed on the same choice only 42 percent of the time, and when they disagreed, the reasons had little to do with the human buyer you have spent years marketing to.

Stripe won payments in about 90 percent of runs. PayPal got mentioned 139 times and picked zero. LangChain came up 194 times and was chosen four. Supabase was named 242 times and lost almost all of them to Neon. The gap between getting mentioned and getting chosen is the whole story, and it is a story about a buyer who reads your docs, ignores your brand, and never takes a sales call.

## The evaluator is now a machine that reads literally

For most infrastructure and developer tools, the first evaluation of your product no longer happens in a person's head. It happens inside an agent that has read your documentation, your pricing page, and whatever the model absorbed during training, then makes a call in seconds with no benefit of the doubt.

That changes what your marketing has to survive. The study found agents rejected Mailgun the moment they read a "1-day retention" line, and passed over Supabase because its bundled pricing hid the database underneath. A human sales engineer would have reframed both in a sentence. The agent does not reframe. It takes the least generous reading of whatever you wrote and moves on. Your pricing page is now your sales team, read by something that extends no goodwill.

I have watched teams spend a quarter tuning a landing page for a person's emotional journey. The agent skips all of it and greps for the one capability it was sent to find. If that capability is buried under a bundle or hedged with an asterisk, you lose the deal before a human sees your name.

## Being in the weights is the new incumbency

The "this is just SEO all over again" reaction misses something. Codex web-searched in 94 percent of runs, but Claude Code leaned on its training data most of the time and only reached for search in newer categories. A large share of these defaults are not being served off a search results page you can buy your way onto. They are baked into the model's weights, formed from the code and docs that existed when it was trained.

That is a stranger and stronger moat than SEO ever was. Stripe does not win because it outbid anyone this morning. It wins because a decade of Stripe-shaped code and Stripe-shaped answers taught the model that Stripe is what payment integration looks like. You cannot outspend that in a quarter. The incumbent's advantage compounds every time a model trains on a codebase that already chose it. This is the same lesson as [your model never being your moat](/2026/your-model-was-never-your-moat/), seen from the other side: when the tool itself is commoditized, being the default in the model's memory is the durable part.

The opening is at the edge of that memory. Every retrain reopens the default, and a tool that became idiomatic in the year or two before a training cut can walk into a category the old incumbent used to own. The window is real, and it is not bought with ad budget. It is bought by being the obvious, well-documented choice in the ecosystems you care about while the next model is still reading the internet.

## Your addressable market is now segmented by language

The most useful finding for a product leader: the winner flipped with the repository's language. Resend took TypeScript, SendGrid took Python, Postmark took Go, Azure Communication Services took Java. Same task, same agents, a different idiomatic default in each ecosystem.

So your real addressable market is not "developers." It is developers in the language communities where the model already treats you as the normal answer. A tool can own one ecosystem and stay invisible in the next one over, not because it is worse, but because it never became idiomatic there in the training data. Winning a new language is a distribution problem wearing a documentation costume: you win it by producing enough idiomatic, correct, public examples that the next model absorbs you as the default.

## For the leaders buying, not selling

Turn the telescope around and there is a governance point most executives have not clocked. Nobody on your team decided to standardize on Neon. An agent did, a hundred times, one pull request at a time. Your stack is being chosen for you by whatever opinion a model formed a year or two ago, without a meeting, a review, or a line in anyone's architecture doc.

That is not automatically bad, but it is a decision, and right now it is being made by default. The strongest teams I work with are starting to pin these choices on purpose, with an approved-tools file the agents read, which is the same discipline as [choosing boring technology on purpose](/2026/boring-technology-is-an-ai-strategy/). The alternative is inheriting a stack assembled from a stranger's training data and calling it strategy.

## What I would tell either side

If you sell to developers, write for a reader with no salesperson and no patience. Unbundle your value so the one capability the agent was sent to find is stated plainly, in the words it is looking for, in the ecosystems you want to own. Stop measuring awareness and start measuring what the agents actually install, because PayPal learned the hard way that 139 mentions and zero wins is worth nothing.

If you lead a team that builds with agents, decide your defaults before the model decides them for you. The buyer changed hands, the same way it did when [assistant distribution turned into rented ground](/2026/chatgpt-new-customer/). Only this time the customer reads your documentation, holds you to every word, and has already made up its mind by the time you would have said hello.

If you are trying to work out where your product has to be the idiomatic choice before the next model trains on it, that is the kind of problem I like thinking through in an [AI advisory hour](/work-with-me/).
