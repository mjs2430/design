---
title: "form icons"
description: "Optimized fontawesome icon set for form and button elements."
level: "subscription"
---

This icon set is optimized for button and form elements, reducing the number of inline elements required.

#### EXAMPLE
<div class="package">
  <button class="ghost icon facebook">Sign up with Facebook</button>
</div>

#### HTML
```html
<div class="package">
  <button class="ghost icon facebook">Sign up with Facebook</button>
</div>
```

#### CSS
```css
.icon {
  display: flex;
  align-items: center;
}

button.icon, .button.icon {
  justify-content: center;
}

.icon:before {
  padding-right: 10px;
}

.icon.facebook:before {
  content: url(./icons/facebook-f.svg);
  width: .515625em;
}

.icon.google:before {
  content: url(./icons/google.svg);
  width: .953125em;
}

.icon.paypal:before {
  content: url(./icons/paypal.svg);
  width: .75em;
}

.icon.apple:before {
  content: url(./icons/apple-pay.svg);
  width: 1.25em;
  transform: scale(1.7);
  transform-origin: 50% 30%;
}

.icon.visa:before {
  content: url(./icons/cc-visa.svg);
  width: 1.75em;
}
```