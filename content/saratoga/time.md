---
title: time
description: Used for publish and modified times.
level: atom

---
Timestamps are always displayed on their own line, so `<time>` is converted to a block level element by default.

#### EXAMPLE
<div>
  <time>DECEMBER 27, 2018 01:27 PM</time>
</div>

#### CSS
```css
time {
  display: block;
  font: 300 11px/1.5em "McClatchy Sans", sans-serif;
  text-transform: uppercase;
  color: #707070;
}
```

#### RULES

Property | Value
--- | ---
Typeface | McClatchy Sans
Weight | 300
Size | 11px
Line height | 1.5em
Case | Uppercase
Letter spacing | Default
Color | #707070
