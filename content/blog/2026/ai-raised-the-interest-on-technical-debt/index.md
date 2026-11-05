---
title: "AI just raised the interest rate on your technical debt"
slug: "ai-raised-the-interest-on-technical-debt"
date: "2026-11-05"
description: "A crash bug sat unfixed for two years until AI turned it into remote code execution. Your list of accepted risks was priced for attackers who no longer exist."
categories:
  - "technology"
tags:
  - "ai"
  - "security"
  - "technical-debt"
  - "engineering-leadership"
  - "strategy"
image: images/cover.svg
linkedin_hook: "A crash bug sat in PHP's backlog for two years as low priority. With AI, one researcher turned it into remote code execution in two weeks. Your accepted-risk list was priced for slower attackers."
takeaways:
  - "Pull every 'won't fix' and 'low severity' security ticket older than a year and re-rate it assuming an attacker with unlimited patience. Start with anything internet-facing."
  - "Measure how many engineer-weeks a critical patch costs you today. PHP needed four engineers for two months, and that number is your real exposure window."
  - "Delete code and services nobody uses before you patch them. An unused component is all risk and no return."
linkedin_question: "What is the oldest 'accepted risk' in your security backlog, and who decided it was acceptable?"
draft: false
---

In late October, PHP shipped [emergency patches](https://bleepingcomputer.com/news/security/php-ships-emergency-patches-for-critical-php2shell-flaws) for a flaw now called PHP2Shell, which put sites from WordPress installs to government pages at risk. The interesting part is the history. According to [IEEE Spectrum](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability), the underlying bug was an out-of-memory error reported as early as 2024. Out-of-memory errors normally just crash a program, so it was treated as low priority and left alone.

Then a security firm, Calif, offered to audit PHP with OpenAI's sponsorship. Within two weeks, a researcher using AI tools found a way to turn that crash into arbitrary code execution on the host server. Patching took four engineers two months.

Matt Suiche, quoted in the same piece, put it bluntly: ["Now it is time for the technical debt to be paid off."](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) I agree with the diagnosis. I think the useful question for a CEO or CTO is a narrower one: which of your own decisions were quietly based on how hard attackers had to work?

## Severity was always a guess about attacker cost

Every "low" or "won't fix" label carries an assumption nobody writes down: that turning this bug into a real attack takes more skill, time, and patience than anyone will spend on us. For decades that was a sensible bet. Chaining a memory corruption bug into working code execution takes a rare specialist and a lot of specific reasoning, and rare specialists are expensive and busy.

Suman Jana of Columbia, also quoted by Spectrum, describes that reasoning as "not really rocket science" but "a lot of very specific reasoning" about which memory locations to jump to and which bits to overwrite, and says AI is good at exactly that. Once the scarce resource becomes cheap, the label stops meaning what it meant when somebody typed it. I made a similar argument about [credentials and password guessing](/2026/the-attacker-just-got-cheap/): what protected most companies was never strength, it was the cost of the attacker's time.

One pattern I've noticed is that accepted-risk registers are almost never revisited on a schedule. They get reviewed after an incident. That is a lot like checking your interest rate only when the bank calls.

## The bottleneck moved to the fix

Finding the bug took two weeks. Fixing it took roughly four times as long and four engineers. This is the asymmetry I would put in front of a board: discovery is getting cheaper by the month, while repair still moves at human speed, and it has to avoid breaking everything that depends on the code being repaired.

Technical debt behaves like a floating-rate loan. The principal is the pile of old code and deferred decisions you already carry. The rate is how cheaply someone can exploit it. Your capacity to pay is the number of engineer-weeks you can redirect to a critical fix without stopping the business. Most leadership teams track none of the three. They know the debt exists in the vague sense that every company knows it, and they have not asked how quickly they could repay a specific piece of it.

There is also a hopeful version. Jana points to a recent Anthropic release in which one model writes a patch and another produces a proof of correctness, checked by a formal tool because, as he says, ["LLMs hallucinate."](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) I think that is the right direction, but I would not budget around it yet. It helps the people who can already ship a patch quickly. It does little for the team whose last upgrade took a year.

## Delete before you patch

Every line of code is a liability, and people have always managed that by deciding not to build things. Coding assistants tend to add whatever they are asked for. I would not treat that as settled, but it points at something executives can act on.

The cheapest vulnerability to fix is in code you no longer run. Most mature companies carry services, plugins, libraries, and whole legacy sites that nobody owns and nobody uses, and they all sit inside the same attack surface as the systems that earn money. Retiring one costs a project. Defending it costs an on-call rotation for as long as it lives. If attackers now probe everything at near-zero cost, a forgotten system is where they will go first, because nobody is watching it.

The same applies one level up. Open-source projects like PHP run much of the web, usually without a clear revenue line to pay for defense. Jana argues AI labs should donate token budgets to help. Whether they do or not, your exposure to those projects is yours, and I would want to know which ones sit under my critical systems.

## What I would do this quarter

If I were advising a company on this, I would keep the list short and run it in order:

1. Pull every security ticket marked low, deferred, or won't fix that is older than twelve months, and re-rate it assuming an attacker with unlimited patience and a capable AI assistant.
2. Start with anything reachable from the internet. If the re-rated list has more than a handful of items, that is your answer on how much debt you were carrying.
3. List every internet-facing system with no named owner. Assign one, or schedule its retirement. If nobody will take ownership, that tells you it can go.
4. Time your last critical patch from advisory to production. If it took more than a week, find out where the days went before you budget for anything else.
5. Count the engineer-weeks a PHP-sized fix would cost you. Compare that with what you could actually free up without a freeze.
6. Identify the three open-source projects your critical systems depend on most, and find out who maintains them and how they are funded.
7. Put the accepted-risk register on a calendar. Review it every quarter, not after an incident.

The question to take back to your own team is simple: which risks did we accept because attackers were slow, and what is our plan for the day they stop being slow? If you want a second pair of eyes on that exercise, that is the kind of thing I work through in an [AI advisory hour](/work-with-me/).
