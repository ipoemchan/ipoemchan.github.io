---
layout: post
title:  "Launch HN: Bucket Robotics (YC S24) – 注塑和铸造部件的缺陷检测"
author: lasermatts
description: Bucket Robotics公司开发了一种将CAD模型转换为定制缺陷检测模型的工具，用于制造业中的注塑和铸造部件。该工具通过模拟3D模型的不同变体来生成缺陷检测模型，从而避免了传统方法中需要收集和标记大量真实世界样本的繁琐过程。这种方法可以大大减少模具制作时间，并提高缺陷检测的效率。Bucket Robotics的解决方案适用于注塑行业，该行业价值3000亿美元，并且随着电动汽车的发展，市场规模还在扩大。公司的目标是通过提供高效、准确的缺陷检测服务来帮助制造业降低成本和提高产品质量。
categories: [ Hacker News ]
image: https://picsum.photos/seed/1724767965/750/500
tags: [seed round]
---

作者: lasermatts | 发布日期: 2024-08-27 | 评分: 111 | 评论数: 9

**摘要：**

Bucket Robotics公司开发了一种将CAD模型转换为定制缺陷检测模型的工具，用于制造业中的注塑和铸造部件。该工具通过模拟3D模型的不同变体来生成缺陷检测模型，从而避免了传统方法中需要收集和标记大量真实世界样本的繁琐过程。这种方法可以大大减少模具制作时间，并提高缺陷检测的效率。Bucket Robotics的解决方案适用于注塑行业，该行业价值3000亿美元，并且随着电动汽车的发展，市场规模还在扩大。公司的目标是通过提供高效、准确的缺陷检测服务来帮助制造业降低成本和提高产品质量。

Hey Hacker News! We’re Matt and Steph from Bucket Robotics https://bucket.bot Bucket transforms CAD models into custom defect detection models for manufacturing: https://youtu.be/RCyguguf3IsInjection molded and cast parts are everywhere – 50% of what’s visible on a modern car is injection molded – and these molds are custom created for each part and assembly line. Injection molding is a process where small plastic pellets are heated - primarily by friction from an auger - and pushed into a mold - usually two big milled out chunks of aluminum or steel - that are pushed together by somewhere between 10 tons and 1000s of tons of pressure. Once the plastic cools the machine opens up the mold and pushes the newly formed object out using rods called ejector pins. Look at a plastic object and you can usually find a couple round marks from the ejector pins, a mark from the injection site, a ridge where the faces of the molds meet, and maybe some round stamp marks that tell you the day and shift it was made on. (Link to a great explainer on the process: https://youtu.be/RMjtmsr3CqA?si=QjErT_rOU9-_TQ8d)Defect detection is either traditional ML based – get a real-world sample, image it, label defect, repeat until there’s a big enough set to build a model – or done manually. Humans have an 80% success rate at detection - that gets worse throughout the day, because decision fatigue leads to deterioration in performance near lunch/end-of-shift (https://en.wikipedia.org/wiki/Decision_fatigue).  Creating an automated system usually takes somewhere between 2 days and 2 weeks to collect and label real world samples then build a model.Injection molding is currently a 300 billion USD market, and as vehicle electrification increases, more of the total components of a car are injection molded making that market even bigger. And because so much of that surface area is customer-facing – any blemish, scratch, or burn is considered defective. Speaking to folks in the space, you can see a defect rate as high as 15% for blemishes as small as 1cm^2.Our solution to this problem is to build the models off of CAD designs instead of real world data. An injection mold is usually machined aluminum or steel and can cost anywhere from $5k to >$100k - usually with a significant lead time. So when customers send out their designs to the mold makers - or their CNC if they do it in-house - they can also send them to us in parallel and have a defect detection model ready to go long before their mold is even finished.On the backend we’re generating these detection models by creating a large number of variations of the 3D model - some to simulate innocuous things like ejector pin marks and most to simulate various defects like flash. Once we have our 3D models generated we fire them off to the cloud to render photorealistic scenes with varied camera parameters, lighting, and obscurants (shops are dusty). Now that we have labeled images it’s a simple task to train a fairly off the shelf transformer based vision model from them and deliver it to the customer.Running the model doesn’t require fancy hardware - our usual target device is an Orin Nano with a 12MP camera on it - and we run it purely on-device so that customer images don’t need to leave their worksite. We charge customers by the model — when they plan a line change to a new mold, ideally they’ll contact us and we’ll have their model ready before retooling is complete.Injection molding is as error prone as it is cool to watch. For example, flash  is a thin layer of extra plastic - usually hanging off the edge of the part or overhanging a hole in the part which makes parts defective aesthetically or can even prevent parts from joining up properly. It can happen for so many reasons. Too high an injection pressure, too low a clamping pressure, a grubby mold surface, mold wear, poor mold design, and that’s just to name a few!Steph and I have a history of working on tasks performed manually that we want to automate – we’ve been working together for the last five years in Pittsburgh on self-driving cars at Argo AI, Latitude AI, and Stack AV. Before that, I worked at Michelin’s test track and Uber ATG. We  really, really love robots.Our first pitch to Y Combinator was, “build a better Intel RealSense” since it’s a universally used (and loathed) vision system in robotics. We built our first few units and started building demos for how folks could use our camera - and that’s when we found defect detection for injection molding and casting. Defect detection is understood and highly automated for things like PCBs – where a surface defect can indicate a future critical failure (hey that capacitor looks a little big?) but defect detection for higher volume/lower cost parts is still too high a cost and effort for most shops.We’re excited to launch Bucket with you all! We’d love to hear from the community – and if you know anyone working in industrial computer vision or in quality control, please connect us! My email is matt@bucket.bot – we can’t wait to see what you all think!

**原文链接**: https://news.ycombinator.com/item?id=41367750

**Hacker News 讨论：**

文章讨论了注射成型工艺的稳定性和质量控制问题，涉及多个方面，包括：
1. 注射成型工艺的稳定性，包括是否会出现缺陷以及如何进行质量控制。
2. 如何标记模具的抽芯杆位置、分型线等，以及是否使用Hexagon软件等工具。
3. 是否依赖熟练的操作员，以及是否使用CMM进行尺寸检查。
4. 注射成型与机加工的区别，以及为什么选择注射成型。
5. 缺陷检测模型的输入和输出，例如是否可以接受注射成型压力曲线作为输入。
6. 模型是否可以用于新机器或现有机器的改造。
7. 模型的应用场景和价格问题。
8. 模型在处理不同类型缺陷（如尺寸缺陷和外观缺陷）方面的能力。
9. 模型的训练和应用方法，例如如何处理定制工具和通用图像。
10. 客户如何与模型交互，包括如何沟通潜在缺陷的类型和位置等。

