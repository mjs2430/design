---
title: "big-news"
description: "Goes on the top of the homepage during large news events."
level: "organism"
---

The big news organism is a series of independent areas designed to give newsrooms control of the volume depending on what they have. Each zone is managed separately and nothing is required.

#### EXAMPLE

<div class="example" style="padding: 15px 0;">{{< big-news >}}</div>

#### HTML

{{< highlight html >}}{{< big-news >}}{{< /highlight >}}

#### CSS

```css
.big-news a {
	color: inherit;
}

.big-news > * {
	max-width: 1140px;
	margin: 0 auto;
}

.big-news .latest {
	padding: 15px 15px 0;
}

.big-news .grid {
	max-width: 1170px;
	grid-gap: 0;
	grid-template-columns: repeat(3, 1fr);
	display: block;
}

.big-news h1 {
	font-size: 40px;
	text-align: center;
}

.big-news > figure {
	max-width: 100%;
}

.big-news img {
	max-width: 1600px;
	margin: 0 auto;
}

.big-news figcaption {
	max-width: 1140px;
	margin: 0 auto;
	padding: 10px 15px 15px;
}

.big-news .featured {
	display: block;
}

@media (min-width: 680px) {
	.big-news .grid {
		display: grid;
	}

	.big-news h1 {
		font-size: 52px;
	}

	.big-news .featured .card {
		padding: 15px;
	}

	.big-news .featured .package {
		padding: 15px 0 0;
	}
}
```
