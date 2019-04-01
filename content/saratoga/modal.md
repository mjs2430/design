---
title: "modal"
description: "Simple overlay containers to maintain consistency."
menu: cards
modal: true
---

Modals should be consistent across products and vendors to benefit our readers. The modal organism is setup as a wrapper that provides consistent behavior but can accept any HTML. To allow for flexibility in function, we have created CSS classes like `.screen` that act as toggles for different behavior.

#### EXAMPLE
<button class="ghost" onclick="toggleModal('main-modal')">Show modal</button>

#### HTML
{{< highlight html >}}
{{< partial src="saratoga/modal.html" >}}
{{< /highlight >}}

#### JavaScript
```js
function toggleModal(id, force) {
  let m = document.getElementById(id);

  if(m) {
    if(force === true || force === false) {
      m.hidden = !force;
    } else {
      m.hidden = !m.hidden;
    }

    if(m.classList.contains("screen")) {
      document.body.classList.toggle("freeze", !m.hidden);
    }
  }
}
```

---

## Bottom version

#### EXAMPLE
<button class="ghost" onclick="toggleModal('bottom-modal')">Show modal</button>

#### HTML
{{< highlight html >}}
{{< partial src="saratoga/modal.html" type="bottom" >}}
{{< /highlight >}}
