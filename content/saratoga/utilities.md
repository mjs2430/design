---
title: utilities
description: Utility typography classes.
menu:
  molecule: {}

---
In most occasions, we tried to keep all styles localized to their atom, molecule or card. There are, however, slight variations that do not require an additional molecule or card. For those occasions, these utlity classes are available.

_Note: This code should stay at the bottom of the molecules file so that packages can be cleanly overloaded._

#### CSS

```css
summary, .summary {
  font: 400 14px/1.5em var(--sans);
}

.small {
  font: 400 11px/1.5em var(--sans);
}

.caps {
  text-transform: uppercase;
  --ht: uppercase;
}

.no-caps,
.button.no-caps {
  text-transform: none;
  --ht: none;
}

.sans {
  font-family: var(--sans);
  --hf: var(--sans);
}

.serif {
  font-family: var(--serif);
  --hf: var(--serif);
}

.soft {
  font-weight: 400;
  --hw: 400;
}

.bold {
  font-weight: 600;
  --hw: 600;
}

.gray {
  color: var(--tc, #707070);
  --bc: var(--tc, #707070);
}

.cutout {
  background-color: #f4f4f4;
}

.blue {
  color: var(--tc, #31409F);
}

.error {
  color: var(--tc, #D63031);
}

.underline {
  text-decoration: underline;
}

.no-shadow {
  box-shadow: none;
}

.relative {
  position: relative;
}

.hidden, [hidden] {
  display: none;
}
```
