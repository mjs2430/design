---
title: "lists"
description: "Default styles for lists in story bodies."
level: "atom"
---

#### EXAMPLE
<div class="example">
  <ul>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    <li>Sed vehicula libero ut posuere tincidunt.</li>
    <li>Quisque aliquet est non leo ullamcorper, eu sagittis est cursus. Morbi tempus mauris at est congue, quis tincidunt augue venenatis.</li>
  </ul>
</div>

#### CSS
```css
ul, ol {
  padding-left: 0;
  font-family: "Lyon", serif;
}

li {
  font-size: 17px;
  line-height: 1.5em;
  list-style: none;
  position: relative;
  margin-left: 1em;
}

li:before {
  content: "";
  height: 8px;
  width: 8px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: .4em;
  left: -1em;
}
```

#### RULES

Property | Value
--- | ---
Typeface | McClatchy Serif
Weight | 400
Size | 17px
Line height | 1.5em
Case | From text
Letter Spacing | Default
