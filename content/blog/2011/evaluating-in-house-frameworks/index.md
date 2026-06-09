---
title: "Evaluating in-house frameworks"
date: "2011-12-11"
categories: 
  - "technology"
tags: 
  - "work"
---

### In-house frameworks

The very mention of this word brings out different memories and emotions for different people. More so if is a framework for be used within a large company, by a completely different team than the one writing it.

To make sure that the next time you hear this word, you have positive memories; use the evaluation sheet below, before adopting the framework. If you are the one writing the framework, make sure you have good answers to these.

## Why in-house frameworks?

Before we begin, let's recap why we need in-house frameworks in the first place.

Each company, more so is it is an 'enterprise' has a certain set of internal standards and a 'way to do things'. Be those be related to security, encryption, authentication, authorisation or be it about data retention, traceability, logging or monitoring. The foremost benefit of an in-house framework is out-of-the-box support for these standards and hence any solution built on them is preapproved by the standards committee, while saving the developers from reinventing the wheel for these.

These frameworks also know the company's domain and can provide a lot of helper functions at the least to a full blown DSL on the other extreme. Thus an in-house framework is a _good thing to have_ if it can pass the evaluation criteria.

## How to evaluate an in-house framework?

Well, it is no different from evaluating a external framework, be it commercial or an open-source one.

- What is the origin of the framework?
    - Was it created from a blank slate, based on past project learning? If so, has it been battle-tested? You don't want to be the guinea pig.
    - Was it extracted out of software delivered? Is it still tightly coupled to the environment the original software ran in?
- What is the team's motivation to maintain this framework?
    - Is the framework their primary task or is it a distraction? This is especially the case when the framework is either extracted from a project or was primarily written for a specific project.
- What is the development model?
    - Does it mimic a commercial vendor? What is the governance model around support and enhancement request?
    - Or does it mimic open-source model? What is the governance model around roadmap, vision and acceptance of patches?
    - Does the framework team have a consistent vision to avoid the framework from acquiring feature-bloat, and at the same time is it extensible enough for a team using it?
- What is the learning curve? How well documented it the framework?
    - This is the single most important question to ask. For external frameworks, you have the internet to help you out, but for internal ones, the documentation is normally the only hope. In addition, you can hire people with skills in external framework, but will need to train every new hire on the internal framework, so it better have a short learning curve.
- What is the release and support model?
    - You don't want to be using a framework which does not have a specific release cadence and a know support model for older versions. Neither should the support model allow proliferation of versions in _the_ _wild_, nor should it force and upgrade every 3 months.
- Finally, will it last?
    - Is there organisational and budget support for the framework team?
    - Will the framework continue to live after the lead developers have left?

If you have other criterion, please leave a comment below.
