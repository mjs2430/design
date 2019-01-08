---
title: "series-nav"
description: "Series nav for article pages."
level: "organism"
---

The series nav is a visual tool to link stories together than may or may not be part of the same section or publication.

#### Example
{{< series-nav >}}

#### HTML
{{< highlight html >}}
{{< series-nav >}}
{{< /highlight >}}

#### CSS
```css
.series-nav hr {
  border-color: #dfdfdf;
}

.series-nav .summary {
  color: #989898;
}

.series-nav .article {
  display: flex;
  margin: 15px 0;
}

.series-nav section {
  display: none;
}

.series-nav .article figure {
  width: 80px;
}

.series-nav .article h4 {
  flex: 1;
  padding: 0 15px;
  margin: 0;
  max-width: 375px;
}

.series-nav.open section {
  display: block;
}

.series-nav.open .expander:before {
  transform: rotateX(180deg);
}
```

#### Javascript

This could be done a number of ways, but for a demo this was the most direct.

```javascript
function toggleSeriesNav() {
  let t = window.event.target;
  let p = t.parentNode;

  if(p && p.classList.contains("series-nav")) {
    p.classList.toggle("open");
  }
}
```
