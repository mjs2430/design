---
title: "expander"
description: "A collapsible box with a caret."
level: "molecule"
---

The expander is a simple molecule to toggle the visibility of it's siblings. The element itself acts as the toggle by swapping the open class. This can be done a number of ways, but to keep things simple for the demo we used the `onclick` attribute directly.

The generic rules make for a very flexible setup, where we can force each child to display in all cases inline or with additional CSS in the future.

#### Example
{{< series-nav >}}

#### HTML
{{< highlight html >}}{{< series-nav >}}{{< /highlight >}}

#### CSS
```css
.expander {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.expander:after {
  content: url(../icons/caret-expander.svg);
  width: 14px;
  margin-left: 5px;
  transition: transform .5s ease;
  transform: translateY(-.1em) rotateX(180deg);
  transform-origin: 50% 50%;
}

.expander ~ * {
  display: none;
}

.expander.open:after {
  transform: translateY(-.1em) rotateX(0);
}

.expander.open ~ * {
  display: block;
}
```
