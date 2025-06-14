---
layout: post
title:  "我黑了婚恋应用（以及如何对待安全研究员）"
author: bearsyankees
description: 本文主要讨论了初创公司对网络安全的重要性。作者通过分析一款名为Cerca的约会应用，揭示了该应用在安全方面存在的严重漏洞。这些漏洞包括直接暴露的一次性密码（OTP）、未受保护的API端点以及个人身份信息的泄露。尽管作者在发现漏洞后与Cerca团队进行了沟通，但该公司未能及时修复漏洞并通知用户。文章强调了安全意识不足和急于推向市场的风险，并呼吁开发者重视用户数据安全，以避免潜在的隐私侵犯和现实世界后果。
categories: [ Hacker News ]
image: https://picsum.photos/seed/1747067950/750/500
tags: [startup]
---

作者: bearsyankees | 发布日期: 2025-05-12 | 评分: 570 | 评论数: 35

**摘要：**

本文主要讨论了初创公司对网络安全的重要性。作者通过分析一款名为Cerca的约会应用，揭示了该应用在安全方面存在的严重漏洞。这些漏洞包括直接暴露的一次性密码（OTP）、未受保护的API端点以及个人身份信息的泄露。尽管作者在发现漏洞后与Cerca团队进行了沟通，但该公司未能及时修复漏洞并通知用户。文章强调了安全意识不足和急于推向市场的风险，并呼吁开发者重视用户数据安全，以避免潜在的隐私侵犯和现实世界后果。

Startups Need to Take Security Seriously
Timeline & Responsible Disclosure: Upon identifying these vulnerabilities, I reached out to the Cerca team via email on February 23, 2025. The next day (Feb 24), we held a productive video call to discuss the vulnerabilities, potential mitigations, and next steps. During our conversation, the Cerca team acknowledged the seriousness of these issues, expressed gratitude for the responsible disclosure, and assured me they would promptly address the vulnerabilities and inform affected users.
Since then, I have reached out multiple times (on March 5 and March 13) seeking updates on remediation and user notification plans. Unfortunately, as of today’s publication date (April 21, 2025), I have been met with radio silence. To my knowledge, Cerca has not publicly acknowledged this incident or informed users about this vulnerability, despite their earlier assurances to me. They also never followed up with me following our call and ignored all my follow up emails.
However, I was able to independently confirm that the vulnerabilities detailed in this blog post have since been patched,  enabling me to responsibly publish these findings.
Too few people know how to make secure apps – and the rush to market puts consumers at risk. Some of my friends were saying that they’d gotten texts from this new dating app called Cerca. Obviously, dating apps require a lot of personal information, so I wanted to make sure that my friends’ data was safe before they started using this app.

I downloaded the app and booted up Charles Proxy (using the iPhone app) to intercept the network requests and see what this app was doing under the hood.
First things first, let’s log in. They only use OTP-based sign in (just text a code to your phone number), so I went to check the response from triggering the one-time password. BOOM – the OTP is directly in the response, meaning anyone’s account can be accessed with just their phone number.

However, I now needed to figure out a way to determine who has an account—I don’t just want to guess phone numbers. So I went to the api.cercadating.com endpoint and used a directory fuzzer to enumerate paths, hoping to find relevant endpoints. I couldn’t access any part of the site without the relevant app header:

So I passed that header through using Gobuster and to my (semi) surprise all endpoints were exposed, thanks to finding the /docs endpoint which served openapi.json!

I powered up Burp Suite and used the match-and-replace tools to always pass that app-version header, along with the bearer token I extracted from Charles proxy. Here is where it gets even more interesting.

Some unprotected endpoints seemed to affect only business logic—such as this one I could use to force two people to match with each other:

But others, like the get user profile endpoint (user/{user_id}), seemed more interesting. This endpoint takes a valid user ID and returns all sorts of personal information (including the phone numbers necessary for total account takeover, thanks to the OTP vulnerability). I wrote a quick Python script to figure out valid user IDs, and then BANG – I’m in. I could enumerate over all users; the response format looked something like this:
{

  "status": "success",

  "message": "string",

  "results": 0,

  "data": {

    "first_name": "string",

    "last_name": "string",

    "gender": "MALE",

    "interested_genders": [

      "MALE"

    ],

    "city": "string",

    "latitude": 0,

    "longitude": 0,

    "university_email": "[email protected]",

    "university_email_verified": false,

    "industry": "string",

    "profession": "string",

    "date_of_birth": "2025-02-21",

    "height": 0,

    "university_id": 0,

    "university_name": "string",

    "profile_completed": false,

    "national_id_verified": false,

    "mobile_verified": false,

    "email_verified": false,

    "premium": false,

    "premium_expiry": "2025-02-21T21:31:06.213Z",

    "active": true,

    "paused": false,

    "onboarded": false,

    "profile_type": "PROFESHIONAL",

    "mobile_number": "string",

    "email": "[email protected]",

    "user_type": [

      "user"

    ],

    "user_id": 0,

    "remaining_searches": 0,

    "profile_images": [],

    "university": {

      "id": 0,

      "name": "string"

    },

    "score": [],

    "match_preferences": [],

    "user_prompts": [],

    "mutual_contact_previews": [],

    "mutual_contact_preview_data": [],

    "mutual_contact_count": 0,

    "created_at": "2025-02-21T21:31:06.213Z",

    "updated_at": "2025-02-21T21:31:06.213Z",

    "zodiac_info": {},

    "distance_km": 0,

    "final_score": 0,

    "age": 0

  },

  "meta": {}

}

Now not only could I figure out all valid phone numbers linked to an account (which can then be taken over using the OTP misconfiguration), but all of this PII is out there without OTP sign in needed! But it gets worse – the national_id_verified field seems especially concerning. Sure enough, they store your passport or ID information in the system too, like this:

{

  "status": "success",

  "message": "string",

  "results": 0,

  "data": {

    "verification_type": "PASSPORT",

    "document_number": "string",

    "front_side_url": "string",

    "back_side_url": "string",

    "selfie_url": "string",

    "status": "pending",

    "id": 0,

    "user_id": 0

  },

  "meta": {}

}

This is only available to the signed-in user, but since I could sign in as any user, I could see anyone’s ID information if they had submitted it (again, I did not do this). Not only could I see anyone’s personal messages with potential dates, I may be able to see their passport information! I ran a quick script to see how many users I could get information about, how many were registered as Yale students (I assume more were Yale students and maybe just didn’t fill in their university), and how many users had input their ID information. The script basically just counted how many valid users it saw; if after 1,000 consecutive IDs it found none, then it stopped. So there could be more out there (Cerca themselves claimed 10k users in the first week), but I was able to find 6,117 users, 207 who had put their ID information in, and 19 who claimed to be Yale students.
 
This is an insane leak!! I have access to sexual preferences, intimate messages, and all sorts of PII from (according to Cerca themselves) tens of thousands of unsuspecting users. Cerca, in their privacy policy, says that “We use encryption and other industry-standard measures to protect your data,” but that is clearly misleading. This poses significant risks to user safety and privacy. Considering that I’m just a college student looking at this casually, it’s entirely possible other critical vulnerabilities may exist (though complete account takeover sets a pretty high bar).
The fallout from this vulnerability is a complete invasion of privacy with potentially very harmful real-world consequences. People need to learn how to make secure apps, and not claim their apps are safe when they aren’t. Especially for a dating app! You can’t expect all users to do the checking that I did in this article. Who knows how many people already had access to all this data before I found it? Someone out there could’ve already downloaded a full database of 6,000+ users’ personal info and intimate chats, ready to exploit it. If someone with malicious intent got their hands on this info it could lead to identity theft, stalking, blackmail – you name it. These types of vulnerabilities are really scary, they can ruin lives overnight. People need to prioritize securing user data, not just shipping an app they think can go viral. And I did not set out to find this vulnerability to write this blog post, but since Cerca has not responded to any of my mails since our call nor alerted any of their users, I thought that this was a fair post to publish. Not looking to pwn anyone, just want a safer internet!

**原文链接**: https://alexschapiro.com/blog/security/vulnerability/2025/04/21/startups-need-to-take-security-seriously

**Hacker News 讨论：**

文章讨论了一个名为Cerca的大学学生开发的约会应用的多个安全问题。评论者指出，该应用存在多个安全漏洞，包括OTP泄露、用户信息枚举问题、API端点暴露等。一些评论者对学生的初级努力表示理解，但同时也强调了安全在软件开发中的重要性。文章还提到了其他类似的安全问题，以及对于个人和企业因数据泄露而承担的法律责任和财务风险的担忧。

