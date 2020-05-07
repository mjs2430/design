---
title: <hammer-head>
description: Size headline to fill all available space.
weight: 1
---

<script async src="/labs/hammer-head.js"></script>

The hammer head custom element mathematically scales itself to fill as close to 100% of the full width with text. It can handle multiple children, but does not allow for word wrapping. All text child will placed on a single line.

##### EXAMPLE
<div class="story-module">
<hammer-head hidden style="text-align: center;">
  <h5 class="h1">Lorem ipsum</h5>
  <h5 class="h1">sed do eiusmod tempor incididunt</h5>
</hammer-head>
</div>

<div class="story-module">
{{< highlight html >}}
<script async src="https://media.mcclatchy.com/labs/hammer-head.js"></script>
<hammer-head hidden style="text-align: center;">
  <h5 class="h1">Lorem ipsum</h5>
  <h5 class="h1">sed do eiusmod tempor incididunt</h5>
</hammer-head>
{{< /highlight >}}
<copy-highlight class="button promo">copy starter code</copy-highlight>
</div>
