---
layout: post
title:  "启动 HN：ParaQuery（YC X25）—— GPU 加速的 Spark/SQL"
author: winwang
description: 文章介绍了ParaQuery，一个基于GPU加速的Spark + SQL解决方案，旨在提供BigQuery易用性的同时，在成本和性能上具有显著优势。文章强调了GPU在数据处理中的潜力，并指出虽然一些工程师认为GPU仅适用于AI和图形处理，但实际上它们也适用于传统数据处理的并行工作负载。作者分享了自己开发ParaQuery的经历，包括一个因客户云信用额度不足而成功采用ParaQuery的案例。文章最后提到ParaQuery目前处于等待名单阶段，并邀请读者加入等待名单以体验其服务。
categories: [ Hacker News ]
image: https://picsum.photos/seed/1747065691/750/500
tags: [startup]
---

作者: winwang | 发布日期: 2025-05-12 | 评分: 135 | 评论数: 35

**摘要：**

文章介绍了ParaQuery，一个基于GPU加速的Spark + SQL解决方案，旨在提供BigQuery易用性的同时，在成本和性能上具有显著优势。文章强调了GPU在数据处理中的潜力，并指出虽然一些工程师认为GPU仅适用于AI和图形处理，但实际上它们也适用于传统数据处理的并行工作负载。作者分享了自己开发ParaQuery的经历，包括一个因客户云信用额度不足而成功采用ParaQuery的案例。文章最后提到ParaQuery目前处于等待名单阶段，并邀请读者加入等待名单以体验其服务。

Hey HN! I'm Win, founder of ParaQuery (https://paraquery.com), a fully-managed, GPU-accelerated Spark + SQL solution. We deliver BigQuery's ease of use (or easier) while being significantly more cost-efficient and performant.Here's a short demo video demonstrating ParaQuery (vs. BigQuery) on a simple ETL job: https://www.youtube.com/watch?v=uu379YnccGUIt's well known that GPUs are very good for many SQL and dataframe tasks, at least by researchers and GPU companies like NVIDIA. So much so that, in 2018, NVIDIA launched the RAPIDS program and the Spark-RAPIDS plugin (https://github.com/NVIDIA/spark-rapids). I actually found out because, at the time, I was trying to craft a CUDA-based lambda calculus interpreter…one of several ideas I didn't manage to implement, haha.There seems to be a perception among at least some engineers that GPUs are only good for AI, graphics, and maybe image processing (maybe! someone actually told me they thought GPUs are bad for image processing!) Traditional data processing doesn’t come to mind. But actually GPUs are good for this as well!At a high level, big data processing is a high-throughput, massively parallel workload. GPUs are a type of hardware specialized for this, are highly programmable, and (now) happen to be highly available on the cloud! Even better, GPU memory is tuned for bandwidth over raw latency, which only improves their throughput capabilities compared to a CPU. And by just playing with cloud cost calculators for a couple of minutes, it's clear that GPUs are cost-effective even on the major clouds.To be honest, I thought using GPUs for SQL processing would have taken off by now, but it hasn't. So, just over a year ago, I started working on actually deploying a cloud-based data platform powered by GPUs (i.e. Spark-RAPIDS), spurred by a friend-of-a-friend(-of-a-friend) who happened to have BigQuery cost concerns at his startup. After getting a proof of concept done and a letter of intent... well, nothing happened! Even after over half a year. But then, something magical did happen: their cloud credits ran out!And now, they're saving over 60% off of their BigQuery bill by using ParaQuery, while also being 2x faster -- with zero data migration needed (courtesy of Spark's GCS connector). By the way, I'm not sure about other people's experiences but... we're pretty far from being IO-bound (to the surprise of many engineers I've spoken to).I think that the future of high-throughput compute is computing on high-throughput hardware. If you think so too, or you have scaling data challenges, you can sign up here: https://paraquery.com/waitlist. Sorry for the waitlist, but we're not ready for a self-serve experience just yet—it would front-load significant engineering and hardware cost. But we’ll get there, so stay tuned!Thanks for reading! What have your experiences been with huge ETL / processing loads? Was cost or performance an issue? And what do you think about GPU acceleration (GPGPU)? Did you think GPUs were simply expensive? Would love to just talk about tech here!

**原文链接**: https://news.ycombinator.com/item?id=43964505

**Hacker News 讨论：**

文章主要讨论了关于GPU加速的Spark项目及其相关技术。文章中多位作者对Spark加速项目进行了评论和提问，包括对现有Spark加速器（如Spark RAPIDS、Gluten + Velox、DataFusion Comet）的看法，以及它们与Spark SQL的兼容性。此外，还提到了GPU加速计算在不同工作负载中的影响和挑战，以及与其他类似项目的比较和关系。

