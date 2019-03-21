---
title: "swg-promo"
description: "Promo card for story and section pages"
menu: cards
---

The promo card is a revenue component that, like the In Depth card, extends the horizontal card molecule but adjusts the flex-grow weights.

#### EXAMPLE
<div class="example">
{{< partial src="saratoga/promo.html" >}}
</div>

#### HTML
{{< highlight html >}}
{{< partial src="saratoga/promo.html" >}}
{{< /highlight >}}

#### CSS
```css
.card.swg-promo {
	flex-wrap: wrap;
}

.card.swg-promo > :first-child {
	flex-grow: 4;
	min-height: 150px;
}

.card.swg-promo .title {
	font: 600 48px "McClatchy Sans", sans-serif;
}
```
