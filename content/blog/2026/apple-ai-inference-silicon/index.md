---
title: "Will Apple Pull a SpaceX?"
slug: "apple-ai-inference-silicon"
date: "2026-06-16"
draft: false
description: "The companies building giant AI compute for themselves have started renting it out: SpaceX leased all of Colossus to Anthropic, and Meta says a cloud business is on the table. Apple is about to have the most efficient, most private inference fleet on earth. Can it keep that to itself?"
categories:
  - "technology"
tags:
  - "ai"
  - "apple"
  - "silicon"
  - "inference"
  - "hardware"
---

The safe way to read Apple's server-chip plans is that Apple is building silicon to run Apple Intelligence on its own hardware instead of Nvidia's. True, and boring. Every company at Apple's scale now builds its own inference chip. Google has TPUs, AWS has [Inferentia](https://aws.amazon.com/ai/machine-learning/inferentia/), Microsoft has Maia, Meta has MTIA. [Mark Gurman reports](https://www.tomshardware.com/pc-components/cpus/apple-reportedly-readies-baltra-processors-for-ai-servers) Apple's entry, codenamed Baltra, is being built with Broadcom on TSMC's 3nm process for 2027, tuned for inference rather than training. Welcome to the club. The chip is table stakes.

The interesting question comes after it ships: what does Apple do with the capacity?

Start with the facts, because the rumor has a paper trail. At WWDC 2024 Apple shipped [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/): real datacenter servers, on Apple Silicon, running a hardened slice of iOS built for LLM inference. The racks reportedly started on [M2 Ultra](https://siliconangle.com/2024/05/09/report-apple-deploying-servers-custom-chips-power-upcoming-ios-update/) and are [moving to M5](https://www.macobserver.com/news/apple-to-use-m5-chips-in-private-cloud-compute-servers-for-apple-intelligence/); Baltra is the purpose-built successor. Apple already runs AI datacenters. The only open question is scope.

And here is what just changed the math on scope. The companies building enormous AI compute for their own use have started renting it out. The clearest example is in the news right now: SpaceX built the Colossus 1 cluster, more than 300 megawatts and 220,000-plus Nvidia GPUs, then [handed the entire thing to Anthropic](https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html), a direct competitor to everything Musk is building, on a reported $1.25 billion a month. The unglamorous reason makes the point sharper. Bloomberg reports SpaceX rented it out [after its own teams struggled to use it](https://www.bloomberg.com/news/articles/2026-06-12/spacex-rented-out-computing-after-own-teams-had-trouble-using-it). Build the compute for your mission, discover you have more than you can run, become the landlord.

Meta is openly thinking the same way. Asked about starting a cloud business, Zuckerberg said it is ["definitely on the table"](https://www.cnbc.com/2026/05/27/mark-zuckerberg-says-meta-starting-cloud-business-on-the-table.html), noting that "almost every week" outside companies ask Meta to stand up an API or sell them compute. Renting your own AI capacity, the thing AWS and Google already do with Inferentia and TPUs, is fast becoming the default instinct of everyone who owns a lot of it.

That reframes Apple's options. There are three.

**One: keep it internal.** Run Apple Intelligence on Baltra and rent nothing. This used to be the obvious default. It is now the path even Meta is talking itself out of, because idle capacity at this scale is money set on fire.

**Two: sell the hardware, and do to the datacenter what Apple Silicon did to the PC.** Apple did not win laptops on raw speed. It won on performance per watt and made Intel look hot and slow. Performance per watt matters most exactly where power and cooling are the cost: the rack. Dell just booked [$16.1 billion of AI-server revenue in a quarter](https://www.nextplatform.com/compute/2026/03/01/ai-servers-finally-dominate-dells-systems-business/), more than its whole PC business. An Apple-efficient inference server is a genuine threat to that. The catch is that Apple has done this before and quit, killing the [Xserve](https://en.wikipedia.org/wiki/Xserve) in 2011 because selling boxes to IT departments is low-margin and un-Apple, and today's AI buyers mostly want CUDA, which Apple does not have.

**Three: rent the inference.** This is the SpaceX move, and the one worth betting on, but Apple's version would not look like Colossus. SpaceX rented out a commodity: a pile of Nvidia GPUs you could rent in a dozen other places. Apple would rent something nobody else has. Private Cloud Compute was built so that not even Apple can see what runs on it, and the design was [published for researchers to attack](https://security.apple.com/blog/private-cloud-compute/). For every hospital, bank, and law firm that wants a frontier model but legally cannot ship data into a black-box cloud, "inference that is private by construction" is a product with no competitor. SpaceX is renting raw compute. Apple could rent trust.

And the shape of that business is the most Apple thing imaginable. It is not the loose-chip component trade Apple refuses to enter. It is services, and services are the whole game now: Apple just crossed [$100 billion in annual services revenue](https://intellectia.ai/news/stock/apple-reports-record-416-billion-revenue-for-fy-2025-services-revenue-hits-alltime-high) at roughly [75% gross margin](https://www.statista.com/chart/33869/apple-gross-profit-margin/), against 36% on hardware. A private inference cloud is a high-margin service that runs on silicon Apple already builds for itself. Efficiency and privacy, the two things Apple is best at in the world, happen to be the two things this market pays most for.

So: will Apple pull a SpaceX? The honest caveat is that the internal demand has to show up first, and Apple Intelligence has been a slow start. But SpaceX rented out Colossus because it had built more compute than it could use, and Meta is eyeing the same door for the same reason. Apple is on track to build the most efficient, most private inference fleet on earth, just as Anthropic and half the Fortune 500 go hunting for capacity they can trust. The question is no longer whether Apple can build it. It is whether Apple can resist renting it.
