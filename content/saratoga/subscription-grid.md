---
title: "grid"
description: "Custom grid and columns for subscription pages"
level: "subscription"
---

The subscription pages have a custom grid, and an accompanying column concept, to allow for maximum control over the order of inputs at any screen width. These rules are based on the full media query being relevant. In the case that this content is going in a modal appended to the DOM of a larger page, we will need to adjust.

The `.grid` class hard-codes a one-column or two-column layout depending on the screen width. The `.column` class can be used as one of the grid children to force smaller inputs.

#### EXAMPLE
{{< form-elements >}}

#### HTML
{{< highlight html >}}{{< form-elements >}}{{< /highlight >}}

#### CSS
```css
.grid {
  grid-template-columns: 1fr;
}

.package .grid {
  grid-column-gap: 15px;
  grid-row-gap: 10px;
}

.columns {
  display: grid;
  grid-gap: 15px;
}

.columns.two {
  grid-template-columns: repeat(2, 1fr);
}

.columns.four {
  grid-template-columns: repeat(4, 1fr);
}

.span-2 {
  grid-column: span 2;
}

@media (min-width: 545px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }

  .columns {
    grid-column: span 2;
  }
}
```
