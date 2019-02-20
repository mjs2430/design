---
title: card
description: Enhanced paper molecule with flex display.
level: molecule

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

## Horizontal version

The card can also be made horizontal by adding a class with the same name.

#### Example
{{< card class="horizontal" >}}

#### HTML
{{< highlight html >}}{{< card class="horizontal" >}}{{< /highlight >}}

#### CSS
```css
.card.horizontal {
  flex-direction: row;
  flex-wrap: wrap;
}

.card.horizontal figure {
  flex: 1 1 300px;
}

.card.horizontal .package {
  justify-content: center;
  flex: 4 1 300px;
}

.card.horizontal .package time {
  flex: none;
}
```