---
title: "promo"
description: "Promo card for story and section pages"
level: "organism"
---

The promo card is a revenue component that, like the In Depth card, extends the horizontal card molecule but adjusts the flex-grow weights.

#### EXAMPLE
<div class="example">{{< promo >}}</div>

#### HTML
{{< highlight html >}}{{< promo >}}{{< /highlight >}}

#### CSS
```css
.card.horizontal .promo {
  flex-grow: 4;
	min-height: 150px;
}

.card.horizontal .promo + .package {
	flex-grow: 1;
}

.card.horizontal .promo .title {
	font: 600 48px "McClatchy Sans", sans-serif;
}
```
