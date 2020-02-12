---
title: "<dynamic-modal>"
description: A pre-styled modal with basic interaction tracking.
---

<script async type="module" src="/labs/dynamic-modal.js"></script>

There is a high probability of a modal collision if the dynamic modal is used outside of Adobe Target. This page is primarily here for reference.

{{< blazers component="dynamic-modal.js" type="module" >}}

<div>
  <dynamic-modal>
    <img slot="image" src="https://media.mcclatchy.com/target/assets/cc-decline-modal-laptop.png">
    <h1>Your account needs attention</h1>
    <p class="summary">We're having trouble connecting to your billing information. Update your account to stay connected to unlimited article views on our website and mobile app, the eEdition and exclusive subscriber-only content.</p>
    <a class="button big" data-interaction="Update">UPDATE NOW</a>
  </dynamic-modal>
</div>

#### HTML for this example

{{< highlight html >}}
<dynamic-modal>
  <img slot="image" src="https://media.mcclatchy.com/target/assets/cc-decline-modal-laptop.png">
  <h1>Your account needs attention</h1>
  <p class="summary">We're having trouble connecting to your billing information. Update your account to stay connected to unlimited article views on our website and mobile app, the eEdition and exclusive subscriber-only content.</p>
  <a class="button big">UPDATE NOW</a>
</dynamic-modal>
{{< /highlight >}}
