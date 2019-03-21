---
title: "author-card"
description: "Author information at the bottom of articles"
menu: "cards"
---

The author card should appear directly underneath the related stories organism, if it is rendered, or directly under the story body if it is not.

As the organism compresses to fit smaller screens, the icons should wrap under the author's name and still right of the thumbnail. The biography uses the `summary` molecule and shoudn't deviate from the defaults. Also, the author's name should be made a link and shown in the standard `byline` style.

#### EXAMPLE
<div class="story-module">
  {{< author-card >}}
</div>

#### TWO-AUTHOR EXAMPLE
<div class="grid story-module">
  {{< author-card >}}
  {{< author-card >}}
</div>


#### HTML
{{< highlight html >}}{{< author-card >}}{{< /highlight >}}

#### CSS
```css
.author-card .row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
}

.author-thumb {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.author-card .byline {
  flex: 1 1 15em;
  padding: 10px 15px;
  margin: 0;
}

.author-card .social-media a {
  padding: 0 15px;
}

.author-subscription {
  padding: 10px 0;
  color: #707070;
}

.author-card .callout {
  font: 14px/20px "McClatchy Sans",sans-serif;
  color: #0066b3;
}
```
