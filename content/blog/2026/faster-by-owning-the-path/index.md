---
title: "Netlify got 5x faster by switching to the heavier technology"
slug: "faster-by-owning-the-path"
date: "2026-10-01"
description: "Netlify moved edge functions from lightweight isolates to full microVMs and cut latency from 25-40ms to 5-6ms. The lesson for leaders is where the speed actually came from."
image: images/cover.svg
categories:
  - "technology"
tags:
  - "infrastructure"
  - "architecture"
  - "strategy"
  - "ai-agents"
---

Netlify just [replaced V8 isolates with Firecracker microVMs](https://www.netlify.com/blog/edge-functions-firecracker-microvms/) for its edge functions, which run about a billion times a day. A warm invocation now takes 5 to 6 milliseconds at the median, down from 25 to 40. The surprising part is the direction. Isolates are the lightweight option and VMs are the heavy one, and the heavy one won on speed and on security.

It's tempting to conclude that microVMs are faster than isolates. The numbers don't support that.

## The speedup came from a boundary, not a runtime

Look at what Netlify actually changed. Before, a matching request left Netlify's network, travelled to a hosted execution service, ran, and came back. Now the request goes to a compute node inside Netlify's own edge network, and nothing crosses the internet. The post doesn't split the 25-40ms into its parts, so I'm inferring here, but a round trip across the internet is usually most of a budget that size. The microVM boots in a couple of milliseconds from a memory-mapped snapshot, which is impressive, and it is also not where the 20-odd milliseconds went.

I think this misreading is the most common one in technology decisions. A team ships a migration, the dashboard improves, and credit goes to whatever technology had the best logo on the slide. The real cause was that someone removed a hop, a handoff or an owner. Whenever a vendor tells you something is Nx faster, cheaper or safer, the first question to ask is what moved. If the answer is "a boundary moved," the gain belongs to the architecture, and you may be able to get it without buying the product.

## Free latency can be spent on safety

The more interesting detail is what Netlify did with the time it saved. Every deploy gets a service ID built from a hash of its code and configuration, so two deploys with different code or environment variables never share a MicroVM. A compromised deploy that escapes its runtime still can't reach another customer. Netlify is explicit that isolates don't give that guarantee.

That is a trade, and a smart one. Stronger isolation costs time, and owning the request path gave them time to spend. I'd call this a latency budget: when you remove an expensive hop, decide on purpose what to buy with the savings. Most teams bank the speedup as a benchmark and move on. The better move is to ask which risk you have been tolerating only because you couldn't afford to fix it.

This matters more now that agents run code nobody on your team wrote. Sandboxing an agent's tool calls is the same problem as sandboxing a customer's function, and the answer looks the same: a hard boundary per unit of work, paid for with latency you recovered somewhere else. I wrote earlier about [what happens when you can't say what your agent did](/2026/what-your-agent-did/), and the blast radius of a mistake is set by exactly this kind of boundary.

## Your vendor's limits are architecture, not policy

Near the end of the post there is a line most readers will skip. The documented limits on edge functions (50ms of CPU, 512MB of memory, 20MB of code) "came from the isolate-based execution model," and Netlify now says it can revisit them. Native binaries and runtime file imports, the caveats on npm support, also trace back to the old design.

Product roadmaps are full of constraints that look like facts and are really side effects of someone else's platform. Teams often design workarounds around a limit for years, when the vendor could lift it the moment their own architecture changes. Put a recurring item on the calendar: list the vendor limits your design depends on, and ask which ones are still real.

## Owning the path is not free

There is a fair objection. Netlify now runs the fleet itself, with a control plane, health checks, circuit breakers, and local DNS resolvers because, as they put it, it wasn't always DNS. Snapshot-restored VMs also start with identical memory state, so anything that depends on randomness needs [care when cloning](https://github.com/firecracker-microvm/firecracker/blob/main/docs/snapshotting/random-for-clones.md). They brought in [Unikraft](https://unikraft.com/blog/netlify-edge-functions) as a partner for the VM lifecycle rather than building everything. Control is an operating cost, and a pager.

So the decision isn't "own everything." It is to own the boundary that your latency, security and roadmap depend on, and rent the rest. For most companies building AI features that boundary is the model call itself: where your data goes, what runs near it, who sees it. I'd map that path before comparing models, because [the model is rarely your moat](/2026/your-model-was-never-your-moat/) and the path often is.

If you're trying to work out which boundary in your own stack deserves that attention, it's the kind of question I'd happily spend an [advisory hour](/work-with-me/) on.
