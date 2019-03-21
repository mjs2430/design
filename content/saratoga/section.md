---
title: "section"
description: "Stackable building block of pages"
menu: "atom"
---

The section is a simple and stackable building block to get our standard 1140px wide zone. It also includes 30px of vertical margin to allow easy stacking that follows the design.

If a section needs to go all the way across the screen, the `.full-bleed` class is available to do so. Children are not automatically restricted to keep section flexible, but you can easily do so for each feature.

#### HTML
```html
<body>
  <section> ... </section>
  <section> ... </section>
  <section> ... </section>
  <section> ... </section>
</body>
```

#### CSS
```css
section {
  max-width: 1140px;
  margin: 30px auto;
}

section.full-bleed {
  max-width: 100%;
  padding: 0;
}

section .more-link {
  padding: 0 15px;
}

@media (min-width: 600px) {
  section {
    padding: 0 15px;
  }

  section .more-link {
    padding: 0;
  }
}
```
