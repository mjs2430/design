---
title: "byline"
description: "Standard byline and credit styles"
level: "atom"
---

The byline and credit rules should have this standard anywhere attribution applies. This includes articles and all media. The byline should display inline with a caption, when applicable, unless there is not enough room to display the byline in full. If that occurs the whole byline should wrap to a new line.

#### EXAMPLE
<div>
  <p class="byline">By <a href="#">John Doe</a> <span class="credit">SAMPLE NEWSPAPER</span></p>
</div>

#### HTML
```html
<p class="byline">By <a href="#">John Doe</a> <span class="credit">SAMPLE NEWSPAPER</span></p>
```

#### CSS
```css
.byline {
  display: inline-block;
  font: 400 11px/1.5em "McClatchy Sans";
  color: #707070;
  text-transform: uppercase;
}

.byline a {
  font-weight: 700;
  color: inherit;
  text-decoration: underline;
}

.credit {
  font: italic 400 11px/1.5em "McClatchy Sans";
}
```

#### BYLINE RULES

Property | Value
--- | ---
Typeface | McClatchy Sans
Weight | 400, 700 for linked items
Size | 11px
Color | #707070
Case | Uppercase
Letter Spacing | Default
Display | Inline block
Credit style | Italic
