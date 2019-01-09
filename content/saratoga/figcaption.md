---
title: figcaption
description: Default styles for all media captions.
level: atom

---
All captions have the same style. The figcaption is used as a semantic wrapper and to keep the cascade as configurable as possible.

#### example
<div class="example">
  {{< figure >}}
</div>

#### CSS
```css
figcaption, .caption {
  font: 14px/1.5em "McClatchy Sans", sans-serif;
  color: #989898;
  padding: 10px 0 0;
}
```

#### RULES 

Property | Value
--- | ---
Typeface | McClatchy Sans
Weight | 400
Size | 14px
Line height | 1.5em
Case | Sentence
Letter Spacing | Default
