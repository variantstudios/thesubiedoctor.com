---
title: Style Guide
permalink: "/styleguide/"
description: This is just a sample general page.
layout: styleguide
---

{% for block in site.sg %}

<div class="sg-block"><h6 class="sg-label">{{ block.title }}</h6>{{ block.content }}</div>

{% endfor %}

&nbsp;

&nbsp;

&lt;!-- Global site tag (gtag.js) - Google Analytics --&gt;<br>&lt;script async src="https://www.googletagmanager.com/gtag/js?id=UA-111997639-1"&gt;&lt;/script&gt;<br>&lt;script&gt;<br>&nbsp; window.dataLayer = window.dataLayer || [];<br>&nbsp; function gtag(){dataLayer.push(arguments);}<br>&nbsp; gtag('js', new Date());

&nbsp; gtag('config', 'UA-111997639-1');<br>&lt;/script&gt;