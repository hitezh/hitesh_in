---
title: "LiteLLM was compromised twice in seven months. Here is what that means for your AI strategy"
slug: "your-ai-gateway-holds-every-key"
date: "2026-10-22"
description: "A compromised LiteLLM release spent about two hours on PyPI this week. It shows why the box you built for AI governance is also your most valuable target."
categories:
  - "technology"
tags:
  - "ai"
  - "ai-strategy"
  - "security"
  - "governance"
  - "infrastructure"
image: images/cover.svg
draft: false
---

On Wednesday at 11:39 UTC, someone published LiteLLM 1.107.0 to PyPI. It was [quarantined at 13:20](https://securitylabs.datadoghq.com/articles/litellm-compromised-pypi-docker/), so it was live for roughly two hours. In that window, anyone who ran `pip install litellm` or pulled the `latest` container image got a [credential stealer and a backdoor](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/).

LiteLLM is the open-source gateway many companies put between their applications and the model providers. One endpoint, virtual keys per team, spend tracking, routing across OpenAI, Anthropic and Bedrock. It was [compromised once before, in March](https://www.netspi.com/blog/executive-blog/ai-ml-pentesting/litellm-supply-chain-compromise/), when it was pulling around 95 million downloads a month. Two incidents in seven months make this more than bad luck. They tell you where attackers think the value is.

## Governance built the vault

Look at why a company installs a gateway. Finance wants one place to see AI spend. Security wants developers to stop pasting provider keys into scripts. Engineering wants to swap models without rewriting code. All three are good reasons, and all three lead to the same design: collect every upstream key into one service and hand out revocable virtual keys to everyone else.

That design is correct. It is also a vault with a web server on the front, and the payload [went after it by name](https://socket.dev/blog/litellm-compromise): it tried to read the two database tables where the proxy keeps upstream credentials, up to 500 rows from each. It also went for SSH keys, cloud credentials, and the login tokens of AI coding tools, and a Python startup hook meant it ran whenever any Python process started on the host, whether or not LiteLLM was imported.

The mistake I see teams make is filing the gateway under plumbing. Plumbing gets patched on a schedule and watched by nobody. A system that concentrates every model credential, runs next to your CI and often shares a host with developer tooling should be treated like a secrets manager. Almost no one budgets it that way, because it arrived as a convenience.

## The defense that worked in March didn't apply

In March, a maintainer said the official Docker proxy image [was not affected](https://www.netspi.com/blog/executive-blog/ai-ml-pentesting/litellm-supply-chain-compromise/), because its dependencies were pinned. Plenty of teams relaxed after hearing that. This time the [Docker images were infected too](https://securitylabs.datadoghq.com/articles/litellm-compromised-pypi-docker/), including the floating tags `latest`, `main-latest` and `main-stable`.

According to BerriAI, the attacker used GitHub CLI tokens stolen from three engineers to run the project's own release workflow against a lookalike repository, `Berri-AI/litellm` instead of `BerriAI/litellm`. The build was legitimate and the provenance record was accurate. It just said the source was the wrong repository. Provenance tells you where something was built. It doesn't tell you whether anyone should have built it.

The lesson is about how defenses age. Each incident teaches a specific safeguard, and attackers move to the gap beside it. Pinning a version helps. Pinning a digest and verifying where the build came from helps more. Neither replaces knowing what that service can reach if it does turn hostile.

## Two hours is a policy decision

Security researchers at Socket [flagged the wheels about seven minutes after publication](https://socket.dev/blog/litellm-compromise). The package was out of circulation within two hours. A team that upgrades with a 72-hour delay never saw any of this. A team whose pipeline pulls `latest` on every build got the full payload.

So upgrade latency is a dial, and most companies never set it on purpose. I'd set it by blast radius. A charting library can follow releases closely. The service holding your model credentials should lag them by days, with a deliberate fast lane for real security patches that a human approves. The usual objection is that waiting delays critical fixes, and sometimes it does. That is a reason to have two lanes, not a reason to run everything on the fast one.

## Make a stolen key cheap

Assume the gateway will be breached eventually and ask what that costs. Today, for many companies, the answer is "whatever someone can spend on our provider accounts before we notice." That is a choice, and it is changeable. Give each upstream key a hard spend cap at the provider. Give each environment its own key, so one theft doesn't empty everything. Rotate on a calendar you have actually practiced, not one that exists in a policy document.

I made a similar argument [about attackers getting cheap](/2026/the-attacker-just-got-cheap/): when exploitation costs almost nothing, your safety comes from limiting what any single stolen credential can do. The same goes for [agents with credentials of their own](/2026/you-hired-an-agent/). If one key can run up an unbounded bill, the design is wrong, whatever the vendor's security record.

There is also a build-versus-buy point here, and I'd resist the quick answer. Writing your own gateway is tempting right now, and a small proxy that swaps keys and counts tokens is something you can read in an afternoon. A full gateway with a hundred provider integrations, a dashboard, SSO and an admin database is not. Exposure grows with code you can't audit, which is the same instinct behind [choosing dull, small tools](/2026/boring-technology-is-an-ai-strategy/). Buy the breadth if you need it, and then wall it in as if it were already compromised.

## Questions for Monday

If you run an AI gateway, or your platform team does, three questions are worth an hour:

- Which single system, if stolen, would hand an attacker every model provider account we have? Who owns its security?
- If it were breached at 11 a.m., how quickly can we revoke every key, and what is the most an attacker could spend before we do?
- Does anything in our pipeline pull a floating tag or an unpinned release of that system automatically?

The uncomfortable part is that none of these has a technical answer first. They are about who owns an asset the organization created for convenience and then forgot to classify. If you're working out where your own AI infrastructure sits on that map, an [AI advisory hour](/work-with-me/) is a reasonable place to start.
