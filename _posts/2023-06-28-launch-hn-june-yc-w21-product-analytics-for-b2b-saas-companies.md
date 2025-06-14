---
layout: post
title:  "Launch HN: 六月（YC W21） – 面向B2B SaaS公司的产品分析"
author: 0xferruccio
description: 文章讲述了作者与其联合创始人离开产品团队创立初创公司，起初尝试为Segment构建一个分析工具，但发现免费用户不愿意为单个报告付费。经过对B2B产品和B2C产品分析差异的研究，他们发现了B2B产品的三个关键特点：大部分收入来自少数客户、收入主要来自扩张以及产品管理在B2B中更注重定量分析和团队协作。基于这些发现，他们重新构建了产品，专注于为B2B SaaS公司提供能够跟踪用户获取、激活、留存和功能使用的分析工具。现在，他们的产品已被超过一千家种子轮和A轮的B2B SaaS公司使用。
categories: [ Hacker News ]
image: https://picsum.photos/seed/1687957031/750/500
tags: [seed round]
---

作者: 0xferruccio | 发布日期: 2023-06-28 | 评分: 115 | 评论数: 19

**摘要：**

文章讲述了作者与其联合创始人离开产品团队创立初创公司，起初尝试为Segment构建一个分析工具，但发现免费用户不愿意为单个报告付费。经过对B2B产品和B2C产品分析差异的研究，他们发现了B2B产品的三个关键特点：大部分收入来自少数客户、收入主要来自扩张以及产品管理在B2B中更注重定量分析和团队协作。基于这些发现，他们重新构建了产品，专注于为B2B SaaS公司提供能够跟踪用户获取、激活、留存和功能使用的分析工具。现在，他们的产品已被超过一千家种子轮和A轮的B2B SaaS公司使用。

Two and a half years ago my co-founder and I left our jobs on the product team at Intercom to try and build a startup. We went through YC and launched an analytics tool on top of Segment that allowed you to generate some pre-made reports for common product metrics (https://news.ycombinator.com/item?id=26155327). We raised a seed round, then spent a year building templates of reports for startups.After a year of building our product we tried to monetise and failed. Our free users weren’t willing to pay us money for individual reports.Among the users we had, there were a handful of later stage B2B companies with few customers but a lot of revenue (one had 50 customers and $1m in annual revenue). These companies looked at their analytics in a different way. They cared a lot more about specific individual users than consumer apps do, and they spent a lot of time using our product.After learning this we spent some time trying to understand the differences between product analytics for a B2C product versus a B2B one. We learned three main things that led us to pivot our company into building a product analytics tool for B2B SaaS companies:(1) Most of the revenue in B2B products comes from a handful of customers. In Slack’s case, 500 customers out of 700,000 made up to 40% of revenue[1]!
(2) Most of the revenue B2B products make comes from expansion. Contracts start small and grow over time, as a company wins more trust and delivers value. This means that growing product usage among existing users, over time, draws in more users and more revenue.
(3) Product management in B2B is a lot less quantitative than in B2C. It is more a collaboration with Sales and Customer Success teams. The kind of insights you need from analytics are different. You need to know “Are our key customers adopting the new feature we launched?” and not “Does our new redesign improve activation by 2%?”After learning these things we went back to the drawing board and rebuilt our product with them in mind. That is, we built a product analytics tool that (1) has automatically set up reports that allow you to track acquisition, activation, retention and feature usage; (2) supports measuring metrics both in terms of how many users or companies use your product; and (3) helps you answer common questions for your users like “Who used our product the most in the last 90 days?”, “Who tried our new feature once and never came back?”, “What’s our feature with the highest retention? How many people use it?”This realization happened a year ago and we’ve now reached the point where more than a thousand B2B SaaS companies at seed and Series A use us every month.We would love to get some feedback from the broader HN community! You can find our product at: https://june.so[1] https://www.fool.com/investing/2019/04/29/slack-relies-heavi...

**原文链接**: https://news.ycombinator.com/item?id=36505743

**Hacker News 讨论：**

文章主要讨论了 June 这个 B2B SaaS 分析平台的使用体验和反馈。用户们对 June 的轻量级、易于使用和针对 SaaS 的定制化功能表示赞赏。然而，一些用户也提出了一些批评和建议，包括缺乏对公司的独立事件跟踪能力、需要外部 JavaScript 库以及与 HubSpot 集成的需求。文章中还提到了与其他分析工具如 Amplitude 和 Mixpanel 的比较，以及 June 如何通过专注于 B2B SaaS 市场和提供即时的有用数据来加速客户生命周期价值（TTV）。

