---
title: "grid"
description: "A very basic starter grid"
level: "organism"
---

This is the smallest method of creating a grid following the design rules, which state that grid elements should be no smaller than 300px and have 30px of space between each item. It is very likely that at the template level more sophisticated grids will be required to fit everything onto the page dynamically.

*Note: We have not decided yet if the CSS Grid has enough browser support for full use. This page may change in the future.*

#### Example
<div class="example grid">
  {{< partial src="saratoga/card.html" >}}
  {{< partial src="saratoga/card.html" >}}
  {{< partial src="saratoga/card.html" >}}
</div>

#### HTML
```html
<section class="grid">
  <article class="card"> 
    ...  
  </article>
  <article class="card"> 
    ...  
  </article>
  <article class="card"> 
    ...  
  </article>
</section>
```

#### CSS
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
}
```

#### RULES

Property | Value
--- | ---
Column width | 300px minimum and stretches to fill between sizes.
Spacing between columns | 30px
