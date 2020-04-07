---
title: <gray-box>
description: A simple gray box to supplement an article with additional information.
---

<script src="/labs/gray-box.js"></script>

The gray box custom element is designed to separate supplemental text from the body of the story. Borrowing from the transparency card, it places text in sans-serif on a gray background that fully bleeds to the edge of the screen.

#### Example

<div class="full-bleed">
  <gray-box>
    <h3>Title</h3>
    <p>Labores definitionem in quo. Qui saperet persecuti id, doctus aliquid an his. Mel ne mundi nonumes deseruisse. Sit et corpora consectetuer, ut prima aliquip veritus quo. </p>
    <ul>
      <li>Est cu modus debet eripuit</li>
      <li>At sit nostro impetus</li>
      <li>Sit et corpora consectetuer, ut prima aliquip veritus quo</li>
    </ul>
    <p>Sit eu alia aliquando. Duo te saepe audiam, molestiae adversarium et quo, ad inani melius suscipit duo. Nostro efficiantur has at, per natum quidam utroque no.</p>
  </gray-box>
</div>

<div class="story-module">
{{< highlight html >}}
<script async src="https://media.mcclatchy.com/labs/gray-box.js"></script>
<gray-box>
  <h3>Title</h3>
  <p>Labores definitionem ...</p>
  <ul>
    <li>Est cu modus debet eripuit</li>
  </ul>
  <p>Sit eu alia ...</p>
</gray-box>
{{< /highlight >}}
<copy-highlight class="button promo">copy starter code</copy-highlight>
</div>
