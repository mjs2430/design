---
title: "card-info"
description: "Provides spacing for test in cards and digests."
level: "molecule"
---

The card-info molecule is the backbone of the design system. Spacing for  most molecules and organisms is based on these default rules. This molecule only provides spacing rules.

#### Example
<div class="example">
  {{< card >}}
</div>

#### CSS
```css
.card-info {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-info > * {
  margin: 10px 0 0 0;
}

.card-info > :first-child {
  margin-top: 0;
}

.card-info > time {
  flex: 1;
  display: flex;
  align-items: flex-end;
}

.card-info a {
  color: inherit;
}
```

#### Rules

The basic rules are simple: 

+ 15px of padding on all sides 
+ 10px of space between all direct children. 

If the molecule is used inside a paper molecule, these are the only rules that will be applied. If the molecule is used inside of a card molecule or any other Flexbox or Grid container, the additional rules are applied: 

+ The molecule will stretch to fill its container
+ If the last child is a time atom that atom is stretched to align with the bottom of the container.

These differences are important. For example, rules for the digest state that there should be 30px of space between each article group, and 15px of space between the label and the headline. This is easily done by stacking card-info molecules.

###### Example
<div class="example grid">{{< digest >}}</div>

In a grid of cards, on the other hand, timestamps should line up. We can do this with the card-info molecule as well, needing no additional CSS.  This approach also provides the desired behavior on mobile. When there are no adjacent cards, the space collapses as desired.

###### Example
<div class="example grid">
  {{< card >}}
  {{< card long >}}
</div>