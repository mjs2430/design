---
title: "<lab-panel>"
description: "Stackable panels used on the Education Lab landing pages."
example: https://www.fresnobee.com/news/local/education/article235079937.html
weight: 1
---

<script src="/labs/lab-panel.js"></script>

The lab panel custom element was created for The Fresno Bee [Education Lab landing page](https://www.fresnobee.com/news/local/education/article235079937.html). It leverages molecules already installed on the websites and enhances them using the Shadow DOM. The component changes the font face to McClatchy Sans, provides a full-bleed container that can be styled on the page, and an `<img>` tag included inside the element will both fill the container and be filtered to allow for text to be rendered over it.

##### Example

<div class="full-bleed">
<lab-panel style="background-color: #f4f4f4;">
  <h3 class="h2">The Team</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis arcu et enim egestas luctus a a dui. Vestibulum ac gravida turpis, et ultricies lectus. Praesent sed mattis felis. Quisque laoreet odio quis dui faucibus imperdiet. Ut quis convallis risus, vitae porttitor odio. Aenean consequat lacinia ante vitae luctus. Donec mattis semper risus. Pellentesque consectetur viverra eros sit amet luctus. Quisque vulputate feugiat elementum.</p>
</lab-panel>
</div>

<div class="story-module">
{{< highlight html >}}
<script async src="https://media.mcclatchy.com/labs/lab-panel.js"></script>
<lab-panel>
  <h3 class="h2">The Team</h3>
  <p>Lorem ipsum ...</p>
</lab-panel>
{{< /highlight >}}
<copy-highlight class="button promo">copy starter code</copy-highlight>
</div>

##### Example with an image
<div class="full-bleed">
<lab-panel class="fill">
  <img class="grad-line" src="https://www.fresnobee.com/news/local/education/bdet9o/picture21525414/alternates/FREE_1140/graduation">
  <h3 class="h2">The Team</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis arcu et enim egestas luctus a a dui. Vestibulum ac gravida turpis, et ultricies lectus. Praesent sed mattis felis. Quisque laoreet odio quis dui faucibus imperdiet. Ut quis convallis risus, vitae porttitor odio. Aenean consequat lacinia ante vitae luctus. Donec mattis semper risus. Pellentesque consectetur viverra eros sit amet luctus. Quisque vulputate feugiat elementum.</p>
</lab-panel>
</div>

<div class="story-module">
{{< highlight html >}}
<script async src="https://media.mcclatchy.com/labs/lab-panel.js"></script>
<lab-panel class="fill">
  <img src="https://www.fresnobee.com/news/local/education/bdet9o/picture21525414/alternates/FREE_1140/graduation">
  <h3 class="h2">The Team</h3>
  <p>Lorem ipsum ...</p>
</lab-panel>
{{< /highlight >}}
<copy-highlight class="button promo">copy stater code</copy-highlight>
</div>

The difference between the two is very subtle and manual, but that is a good thing. Adding the `.fill` class to the component itself creates the filtered cover effect. This approach lets us stack images in the panel if desired by simply omitting the class. 
