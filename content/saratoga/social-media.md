---
title: "social-media"
description: "Social media icon row for story pages."
level: "molecule"
---

A very small molecule, the icons are simply a center-justified flex row with optimal padding for all devices.

#### Example
{{< social-media >}}

#### HTML 
{{< highlight html >}}{{< social-media >}}{{< /highlight >}}

#### CSS
```CSS
.social-media {
  display: flex;
  justify-content: center;
}

.social-media > a {
  padding: 15px;
}

.social-media svg {
  height: 20px;
  width: 20px;
}
```

#### RULES

Properties | Value
--- | ---
Padding | 15px placed on the `<a>`
Icon Width | 20px
Icon Height | 20px
