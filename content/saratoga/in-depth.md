---
title: "in-depth"
description: "In depth module for section pages"
level: "organism"
---

The In Depth module is a version of the horizontal card that changes the flex-grow weight from the right side to the left.

#### Example
<div class="example">
{{< partial src="saratoga/in-depth.html" >}}
</div>

#### HTML
{{< highlight html >}}
{{< partial src="saratoga/in-depth.html" >}}
{{< /highlight >}}

#### CSS
```css
.card.in-depth {
	flex-wrap: wrap;
	background-color: #373737;
}

.card.in-depth figure {
  flex-grow: 4;
	min-height: 400px;
}

.card.in-depth .package {
	padding-top: 30px;
	padding-bottom: 30px;
	margin: 0 auto;
	max-width: 660px;
}
```

## No Image version

When there is missing lead art for the story, the text should fall in the middle of the box on desktop.

#### EXAMPLE
<div class="example">
{{< partial src="saratoga/in-depth.html" image="hide" >}}
</div>

#### HTML
{{< highlight html >}}
{{< partial src="saratoga/in-depth.html" image="hide" >}}
{{< /highlight >}}
