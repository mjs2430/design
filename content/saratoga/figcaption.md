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

## Byline and Credit

The byline has it's own rules and can be used inside or outside the figcaption. Contents of the byline should display inline with the caption when there is enough room, but wrap to it's own line when there isn't. Example above.

#### CSS
```css
.byline {
  display: inline-block;
  font: 400 11px/1.5em "McClatchy Sans";
  color: #989898;
  text-transform: uppercase;
}

.byline a {
  font-weight: 700;
  text-decoration: underline;
  color: inherit;
}

.credit {
  font: italic 400 11px/1.5em "McClatchy Sans";
}
```
