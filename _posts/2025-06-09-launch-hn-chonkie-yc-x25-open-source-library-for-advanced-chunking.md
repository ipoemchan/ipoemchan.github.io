---
layout: post
title:  "Launch HN: Chonkie (YC X25) – 高级分块的开源库"
author: snyy
description: 文章介绍了 Chonkie，一个用于数据分块和嵌入的开源库。Chonkie 由 Shreyash 和 Bhavnick 开发，旨在提供轻量级、快速、可扩展且易于使用的功能。它支持多种分块策略，包括语义分块、代码分块和基于最新研究的分块方法。Chonkie 比其他库更轻量级，速度更快，并提供创建嵌入的简单方式。此外，它还提供了与各种向量数据库的集成，以及托管和本地部署版本，适用于构建语义搜索和智能代理等应用。
categories: [ Hacker News ]
image: https://picsum.photos/seed/1749485343/750/500
tags: [seed round]
---

作者: snyy | 发布日期: 2025-06-09 | 评分: 148 | 评论数: 22

**摘要：**

文章介绍了 Chonkie，一个用于数据分块和嵌入的开源库。Chonkie 由 Shreyash 和 Bhavnick 开发，旨在提供轻量级、快速、可扩展且易于使用的功能。它支持多种分块策略，包括语义分块、代码分块和基于最新研究的分块方法。Chonkie 比其他库更轻量级，速度更快，并提供创建嵌入的简单方式。此外，它还提供了与各种向量数据库的集成，以及托管和本地部署版本，适用于构建语义搜索和智能代理等应用。

Hey HN! We're Shreyash and Bhavnick. We're building Chonkie (https://chonkie.ai), an open-source library for chunking and embedding data.Python: https://github.com/chonkie-inc/chonkieTypeScript: https://github.com/chonkie-inc/chonkie-tsHere's a video showing our code chunker: https://youtu.be/Xclkh6bU1P0.Bhavnick and I have been building personal projects with LLMs for a few years. For much of this time, we found ourselves writing our own chunking logic to support RAG applications. We often hesitated to use existing libraries because they either had only basic features or felt too bloated (some are 80MB+).We built Chonkie to be lightweight, fast, extensible, and easy. The space is evolving rapidly, and we wanted Chonkie to be able to quickly support the newest strategies. We currently support: Token Chunking, Sentence Chunking, Recursive Chunking, Semantic Chunking, plus:-  Semantic Double Pass Chunking: Chunks text semantically first, then merges closely related chunks.-  Code Chunking: Chunks code files by creating an AST and finding ideal split points.-  Late Chunking: Based on the paper (https://arxiv.org/abs/2409.04701), where chunk embeddings are derived from embedding a longer document.-  Slumber Chunking: Based on the "Lumber Chunking" paper (https://arxiv.org/abs/2406.17526). It uses recursive chunking, then an LLM verifies split points, aiming for high-quality chunks with reduced token usage and LLM costs.You can see how Chonkie compares to LangChain and LlamaIndex in our benchmarks: https://github.com/chonkie-inc/chonkie/blob/main/BENCHMARKS....Some technical details about the Chonkie package:  - ~15MB default install vs. ~80-170MB for some alternatives. - Up to 33x faster token chunking compared to LangChain and LlamaIndex in our tests. - Works with major tokenizers (transformers, tokenizers, tiktoken). - Zero external dependencies for basic functionality. - Implements aggressive caching and precomputation. - Uses running mean pooling for efficient semantic chunking. - Modular dependency system (install only what you need).In addition to chunking, Chonkie also provides an easy way to create embeddings. For supported providers (SentenceTransformer, Model2Vec, OpenAI), you just specify the model name as a string. You can also create custom embedding handlers for other providers.RAG is still the most common use case currently. However, Chonkie makes chunks that are optimized for creating high quality embeddings and vector retrieval, so it is not really tied to the "generation" part of RAG. In fact, We're seeing more and more people use Chonkie for implementing semantic search and/or setting context for agents.We are currently focused on building integrations to simplify the retrieval process. We've created "handshakes" – thin functions that interact with vector DBs like pgVector, Chroma, TurboPuffer, and Qdrant, allowing you to interact with storage easily. If there's an integration you'd like to see (vector DB or otherwise), please let us know.We also offer hosted and on-premise versions with OCR, extra metadata, all embedding providers, and managed vector databases for teams that want a fully managed pipeline. If you're interested, reach out at shreyash@chonkie.ai or book a demo: https://cal.com/shreyashn/chonkie-demo.We're eager to hear your feedback and comments! Thanks!

**原文链接**: https://news.ycombinator.com/item?id=44225930

**Hacker News 讨论：**

文章讨论了AI代理构建中的常见用例，即处理大型对话线程（如包含SQL片段、查询结果和数据库元数据的200k+ tokens）。文章中提到了对现有线程进行自动分块的需求，以允许代理搜索之前的对话以避免重复对话。同时，讨论了分块方法（如嵌入和代理检索）以及与数据库设置的关系。还提到了对现有库的比较、个人项目的分享、对自定义嵌入模型端点的需求、PDF转换到Markdown的方法以及Chonkie库的适用性和性能优势。此外，还涉及了开源项目的盈利模式、Chonkie与其他库的兼容性以及RAG数据库的选择等问题。

