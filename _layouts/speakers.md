---
layout: page
title: "A list of speakers"
permalink: "/speakers/"
---

<div class="main-container">

  <h1> Speakers <br/> <small>peruanos.dev</small> </h1>


  <div class="speakers-grid">
    
    {% for speaker in site.speakers %}
      <div class="container">
        <div class="card"> 
          <div class="front">
            <span>
            <img src="{{ speaker.picture }}" width="50px">
            <h2>{{ speaker.name }}</h2>
            </span>
            <small><b>Topics</b><br/>{{ speaker.topics }}</small>
          </div>
          <div class="back">
            <p>{{ speaker.content }} </p>
          </div>
        </div>
      </div>
    {% endfor %}

    

  </div>


</div>