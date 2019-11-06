---
layout: page
title: "A list of speakers"
permalink: "/speakers/"
---

<div class="speakers-grid">
  
  {% for speaker in site.speakers %}
    <div class="speaker-card card"> 
      <div class="front">
        <h2>{{ speaker.name }}</h2>
        <small>{{ speaker.topics }}</small>
      </div>
      <div class="back">
        <p>{{ speaker.content }} </p>
      </div>
    </div>
  {% endfor %}

  

</div>