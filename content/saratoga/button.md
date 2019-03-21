---
title: button
description: Button styles to ensure proper row alignment
menu: atom
---

Buttons are designed to be placed in a center-aligned row using browser defaults and to have different levels of impact. There are three different types of button, but they all use the same base code.

#### EXAMPLE
<div>
  <button class="impact">Impact button</button>
  <button class="ghost">Ghost button</button>
  <button>Text button</button>
</div>

#### HTML
```html
<div>
  <button class="impact">Impact button</button>
  <button class="ghost">Ghost button</button>
  <button>Text button</button>
</div>
```

#### CSS
```css
button, .button {
  display: inline-block;
  font: 600 14px "McClatchy Sans";
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  padding: .6em 1em .3em;
  margin: 4px 0;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 2px;
  align-self: flex-start;
  background-color: white;
}

.button:hover {
  text-decoration: none;
}

.button.stretch {
  display: block;
  align-self: stretch;
  padding: 1em 1em .7em;
}

.ghost {
  border-color: #4a4a4a;
}
```

#### RULES

Property | Value
--- | ---
Typeface | McClatchy Sans
Weight | 600
Size | 14px
Border | 1 pixel solid #4a4a4a with a 2-pixel radius
Case | Uppercase
