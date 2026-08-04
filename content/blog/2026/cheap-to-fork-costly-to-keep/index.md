---
title: "Cheap to fork, costly to keep: AI redraws build versus buy"
slug: "cheap-to-fork-costly-to-keep"
date: "2026-08-04"
description: "AI collapses the cost of maintaining software you didn't write, so part of the buy column becomes buildable. The catch is the forks you now have to govern."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "strategy"
  - "open-source"
  - "build-vs-buy"
image: images/cover.svg
draft: false
---

The argument that [developer tools must now be open source](https://blog.exe.dev/devtools-must-be-open-source) rests on a small, concrete observation: an AI agent can fork an open-source tool, bend it to fit exactly how you work, and then run a nightly rebase that folds upstream updates into your version while you sleep. Customizing software used to be a project you staffed. Now it's a prompt you write once. The author keeps the point aimed at developer tools. I think it reaches the oldest decision in enterprise software, and moves it.

## The barrier was never writing the code

For decades, building your own version of a tool was the wrong move for almost everyone, and the reason was rarely the writing. Any competent team can build a workflow tool, an internal admin panel, a reporting layer. What they cannot cheaply do is keep it alive for five years: patch it, track the platform underneath as it shifts, fix the thing that breaks the week the one person who understood it leaves. Buy won by default because maintenance was the expensive part, and buying is really renting someone else's maintenance.

That is the premise AI is loosening. The popular version of the story is that AI writes code, so now you can build anything. That's the least interesting part. Writing the first version was never the bottleneck. What's changing is the cost of the second year, the tenth year, the fortieth tool, the ongoing tax that made owning software irrational. If an agent can carry a fork forward against upstream, the maintenance premium that made buy the safe answer just fell.

So a slice of the buy column becomes buildable, or more precisely, forkable. Not the whole column. Just the part where you were paying a vendor mostly to keep the lights on for something you could have owned.

## The cost moved; it didn't leave

This is where I part company with the excited reading. A fork you can generate for free is still a fork you now own. Multiply it. Fork forty tools and you have forty dependencies rebasing against forty upstreams every night, each one a place where a clean-looking merge can change behavior you were quietly relying on. The cost of writing the customization fell to nearly zero. The cost of knowing whether last night's rebase broke something did not.

This is the same bill I keep coming back to: [automation makes production cheap and hands you the verification](/2026/automation-is-cheap-understanding-is-the-bill). An agent maintaining your fork is generating change that someone still has to review, and review runs on human understanding you have to keep on staff. So build versus buy gets sharper, not simpler. It stops being "can we build this" and becomes "which of these are we willing to govern." Those are different questions, and the second one is the honest one.

## What this does to the thing you're buying

Turn it around and look from the vendor's side, because your suppliers are about to feel this. A large share of what enterprise software sells is not the core function. It's configurability: the plugin marketplace, the settings sprawl, the professional-services layer that bends a general product into your particular shape. Configurability was itself a response to expensive customization, a way to spread one flexible product across a thousand customers who each needed something slightly different.

When per-customer customization gets cheap, that spreading is the first thing to lose its value. "We're the most configurable platform in the category" is precisely the moat a forkable competitor plus an agent chews through. I've argued that [your model was never your moat](/2026/your-model-was-never-your-moat); the logic runs further than models. When the layer you sold as differentiation commoditizes, advantage moves up to what a fork can't copy: your data, your distribution, your network, the trust you've earned in a place where being wrong is expensive. If you sell software, the uncomfortable question is whether anything you charge for survives a customer forking the rest.

## What I'd actually do

Three moves, whether you're buying software or selling it.

For buyers, treat open source as option value, not ideology. You may never fork the tool. But the right to fork caps your vendor's pricing power and hands you an exit that closed SaaS structurally can't, and an option is worth something even when you never exercise it. For anything sitting inside your core workflow, I would now pay a real premium for source-available over a prettier closed product.

Second, choose what to own by governance cost, not build cost. The tools worth forking are the boring, slow-moving, well-scoped ones where upstream rarely surprises you. The tools to keep buying are the ones where the maintenance you'd inherit is genuinely hard: security-sensitive, fast-moving, regulated. The point I made about [paying for the tools that power everything](/2026/paying-for-open-source-tools) was that a critical dependency deserves a real vendor relationship whether you pay in money or attention. That holds double for a dependency you created by forking.

Third, if you sell software, stress-test your moat against a forkable world now, while you have the runway. Configurability isn't a moat anymore. Find the part of your product a customer's agent cannot reproduce, and make sure that's the part you're actually charging for.

## The line was never fixed

Build versus buy has sat in roughly the same place for thirty years, pinned there by the cost of maintenance. That cost just moved. It didn't disappear; it turned from writing code into governing what your agents write, which is harder to see on a budget and easier to underfund. The teams that redraw the line on purpose will own the software that matters and rent the software that doesn't. The teams that don't will fork everything, govern nothing, and meet the maintenance bill again by surprise.

If you're working out which parts of your stack are now worth owning and which are still better rented, that's exactly the kind of question I like to think through in an [AI advisory hour](/work-with-me/).
