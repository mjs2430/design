---
title: "immersive"
description: "Immersive card to match the layout option."
menu: cards
---

The immersive card can be used to increase the impact of a story. It should go the full width of the screen and use a majority of the height.

#### Example
<div class="example">
  {{< partial src="saratoga/immersive.html" >}}
</div>

#### HTML
{{< highlight html >}}
{{< partial src="saratoga/immersive.html" >}}
{{< /highlight >}}

#### CSS
```css
.immersive {
  margin-top: 0;
}

.immersive .media {
	display: flex;
  background-position: center;
  background-size: cover;
  height: 85vh;
}

.immersive .content {
  background: rgba(0,0,0,.5);
	flex: 1;
	display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
	padding-bottom: 30px;
}

.immersive .content > * {
  max-width: 920px;
  margin: 15px auto;
	padding: 0 15px;
}

.immersive button {
	border: none;
	height: 60px;
	width: 60px;
  padding: 0;
}

.immersive .title {
	font: 600 40px/1.2em "McClatchy Serif", serif;
	text-transform: none;
}

.immersive-summary {
  font-size: 20px;
}

@media (min-width: 760px) {
	.immersive .title {
		font-size: 64px;
	}
}
```
