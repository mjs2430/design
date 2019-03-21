---
title: utilities
description: Utility typography classes.
menu: molecule
---

In most occasions, we tried to keep all styles localized to their atom, molecule or organism. There are, however, slight variations that do not require an additional molecule or organism. For those occasions, these utlity classes are available.

*Note: This code should stay at the bottom of the molecules file so that packages can be cleanly overloaded.*

#### CSS
```css
summary, .summary {
  font: 400 14px/1.5em "McClatchy Sans", sans-serif;
}

.small {
  font: 400 11px/1.5em "McClatchy Sans", sans-serif;
}

.caps {
  text-transform: uppercase;
  --headerTransform: uppercase;
}

.sans {
  font-family: "McClatchy Sans", sans-serif;
  --headerFamily: "McClatchy Sans", sans-serif;
}

.serif {
  font-family: "McClatchy Serif", serif;
  --headerFamily: "McClatchy Serif", serif;
}

.soft {
  font-weight: 400;
  --headerWeight: 400;
}

.bold {
  font-weight: 600;
  --headerWeight: 600;
}

.gray {
  color: #707070;
}

.error {
  color: #D63031;
}
```
