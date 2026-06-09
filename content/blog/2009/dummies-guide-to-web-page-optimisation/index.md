---
title: "Dummies guide to web page optimisation"
date: "2009-11-15"
categories: 
  - "technology"
tags: 
  - "optimisation"
  - "website"
---

Yesterday, I spent a few hours optimizing the home page of one of the most sought after colleges in India (most of my readers are alumni of that college). The initial home page size was north of 900 kB. When I was done, it was much lighter at ~300 kB.

### What did I do?

I used one of the techniques that are not even talked these days, because it is considered obvious.

> Use the right image format.

There were some photographs on the home page that were PNGs. Just converting them to jpeg, sliced off 500kb!

So, why did it take that long? Well, I was made to fix the site with my right hand tied behind my back. The web-server was a virtual fortress with no access to outside servers, so I had a hard time transferring my changes. But the HTML templates were injected with links to dubious sites selling all kinds of medications. Proving that security is as strong as the weakest link, the developer's workstation in this case.

In addition, no one knew anything about how the site was configured. The initial developers were long gone, so I had to figure everything out painstakingly.

### Lesson learnt, one more time:

> No change can be a quick change!
