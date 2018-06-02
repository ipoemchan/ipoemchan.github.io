---
layout: default
title: 分类
scripts: [search.js]
permalink: /category
---
<div class="archive-header">
    <h2>分类</h2>
    <span class="icon toggle-search">{% include search.svg %} Search</span>
</div>
<div class="search">
    <div class="wrapper">
        <span class="icon toggle-search">{% include close.svg %}</span>
        <input type="text" class="search-input" id="search-input" placeholder="Search...">
        <ul id="results-container"></ul>
    </div>
</div>

{% for category in site.categories %}
  <h3>
    {{ category | first }}
    <span class="text-super">{{ category | last | size }}</span> 
  </h3> 
  <ul class="archive-lists">
    {% for post in category.last %} 
    <li><span class="date post-meta">{{ post.date | date: "%Y-%m-%d" }}</span> <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul> 
  <br/>
{% endfor %}
