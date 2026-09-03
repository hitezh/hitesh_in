---
title: "Someone built 215,000 pages to game your AI"
slug: "built-to-game-your-ai"
date: "2026-09-03"
description: "Most sources behind AI software recommendations turn out to be pages built to be cited, not read. The fix is provenance, and it reshapes how you buy and sell."
categories:
  - "technology"
tags:
  - "ai"
  - "llm"
  - "strategy"
  - "search"
  - "trust"
image: images/cover.svg
draft: false
---

Three websites published 215,128 pages titled "best software," most of them machine-generated, and an AI search engine treated a good chunk of them as evidence. That is the core finding of a [Trellner Research investigation](https://trellner.com/reports/manufactured-sources-behind-ai-recommendations/) into where [Perplexity's](https://www.perplexity.ai/) product recommendations come from, and it should sit uncomfortably with anyone who has started asking an AI which tool to buy.

The numbers are worse than the headline. Trellner looked at 7,534 citations behind Perplexity's software picks across 380 categories. Nearly 60 percent pointed to domains ranked below the top 100,000 sites on the [Tranco list](https://tranco-list.eu/). Wikipedia got cited three times. A single vendor's marketing blog was cited 194 times, ahead of Gartner, in categories that had nothing to do with what it sells. Three of the biggest source domains registered within months of each other, share the same nameservers, and put "Facts & Grounding Page" in their homepage title. One recommended vendor's link redirected to an Indonesian gambling site.

## The spam did not go away, it changed address

None of this is new in spirit. We spent the 2010s watching content farms like Demand Media flood Google with thin "how-to" and "best-of" pages, until [Google's Panda update](https://en.wikipedia.org/wiki/Google_Panda) knocked most of them down. Search spent twenty years, and a lot of adversarial engineering, learning to tell a real source from a page built only to be found. That machinery is imperfect, but it exists.

Answer engines rebuilt discovery from scratch and inherited none of it. When a model retrieves a handful of pages and writes you a confident paragraph, it is doing in 2026 what a naive search index did in 2006: trusting that a page about "best project estimation software" was written to inform a reader rather than to be quoted by a machine. The spammers noticed first. "Facts & Grounding Page" is not a title written for humans. It is written for the model reading on your behalf.

## The AI removed the smell test

The part that worries me most is not in the report. Classic SEO spam still had to get past a human. You clicked the content farm, saw the stock photo and the fake byline and the sentence that read "within the next 26 days" because a template variable never filled in, and you backed out. The judgment happened at the point of decision, and you made it without noticing you were making it.

An answer engine deletes that moment. It reads the same garbage page, strips away every signal that would have tripped your instinct, and hands you "Float is the top pick" in clean prose. The verification did not get easier. It got hidden. A hidden check is worse than a missing one, because a missing check at least makes you cautious. Confident laundering of a bad source is how a tool that barely exists ends up on a real shortlist.

## Fabrication got cheap. Checking stayed expensive.

There is an economics to why this floods rather than trickles. Generating 215,000 plausible pages now costs almost nothing; the same models that answer your question can write the spam that poisons the answer. Verifying whether any one of those pages is real still takes a person a few minutes. Whenever fabrication is cheaper than verification, the gap fills with fabrication. I have [argued before](/2026/automation-is-cheap-understanding-is-the-bill/) that automation drops the visible cost of producing something while the cost of understanding it stays stubbornly human. This is that same bill, applied to trust itself.

George Akerlof described the endgame in 1970. In his [market for lemons](https://en.wikipedia.org/wiki/The_Market_for_Lemons), when buyers cannot tell good cars from bad ones, they stop paying extra for quality, and the good cars quietly leave the market. An answer engine that cannot tell a real review from a manufactured one teaches every honest source that accuracy goes unrewarded. The index degrades toward lemons on its own, without anyone deciding to make it worse.

## For the answer engine, curation is the product

I have made the case that [your model was never your moat](/2026/your-model-was-never-your-moat/), because anyone can rent the same weights. This report is the sharpest illustration yet. Perplexity's answer is only as good as its worst-cited source, and its worst-cited source is a gambling redirect. The defensible asset in this business is not the language model sitting on top. It is a retrieval index someone has fought to keep clean: the same unglamorous trust engineering Google ground through for two decades. Whoever rebuilds that fastest wins the category, and it will not be whoever ships the biggest model.

## What I would actually do

If you buy software, treat an AI shortlist the way you would treat an anonymous tip. Ask the tool for its sources and open two of them. It takes two minutes and catches most of this, and almost nobody does it.

If you build anything on retrieval, your source list is a supply chain, and most teams treat it as an afterthought. Domain reputation, recency, and authority scoring belong inside the product, not in a cleanup pass later. That layer is where user trust actually lives, and it is the part a competitor with a better model cannot copy.

If you sell software, generative engine optimization is real and already being gamed, but the durable version is not out-spamming the spammers. It is being genuinely, checkably citable: real data, real third-party coverage, a presence in the indexes that survive the next Panda moment. Because one is coming. The answer engines will clean house eventually, and the companies that bet on manufactured citations will get wiped the way eHow was.

The uncomfortable takeaway is that we shipped a decision-making tool that hides the one signal we used to route around bad information. The spam was always going to come. The question worth sitting with is why we built the machine to swallow it silently.

If you are trying to work out how much of your discovery, or your own product's trust surface, now runs through AI answers you cannot see, that is the kind of problem worth [an advisory hour](/work-with-me/).
