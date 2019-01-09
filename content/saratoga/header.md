---
title: "header"
description: "An expanded package for article headers."
level: "organism"
---

The `header` organism is based on the standard `package` molecule but increases the space between each direct child and centers the content on the device.

#### EXAMPLE
<article class="example">
  <header class="package">
    <h6 class="kicker"><a href="#">SECTION</a></h6>
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus lorem a</h1>
    <div>
      <p class="byline">By <a href="#">John Doe</a> <span class="credit">SAMPLE NEWSPAPER</span></p>
      <time>AUG 13, 2018, UPDATED 4 MONTHS AGO</time>
      {{< social-media >}}
    </div>
  </header>
</article>

#### HTML
```html
<header class="package">
  <h6 class="kicker"><a href="#">SECTION</a></h6>
  <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus lorem a</h1>
  <div>
    <p class="byline">By <a href="#">John Doe</a> <span class="credit">SAMPLE NEWSPAPER</span></p>
    <time>AUG 13, 2018, UPDATED 4 MONTHS AGO</time>
    <div class="social-media">
      ...
    </div>
  </div>
</header>
```

#### CSS 
```css
header.package {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 15px;
}

header.package > * {
  margin: 15px 0;
}
```
