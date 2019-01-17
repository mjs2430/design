---
title: lists
description: Default styles for lists in story bodies.
level: atom
---

List items should be indented an additional 15px left from the normal text, and have 10 px of space between them. Unordered lists should use the circle icon from fontawesome.com in order to increase the bullet size.

#### EXAMPLE
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra venenatis leo ut tempus. Quisque auctor posuere placerat. Integer pulvinar convallis massa ac ultrices. Fusce sit amet aliquet dolor. Aenean fermentum euismod ultrices. In venenatis tempus elit. Phasellus sit amet eros a nibh porta aliquet nec ut ipsum.

+ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
+ Sed vehicula libero ut posuere tincidunt.
+ Quisque aliquet est non leo ullamcorper, eu sagittis est cursus. Morbi tempus mauris at est congue, quis tincidunt augue venenatis.

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
2. Sed vehicula libero ut posuere tincidunt.
3. Quisque aliquet est non leo ullamcorper, eu sagittis est cursus. Morbi tempus mauris at est congue, quis tincidunt augue venenatis.

Suspendisse potenti. Cras sagittis neque at aliquam facilisis. Duis nibh orci, aliquam a elit sed, luctus vulputate dui. Ut ex mauris, pulvinar ut tellus efficitur, ornare luctus mi. Sed nec ligula eros. Vestibulum at rutrum neque, et malesuada ex.

#### CSS
```css
li {
  font: 17px/1.5em "Lyon", serif;
  margin: 10px 0 10px calc(1em + 15px);
}

ul li {
  list-style-image: url("icons/circle.svg");
}
```

#### RULES

Property | Value
--- | ---
Typeface | Lyon
Weight | 400
Size | 17px
Line height | 1.5em
Case | From text
Letter Spacing | Default
