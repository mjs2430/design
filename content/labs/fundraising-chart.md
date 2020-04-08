---
title: "<fundraising-chart>"
description: A fundraising chart with configurable goals used on the Education Lab pages.
example: https://www.fresnobee.com/news/local/education/article235079937.html
weight: 1
---

<script src="/labs/fundraising-chart.js"></script>

The fundraising chart custom element is an attempt to simplify the process of repeatedly editing a chart in CUE over time by hiding most of the structure and styling in the Shadow DOM. It was created for The Fresno Bee [Education Lab landing page](https://www.fresnobee.com/news/local/education/article235079937.html).

##### EXAMPLE
<div class="story-module">
<fundraising-chart collected="246000" goal="600000">
  <chart-phase value="300000">Phase 1 goal</chart-phase>
  <chart-phase value="600000">Phase 2 Goal</chart-phase>
</fundraising-chart>
</div>

<div class="story-module">
{{< highlight html >}}
<script async src="https://media.mcclatchy.com/labs/fundraising-chart.js"></script>
<fundraising-chart collected="246000" goal="600000">
  <chart-phase value="300000">Phase 1 goal</chart-phase>
  <chart-phase value="600000">Phase 2 Goal</chart-phase>
</fundraising-chart>
{{< /highlight >}}
<copy-highlight class="button promo">copy starter code</copy-highlight>
</div>
