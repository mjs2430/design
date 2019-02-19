---
title: "overview"
description: "Atom overloads and the subscription template"
level: "subscription"
weight: 1
---

Being a marketing page, the subscription flow alters the default behavior of several atoms and molecules. Those changes are placed at the top of the [subscriptions.css](/css/subscriptions.css) file.

The file also includes a template layer that only applies to these pages. To see how these styles work with a full page, please visit the subscription [sample page](/saratoga/sample/subscription/).

#### CSS
```css
.subscriptions {
  max-width: 1140px;
  margin: 0 auto;
}

.offer {
  margin-bottom: 30px;
}

@media (min-width: 890px) {
  .subscriptions {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 30px;
    padding: 0 15px;
  }

  .offer {
    order: 2;
  }

  .forms {
    order: 1;
  }
}
```
