---
title: "Name the axis you're willing to lose on"
slug: "name-the-axis"
date: "2026-08-07"
description: "Every technology choice is a trade-off, yet most teams argue over options that lose on every axis. A century-old idea makes the real decision visible."
categories:
  - "technology"
tags:
  - "ai"
  - "strategy"
  - "product-strategy"
  - "ai-strategy"
  - "economics"
image: images/cover.svg
draft: false
---

A hundred-year-old economics idea spent this week near the top of the tech feeds, explained through Mario Kart of all things. It is a [good explainer](https://www.mayerowitz.io/blog/mario-meets-pareto) and worth ten minutes. But the reason it matters to anyone who makes technology decisions has nothing to do with karts. It is that the Pareto frontier is the cleanest tool I know for catching the most common waste in a strategy meeting: a long argument about an option that was never worth choosing.

The idea is simple once you see it. When you choose between things that vary on more than one axis, say cost and quality, or speed and accuracy, some options are worse on every axis than something else already on the table. In the game, Koopa Troopa is slower than one character and accelerates worse than another, so a serious player never picks him. Economists call him dominated. Clear away every dominated option and what remains is the frontier: the set where you cannot improve one number without surrendering another. On the frontier there is no single best. There is only the trade you are willing to make.

## Most debates are about dominated options

This is the part that generalizes. Sit through enough vendor selections and architecture reviews and you start to notice how many of them are arguments about dominated options. Two tools are on the table. One is cheaper, faster to integrate, and better supported, and yet the meeting runs a full hour because the weaker option has a champion in the room. The debate feels balanced because both sides are staffed. It is not balanced. One choice loses on every axis the team actually cares about, and the useful move is to say so in the first five minutes and hand everyone back their afternoon.

The strongest teams I have seen clear the dominated options early and without ceremony, then spend their real attention on the few choices that genuinely trade against each other. The weaker habit is to give every option equal airtime, which feels fair and decides nothing.

## On the frontier, "the best" is a non-answer

Once you are down to the frontier, something uncomfortable shows up: there is no best, and asking for it is a way of not deciding. "Get me the best model" sounds like leadership. It is closer to the opposite. The frontier is precisely where more quality costs more money or more latency, so the real question is which of those you will give up.

This is why I keep pushing teams to name the axis they are willing to lose on. Say it in plain words. We will be slower so we can be cheaper. We will spend more so the thing feels instant. A reading-tutor startup I wrote about recently kept a [smarter but slower model](/2026/smartest-model-worse-product/) and paid for the speed in engineering, because for a six-year-old learning to read, the one axis they could not lose was time. Naming that trade was the whole strategy. Everything after it was execution.

A leader who will not name the axis has not escaped the trade-off. They have handed it, unspoken, to whoever ships the feature, and that person will land somewhere on the frontier by accident.

## The frontier keeps moving

There is a second-order effect the game cannot show you, because kart stats hold still and the AI ones move every quarter. The frontier itself shifts. Open-weight models now [match frontier quality at about a fifth of the cost](/2026/your-model-was-never-your-moat/), which means a choice that sat comfortably on the frontier last year is dominated today, because something is now better on both cost and quality at once.

That should change how much you spend locking in your current position. I have watched teams build elaborate [cost-routing machinery](/2026/cheaper-tokens-bigger-bill/) to win a trade-off the market erased a few months later by simply making tokens cheaper. When the frontier is sliding under your feet, the durable move is to stay light and cheap to change, not to pour concrete around the spot you happen to be standing on.

## The best move is often to add an axis

One more, and it is the one I would want a product team to hold on to. A dominated option is not always doomed. Sometimes you rescue it by adding a dimension nobody was competing on. That same tutoring startup was losing on latency until it changed the board: stream the model's actions and start acting on the first one while the model is still thinking. They did not slide along the frontier. They added an axis and put a dead option back in play.

A lot of real innovation looks like that. Instead of winning the argument everyone is already having about price and speed, you start a different one. In India, card networks fought over fees and acceptance for years; UPI did not win that fight, it added an axis, free and interoperable rails, and reset the board underneath it. The teams stuck ranking options on two axes are playing a game their sharper competitors have already left.

So the next time a decision stalls, run it through the frontier before you run it through another meeting. Cut the dominated options fast, and you will often find half the room was defending one. For whatever survives, stop asking which option is best and ask which axis you can afford to lose. If you can name it, you have decided. If you cannot, you have not decided anything yet. You have only booked the argument for later.

Which axis a given business can afford to lose is, more than any question about models or tools, what I most often end up working through with founders in an [AI advisory hour](/work-with-me/).
