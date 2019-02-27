---
title: "read-next"
description: "The custom read next card under story bodies."
level: "organism"
---

The read next card mimics the top of a story body in card form. Mostly, it's a combination of different molecules in the package, with minimal CSS overloads.

#### EXAMPLE
<div class="example">
  {{< read-next >}}
</div>

#### HTML
{{< highlight html >}}{{< read-next >}}{{< /highlight >}}

#### CSS
```css
.read-next .package {
	max-width: 710px;
	margin: 0 auto;
}

.read-next .header {
	align-items: flex-start;
	text-align: left;
	padding: 0;
}

.read-next .header > :first-child {
	margin-top: 0;
}

.read-next .social-media {
	justify-content: flex-start;
}

.read-next .social-media > a:first-child {
	padding-left: 0;
}

.read-next .more-link {
	color: #707070;
}
```
