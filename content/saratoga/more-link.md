---
title: more-link
description: Used below grid digests.
level: atom

---
The more-link atom signifies that clicking it will take the reader to another web page. It is only used at the bottom of digests and isn't a headline, so typography and spacing is built in.

#### Example
<div class="example grid">
  {{< digest >}}
</div>

#### CSS
```css
.more-link {
  display: flex;
  align-items: center;
  font: 600 14px/1.5em "McClatchy Sans";
  color: #707070;
  text-transform: uppercase;
  margin-top: 15px;
}

.more-link:after, .arrow:after {
  content: "\2192";
  font-size: 20px;
  margin-left: 4px;
}

.more-link:hover {
  text-decoration: none;
}
```

#### RULES

Property | Value
--- | ---
Typeface | McClatchy Sans
Weight | 600
Size | 14px
Line height | 1.5em
Color | #707070
Case | uppercase
Letter spacing | Default
