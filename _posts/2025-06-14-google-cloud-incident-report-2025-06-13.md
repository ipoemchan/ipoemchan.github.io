
---
layout: post
title:  "Google Cloud事件报告 - 2025-06-13"
author: denysvitali
categories: [ Hacker News ]
image: https://picsum.photos/seed/1749881580/750/500
tags: [startup]
---
作者: denysvitali | 发布日期: 2025-06-14 | 评分: 7 | 评论数: 1

**摘要：**

Google Cloud 和 Google Workspace 的多个产品在 2025 年 6 月 12 日经历了服务中断，外部 API 请求出现大量 503 错误，影响了客户。问题源于 Service Control 中一个新功能的代码更改，导致在特定政策更改下触发了未经验证的代码路径，进而引发崩溃。Google 迅速采取措施恢复服务，并承诺进行系统改进以避免未来发生类似事件。受影响的服务包括 Google Cloud 和 Google Workspace 的多个产品，如 Identity and Access Management、Cloud Build、Cloud Storage 等。...

**原文链接**: https://status.cloud.google.com/incidents/ow5i3PPK96RduMcb1SsW

**Hacker News 讨论：**
[{'author': 'softveda', 'text': 'So code that was untested (the code path that failed was never exercised), perhaps there is no test environment, and not even peer reviewed ( it did not have appropriate error handling nor was it feature flag protected.) was pushed to production, what a surprise !!', 'created_at': '2025-06-14T07:32:52.000Z'}]

