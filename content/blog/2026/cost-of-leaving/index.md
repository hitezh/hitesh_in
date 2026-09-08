---
title: "Broadcom made leaving VMware harder. Your AI stack is next."
slug: "cost-of-leaving"
date: "2026-09-08"
description: "Broadcom pulled the tool that lets customers migrate off VMware, right as it cut the price to stay. The real cost of any vendor is the cost of leaving it."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "ai-strategy"
  - "strategy"
  - "vendor-lock-in"
  - "enterprise-software"
  - "build-vs-buy"
image: images/cover.svg
draft: false
---

Sometime around [August 25](https://www.virtualizationhowto.com/2026/09/leaving-vmware-just-got-harder-after-broadcom-pulled-vddk-downloads/), the public download links for VMware's Virtual Disk Development Kit started returning 404s. No announcement, no deprecation notice. If you have never heard of VDDK, that is the point: almost nobody downloads it directly. It is the library that migration tools use to read a VMware disk, which means Microsoft's Azure Migrate, Red Hat's Migration Toolkit, Nutanix Move, and a handful of open-source movers all quietly depend on it. Pull the download page and you have not blocked one product. You have made the standard path off VMware run through a support ticket and an approval queue.

Now put that next to the other thing Broadcom did in the same stretch: it brought back a cheaper vSphere Standard tier. Read those two moves together and the strategy is not subtle. The price to stay went down at the same moment the cost to leave went up. That is not a discount. It is a toll on the exit, dressed as a favor.

## The price you're quoted is not the price you pay

Every vendor relationship has two numbers. There is the price on the invoice, which you negotiate hard, compare across three quotes, and take to the board. And there is the cost of leaving, which almost nobody prices, because when you are signing you have no intention of ever needing it.

That second number is the real one. What a dependency actually costs you is what it would take to walk away from it, and here is the trap: you can only measure that honestly before you commit. At adoption you still have alternatives, leverage, and a competitive market quoting for your business. Once your data, your integrations, and your team's habits have settled onto the platform, the exit stops being something you price and becomes something the vendor prices for you. Broadcom just showed the whole industry that the exit ramp is a lever the seller controls, and they will pull it when the business case says to.

## Lock-in isn't the contract. It's the integrations.

The instinct is to blame the license. But VMware's contract is not what traps anyone. The trap is the connective tissue: the tools wired to VDDK, the runbooks, the automation, the backup jobs that assume the disk format never changes. The switching cost lives in everything you built *around* the vendor, not in the vendor's own product. That is why removing one shared library does so much damage. It sits underneath an entire ecosystem of migration tools, so degrading it degrades all of them at once.

That is the part leadership teams routinely underestimate. Platform risk is not just your risk. It is every tool built on that platform, including the ones a competitor was counting on to help you escape. A vendor who owns a widely-used dependency can raise the whole industry's cost of leaving without touching your contract at all.

## Why this is an AI problem, not a VMware problem

Here is where I would stop a leadership team mid-sentence. The reflexive response to a lock-in story is relief: *good thing AI is the opposite.* Open weights, cheap tokens, a model you can swap in an afternoon. I have argued myself that [your model was never your moat](/2026/your-model-was-never-your-moat), and the swap really is that easy. But that is exactly the story that makes you stop guarding the exit, and stop guarding the exit is when lock-in accumulates.

The model was never where the lock-in was going to live. It accumulates one layer down, in the parts nobody swaps in an afternoon: the eval suites tuned to one provider's quirks, the prompt scaffolding, the fine-tunes, the agent orchestration, the retrieval and data pipelines all shaped to one API's exact contract. None of that shows up as a lock-in line item. It shows up as progress. And a lot of it feels free right now because [someone else is subsidizing the compute](/2026/subsidized-ai-compute). When the subsidy ends and one provider owns the workflow your product runs on, the VDDK move is available to them too. Cheaper tier, harder exit, same playbook.

## Price the exit before you sign the entry

None of this is an argument against buying. It is an argument for measuring the right number. Three things I would put on every dependency decision:

- **Put an exit cost on the buy, in engineer-weeks, not dollars.** How many weeks to get your data, your workflows, and your team onto an alternative. If you cannot estimate it, you do not yet understand the dependency well enough to sign.
- **Keep the seams standard.** Depend on vendors through interfaces you could re-implement: portable data formats, an abstraction layer at the boundary, standard protocols over proprietary ones. Lock-in lives in the integration layer, so that is where you spend to keep switching cost bounded.
- **Read a mid-relationship discount as a signal, not a gift.** When a vendor gets cheaper right as leaving gets harder, that is the moment to re-check your exit, not to deepen the dependency.

The durable version of [build versus buy](/2026/cheap-to-fork-costly-to-keep) was never about who writes the code. It is about reversibility: how cheaply you can change your mind when the vendor changes theirs. VMware's customers are learning that lesson on someone else's schedule. The teams wiring their business to AI right now still get to learn it on their own, if they price the exit while they still hold the leverage to walk.

If you are mapping where AI belongs in your product and want the exit costs on the table before they harden, that is the kind of problem I like to think through in an [advisory hour](/work-with-me/).
