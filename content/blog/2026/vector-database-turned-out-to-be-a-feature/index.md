---
title: "The vector database turned out to be a feature"
slug: "vector-database-turned-out-to-be-a-feature"
date: "2026-10-02"
description: "A vector database vendor is rebuilding its core around everything except vectors. What that says about how to choose, and test, the retrieval layer behind your AI."
image: images/cover.svg
draft: false
categories:
  - "technology"
tags:
  - "ai"
  - "ai-strategy"
  - "architecture"
  - "databases"
---

turbopuffer's latest engineering post is titled ["RIP, vector database"](https://turbopuffer.com/blog/rip-vector-database). The company sells a vector database. It says it is moving away from the design that made its name, an index organized around vector search, because that design gets in the way of everything else a retrieval system has to do.

Read it as a technical note and you learn something about index internals. Read it as a buyer and you learn something more useful: even the people selling the category think the category is the wrong unit.

## Vector search was the demo. Retrieval is the job.

The post is candid about the problem. When the vector index is the primary index, documents with several vectors force you to duplicate the rest of the data once per vector. Updating one vector can move a document and cascade through every other index that points at it. And the clusters of 100 to 200 documents that suit nearest-neighbor search are too small for the batch-oriented execution that modern engines rely on. Full-text search improved by roughly 10x in index size and up to 20x in speed once it stopped living inside those clusters.

Vectors are fine. They are just one query primitive among several, and the system works better when it is built that way. Real retrieval for a business is a vector similarity, plus keyword match, plus a filter on tenant, plus a check on who is allowed to see the result, plus a sort. A buyer who evaluates only the first of those has evaluated the demo.

## What I would test before choosing a retrieval layer

Three observations that are not in the post, but follow from it.

**Benchmark your churn, not your recall.** Vendor benchmarks and most pilots are read-heavy: load a corpus once, then query it. Enterprise knowledge is not like that. Policies get revised, tickets close, people change roles and permissions change with them. The write amplification turbopuffer describes is invisible in a pilot and expensive in month eight, when the corpus is changing constantly and the bill and the latency start moving together. Ask what happens to cost and p99 latency when ten percent of your documents change every week. If nobody can answer, that is the answer.

**Treat permissions as the primary query, not a post-filter.** The expensive failure in enterprise retrieval is a correct answer drawn from a document the asker was never supposed to see. A mediocre answer is cheaper. A system where access control is an ordinary predicate inside the query is a different class of system from one where you retrieve first and filter after. One commenter on the discussion of the post described building on a SQL database for exactly this reason: tenant, ACL, version and date constraints become plain conditions rather than something bolted onto a vector store. I would put this ahead of recall in the evaluation criteria for anything touching customer or employee data.

**Pick the system for your slowest-changing assumption.** Embedding models get replaced; chunking strategies get rewritten; the model on top gets swapped every few months. A retrieval layer that stores your documents' identity separately from how they happen to be indexed lets you re-embed without migrating the business. That is a long-standing database lesson (turbopuffer's fix, as the post describes it, is to stop keying the index on where a document sits and give documents a stable internal ID), and it applies one level up, to how you carve responsibilities between vendors and your own team.

## The category is a procurement artifact

Categories are how budgets get created. "Vector database" became a line item in 2023, and many companies bought one before they could say what they would retrieve, for whom, with what permissions. Now the vendors are outgrowing their own label, and Postgres, Elasticsearch and others have added vector support. The question is now "what do I need retrieval to do, and which of my existing systems can already do most of it?"

I made a similar argument about [counting the systems you run](/2026/count-your-systems/): each new store added for an AI feature is a seam you will own for years. It is also the practical consequence of [spending your novelty budget on the product, not the plumbing](/2026/boring-technology-is-an-ai-strategy/). The same goes for the model on top, which I've argued [was never your moat](/2026/your-model-was-never-your-moat/). The retrieval layer is plumbing too, until your data and permissions make it a differentiator, and then it is the one part worth getting right.

There is a fair objection. Specialized systems do win on cost and scale at the extremes, and turbopuffer's own numbers (a trillion documents, ten million writes a second) are not a Postgres workload. True, and if you are there you already know it. Most companies I speak with have a few million documents and a permissions model that nobody has written down. Their real risk is a retrieval layer chosen from a benchmark that never included their access rules or their rate of change.

If you are deciding where to put retrieval for an AI product, write the query you need on one page first: the filters, the permissions, the update rate. Choose the system that makes that page easy, even if another one has the better chart. If it helps to work through that page with someone outside the team, that is what the [AI advisory hour](/work-with-me/) is for.
