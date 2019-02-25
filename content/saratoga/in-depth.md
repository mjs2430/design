---
title: "in-depth"
description: "In depth module for section pages"
level: "organism"
---

The In Depth module is a version of the horizontal card that changes the flex-grow weight from the right side to the left.

#### Example
<div class="example">{{< in-depth >}}</div>

#### HTML
{{< highlight html >}}{{< in-depth >}}{{< /highlight >}}

#### CSS
```css
.card.in-depth {
	flex-wrap: wrap;
}

.card.in-depth figure {
  flex-grow: 4;
	min-height: 400px;
}

.card.in-depth .package {
  flex-grow: 1;
}
```
