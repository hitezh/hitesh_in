---
title: "Software development methodology"
date: "2010-07-05"
categories: 
  - "technology"
tags: 
  - "agile"
  - "scrum"
  - "software-development"
  - "waterfall"
---

Recently I had a [good discussion on twitter](http://twitter.com/#search?q=ravi_mohan%20%40hitezh) about the different methodology out there and their relevance. Although I agree with [@ravi\_mohan](http://twitter.com/ravi_mohan) in a broader sense of not following blindly and not being a process fanatic or slave, I do not think he was quite right in dismissing all methodologies as fraud meant for idiots.

Since I found twitter a very limiting medium to discuss the nuances, I would rather blog about it.

### What is a methodology?

[As per wikipedia](http://en.wikipedia.org/wiki/Methodology): Methodology may refer to nothing more than a simple set of methods or procedures, or it may refer to the rationale and the philosophical assumptions that underlie a particular study relative to the scientific method.

### Methodologies we use every day.

We follow some methods or another all through the day, including when we are coding. We follow a set method for source control, bug tracking etc. taking these at a higher plain and we get a software development methodology.

We apply certain standard solutions to specific problem type, and then a few people saw these patterns and came up with design patterns. They work in most cases, evolved after years of refinement and are guidelines that can be used if you encounter similar design problem.

Similarly, few people saw some patterns in how we go about the process of developing software, saw what works and what does not and came up with [Software Development Models](http://en.wikipedia.org/wiki/Software_development_process).

Like design patterns, they are not to be used everywhere, and certainly not without a thought. In fact like several design patterns are actually counterproductive, like a Visitor pattern in dynamic languages. Similarly some development process recommendations are only to work around problems in workspace instead of actually addressing them. If you know the problems and have the ability and power to fix them, do it. You can then skip the part of the methodology that no longer makes sense.

Dismissing the collective wisdom of people who were able to see patterns in day to day work and were able to abstract and present it, is not right. Saying that the patterns are bad because the people who saw the patterns are not star programmers is, like saying, [Harsha Bhogle](http://en.wikipedia.org/wiki/Harsha_Bhogle) is not a good commentator because he is not a star player.

### Development methods in the wild (world of open source)

All great programmers follow a method. In fact open source projects with great leaders have the most articulated development process. Take for example the [linux kernel development process](http://ldn.linuxfoundation.org/book/1-a-guide-kernel-development-process). These processes are what work for that project but certainly you can see influences of well defined process. Who can deny that the 6 month [Ubuntu development cycle](https://wiki.ubuntu.com/UbuntuDevelopment) is a perfect example of a time-boxed agile release cycle?

### Conclusion

If you are working even is a small team, a process that is agreed and understood by all is useful. Preferably this needs to be written down, but if the process is part of the culture it is not needed. This has nothing to do with the skill level of the team members, as appropriately demonstrated by the teams working on the kernel. Whether you arrive at the process, by taking a 'template' and arriving at what works for you or seeing what is working and then refine and codify it, makes no difference.

Even if you are coding alone, you follow some process, even if it's subconscious.
