---
layout: post
title:  "启动 HN：Exa（YC S21）—— 将网络作为数据库"
author: willbryk
description: Exa Websets 是一个基于嵌入技术的搜索引擎，旨在返回与用户查询完全匹配的结果。它通过在 Exa 的网络向量数据库中执行数十次嵌入搜索来找到合适的搜索候选者，并通过 LLM 验证每个结果是否符合用户的要求。Websets 的搜索结果以表格形式呈现，允许用户添加“增强”列以获取更多关于每个结果的信息。该搜索引擎旨在解决当前搜索引擎在提供精确结果方面的不足，并使网络感觉更像一个数据库。
categories: [ Hacker News ]
image: https://picsum.photos/seed/1746548322/750/500
tags: [startup]
---

作者: willbryk | 发布日期: 2025-05-06 | 评分: 412 | 评论数: 59

**摘要：**

Exa Websets 是一个基于嵌入技术的搜索引擎，旨在返回与用户查询完全匹配的结果。它通过在 Exa 的网络向量数据库中执行数十次嵌入搜索来找到合适的搜索候选者，并通过 LLM 验证每个结果是否符合用户的要求。Websets 的搜索结果以表格形式呈现，允许用户添加“增强”列以获取更多关于每个结果的信息。该搜索引擎旨在解决当前搜索引擎在提供精确结果方面的不足，并使网络感觉更像一个数据库。

Hey HN! We’re Will and Jeff from Exa (https://exa.ai). We recently launched Exa Websets, an embeddings-powered search engine designed to return exactly what you’re asking for. You can get precise results for complex queries like “all startups working on open-source developer tools based in SF, founded 2021-2025”. 
Demo here - https://youtu.be/Unt8hJmCxd4We started working on Exa because we were frustrated that while LLM state-of-the-art is advancing every week, Google has gotten worse over time. The Internet used to feel like a magical information portal, but it doesn’t feel that way anymore when you’re constantly being pushed towards SEO-optimized clickbait.Websets is a step in the opposite direction. For every search, we perform dozens of embedding searches over Exa’s vector database of the web to find good search candidates, then we run agentic workflows on each result to verify they match exactly what you asked for.Websets results are good for two reasons. First, we train custom embedding models for our main search algorithm, instead of typical keyword matching search algorithms. Our embeddings models are trained specifically to return exactly the type of entity you ask for. In practice, that means if you search “startups working in nanotech”, keyword-based search engines return listicles about nanotech startups, because these listicles match the keywords in the query. In contrast, our embedding models return actual startup homepages, because these startup homepages match the meaning of the query.The second is that LLMs provide the last-mile intelligence needed to verify every result. Each result and piece of data is backed with supporting references that we used to validate that the result is actually a match for your search criteria. That’s why Websets can take minutes or even hours to run, depending on your query and how many results you ask for. For valuable search queries, we think this is worth it.Also notably, Websets are tables, not lists. You can add “enrichment” columns to find more information about each result, like “# of employees” or “does author have blog?”, and the cells asynchronously load in. This table format hopefully makes the web feel more like a database.A few examples of searches that work with Websets:- “Math blogs created by teachers from outside the US”: https://websets.exa.ai/cma1oz9xf007sis0ipzxgbamn- "research paper about ways to avoid the O(n^2) attention problem in transformers, where one of the first author's first name starts with "A","B", "S", or "T", and it was written between 2018 and 2022”: https://websets.exa.ai/cm7dpml8c001ylnymum4sp11h- “US based healthcare companies, with over 100 employees and a technical founder": https://websets.exa.ai/cm6lc0dlk004ilecmzej76qx2- “all software engineers in the Bay Area, with experience in startups, who know Rust and have published technical content before”: https://youtu.be/knjrlm1aibQYou can try it at https://websets.exa.ai/ and API docs are at https://docs.exa.ai/websets. We’d love to hear your feedback!

**原文链接**: https://news.ycombinator.com/item?id=43906841

**Hacker News 讨论：**

文章主要讨论了一个名为 'web search out' 的服务。用户们对服务的多个方面提出了反馈和建议，包括对账户要求的不满、搜索功能的效率问题、LLM（大型语言模型）的可靠性和幻觉问题、用户体验和界面设计、搜索结果的质量和相关性、价格策略以及功能限制。一些用户表示服务很有用，但价格过高或某些功能需要改进。

