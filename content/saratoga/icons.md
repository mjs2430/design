---
title: "icons"
description: "Optimized fontawesome icon set"
menu: "atom"
class: dep
---

This is a reduced and optimized set of Fontawesome free icons we use on the site.

{{< note type="dep" >}}
#### Deprecation notice

The CSS classes will be removed in 1.12.0 in favor of using SVG code directly in the markup. This is a result of these relative icons not working in AMP pages and the number of required template changes is minimal. See the [social-media](/saratoga/social-media) page for an example of the HTML.
{{< /note >}}

#### EXAMPLE
{{< social-media >}}

#### CSS
```css
.i-play-circle {
	background: transparent url('../icons/play-circle.svg') no-repeat;
}

.i-twitter {
  background: transparent url('../icons/twitter.svg') no-repeat;
}

.i-facebook-f {
  background: transparent url('../icons/facebook-f.svg') no-repeat center;
}

.i-envelope {
  background: transparent url('../icons/envelope.svg') no-repeat;
}

.i-phone {
  background: transparent url('../icons/phone.svg') no-repeat;
}

.invert {
  filter: invert(1);
}
```
