---
title: "RPA PoCs - Are you doing it wrong?"
date: "2017-07-12"
categories: 
  - "technology"
tags: 
  - "pilot"
  - "poc"
  - "proof-of-concept"
  - "rpa-poc"
---

## Proof of what exactly?

For any technology adoption, a proof of concept is the usual approach to evaluate the usefulness and effectiveness of the technology. Howeve,  RPA is a different animal altogether. The usual _proof_ of concept does not work because it's not even clear what is being proven.

The unknowns in any RPA roll-out

- Ease of use of the RPA tool?
- Does it work with the applications that need to be automated? RPA tools are very finicky and sometimes even the simplest looking automation needs are hard to accomplish.
- What's the performance and accuracy?
- Is it enterprise grade? What's the approach to technology best practices around documentation, version control, peer reviews, testing, release and configuration management, security, auditing etc.
- Will it work in the environment it needs to be deployed?
- Will it scale?
- Will it seamlessly fit in the companies processes - release, change management, deployment, support. What changes are needed to the processes?
- Are the company's processes standardized enough to start RPA journey?
- How will the employees feel about automation of their tasks?

Of all these questions a typical RPA PoC only answers the first question. An irrelevant question that usually gets an incorrect answer as well. At the end of these PoCs the bot created is nothing more than a _demoware_, which quickly gets forgotten.

## A better RPA test

A good test for RPA is to pick a real process which has just enough technology and organizational complexity that provides a good test bed but not so much to kill the project even before it gets started.

- Process involving a complex mix of technology. Don't go easy here. If the process is a candidate for RPA, then RPA should be able to work with all of the technical stack. It's better to get a realistic picture of what are the limitations of the RPA tool now.
- Process should involve multiple business units to check the organizational dynamics
- Process should have some number of business rules and data quality issue
- Take a process that's performance sensitive - either high volumes or large effort but which is not critical. You should be able to take the bot live without much risk.

During the enter development, deployment and production phase make copious notes of what went right and what did not meet expectations. After at least a month of going live, hold a retrospective on the same and try to answer the questions laid out in the first part of this article.

When you have all the answers you can decide the outcome of the POC and the next steps.
