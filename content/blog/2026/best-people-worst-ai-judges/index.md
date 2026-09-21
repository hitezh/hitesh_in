---
title: "Your best people are the worst judges of your AI pilot"
slug: "best-people-worst-ai-judges"
date: "2026-09-21"
description: "A convincing AI demo often measures the expert running it, not the tool. Design the pilot so the model's real contribution shows, or you'll buy a demo and deploy a letdown."
image: images/cover.svg
categories:
  - "technology"
  - "entrepreneurship"
tags:
  - "ai"
  - "product-strategy"
  - "llm"
---

A 2023 essay is doing the rounds again, [The LLMentalist Effect](https://softwarecrisis.dev/letters/llmentalist/). Its claim is blunt: the intelligence you feel when you chat with a language model is a con, the same one a psychic runs. Cold reading. The model emits statistically likely sentences, you supply the meaning, and you leave convinced something understood you.

Read in 2026, the strong version of that is wrong, and the pile-on in the comments says so. Psychics don't write working code or close real tickets; today's models do both often enough that "it's all an illusion" is a comfortable story skeptics tell themselves. A [recent guest post on Terence Tao's blog](https://terrytao.wordpress.com/2026/09/19/why-do-we-need-human-mathematicians-anymore/) has a working mathematician describing daily use of these tools on real work. Waving the whole category off as a parlor trick is just denial with better vocabulary.

But the essay names something true, and that part is worth keeping. The mechanism it describes is a real bias, and it is quietly wrecking AI pilots inside serious companies.

## The reading works better on smart people

The uncomfortable finding from decades of research on cold reading is that intelligence doesn't protect you. It helps the reader. A clever, motivated mark does the work of connecting the vague statement to their specific life, then credits the psychic for the fit. Psychologists call the underlying move [subjective validation](https://en.wikipedia.org/wiki/Subjective_validation): we accept a claim as accurate because we want it to be, and our own mind builds the bridge.

Now watch an AI demo. Your sharpest engineer sits down with the tool. They write a precise prompt, notice when the output drifts, correct it in one line, and route around the dead ends without really clocking that they did any of it. Ten minutes later the room agrees the tool is remarkable. It is. But a fair share of the intelligence in that session walked in on two legs.

That is the inversion most teams miss. Your best people are the worst judges of an AI pilot, and not because they get fooled. They are too good to notice how much of the result was theirs.

## What you are actually measuring

A vendor demo is a controlled reading. The vendor picks the task, picks the operator, and picks the framing, exactly the way a mentalist picks the room. Every one of those choices flatters the tool. So the honest question is never "can the model do this." It is "can the model do this without an expert steering every turn," because that expert's time is the cost you were trying to remove in the first place.

This is where "human in the loop" stops being reassuring and starts being a pricing question. If the loop is a senior engineer catching and fixing the model's mistakes, you have not bought a labor replacement. You have bought a power tool for experts, which is a fine thing to buy, but you should price it and staff it as one. The number that matters is not how good the output looks. It is how much scarce human judgment each unit of output still consumes.

I have watched the skeptic and the zealot make the identical mistake here. One says "it's just autocomplete," the other says "it's basically a junior hire," and neither has subtracted the operator from the result. The whole discipline of evaluating AI is that one subtraction.

## How to run a pilot that can't flatter you

Three habits separate the teams that get real returns from the ones that buy a demo and deploy a disappointment.

**Staff the floor, not the ceiling.** Put a competent non-expert on the pilot, not your strongest person. If the tool only works in the hands of someone who could have done the job anyway, you have measured your employee, not the software. The floor is what you are actually deploying to.

**Score on your own ground truth.** Public benchmarks and a slick demo both reward fluency, which is the cold-reading tell. Build a small test set from your own closed tickets, merged pull requests, or resolved cases, where you already know the right answer, and grade against that. I wrote about this in [your backlog is the only benchmark that matters](/2026/your-backlog-is-the-benchmark); the same logic applies to any function, not just engineering.

**Track who actually solved it.** After each task, ask a plain question: did the model do this, or did the person's prompting and correction do this? Do it enough times and the credit allocation gets honest fast. It also tells you where the tool genuinely pays, which is usually [the tasks where checking the answer is cheap](/2026/point-ai-where-checking-is-cheap), not the ones where it sounds most impressive.

None of this is anti-AI. It is how you find the places the technology earns its keep instead of the places it performs well for an audience. The companies pulling ahead are not the ones with access to a smarter model, because everyone has that. They are the ones who built the discipline to tell real capability from a good reading, and who point the tool where it removes work instead of relocating it into an expert's afternoon.

The mentalist needs you to stop asking who is supplying the intelligence. Your pilot should ask nothing else.

*If you are trying to work out where AI genuinely pays off in your own operation rather than where it demos well, that is the kind of question an [AI advisory hour](/work-with-me/) is for.*
