---
title: "related-stories"
description: "Display for stories related in CUE."
level: "organism"
---

This organism is actually just a combination of the grid and package molecules, and doesn't have any styles of its own. The organism should appear directly under the story body when stories are added to the related bucket in CUE.

#### Example
{{< related-stories >}}

#### HTML
{{< highlight html >}}{{< related-stories >}}{{< /highlight >}}

#### CSS
```css
.related-stories {
  margin: 30px auto;
}

.related-stories .package {
  padding: 0;
}
```
