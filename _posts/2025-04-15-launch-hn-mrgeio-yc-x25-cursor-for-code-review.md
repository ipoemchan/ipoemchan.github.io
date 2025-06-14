---
layout: post
title:  "Launch HN: mrge.io (YC X25) – Cursor for code review

### 任务
将上述文章翻译为中文。
结果以如下 JSON 格式呈现：

{
    "tanslate": "具体翻译结果"
}
请严格按照此格式输出一个 JSON 文件。"
author: pomarie
description: The article introduces mrge, an AI-powered code review platform designed to enhance code merging efficiency and reduce bugs. The platform is developed by engineers Allis and Paul, who faced the challenge of code review bottlenecks in their previous startup. mrge offers a streamlined process with AI review capabilities that analyze changes within a secure container, and a user-friendly interface for human reviewers. The platform supports GitHub and Gitlab repositories, uses cloud-based sandboxes for secure code analysis, and focuses on improving the readability and understanding of code changes. The service is currently free for early adopters and plans to charge for closed-source projects in the future while remaining free for open-source ones.
categories: [ Hacker News ]
image: https://picsum.photos/seed/1744724061/750/500
tags: [startup]
---

作者: pomarie | 发布日期: 2025-04-15 | 评分: 221 | 评论数: 47

**摘要：**

The article introduces mrge, an AI-powered code review platform designed to enhance code merging efficiency and reduce bugs. The platform is developed by engineers Allis and Paul, who faced the challenge of code review bottlenecks in their previous startup. mrge offers a streamlined process with AI review capabilities that analyze changes within a secure container, and a user-friendly interface for human reviewers. The platform supports GitHub and Gitlab repositories, uses cloud-based sandboxes for secure code analysis, and focuses on improving the readability and understanding of code changes. The service is currently free for early adopters and plans to charge for closed-source projects in the future while remaining free for open-source ones.

Hey HN, we’re building mrge (https://www.mrge.io/home), an AI code review platform to help teams merge code faster with fewer bugs. Our early users include Better Auth, Cal.com, and n8n—teams that handle a lot of PRs every day.Here’s a demo video: https://www.youtube.com/watch?v=pglEoiv0BgYWe (Allis and Paul) are engineers who faced this problem when we worked together at our last startup. Code review quickly became our biggest bottleneck—especially as we started using AI to code more. We had more PRs to review, subtle AI-written bugs slipped through unnoticed, and we (humans) increasingly found ourselves rubber-stamping PRs without deeply understanding the changes.We’re building mrge to help solve that. Here’s how it works:1. Connect your GitHub repo via our Github app in two clicks (and optionally download our desktop app). Gitlab support is on the roadmap!2. AI Review: When you open a PR, our AI reviews your changes directly in an ephemeral and secure container. It has context into not just that PR, but your whole codebase, so it can pick up patterns and leave comments directly on changed lines. Once the review is done, the sandbox is torn down and your code deleted – we don’t store it for obvious reasons.3. Human-friendly review workflow: Jump into our web app (it’s like Linear but for PRs). Changes are grouped logically (not alphabetically), with important diffs highlighted, visualized, and ready for faster human review.The AI reviewer works a bit like Cursor in the sense that it navigates your codebase using the same tools a developer would—like jumping to definitions or grepping through code.But a big challenge was that, unlike Cursor, mrge doesn’t run in your local IDE or editor. We had to recreate something similar entirely in the cloud.Whenever you open a PR, mrge clones your repository and checks out your branch in a secure and isolated temporary sandbox.  We provision this sandbox with shell access and a Language Server Protocol (LSP) server. The AI reviewer then reviews your code, navigating the codebase exactly as a human reviewer would—using shell commands and common editor features like "go to definition" or "find references". When the review finishes, we immediately tear down the sandbox and delete the code—we don’t want to permanently store it for obvious reasons.We know cloud-based review isn't for everyone, especially if security or compliance requires local deployments. But a cloud approach lets us run SOTA AI models without local GPU setups, and provide a consistent, single AI review per PR for an entire team.The platform itself focuses entirely on making human code reviews easier. A big inspiration came from productivity-focused apps like Linear or Superhuman, products that show just how much thoughtful design can impact everyday workflows. We wanted to bring that same feeling into code review.That’s one reason we built a desktop app. It allowed us to deliver a more polished experience, complete with keyboard shortcuts and a snappy interface.Beyond performance, the main thing we care about is making it easier for humans to read and understand code. For example, traditional review tools sort changed files alphabetically—which forces reviewers to figure out the order in which they should review changes. In mrge, files are automatically grouped and ordered based on logical connections, letting reviewers immediately jump in.We think the future of coding isn’t about AI replacing humans—it’s about giving us better tools to quickly understand high-level changes, abstracting more and more of the code itself. As code volume continues to increase, this shift is going to become increasingly important.You can sign up now (https://www.mrge.io/home). mrge is currently free while we're still early. Our plan for later is to charge closed-source projects on a per-seat basis, and to continue giving mrge away for free to open source ones.We’re very actively building and would love your honest feedback!

**原文链接**: https://news.ycombinator.com/item?id=43692476

**Hacker News 讨论：**

文章讨论了关于一个名为Cartography的自动化代码审查工具的使用体验和看法。多位用户分享了他们对这个工具的使用感受，包括对自动生成规则、与社区贡献者协作、以及与现有工具（如pylint）的对比。一些用户认为这个工具能够有效地提供反馈，帮助维护代码质量，但也有人指出它有时会误报或不适用。此外，文章还提到了其他类似工具（如graphite.dev）的发展情况，以及对安全性和工作流程集成等问题的关注。

