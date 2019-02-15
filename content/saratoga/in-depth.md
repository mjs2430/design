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
.card.in-depth figure {
  flex-grow: 4;
}

.card.in-depth .package {
  flex-grow: 1;
}

@media (min-width: 630px) {
  .in-depth {
    min-height: 400px;
  }

	.in-depth figure {
		min-height: 300px;
	}

  .in-depth figure img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 20%;
  }
}
```
