---
title: "When code gets cheap, your abstractions get expensive"
slug: "when-code-gets-cheap"
date: "2026-09-11"
description: "Shopify's return to native Swift and Kotlin looks like an AI story. It's really a lesson in why the efficiency layers in your stack may no longer earn their cost."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "software-engineering"
  - "strategy"
  - "architecture"
image: images/cover.svg
draft: false
---

Shopify spent five years as one of React Native's loudest champions. It contributed core libraries, shipped its flagship apps on it, and told the industry that cross-platform was the grown-up choice. Last week it [went back to native Swift and Kotlin](https://shopify.engineering/back-to-native), rebuilding its Shop app from a proof of concept to a store-published native app in twelve weeks. The stated reason is AI: coding agents can now do enough of the mechanical work that maintaining two native codebases is no longer the deciding cost it was in 2020.

That is the headline, and it is the least interesting part.

## The reason that doesn't survive contact

The obvious reading is "AI made native development cheap, so native won." That logic has a hole a first-year strategist would find. If agents make it cheap to build and maintain two native apps, they also make it cheap to build and maintain one React Native app. Cheaper, in fact, because you are editing a single implementation instead of generating, reviewing, and reconciling two. On pure cost, AI is an argument for keeping the abstraction, not dropping it.

So cost is not the real story. Something else moved.

## AI reprices the abstraction, not the code

Cross-platform frameworks exist to sell one thing: write it once, run it everywhere. That promise was valuable for exactly one reason. Writing the same screen twice, by hand, in two languages, was expensive human labor, and "don't repeat yourself" became the cardinal virtue of software design because repetition burned your scarcest resource.

AI reprices that resource to near zero. An abstraction earns its keep by saving labor, but it charges rent whether or not that labor was ever expensive. React Native's rent is real and it is permanent. You are always a version behind the platform, always wrapping the capability the OS shipped last week, always debugging through a layer nobody at Apple or Google supports. When the labor it saved becomes cheap, the savings shrink and the rent stays. The abstraction goes underwater.

That principle does not stop at mobile frameworks, which is why it is worth saying plainly. Every efficiency layer in your stack that exists mainly to spare humans from duplication is now a candidate for re-pricing: shared component libraries stretched across web and mobile, heavy ORMs that hide the database, config-driven engines built so nobody writes the same thing twice. All rational when duplication was the expense. When duplication is cheap and the abstraction still taxes you, the math inverts.

## The bill doesn't vanish, it moves

None of this makes going native free, and the sharpest objection to Shopify's move is the honest one. The cost of two codebases was never the first build. It is parity: the same feature, the same experiment, the same accessibility fix, the same edge case, kept in sync across two platforms for years. That is a divergence cost, and it accrues long after the launch press has moved on. I have written before that [automation is cheap and understanding is the bill you don't see](/2026/automation-is-cheap-understanding-is-the-bill/); this is the same bill, relabeled.

There is a second bill, and it is strategic. Shopify was not a passenger on React Native. It was a top contributor with a seat at the table, shaping the framework it depended on. It has now traded that for a dependency on frontier coding agents whose capability, pricing, and terms it does not control and cannot influence. That is a governance downgrade dressed as a win. It may still be the right trade, but a leadership team should name it as a trade, because [your model was never your moat](/2026/your-model-was-never-your-moat/), and neither is your agent vendor.

## The asset moved from the code to the harness

This is the part I would actually study if I were advising a company through this. To make agents produce two trustworthy native apps, Shopify built a system it calls Helix: a pipeline where every change has to pass tests, match the running app in a visual review, survive two adversarial AI reviewers, and get a human's sign-off before it lands. Read that carefully. The valuable, defensible thing they built is not the Swift or the Kotlin. It is the harness that lets machine-written code be trusted at all.

That is the new shape of software architecture. When the code itself is cheap to generate in any language, the moat is the specification and the machinery that proves an implementation meets it. The apps become build artifacts of a spec. The spec and the tests become the asset. A team that internalizes this stops arguing about which language the agent writes in and starts investing in the harness that makes any output safe. It is the same instinct as building [an evaluation suite from your own backlog](/2026/your-backlog-is-the-benchmark/): the exciting part stays swappable because the boring part holds the line.

## What a leadership team should actually do

The transferable lesson isn't "go native." Your app may have every reason to stay cross-platform. What Shopify did, and what most companies never do, is go back and re-audit a five-year-old architecture decision because the assumption under it had expired. The 2020 choice rested on "native is expensive because humans write it twice." That sentence stopped being true, and almost nobody noticed, because settled decisions don't get re-opened.

So the exercise I would run is unglamorous and high-leverage. List the load-bearing assumptions under your biggest architecture choices, the ones about what is expensive and what is scarce. Then diff them against 2026. Which abstractions did you adopt to save human effort that AI now supplies for free? Which of those are still charging rent? You will find at least one, and re-pricing it is worth more than any model upgrade on your roadmap.

If you want a second pair of eyes on which of those bets have expired and which are still load-bearing, that is the kind of question I like to work through in an [AI advisory hour](/work-with-me/).
