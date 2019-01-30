---
title: "transparency"
description: "Provides story background information."
level: "organism"
---

The transparency organism is an extension of the `expander` molecule made to house background information for a story or coverage of a topic in general. 

#### EXAMPLE

{{< transparency >}}

#### HTML

{{< highlight html >}}{{< transparency >}}{{< /highlight >}}

#### CSS

```css
.transparency {
	max-width: 100%;
	padding: 15px;
	background-color: #f4f4f4;
}

.transparency > * {
	margin-left: auto;
	margin-right: auto;
	max-width: 720px;
}

.transparency .expander {
	justify-content: space-between;
}

.question {
	padding-top: 15px;
	--headerFamily: "McClatchy Serif", serif;
	--headerWeight: 400;
	--headerTransform: none;
}
```
