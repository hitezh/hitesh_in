---
title: "The jailbreak that wasn't"
slug: "the-jailbreak-that-wasnt"
date: "2026-06-13"
categories:
  - "technology"
tags:
  - "ai"
  - "regulation"
draft: false
---

The US government banned an AI model on June 12 for being able to read code and fix bugs.

That is the actual story. Following a government directive issued Thursday afternoon, Anthropic suspended global access to its two most capable models, Fable 5 and Mythos 5. The stated reason was a "jailbreak" vulnerability. Anthropic, in [its public announcement](https://www.anthropic.com/news/fable-mythos-access), described what the jailbreak actually was: "asking the model to read a specific codebase and fix any software flaws."

That is not a jailbreak. That is a Tuesday in most engineering teams.

Anthropic pushed back publicly, noting the same capability is "widely available from other models." They are right about that. But there is a more interesting tension buried in this than a bad government call.

## They wrote the script themselves

For years, the biggest names in AI have been the loudest voices warning about AI risks. Anthropic and OpenAI have written papers, testified before Congress, funded policy organizations, and used the language of existential threat. The pitch, roughly: we are building something potentially dangerous, and only we know how to do it carefully.

Governments, made up of people who understand neither the technology nor its limits, absorbed that message. They started treating AI labs the way they treat defense contractors: necessary, powerful, and requiring oversight.

So when the government issued a directive Thursday and Anthropic had to suspend access, this was the system responding to the signals it had been given. The labs said AI could cause catastrophic harm. An official, probably briefed on exactly that framing, decided a model capable of fixing code was alarming enough to act on.

You can't spend years telling people your product might be dangerous, and then be surprised when someone with a badge takes you at your word.

## The bind AI labs are in

There is a genuine coordination problem here, and I don't think it's purely cynical on the labs' part. Every major lab operates under the same logic: if we stop, someone else will build it, probably less carefully. That's why they call it responsible development. The nuclear weapons parallel is at least partly sincere.

But it creates an uncomfortable situation. You have companies arguing simultaneously that they're building things too dangerous to leave to competitors, and that the government is wrong to restrict those things. Both statements can be true. But they produce a credibility problem that compounds over time.

If the safety concern were fully sincere, you'd expect the labs to be spending serious money lobbying for everyone to slow down, including themselves. Instead, safety concern and commercial interest have mostly pointed in the same direction: use safety framing to push for regulation that freezes the market at current capabilities, makes compliance expensive for smaller entrants, and gives incumbents a moat. I'm not saying that's the conscious intent. But it is the outcome, and it's worth naming.

## What the ban means for builders

Anthropic suspended access globally. Teams in India, Europe, Singapore - everywhere - lost access with no timeline, because of a directive issued at 5:21 PM ET on a Thursday. By the next morning, API calls were returning errors.

This is a useful reminder about the terms you are actually on when you build on US AI infrastructure. A national security call can remove your access before the week is out, with no notice and no recourse. The less capable models stayed up, but if your production pipelines ran on Fable 5, that's a painful Friday.

At a practical level: if you have critical workflows running on any single US-headquartered AI API, this week is a good time to think about what your fallback looks like. Not because the risk is high on any given day, but because Thursday showed it isn't zero.

## The question I keep coming back to

The government's definition of "jailbreak" here is so far from the technical meaning of that word that it raises a real question: does anyone involved in this decision actually understand what they're regulating?

Maybe. AI capabilities are genuinely hard to explain to people who haven't used them. And "the model can read code and find security flaws" does sound alarming if you don't know that this is what the product is for.

But the labs bear some responsibility for this confusion. When you spend years talking about your models as if they're existential weapons in responsible hands, you train people to see weapons. The government took the framing seriously. The labs are now arguing the framing was overstated.

That argument might be right. But it is much harder to make credibly when you're the ones who made it.
