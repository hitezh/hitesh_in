---
title: "Every dependency is a trust decision. AI just stopped asking."
slug: "dependency-trust-decision"
date: "2026-08-21"
description: "A hijacked Rust package with 245 million downloads ran malware during the build. The real exposure isn't the language. It's who your pipeline lets run code."
categories:
  - "technology"
tags:
  - "security"
  - "open-source"
  - "software-engineering"
  - "ai"
image: images/cover.svg
draft: false
---

On August 20, a version of a Rust package called `arrayref` shipped with one extra line in its manifest. `arrayref` has [around 245 million downloads](https://safedep.io/arrayref-proc-macro1-rust-build-time-malware/) and sits quietly underneath GUI frameworks like egui and iced, so almost nobody installs it on purpose. The extra line pulled in a lookalike package, `proc-macro1`, typosquatting the real `proc-macro2` and even forging the name of a well-known maintainer, David Tolnay, on a repo that 404s. When you ran `cargo build`, its build script wrote an executable to `/tmp`, ran it detached from the build, and phoned home. All of that happened before you had read a single line of anything.

The details are specific to Rust. The lesson is not.

## What you actually granted

When you add a dependency, you are not consuming a library. You are granting a stranger the right to run code on your machine, with your credentials, before anyone reviews it. In Rust that stranger gets to run at compile time through `build.rs` and proc-macros. In Node the same thing happens through install scripts. And even where nothing runs early, the code still runs in production later. The acquisition price of open source is zero. The cost is trust, and trust does not scale with a one-line `cargo add`.

Attackers understand this better than most buyers do. The `arrayref` attack was not clever code. It was a move against the distribution graph: take over a maintainer account, publish a lookalike, then [yank the older good versions](https://safedep.io/arrayref-proc-macro1-rust-build-time-malware/) so the poisoned release is the only one left standing. Defenders think in code review. Attackers think in the supply graph. One of those groups is playing the actual game.

## The most privileged computer you forgot to secure

Here is the part that should bother a CTO. Companies spend real money hardening production and almost nothing on the machine that builds production. The build server runs untrusted code by design. It holds signing keys, registry tokens, and cloud credentials. Nobody watches what it talks to. It is the most privileged, least monitored computer in most organizations, and it is one poisoned lockfile away from being someone else's.

If I were advising a company the morning after this, my first question would not be "do we use `arrayref`." It would be "what could a build script have reached from our CI last night." The honest answer, at most companies I have seen, is *everything*: the deploy keys, the artifact registry, the production database it happens to have a tunnel to. You cannot review your way out of that. You have to shrink what the box can do.

## AI just removed the last human in the loop

Adding a dependency used to carry friction. A person decided they needed it, typed the name, maybe glanced at the repo. That friction was doing security work nobody credited it for.

AI coding agents drop that cost to zero and push the volume up. The agent needs a date parser, so it adds one, and four transitive dependencies come with it, and no human ever looked. Worse, models invent packages that do not exist. The foundational study on this found that [roughly 19.7% of generated code samples referenced a hallucinated package](https://www.usenix.org/conference/usenixsecurity25/presentation/spracklen), across 2.23 million samples and 16 models. Attackers then register the popular hallucinations and wait, a trick now called [slopsquatting](https://socket.dev/blog/slopsquatting-targets-across-frontier-llms). Researchers found 53 nonexistent package names that multiple frontier models agree on, sitting unclaimed, ready to be filled with whatever someone likes.

So the industry's new defenses, install cooldowns and Cargo's `min-publish-age`, matter precisely because the person who used to feel the friction has been automated out. "A developer would have noticed" is not a control when no developer is in the loop.

## What actually changes the odds

Three moves, in the order I would make them.

1. **Treat the build pipeline as production.** Ephemeral runners, an egress allowlist, no ambient long-lived secrets, least privilege on every token. A build script reaching out to an unfamiliar host should be visible and abnormal. Today, most teams could not tell you it happened.
2. **Put the friction back where AI removed it.** A human approves genuinely new dependencies. Pin and vendor what you rely on. Scan lockfile diffs and build scripts, not just your own source. And treat any package name an AI suggests as an unverified claim until you have confirmed it is the real one.
3. **Inventory what you cannot see.** Your exposure lives in transitive dependencies and the scripts that run at install and build time, not in the three libraries you can name. You cannot govern what you have never [counted](/2026/count-your-systems/).

## The frame for the boardroom

This is the cost that the build-versus-buy conversation keeps leaving out. We tell teams to reuse rather than reinvent, and most of the time that is the right call. But "free" only priced the acquisition. It never priced the trust, and [the trust is where the bill lands](/2026/paying-for-open-source-tools/). The decision worth changing is a budgeting one: fund your supply chain the way you would fund any vendor you would never otherwise let run arbitrary code on your servers without a contract. Because that is exactly what every dependency already does.

The `arrayref` maintainer did not write malware. Someone took his keys and the ecosystem's defaults did the rest, the same way [Google declined to call a whole class of these a bug](/2026/the-vulnerability-google-wont-call-a-bug/). Your next incident probably will not come from code you wrote, or even from a package you chose. It will come from the fourth thing your agent installed to save you ten minutes.

If you are trying to work out where AI is quietly widening your attack surface faster than your rules can keep up, that is the kind of problem worth [an hour](/work-with-me/).
