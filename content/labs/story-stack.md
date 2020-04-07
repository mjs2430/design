---
title: <story-stack>
description: A stack of stories from a homepage, section page or topic page.
---

<script src="/labs/story-stack.js"></script>

The story stack custom element can create recirulation groupings in ways that our core products can't. It is not a replacement for the series nav, related stories, or especially inline links, but there are instances where maintaining those solutions over long periods of time becomes a burden. During week-long events of highly topical coverage, like a pandemic, the story stack can streamline some of our bespoke workflows. 

It's simple by nature. The element fetches the HTML for url in the `href` attribute, strips out the articles it can identify, and adds them in the order it finds them. It can use any of our list-type page: home pages, section pages and topic pages. By default, it will show the first four it finds, but this can be changed with the `data-count` attribute.

To control the order of the stories, simply manage the target list-style page as normal. Since the element also fetches the public version every time, headline updates will be reflected automatically. Lastly, this element is not restricted by publication. You can use any list-style page from another market, but links will go to that market.

<div>
  <story-stack href="https://www.miamiherald.com/">
    <h5 slot="top">From the homepage in Miami</h5>
    <p slot="top">This version is pulling the default first four stories from the Miami Herald homepage.</p>
  </story-stack>
</div>

<div class="story-module">
{{< highlight html >}}
<script async src="https://media.mcclatchy.com/labs/story-stack.js"></script>
<story-stack href="https://www.miamiherald.com/" data-count="6">
  <h5 slot="top">From the homepage in Miami</h5>
  <p slot="top">This version ...</p>
</story-stack>
{{< /highlight >}}
<copy-highlight class="button promo">copy starter code</cop-highlight>
</div>

---

<div>
  <story-stack href="https://www.kansascity.com/opinion/" data-count="2">
    <h5 slot="top">The opinion in Kansas City</h5>
    <p slot="top">This version is only pulling the first two stories using the <code>data-count</code> attribute.</p>
  </story-stack>
</div>

<div class="story-module">
{{< highlight html >}}
<script async src="https://media.mcclatchy.com/labs/story-stack.js"></script>
<story-stack href="https://www.kansascity.com/opinion/" data-count="2">
  <h5 slot="top">The opinion in Kansas City</h5>
  <p slot="top">This version ...</p>
</story-stack>
{{< /highlight >}}
<copy-highlight class="button promo">copy starter code</cop-highlight>
</div>

---

<div>
  <story-stack href="https://www.newsobserver.com/topics/coronavirus-north-carolina" data-count="8">
    <h5 slot="top">Coronavirus coverage in North Carolina</h5>
    <p slot="top">This version is pulling the top eight stories from one of our coronavirus topic pages.</p>
    <p slot="bottom"><b>Source: The News &amp; Observer</b></p>
  </story-stack>
</div>

<div class="story-module">
{{< highlight html >}}
<script async src="https://media.mcclatchy.com/labs/story-stack.js" data-count="8"></script>
<story-stack href="https://www.newsobserver.com/topics/coronavirus-north-carolina" data-count="8">
  <h5 slot="top">Coronavirus coverage in North Carolina</h5>
  <p slot="top">This version ...</p>
  <p slot="bottom"><b>Source: The News &amp; Observer</b></p>
</story-stack>
{{< /highlight >}}
<copy-highlight class="button promo">copy starter code</cop-highlight>
</div>
