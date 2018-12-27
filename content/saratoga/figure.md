---
title: "<figure>"
description: "Semantic wrapper for media in stories and cards."
level: "atom"
---

The `<figure>` atom is used as a semantic method of targeting media in different scenarios. The default margins are removed and any images are contained to the container. In previous versions we used `object-fit: cover` to ensure a 16:9 ratio but that has been removed in favor of consistent images coming from the server.

#### EXAMPLE
<div class="example">
  <figure>
    <img src="https://www.kansascity.com/latest-news/4psbzf/picture220199830/alternates/LANDSCAPE_768/LEAD%20PHOTO%20RoyCollinsshooting100918tll">
    <figcaption>On May 10, 1987, 13-year-old Roy Collins was shot while jumping fences in a Kansas City neighborhood. We recreate the shooting according to police and witness reports. <span class="author">By <a href="#">Neil Nakahodo</a> | <a href="#">Joe Robertson</a></span></figcaption>
  </figure>
</div>

#### CSS
```css
figure {
  margin: 0;
}

figure img {
  display: block;
  max-width: 100%;
}
```
