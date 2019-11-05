---
layout: page
title: "A list of speakers"
permalink: "/speakers/"
---

<ul>
  {% for speaker in site.speakers %}
    <li> 
      {{ speaker.content }}
    </li>
  {% endfor %}
</ul>