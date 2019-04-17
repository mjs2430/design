---
title: "social-media"
description: "Social media icon row for story pages."
menu: "molecule"
class: new
---

A very small molecule, the icons are simply a center-justified flex row with optimal padding for all devices.

{{< note >}}
#### Update 1.11.3

Social media icons are not showing in AMP. Given the small set of icons we are using, and to just negate AMP's quirks, we swapped to including the raw SVG code in the HTML output.

The `.i-facebook` and other sets of icons will be removed in 1.12.0.
{{< /note >}}

#### Example
{{< social-media >}}

#### HTML 
{{< highlight html >}}
{{< social-media >}}
{{< /highlight >}}

#### RULES

Properties | Value
--- | ---
Margin | 15px placed on the `<a>`
Icon Width | 20px
Icon Height | 20px
