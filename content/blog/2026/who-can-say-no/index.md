---
title: "Count the people who can say no to your AI project"
slug: "who-can-say-no"
date: "2026-08-31"
description: "A working demo rarely decides an enterprise AI project. The number of people who can veto it does, and that count is the variable leaders forget to manage."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "strategy"
  - "engineering-leadership"
---

A familiar thing happens to AI projects inside big companies. The demo works. A small team wires a model into a real workflow, shows it in a review, and the room nods. Then the project spends the next two quarters in meetings and never ships. Nobody killed it. No single person even objected very hard. It just accumulated enough weight to stop moving.

I have watched enough of these to stop blaming the usual suspects. The model was good enough. The engineers were capable. The budget existed. What actually happened gets easier to see once you count the people who could say no.

## The math nobody runs

Alex Komoroske has a [talk about why organizations behave like slime molds](https://komoroske.com/slime-mold/) that puts a number on this. Say every person on a project is 99 percent likely to do their part. On a team of ten, the odds the whole thing lands are 0.99 to the tenth power, which is about 90 percent. Add more people and the number keeps falling, faster than the headcount rises. Those same ten people also form 45 pairs who have to stay aligned, and any one of those links going slack can stall the work. None of this needs a villain. Good people, each doing their job well, still produce collective drag. He calls it coordination headwind.

That framing was built for software teams in general. AI makes it worse, and it is worth being specific about why.

## AI recruits a bigger crowd

An ordinary internal tool touches one or two departments. An AI feature touches four at once. It runs on data, so legal and privacy have a stake. It can be wrong in public, so risk and compliance show up. It changes what people do all day, so the affected team and HR form a view. And it often faces a customer, so brand and support want a say. You did not invite these people. The nature of the work did. Each one arrives holding a small veto, and by Komoroske's math each veto is another term in the product dragging your odds down.

## Uncertainty manufactures stakeholders

There is a second effect, particular to AI, that I have come to think matters more than the first. Traditional software fails in ways people can picture. AI fails probabilistically, in ways they cannot. That gap is an invitation. In a review, anyone can raise a hand and ask: what if it hallucinates a refund, what if it leaks a salary, what if it says something we end up reading about later. The questions are fair. They are also unanswerable in the moment, and an unanswerable question works as a veto wearing the costume of diligence.

So uncertainty does more than slow the work. It manufactures new stakeholders, because fear gives more people a reason to be in the room.

## The cure that deepens the disease

The standard corporate response makes all of this worse. A company sees AI stalling, so it stands up a center of excellence, a steering committee, an AI governance board. Every one of those adds coordination surface. You have now built an institution whose main output is more people who can say no.

I understand the instinct. It feels responsible. But you cannot commission your way out of a coordination problem by hiring coordinators. Shopify's checkout team [made their system faster by removing a component](/2026/count-your-systems/), not adding one. The same logic applies to the org chart you wrap around an AI project.

## What the strong teams do

The teams that ship AI do one thing differently. They shrink the number of people who can say no before they go win the number who must say yes.

Three moves do most of the work. First, scope narrow enough that the blast radius is small. An AI that drafts one kind of internal email touches far fewer vetoes than a platform meant to touch everything. Second, treat the pilot as a device for removing stakeholders. Proving the technology is the easy part; its real job is to convert "what if it hallucinates a refund" from a fear into a measured rate, because a stakeholder holding a number is easier to move than one holding a worry. Third, buy where buying lets a vendor absorb a class of objections. A compliant tool answers the legal and security questions with its certifications, which quietly [takes those people off your critical path](/2026/cheap-to-fork-costly-to-keep/). Build it yourself and you own every one of those answers.

## The number to watch

Here is the mental model I would hand any leader starting an AI program. The speed of adoption is set by the number of people who can say no, not the number who must say yes. Most planning obsesses over the second figure, the sponsors and the budget holders. The first figure decides your timeline, and almost nobody writes it down.

So before the next initiative, do the boring exercise. List every person and function who can stall it, not only the ones who approve it. If that list is long, your problem is not the model, and no better model will fix it. Your problem is the shape of the decision, which is something you can actually change. The companies pulling ahead with AI are the ones that [learn and decide faster](/2026/how-fast-your-company-learns/), because fewer hands rest on the brake.

If a promising AI project at your company keeps not shipping, that is usually the more useful conversation to have, and it is the kind of problem I help teams work through in an [AI advisory hour](/work-with-me/).
