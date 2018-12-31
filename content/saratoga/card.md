---
title: "card"
description: "Enhanced paper molecule with flex display."
level: "molecule"
---

The card molecule extends the paper base molecule and adds Flexbox. By doing so the size of the card is stretched to match adjacent cards in each row. Card molecules should be the direct children of any Flexbox or Grid container.

#### Example
<div class="example grid">
 {{< card >}}
 {{< card >}}
</div>

#### HTML
{{< highlight html >}}{{< card >}}{{< /highlight >}}

#### CSS
```css
/**
 * Paper
 */

.paper, .card {
  position: relative;
  background-color: white;
  box-shadow: 
    0 1px 2px 0 rgba(0, 0, 0, .2), 
    0 1px 5px 0 rgba(0, 0, 0, .13);
}

.paper .card {
  box-shadow: none;
}

/**
 * Story cards
 */

.card {
  display: flex;
  flex-direction: column;
}
```
