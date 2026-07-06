---
title: "The Internet Doesn't Need a Second YouTube"
date: "2026-07-03"
draft: false
description: "A small open-source video platform shipped a major release this week, and the online reaction split into 'nice tech, doomed to fail' versus something more interesting. The argument reveals how badly we've let one company define what a successful video platform even looks like."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "open-source"
  - "creator-economy"
  - "decentralization"
  - "business-models"
image: images/cover.svg
---

I have spent a good part of my career on two very different kinds of software: products built to reach millions, and internal tools built for a few hundred people who could not do their jobs without them. Only one of those gets called a success story. The other gets called "niche," usually by someone who has never had to actually use the alternative.

That divide is exactly what played out this week around [PeerTube](https://github.com/Chocobozzz/PeerTube), an open-source, federated video platform that just shipped a major release after seven years of quiet development by Framasoft, a French nonprofit. The reaction split cleanly. One camp: interesting technology, doomed — no audience, no money, clunky to use. The other camp: you're asking it to win a game it was never trying to play. I think the second camp is right, and I think the argument itself says more about how warped our idea of "success" has become than anything about the software.

## The math that makes monetization compulsory

The strongest case against PeerTube came from a working YouTuber in the discussion, and it's a fair one on its own terms: a decent twenty-minute video can take forty hours of skilled labor to produce. Do that every week and you have effectively founded a small production company. Without ad revenue, a platform, or a subscriber base to sustain it, that company doesn't exist for long. Fair enough — if your goal is to build a media business, you need a media business model, and right now that model runs through ads or subscriptions at scale.

But notice the assumption baked into "no one will use this because it can't pay creators": it defines a video platform's worth entirely by whether it can fund professional content production. That's one legitimate purpose for video. It is not the only one, and treating it as the only one is exactly how you end up dismissing the actual audience these tools serve.

## Sincerity doesn't need an audience of millions

Buried in the same thread was a counter-example that stuck with me: a woman who has vlogged daily for fourteen years, averaging 150 to 200 views a video. Also mentioned: Fields Medal–winning mathematicians who post lecture recordings that are, technically, just a person talking over a shared screen. No editor, no thumbnail strategy, no sponsorship deck. By YouTube's math, both are failures. By any reasonable human math, both are exactly what they set out to be.

This isn't a new insight — Kevin Kelly wrote about it in ["1,000 True Fans"](https://kk.org/thetechnium/1000-true-fans/) back when the internet was still young enough to believe reach and revenue were the same problem. A creator, or a community, or a piece of software doesn't need the whole world's attention to be worth the effort. It needs the attention of the people it's actually for. A university publishing lecture recordings, a hobbyist community swapping DIY videos, a handful of former colleagues who just want somewhere to put a wedding video that isn't being scraped to train someone's next model — none of that requires beating YouTube. It requires existing.

## What chasing scale actually costs you

It's worth looking at what optimizing for mass audience and ad dollars does to the content itself, because the trade-off is rarely stated honestly. To stay advertiser-friendly, creators now blur cleavage that wasn't blurred a decade ago and say "unalive" instead of a word that has existed in the English language since before advertising did. To even start earning anything, YouTube requires [1,000 subscribers and 4,000 watch hours in twelve months](https://support.google.com/youtube/answer/72851) — a gate that has nothing to do with quality and everything to do with proving you can reliably deliver an audience to advertisers. None of this is a conspiracy. It's just what happens, gradually and rationally, when the business model is attention resold to a third party. The content bends to fit the container.

That's not a criticism of YouTube, which is very good at the thing it optimizes for. It's a reminder that "optimized for reach and ad revenue" is a specific design choice, not a neutral definition of what a video platform should be. Software that declines to make that choice isn't failing at YouTube's game. It's refusing to play it.

## The actual bug worth fixing

None of this means the criticism aimed at PeerTube was empty. The sharpest complaint in that whole discussion wasn't about money — it was about the front door. Visit PeerTube's homepage and you're greeted with an explanation of federation and a mascot before you see a single video. Compare that to nginx.org, which doesn't apologize for not being a search engine, or to a university's own PeerTube instance, which just shows you the lecture you came for. The moment a project leads with its ideology instead of the thing you actually need, it has lost everyone in the room who isn't already a believer — no matter how sound the underlying idea is. That's a UX failure, not a business-model failure, and it's entirely fixable. I'd bet it costs PeerTube more real adoption than the absence of a "Monetize" tab ever will.

## A different scoreboard

We keep asking whether alternatives to dominant platforms can "win," and then we score them on the incumbent's terms — audience size, revenue per creator, growth curve. By that scoreboard, almost every genuinely different piece of software looks like a failure right up until the moment it turns out to be the only thing still standing when the giant changes its rules, sells your data, or simply decides your content no longer fits the algorithm.

I don't think PeerTube needs to beat YouTube, and I don't think that was ever the point, ideology aside. I think it needs to be quietly, reliably there for the university, the archive, the small community that would rather own its distribution than rent it — and to stop apologizing for not being something else. The internet has one YouTube already. What it's short of is places where a video doesn't have to perform to justify existing.
