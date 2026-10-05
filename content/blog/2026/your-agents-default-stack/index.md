---
title: "Your coding agent has a default stack. Who chose it?"
slug: "your-agents-default-stack"
date: "2026-10-05"
description: "Developers have always picked libraries by taste and familiarity. Now an agent makes those calls at machine speed, and most companies have never written down what it should prefer."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-agents"
  - "software-engineering"
  - "architecture"
  - "engineering-leadership"
image: images/cover.svg
draft: false
---

Nolan Lawson, who has argued for years that developers should [use the platform](https://nolanlawson.com/2026/10/03/why-dont-more-developers-use-the-platform/) instead of reinventing it in JavaScript, spent a post this week taking the other side. His explanation for why so many developers resist is mostly about people. They reach for what they know. Documentation for libraries used to be better than documentation for browsers. And building your own modal dialog is more fun than adopting `<dialog>`, a pleasure he calls the IKEA effect.

His ClickHouse story is the one worth keeping. He and a colleague each built a clever workaround for storing large JSON, one compressing it before storage, the other parking it in a separate key-value store. Both were wrong. ClickHouse already compresses columns, and does it better across rows. Neither of them had read the docs closely enough to know.

That is a story about two good engineers. Now imagine the same decision made a few hundred times a day by an agent nobody is watching closely.

## Dependency choices were always taste

Ask a team why they chose a framework and you will hear about performance, ecosystem and maturity. Watch what actually happens and the answer is usually familiarity, hiring and defensibility. A popular framework is a technology for coordinating people: a large talent pool, a shared vocabulary, and a decision nobody gets blamed for. I don't say that as criticism. It is a rational reason to pick React. It just isn't the reason people give, which means it never gets audited.

Lawson's fun-factor works the same way. The engineer who enjoyed building the custom dialog had a motive, and the senior engineer reviewing the pull request ("we have `<dialog>`, delete this") was the check on it. Taste and its reviewer used to be two different people.

## The agent has taste too, and nobody reviews it

An agent has no IKEA effect, which is the optimistic reading. It also has no preferences you ever chose. It writes what its training and its context make most likely, and my expectation (an inference, not a measurement) is that the most likely output reflects the most common code on the internet, which is framework-heavy, dependency-happy and a few years old. Lawson himself reports both outcomes: agents that pick the right platform API, and agents that write their umpteenth helper function because they ignored the one already in the repo.

So the architecture decision has moved. It used to be made by whoever wrote the code, and sometimes challenged in review. Now it is made by a model's defaults, and the review is a person skimming a large diff for correctness. Nobody in that loop is asking whether any of this should exist. I have written before about [the code you can't explain](/2026/the-code-you-cant-explain/); this is the upstream version, code that was never really chosen at all.

## The strongest objection is a fair one

The Hacker News replies to Lawson's post made the best counter-argument. The native `<dialog>` is not always the better result. Teams pick Adobe's component library or Radix for accessibility behavior and focus handling that the browser element doesn't give them, and date pickers outgrow the native one fast. "Use the platform" can produce a strictly worse product.

I agree, and it is exactly why this can't be left as a slogan. The right answer varies by component, by product and by how much accessibility matters to your customers. That makes it a policy question, and policy is something leadership can set. Defaults are the one place where a small instruction repeats across every task.

## What I would do

If I were advising a team using coding agents heavily, I would start with three unglamorous things.

- **Write the default stack down and put it where the agent reads it.** Which UI approach, which libraries are approved, what counts as a reason to add a new one. Most teams have this in a senior engineer's head. An agent can't read heads.
- **Add a platform check to every pull request.** One line: what does the platform or the existing stack already do here, and why not that. It's the review Lawson's senior engineer used to do, turned into a required field. The agent can answer it too, since reading documentation and running a benchmark now takes minutes. Lawson needed a benchmark to learn he was wrong about ClickHouse. That excuse has expired.
- **Count dependencies like you count headcount.** Track how many packages the agent added last quarter and who is on the hook for upgrading them. Typing the code is cheap now. [The upgrade treadmill and the review burden](/2026/cheap-to-fork-costly-to-keep/) are not.

There is a longer-term reason to prefer the platform when you can. Browser standards are maintained with a decades-long backward-compatibility habit, so code written against them ages slowly. A dependency is a standing commitment to someone else's release schedule. It's the same logic behind [choosing boring technology](/2026/boring-technology-is-an-ai-strategy/), applied to a codebase that is increasingly written by something that finds every option equally easy.

I would also push on the other half of [when code gets cheap](/2026/when-code-gets-cheap/): re-auditing old abstractions matters, but so does auditing the new ones your agent is adding this week.

The question for your next engineering review is simple. Pick one feature an agent built recently and ask what it chose, from what, and why. If nobody can answer, you have found the decision that nobody made. If you want help setting those defaults before they harden, that is a good use of an [AI advisory hour](/work-with-me/).
