---
title: "expander"
description: "A collapsible box with a caret."
level: "molecule"
---

The expander is a simplified version of the `<amp-accordion>` component. The class is placed on a container and the first child acts as the toggle button. The last child is hidden unless the `open` class is placed on the expander. This can be toggled a number of ways, but to keep things simple for the demo we used the `onclick` attribute.

#### Example
{{< series-nav >}}

#### HTML
```html
<div class="expander package" onclick="this.classList.toggle('open')">
  <h5>EXPAND ALL</h5>
  <p class="summary">This is a sample paragraph</p>
  <div class="package">
    <a class="article" href="#">
      <figure>
        <img src="https://www.miamiherald.com/latest-news/722q03/picture222631695/alternates/LANDSCAPE_1140/Keyframe1_MH.jpg">
      </figure>
      <h4>Women are fleeing Venezuela for a better life. They’re turning up dead.</h4>
    </a>
    <a class="article" href="#">
      <figure>
        <img src="https://www.miamiherald.com/latest-news/gj3f9s/picture222628815/alternates/LANDSCAPE_1140/Keyframe2.png">
      </figure>
      <h4>They left Venezuela with dreams. They were met with forced prostitution — and their deaths</h4>
    </a>
    <a class="article" href="#">
      <figure>
        <img src="https://www.miamiherald.com/latest-news/6s0zku/picture222627840/alternates/LANDSCAPE_1140/Miami%20(Cruise)_Bumper_REV2.00_01_04_16.Still007.jpg">
      </figure>
      <h4>They want justice after their daughters were killed abroad. But it’s like the murders never happened</h4>
    </a>
  </div>
</div>
```

#### CSS
```css
.expander > :first-child {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.expander > :first-child:after {
  content: url(./icons/caret-expander.svg);
  width: 14px;
  margin-left: 5px;
  transition: transform .5s ease;
  transform: translateY(-.1em) rotateX(180deg);
  transform-origin: 50% 50%;
}

.expander > :nth-child(n+2) {
  display: none;
}

.expander.open > :first-child:after {
  transform: translateY(-.1em) rotateX(0);
}

.expander.open > :nth-child(n+2) {
  display: block;
}
```
