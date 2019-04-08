---
title: story
description: A sample story page.
menu: decks
layout: story
aliases:
  - /saratoga/sample/story/
---

{{< header >}}

<figure>
  <img src="https://www.kansascity.com/latest-news/b59z53/picture216630505/alternates/LANDSCAPE_1140/Colyer%20and%20Kobach%20primary.jpg">
  <figcaption>Secretary of State Kris Kobach (right) has pulled ahead of Gov. Jeff Colyer as counties count provisional votes. <span class="byline"><span class="credit">FILE PHOTO</span></span></figcaption>
</figure>

<!--
{{< series-nav >}}
-->

<span class="dateline">Jefferson City</span>

The primary challenge with the story body is the design rule that media should bleed all the way to the edge of the screen on mobile and tablet devices, but be restricted to a maximum width as the screen gets larger. Additionally, different media or embeddable content will have different widths. 

A container-based approach to these rules requires multiple breakpoints and creates a couple of pressure points as the number of organisms increases. Code grows quickly with each addition, as all breakpoints for each change must be considered or written. Re-use suffers as elements get more and more isolated with deeply nested CSS rules.

<!--
<div class="ad-widget">
  <div class="iframe" class="iframe" style="width: 300px; height: 250px; background-color: #ddd;"></div>
</div>
-->

To combat these issues, we looked at the story body itself instead of each possible element to determine the design rules. We came up with a small list of general ideas.

+ Text should be centered in the middle and no wider than 720px.
+ Everything except media should have 15px of space on the left and right.
+ Media should be allowed to go to 1140px wide to elevate value.
+ Media and story modules should have 30px of vertical space.
+ Advertising should have 50px of vertical space.
+ Subheads should be 600 weight and Sans Serif.

{{< inline-cta >}}

The last challenge was to tackle the idea that as dynamic content becomes more important to our designs, the structure would need to be able to adopt it without increasing the code base more than necessary. We needed a basic default setup that could be easily overloaded. We settled on a direct child approach, which could provide what we needed in the fewest lines of code.

{{< transparency >}}

<!--
<figure>
  <img src="https://www.kansascity.com/latest-news/b5ozny/picture205673364/alternates/LANDSCAPE_1140/Baby%20Jack%20al%20030918%200240f">
  <figcaption>Dr. Pirooz Eghtesady, cardiothoracic surgeon-in-chief at St. Louis Children’s Hospital, had performed more than 200 heart transplants and 20 lung transplants by the time Jack Palmer came under his care. <span class="byline">BY <a href="#">ALLISON LONG</a> <span class="credit">THE KANSAS CITY STAR</span></span></figcaption>
</figure>
-->

<!--
<div class="ad-widget">
  <div class="iframe" class="iframe" style="width: 300px; height: 250px; background-color: #ddd;"></div>
</div>
-->

<!--
<p>Donec varius laoreet venenatis. Nullam eu malesuada justo. Sed condimentum, leo ut imperdiet finibus, arcu massa interdum nisi, sed ornare ipsum lacus id lorem. Phasellus sed egestas odio. Duis id feugiat sapien. Pellentesque tempus, urna eget convallis bibendum, quam risus convallis purus, non ornare lectus mi a ipsum. Nam euismod felis ex, vitae molestie nibh volutpat a. Suspendisse dapibus tellus vitae augue viverra ultrices.</p>

<p>Donec efficitur hendrerit urna in iaculis. Pellentesque sodales ante ut neque iaculis hendrerit. Mauris at ullamcorper velit. Mauris malesuada dignissim fringilla. Etiam maximus egestas accumsan. Aliquam pharetra urna quis tincidunt finibus. Maecenas vel iaculis justo. Aenean scelerisque posuere ligula. Morbi sagittis tempus metus, ac sagittis velit vulputate vel. Pellentesque iaculis porta sapien. Curabitur imperdiet nibh eget vestibulum consequat. Suspendisse placerat pretium libero, id faucibus nunc. Nullam vel augue lectus. Sed et pulvinar ipsum.</p>

<p>Mauris tempor neque justo, et commodo dolor tristique non. Suspendisse tristique tincidunt turpis, vitae tincidunt nibh sollicitudin ut. Ut vitae vulputate tortor. Aliquam elit leo, luctus eget elementum in, malesuada at purus. Suspendisse sed placerat ligula, a lacinia dui. Donec ullamcorper venenatis mauris, ut lacinia ex auctor non. Cras commodo ac orci et tempus. Donec auctor dui in leo pharetra scelerisque. Fusce blandit tellus orci, vel pharetra nunc consectetur eget. In a tellus pulvinar, placerat odio non, dapibus velit. Pellentesque posuere maximus quam, non semper nisi tempor a. In iaculis, nibh quis egestas bibendum, metus leo luctus nibh, ac eleifend ipsum velit nec erat. Phasellus lacinia fringilla pulvinar.</p>
-->

<!--
<div class="ad-widget">
  <div class="iframe" class="iframe" style="width: 300px; height: 250px; background-color: #ddd;"></div>
</div>
-->

<p>Etiam porttitor at tellus vel scelerisque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sollicitudin imperdiet justo vitae egestas. Vestibulum suscipit augue a libero euismod faucibus. Mauris consequat nisl vel suscipit tristique. In tincidunt risus laoreet quam porttitor, vel finibus libero convallis. Nunc suscipit feugiat erat, eget imperdiet ante facilisis quis. Sed leo augue, euismod ac efficitur quis, condimentum at magna. Ut mauris urna, gravida id rhoncus vel, tempor quis dolor. Nullam euismod odio ligula, aliquam ornare dui commodo cursus. Curabitur et vestibulum sapien. Fusce non leo neque.</p>

{{< related-stories >}}

<div class="story-module">
  {{< author-card >}}
</div>

