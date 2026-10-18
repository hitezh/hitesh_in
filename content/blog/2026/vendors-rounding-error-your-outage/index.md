---
title: "A vendor's rounding error can be your outage"
slug: "vendors-rounding-error-your-outage"
date: "2026-10-18"
description: "Chrome removes XSLT on November 17 because almost nobody uses it. The decision rule behind that is worth borrowing, because it applies to every vendor you depend on."
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "strategy"
  - "software-engineering"
  - "security"
  - "architecture"
  - "decision-making"
image: images/cover.svg
---

On November 17, Chrome 158 stops running XSLT for everyone except sites on an origin trial and enterprises with a policy exemption. Chrome's own [deprecation notice](https://developer.chrome.com/docs/web-platform/deprecating-xslt) puts the feature at about 0.02% of page loads. By any aggregate measure it is a rounding error.

If you are in the other 99.98%, this is a footnote. If you are in the 0.02%, it is a month-long fire drill, and the vendor did nothing wrong.

## The number that justifies the decision is the number that hides your risk

Chrome's reasoning is sound. XSLT runs on libxslt, an aging C library that has produced memory-safety bugs (the notice cites [CVE-2025-7425](https://nvd.nist.gov/vuln/detail/CVE-2025-7425) among them), and it guards a feature that almost no one uses. Firefox and WebKit have signaled the same direction. Keeping it costs real security effort for a sliver of users.

Now read the same statistic from the other side. Usage share is an average across the vendor's whole base. Your dependence is not average. It is concentrated in one report generator, one internal portal, or one partner feed that has quietly worked for fifteen years. The vendor measures how many pages use the feature. You should be measuring how many of your *processes* do.

A pattern I've noticed: companies keep a dependency register for the vendors they pay, and almost none for the platform features they get for free. Nobody signed a contract for XSLT, so nobody owns the risk. Free is exactly where the owner has the least obligation to keep it.

## AI is making the dormant stuff more expensive to keep

The popular reaction in the discussion around this change was that AI makes legacy code cheap to carry forever. The models can read it, the models can patch it, so why remove anything?

I think the economics run the other way, and this is the part I'd tell a leadership team to plan around. AI lowers the cost of *finding* vulnerabilities in obscure code much faster than it lowers the cost of *fixing* them in a project with two part-time maintainers. I made a similar argument about [attackers getting cheap](/2026/the-attacker-just-got-cheap/): the work that used to be too tedious to bother with is now nearly free. A forgotten XML parser is the ideal target. Nobody is watching it, and the bugs are old and findable.

So the carrying cost of dormant, low-usage surface is rising. Expect more announcements like this one, from browsers, cloud providers, and SaaS vendors alike. The "it still works" argument has an expiry date, and the vendor sets it.

## Where I'd put the effort

Chrome is offering [a polyfill, a server-side route, and an enterprise policy](https://developer.chrome.com/docs/web-platform/deprecating-xslt) that keeps XSLT alive until August 17, 2027. It's tempting to take the exemption and move on. I'd treat it as a budget instead: nine months of borrowed time, not a fix. The polyfill and the policy leave you dependent on the same vendor's goodwill, just with a later date.

The migration itself is more tractable than most. XSLT takes XML in and produces HTML out, deterministically. That is the kind of task where [checking is cheap](/2026/point-ai-where-checking-is-cheap/): capture the current output for a few hundred real inputs, let a model draft the replacement, and diff the results. A human reviews the differences, not the code. Few legacy migrations are that cleanly verifiable, which is the reason to do this one early and learn the routine.

Three things I would do this quarter:

1. **List what you depend on but do not pay for.** Browser features, API endpoints, free-tier services, open-source libraries with one maintainer. Rank them by how little the owner gains from keeping them alive.
2. **Treat every exemption window as a deadline.** The date the vendor gives you is the date by which the work should already be finished.
3. **Migrate where the output can be diffed first.** It builds the habit, the test harness, and the confidence for the harder systems that cannot be checked as easily.

There is a build-versus-buy angle too. When I wrote about [how cheap forking has become](/2026/cheap-to-fork-costly-to-keep/), the catch was governance: every fork is a thing you now own. A deprecated platform feature is the same bill arriving uninvited. Either you pay to leave, or you pay to own it.

The vendor will always be right that your feature is rare. The useful question is who in your company would notice first if it stopped working, and whether you can answer that before November 17.

If you want help running that inventory for the AI systems your company is building, that is a good use of an [advisory hour](/work-with-me/).
