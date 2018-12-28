---
title: "paper"
description: "Default paper molecule with a block display."
level: "molecule"
---

The paper and card molecules both do the same thing of lifting them a plane higher than the background. The paper molecule is the more simple of the two, by having block for the display property. This allows default sizing and spacing of the children to dictate the height of the molecule. 

In our digests, the design dictates that there be 15px of space between the label and the first headline, then 30px of space between each additional headline. This is easily done by stacking a label atom and several card-info molecules inside a paper molecule. The card-info molecule has 15px of padding on all sides, and therefore creates the proper space automatically.

#### Example
<div class="example grid">
  {{< digest >}}
  {{< digest label="sticky" >}}
</div>

#### CSS
```css
.paper, .card {
  position: relative;
  background-color: white;
  box-shadow: 
    0 1px 2px 0 rgba(0, 0, 0, .2), 
    0 1px 5px 0 rgba(0, 0, 0, .13);
}

.paper > .card {
  box-shadow: none;
}
```