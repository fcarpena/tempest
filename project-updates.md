---
title: News
permalink: /project-updates/
---

<!-- This list is generated automatically from the files in _posts/ -->

{% for post in site.posts %}
<div class="news-item">
  {%- if post.image %}
  <a class="news-image" href="{{ post.url | relative_url }}"><img src="{{ post.image | prepend: '/assets/images/' | relative_url }}" alt="" loading="lazy"{% if post.image_position %} style="object-position: {{ post.image_position }}"{% endif %}></a>
  {%- endif %}
  <div class="news-text">
    <p><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time></p>
    <p class="news-title"><strong>{{ post.title }}</strong></p>
    <p><a class="button" href="{{ post.url | relative_url }}">Read More</a></p>
  </div>
</div>
{% unless forloop.last %}<hr>{% endunless %}
{% endfor %}
