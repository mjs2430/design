---
title: "button"
description: "Button styles to ensure proper row alignment."
level: "atom"
---

Buttons are designed to be placed in a center-aligned row using browser defaults and to have different levels of impact. There are three different types of button,  but they all use the same base code.

#### EXAMPLE
<div class="example">
  <button class="impact">Impact button</button>
  <button>Regular button</button>
  <button class="ghost">Ghost button</button>
</div>

#### CSS
```css
button, .button {
  font: 600 14px "McClatchy Sans";
  padding: .6em 1em .3em;
  border: 1px solid #4a4a4a;
  border-radius: 2px;
  text-transform: uppercase;
  cursor: pointer;
}

.ghost {
  border: none;
}
```

#### RULES

Property | Value
--- | ---
Typeface | McClatchy Sans
Weight | 600
Size | 14px
Border | 1 pixel solid #989898 with a 2-pixel radius
Case | Uppercase
