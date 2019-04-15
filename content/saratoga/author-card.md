---
title: "author-card"
description: "Author information at the bottom of articles"
menu: "cards"
class: new
---


The author card should appear directly underneath the related stories organism, if it is rendered, or directly under the story body if it is not.

As the organism compresses to fit smaller screens, the icons should wrap under the author's name and still right of the thumbnail. The biography uses the `summary` molecule and shoudn't deviate from the defaults. Also, the author's name should be made a link and shown in the standard `byline` style.

{{% note %}}
#### Update (1.11.0)

The HTML for this element has been adjusted in 1.11.0 to optimize CSS size for the new author bio page.
{{% /note %}}

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

## Author Bio Page Version

The new author page has a slightly alternative look to accomodate the additional space and give more prominence to the journalist.

#### Example

<div class="example">
{{< author-card version="bio" >}}
</div>

#### HTML

The structure for this element is using many of the same classes and concepts from the inline author-card, but it is slightly different. Despite many attempts to keep the structure the same, it either didn't work or the CSS became overly complex.

This version does utilize a media breakpoint, since it is only used in one way on the author bio page. That causes issues in this guide. To see how the element responds to browser resizing, use the [author bio deck](../decks/author-bio/).

{{< highlight html >}}
{{< author-card version="bio" >}}
{{< /highlight >}}
