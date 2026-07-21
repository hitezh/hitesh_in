---
title: "The backup you can reach is the backup you'll lose"
slug: "backup-you-can-reach"
date: "2026-07-21"
description: "A hacker wiped Romania's entire land registry and its connected backups. What survived, and why, decides whether you can safely let software write to your records."
categories:
  - "technology"
tags:
  - "security"
  - "infrastructure"
  - "strategy"
  - "ai-agents"
  - "engineering-leadership"
image: images/cover.svg
draft: false
---

On July 14 someone deleted a country's record of who owns what. A hacker going by ByteToBreach walked into ANCPI, Romania's cadastre and land registry agency, [using valid credentials](https://news.risky.biz/risky-bulletin-hacker-wipes-romanias-entire-land-registry-database/), mapped the internal network, and after an extortion demand went unpaid, wiped the systems and the email servers behind them. For [nearly a week](https://therecord.media/romania-cyberattack-land-registry) notaries could not register a sale and citizens could not get proof that their own house was theirs. Romania's property market simply stopped.

What saved the country was not its firewall. It was a copy of the data sitting somewhere the attacker could not reach. ANCPI kept [offline backups in several designated locations](https://cybernews.com/security/hacker-deletes-romanian-land-registry-database/), and those are the reason this is a bad month rather than a constitutional crisis. The connected systems were destroyed. The disconnected copy survived. That distinction is the whole story, and it is the one worth carrying into every system you are about to trust software to write to.

## A land registry is not its data

It is tempting to file this under data loss. The deeper damage would have been to trust. A land registry is worth something only because everyone believes the rows in it are complete, correct, and still going to be there tomorrow. That belief is what lets a notary sign, a bank lend against a title, a buyer wire money for a house they have only seen a deed for. The moment the record can be quietly deleted, the belief goes with it, and a registry nobody trusts is worth less than the paper ledgers it replaced. Paper, for all its friction, was hard to erase in a single night from an apartment in Oran.

That is the trade digitization makes, and almost nobody prices it. Analog records were resilient by accident. They were slow, duplicated, and physically scattered across district offices and filing cabinets and the copy in your own drawer, and precisely because they were a mess, no single act could destroy them. Digitize the same records and you get search, speed, remote access, and one authoritative source of truth, which is also one authoritative thing to delete. Efficiency and resilience pull against each other here, and most modernization projects optimize hard for the first without noticing they quietly spent the second.

## The only backup that counts is the one out of reach

The easy reply is "that is what backups are for," and it is not wrong, it is just too comfortable. ByteToBreach did not forget about the backups. The reporting suggests the connected copies went down with everything else; what lived was the offline set. Every board should internalize the detail: a backup your production credentials can reach is inside the blast radius, not outside it. Ransomware crews worked this out years ago and now hunt the backup server first, because the restore path is the one thing standing between them and a payout. The backup that survives an attacker holding valid credentials is the one those credentials cannot touch, offline or immutable or sitting in a separate trust domain with its own keys.

So "do we have backups" is the wrong question for a leadership team to ask. The useful ones are colder. When did we last restore the whole thing from cold storage and actually time it? How much history do we lose if today's copy is already poisoned? Could one compromised admin account delete both the live system and the thing we would rebuild from? Most organizations have never run that drill and learn the answer the way Romania just did.

## Reversibility comes before automation

The same logic should worry anyone building with AI. We are in a hurry to give software write access to exactly these systems: agents that update records, reconcile ledgers, close tickets, move money, act while you are at lunch. I wrote earlier about the [autonomy budget](/2026/the-autonomy-budget/) every workflow has, the number of steps you can delegate before compounding error or an action you cannot undo costs more than the automation saves. The Romania wipe is that argument at national scale. One actor with legitimate access reached a system with no cheap undo, and the blast radius was a country.

The records you are most eager to automate are usually the ones you can least afford to corrupt, because they are the systems of record: the ledger, the registry, the master customer file. Banking learned this the hard way and wrote it into practice. Double-entry bookkeeping and append-only ledgers exist so you can reconstruct the truth after a mistake instead of silently overwriting it, which is the same discipline I keep returning to in [fintech engineering](/2026/fintech-engineering-rules-that-hold/). An agent that can update and delete a system of record in place, at machine speed, is faster than any human and also capable of a mistake at a speed no human could manage. A tested restore path, an audit trail, and reversibility are not things you bolt on once the demo works. They are the precondition for letting anything, human or model, touch the record at all. That is the honest version of [governing what the machine does](/2026/ai-writes-the-code-who-governs-it/): the control has to exist before you trust the speed.

## What I would check on Monday

If I were advising a company that sits on a critical system of record, I would not start with the threat model. I would start with three unglamorous questions. Can a single compromised credential destroy both the live system and everything you would restore it from? When did you last run a full restore from an offline copy, end to end, with a stopwatch going? And for every automated write you are adding, the AI ones most of all, is the action reversible and logged, or is it a one-way door?

None of that is exciting, which is usually the sign it is right. The companies that come through the next few years intact will be the ones that treated the durability of their records as a business decision made in advance, not an IT setting discovered mid-incident. Romania kept its land registry because one copy was sitting somewhere nobody could log into. The point is to know, before anything goes wrong, exactly where your version of that copy is, and whether you have ever actually tried to bring it back.

*If you are working out which of your records could be corrupted faster than you could restore them, and which automated writes are safe to hand to an agent, that is the kind of question I dig into in an [AI advisory hour](/work-with-me/).*
