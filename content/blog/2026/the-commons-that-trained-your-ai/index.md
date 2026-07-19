---
title: "Your AI only knows what someone bothered to write down"
slug: "the-commons-that-trained-your-ai"
date: "2026-07-19"
description: "Stack Overflow's question volume fell 78% in a year. As the public corpus freezes, competitive advantage shifts to the knowledge your company still writes down itself."
image: images/cover.svg
draft: false
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "software-engineering"
  - "strategy"
---

In December 2025, developers asked Stack Overflow 3,862 questions in the entire month. At its 2014 peak the site took [more than 200,000 a month](https://www.devclass.com/ai-ml/2026/01/05/dramatic-drop-in-stack-overflow-questions-as-devs-look-elsewhere-for-help/4079575). December's figure was a 78 percent fall from the year before, and it puts activity near where the site sat in 2008, its first year. The line on that chart does not sag. It falls off a table.

The easy reading is that AI won, a clunky forum lost, and good riddance to the snark. I think that misses the useful part. The models that replaced Stack Overflow learned to code by reading Stack Overflow. The thing that made them good is the thing they are now starving. If you build a company on top of these models, that is not a nostalgia story. It is a question about where your knowledge comes from next.

## The commons ran on people bothering

Stack Overflow was a commons, and commons run on reciprocity. You got an answer because someone you will never meet had written one down, unpaid, for the next person with your problem. Ben Landau-Taylor has a good line about why communities like this are rarer than they look: most people treat a social scene as [a wild blueberry bush](https://www.benlandautaylor.com/p/if-you-build-it-they-will-come), a thing that just grows, when in fact a small minority does the tedious work that makes it exist at all. The archive that trained every coding assistant was built by that minority typing out answers.

An AI assistant is the perfect free rider. It reads the whole archive, hands you a synthesized answer in private, and puts nothing back. Multiply that by every developer who used to post and now asks a chatbot instead, and the reason to write the next answer quietly evaporates. Why earn reputation points explaining a race condition when the person who needed it already got a private answer? [Eric Holscher](https://www.ericholscher.com/blog/2025/jan/21/stack-overflows-decline/) saw this a year ago: AI broke the reciprocity loop that kept the archive fed, and the archive went with it.

## The answer was never the valuable part

What gets lost is the disagreement. Anyone can generate a plausible answer now. What Stack Overflow offered on top of the answer was the argument around it: three ways to do the thing, a top comment warning that the accepted answer opens a SQL injection, a 2019 edit noting the API changed. The value was in the contest, not the verdict.

An assistant collapses that into one confident median response. It gives you the most common answer, stripped of the fight about whether it is the right one. For routine work that is fine, and faster. The cost shows up on the frontier, where the common answer is often the outdated one and there is no dissenting comment left to warn you. I have argued before that [reviewing code is now the job](/2026/reviewing-is-the-job); this is the same point one layer down. When the machine writes the answer, a human still has to supply the judgment about whether it is wrong, and the public layer that used to supply that judgment for free is thinning fast.

## The penalty lands on whatever is new

Here is the second-order effect I would put in front of a CTO. A model is only as good as the volume of public writing about a topic. Postgres, React, and Python carry a decade of dense public Q&A, so the assistant is excellent at them. A framework released last quarter has almost none, so the assistant is useless at it, confidently useless, which is worse. And the pipeline that used to close that gap, developers hitting a wall and posting about it, has been cut.

That produces a bias nobody chose. AI steers teams toward what is already well documented and away from what is new, because it recommends what it knows. Incumbency now compounds through the model layer: the tools with the deepest public corpus get an ongoing distribution advantage every time an assistant answers a question. If you ship a genuinely new database, language, or API, you no longer get organic threads seeding demand for it. You have to write that corpus yourself, on purpose, or your product stays invisible to the layer where developers now go to ask.

## Knowledge stopped being a flow

Step back and the real shift is from a flow to a stock. Public technical knowledge used to compound. Every day added a little more than the day before. Now the training corpus is a snapshot that ages, and the flow that refreshed it is drying up. Public knowledge is becoming a depreciating asset.

That changes where advantage sits, and it rhymes with what I argued when open weights got cheap: [your model was never your moat](/2026/your-model-was-never-your-moat). If everyone's assistant is trained on the same freezing public archive, the differentiator is the knowledge still being freshly written down, and almost all of that now lives inside companies. Your incident postmortems, your code review threads, your Slack arguments about why you rejected an approach, your decision logs. That is the last living commons you have, and most organizations treat it as exhaust to be deleted rather than the corpus it actually is. The same logic runs through [automation is cheap, understanding is the bill](/2026/automation-is-cheap-understanding-is-the-bill): the output is nearly free, and the judgment behind it is the part you have to keep.

So three things I would actually do. Treat internal knowledge capture as strategy, not hygiene, because it is the only fresh corpus you own. Read the assistant's weak spots as a map: where it struggles is where public coverage is thin, which is exactly where you and your competitors are equally blind and where a human still has an edge. And if you build for developers, budget to seed the corpus yourself, because the organic version is not coming back.

The uncomfortable part is that this is a tragedy of the commons playing out on the substrate that makes AI useful in the first place. Every private answer is individually rational and collectively corrosive. I do not know who refills the well. I am fairly sure the companies that do well over the next few years are the ones that noticed it was emptying and started keeping their own.

If you are trying to work out which of your knowledge is worth capturing before it evaporates, that is the kind of problem an [AI advisory hour](/work-with-me/) is built for.
