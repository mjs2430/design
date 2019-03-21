---
title: label
description: Labels for the tops of cards and headline stacks on section pages.
menu: atom

---
The label should be used at the top of cards and headline stacks when necessary. There are two options: the default has relative spacing and pushes content down, and the `.sticky` class will make it lay on top of the lead art for the stack.

The label atom is just used for spacing and can accept any element. Currently, we only use the h5 atom on the site but that could change.

#### EXAMPLE
<div class="example grid">
  {{< partial src="saratoga/digest.html" label="sticky" >}}
  {{< partial src="saratoga/digest.html" >}}
</div>

#### CSS
```css
.label {
  margin: 0;
  display: flex;
  justify-content: center;
  color: inherit;
}

.label > * {
  margin: 0;
  padding: 5px 10px 3px;
}

.label.sticky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
```
