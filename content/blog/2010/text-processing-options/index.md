---
title: "Text processing options"
date: "2010-04-25"
categories: 
  - "technology"
tags: 
  - "lexical-analysis"
  - "nltk"
  - "regex"
  - "totw"
---

The last two weeks, I have been researching options for processing free text. I think I have explored the entire spectrum of possibilities. Below are some notes that I can revisit in a few months and not spend the same effort again.

### Background

I was looking at a way to process auto-generated tweets, like the ones on [http://twitter.com/moneyvidya\_com](http://twitter.com/moneyvidya_com). Some sample tweets:

> - #moneyvidya arunthestocksguru (5 Star rated) says Buy Vijay Shanthi Builders - 6m (Monday 29 March 2010 @ 09:55 ... [http://bit.ly/bd5JgC](http://bit.ly/bd5JgC)
> - #moneyvidya arunthestocksguru (5 Star rated) says Buy Bhagwati Banquets & Hotels - 6m (Monday 29 March 2010 @ 09... [http://bit.ly/9MzRDG](http://bit.ly/9MzRDG)
> - #moneyvidya NSV (5 Star rated) says Buy ACC - 6m (Wednesday 24 March 2010 @ 09:55 AM): [http://bit.ly/b5xTrN](http://bit.ly/b5xTrN)
> - #moneyvidya justsurjit (5 Star rated) says Sell Sesa Goa - Intraday (Monday 22 March 2010 @ 10:31 AM): [http://bit.ly/9lLo8U](http://bit.ly/9lLo8U)

As it is clear, the text follows a specific format, but has its own little variations. I intended to process the 'insights' and see each expert's success rate. Although I never got around actually completing the task, I did learn a lot about text processing.

### Approach

#### The apprentice - Regular Expressions

The first approach was the most obvious one - regular expressions. I am sure RegEx would have addressed the particular task at hand. But the parsing expression would become a convoluted mess very soon. So I started looking for better alternatives.

#### The strict teacher - Lexical Analysis

Lexical analysis starts where regular expression give up. This also needs pretty strict rules on the allowed input text, but the rules could be a lot more flexible and easy to comprehend.

I especially enjoyed using [Irony](http://irony.codeplex.com/), which makes it trivial to convert [BNF](http://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form) formed rules to C# code. There is a good gentle introduction to [lexical analysis using Irony](http://www.codeproject.com/KB/recipes/YourFirstDSL.aspx) on code project.

#### The guru - Natural Language Processing

Processing test using tools like [NLTK](http://www.nltk.org/), allows you to parse and understand any unstructured text and understand it. Although this gives you maximum freedom, it also needs a lot of work to get right. For this to produce good results, be sure you have lots of data to be able to tweak and test your implementation. I guess this is the reason Google and co., can do so much better at translation, since they have huge data available for improving.

### Conclusions

I don't have one :). I guess, there are several ways to solve a problem, and half the solution is to identify the best way to solve the given problem. As for me, it was a good learning exercise and may come in handy if I ever write a DSL.
