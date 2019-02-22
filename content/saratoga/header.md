---
title: "header"
description: "An expanded package for article headers."
level: "organism"
---

The `header` organism is based on the standard `package` molecule but increases the space between each direct child and centers the content on the device.

#### EXAMPLE
{{< header >}}


#### HTML
{{< highlight html >}}{{< header >}}{{< /highlight >}}

#### CSS 
```css
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;
}

.header > * {
  margin: 15px 0 0;
  align-self: center;
}

.header .byline {
  display: block;
  margin: 0 0 10px;
}

@media (min-width: 600px) {
	.header .bio {
		display: flex;
		justify-content: space-between;
		width: 100%;
		text-align: left;
	}

	.header .social-media a {
		padding-top: 0;
	}
}
```
