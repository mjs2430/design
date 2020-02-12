---
title: "<fundraising-chart>"
description: A fundraising chart with configurable goals used on the Education Lab pages.
example: https://www.fresnobee.com/news/local/education/article235079937.html
---

<script src="/labs/fundraising-chart.js"></script>

The fundraising chart is an attempt to simplify the process of repeatedly editing a chart in the content management system over time by hiding most of the structure and styling in the Shadow DOM. 

{{< blazers component="fundraising-chart.js" >}}

*We are currently working on this component and it's likely to change frequently. We recommend downloading this file and hosting it yourself at this time.*

##### EXAMPLE
<div class="story-module">
<fundraising-chart collected="246000" goal="600000">
  <chart-phase value="300000">Phase 1 goal</chart-phase>
  <chart-phase value="600000">Phase 2 Goal</chart-phase>
</fundraising-chart>
</div>

##### HTML for the above example

{{< highlight html >}}
<fundraising-chart collected="246000" goal="600000">
  <chart-phase value="300000">Phase 1 goal</chart-phase>
  <chart-phase value="600000">Phase 2 Goal</chart-phase>
</fundraising-chart>
{{< /highlight >}}
