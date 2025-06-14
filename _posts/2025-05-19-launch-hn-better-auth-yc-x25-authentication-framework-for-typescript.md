---
layout: post
title:  "Launch HN: Better Auth (YC X25) – TypeScript 的认证框架"
author: bekacru
description: Better Auth 是一个针对 TypeScript 的全面认证框架，允许开发者直接在自己的数据库和后端中实现从简单认证流程到企业级系统的所有功能。它旨在通过插件生态系统提供内置的常见认证功能，同时允许用户根据需要扩展。Better Auth 旨在解决 TypeScript 生态系统中长期存在的认证痛点，如第三方服务的高成本和开源库的局限性。该框架是免费且开源的，并提供了与 Auth0 或 Clerk 等服务类似的功能，同时保持简单易用。此外，Better Auth 还在开发一个基础设施层，为需要高级功能的团队提供可选的付费服务。
categories: [ Hacker News ]
image: https://picsum.photos/seed/1747666083/750/500
tags: [seed round]
---

作者: bekacru | 发布日期: 2025-05-19 | 评分: 259 | 评论数: 52

**摘要：**

Better Auth 是一个针对 TypeScript 的全面认证框架，允许开发者直接在自己的数据库和后端中实现从简单认证流程到企业级系统的所有功能。它旨在通过插件生态系统提供内置的常见认证功能，同时允许用户根据需要扩展。Better Auth 旨在解决 TypeScript 生态系统中长期存在的认证痛点，如第三方服务的高成本和开源库的局限性。该框架是免费且开源的，并提供了与 Auth0 或 Clerk 等服务类似的功能，同时保持简单易用。此外，Better Auth 还在开发一个基础设施层，为需要高级功能的团队提供可选的付费服务。

Hi HN! We’re Bereket and KinfeMichael of Better Auth (https://www.better-auth.com/), a comprehensive authentication framework for TypeScript that lets you implement
everything from simple auth flows to enterprise-grade systems directly on your own database, embedded in your backend.To be clear—we’re not building a 3rd party auth service. Our goal is to make rolling your own auth so ridiculously easy that you’ll never need one.Here are some YouTube videos explaining how it works (we did make our own video but weren’t happy with it and these videos do a great job):https://www.youtube.com/watch?v=hFtufpaMcLM - a really good overviewhttps://www.youtube.com/watch?v=QurjwJHCoHQ - also a good overview and dives a little deeper into the codehttps://www.youtube.com/watch?v=RKqHrE0KyeE - short and clearhttps://www.youtube.com/watch?v=Atev8Nxpw7c - with TanStack frameworkhttps://www.youtube.com/watch?v=n6rP9d3RWo8 - a full-on 2 hour tutorialAuth has been a pain point for many developers in the TypeScript ecosystem for a while. Not because there aren’t options but because most fall into 2 buckets: (1) Third-party services like Auth0 which own your user data, lock you into a black-box solution and are often super expensive; or (2) open source libraries like NextAuth that cover the basics but leave you stitching your own solution together from there.For Better Auth. the kick off moment was building a web analytics platform and wanting to add an organization feature - things like workspaces, teams, members, and granular permissions. I assumed there’d be something out there I could plug in to NextAuth (the popular and kind of the only library), but there wasn’t. The only options were to build everything from scratch or switch to a 3rd party auth provider. I even tried hacking together a wrapper around NextAuth to support those features, but it was hacky. That’s when we decided to take a step back and build a proper auth library from the ground up with a plugin ecosystem that lets you start simple and scale as needed. That frustration turned into Better Auth.Better Auth lets you roll your own auth directly on your backend and database, with support for everything from simple auth flows to enterprise-grade systems without relying on 3rd party services.It comes with built-in features for common auth flows, and you can extend it as needed through a plugin ecosystem whether that’s 2FA, passkeys, organizations, multi-session, SSO, or even billing integration with Stripe.Unlike 3rd party auth providers, we’re just a library you install in your own project. It’s free forever, lives entirely in your codebase, and gives you full control. You get all the features you’d expect from something like Auth0 or Clerk plus even more through our plugin system, including things like billing integrations with Stripe or Polar. Most libraries stop at the basics but Better Auth is designed to scale with your needs while keeping things simple when you don’t need all the extras.We’re currently building an infrastructure layer that works alongside the framework to offer features that are hard to deliver as just a library—e.g. an admin dashboard with user analytics, bot/fraud/abuse detection, secondary session storage, and more. This will be our commercial offering. For this, there’s a waitlist at https://www.better-auth.build. However, this is only optional infrastructure for teams that need these capabilities. The library is free and open source and will remain so.We’d love your feedback!

**原文链接**: https://news.ycombinator.com/item?id=44030492

**Hacker News 讨论：**

文章主要讨论了一个名为Better Auth的认证库。多位开发者对其进行了评价和反馈，表示该库在安全性、灵活性和易用性方面表现优秀。用户们对Better Auth的快速响应、社区支持和开发速度给予了高度评价。同时，文章中也提到了一些功能上的建议和需求，例如支持联邦登录/登出、JWT令牌自动刷新、多认证会话管理以及与Google等提供者的集成等。一些用户还提到了对于企业级功能的期望，如SCIM支持。总体来说，Better Auth受到了开发社区的欢迎和期待。

