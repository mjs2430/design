---
title: "digest"
description: "Headline stacks for section content."
level: "organism"
---

The digest is simple stack of modules using the block layout.

#### Example
<div class="example grid">
  {{< digest >}}
  {{< digest label="sticky" >}}
</div>

#### HTML

This HTML snippet is a digest that doesn't have lead art.

{{< highlight html >}}{{< digest >}}{{< /highlight >}}

This snippet is a digest that does have lead art.

{{< highlight html >}}{{< digest label="sticky" >}}{{< /highlight >}}

The `card` and `card-info` molecules can be used in any combination here. The first snippet above shows a different HTML structure for the first article to illustrate a simple loop, but if the structure from the second snippet is used and the `figure` is ommitted the result is the same.

#### CSS

There is no additional CSS required for this module.
