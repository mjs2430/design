---
title: card
description: Enhanced paper molecule with flex display.
menu: molecule

---
The card molecule extends the paper base molecule and adds Flexbox. By doing so the size of the card is stretched to match adjacent cards in each row. Card molecules should be the direct children of any Flexbox or Grid container.

#### Example
<div class="example grid">
  {{< partial src="saratoga/card.html" >}}
  {{< partial src="saratoga/card.html" >}}
</div>

#### HTML
{{< highlight html >}}
{{< partial src="saratoga/card.html" >}}
{{< /highlight >}}

---

## Horizontal version

The card can also be made horizontal by adding a class with the same name.

#### Example
{{< partial src="saratoga/card.html" class="horizontal" >}}

#### HTML
{{< highlight html >}}
{{< partial src="saratoga/card.html" class="horizontal" >}}
{{< /highlight >}}
