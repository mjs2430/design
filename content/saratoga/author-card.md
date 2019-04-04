---
title: "author-card"
description: "Author information at the bottom of articles"
menu: "cards"
---

The author card should appear directly underneath the related stories organism, if it is rendered, or directly under the story body if it is not.

As the organism compresses to fit smaller screens, the icons should wrap under the author's name and still right of the thumbnail. The biography uses the `summary` molecule and shoudn't deviate from the defaults. Also, the author's name should be made a link and shown in the standard `byline` style.

#### EXAMPLE
<div class="story-module">
  {{< author-card >}}
</div>

#### HTML
{{< highlight html >}}
{{< author-card >}}
{{< /highlight >}}

---

#### TWO-AUTHOR EXAMPLE
<div class="grid story-module">
  {{< author-card >}}
  {{< author-card >}}
</div>

#### HTML
{{< highlight html >}}
<div class="grid story-module">
{{< author-card >}}
{{< author-card >}}
</div>
{{< /highlight >}}

## Author Page Version

The new author page has a slightly alternative look to accomodate the additional space and give more prominence to the journalist.
