---
title: "series-nav"
description: "Series nav for article pages."
level: "organism"
---

The series nav is a visual tool to link stories together than may or may not be part of the same section or publication.

#### Example
{{< series-nav >}}

#### HTML
{{< highlight html >}}
{{< series-nav >}}
{{< /highlight >}}

#### CSS
```css
.series-nav .package {
  padding: 0;
}

.series-nav hr {
  border-color: #dfdfdf;
}

.series-nav .summary {
  color: #989898;
}

.series-nav .article {
  display: flex;
}

.series-nav .article figure {
  width: 80px;
}

.series-nav .article h4 {
  flex: 1;
  padding: 0 15px;
  margin: 0;
  max-width: 375px;
}
```
