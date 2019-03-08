---
title: "social-media"
description: "Social media icon row for story pages."
level: "molecule"
---

A very small molecule, the icons are simply a center-justified flex row with optimal padding for all devices.

#### Example
{{< partial src="saratoga/social-media.html" >}}

#### HTML 
{{< highlight html >}}
{{< partial src="saratoga/social-media.html" >}}
{{< /highlight >}}

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
Margin | 15px placed on the `<a>`
Icon Width | 20px
Icon Height | 20px
