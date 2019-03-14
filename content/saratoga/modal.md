---
title: "modal"
description: "Simple overlay containers to maintain consistency."
level: "organism"
modal: true
---

Modals should be consistent across products and vendors to benefit our readers. The modal organism is setup as a wrapper that provides consistent behavior but can accept any HTML. To allow for flexibility in function, we have created CSS classes like `.screen` that act as toggles for different behavior.

#### EXAMPLE
<button class="ghost" onclick="toggleModal('main-modal')">Show modal</button>

#### HTML
{{< highlight html >}}
{{< partial src="saratoga/modal.html" >}}
{{< /highlight >}}

#### CSS
```css
.s-modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: 0;
	padding: 100px 15px 0;
	max-width: unset;
	overflow: auto;
	z-index: 9999;
	transform: translateZ(0);
	pointer-events: none;
}

.s-modal > * {
	position: relative;
	width: 100%;
	max-width: 710px;
	margin: 15px auto;
	pointer-events: auto;
}

.s-modal .package {
	padding: 30px 50px 30px 15px;
}

.s-modal .close {
	position: absolute;
	top: 0;
	right: 0;
	padding: 15px;
	cursor: pointer;
}

.s-modal.screen {
	background-color: rgba(255,255,255,0.8);
	pointer-events: auto;
}

.s-modal[hidden] {
	display: none;
}
```

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

###### Subscription example CSS
```css
.modal-subscription {
	flex-wrap: wrap;
}
```

## Bottom version

#### EXAMPLE
<button class="ghost" onclick="toggleModal('bottom-modal')">Show modal</button>

#### HTML
{{< highlight html >}}
{{< partial src="saratoga/modal.html" type="bottom" >}}
{{< /highlight >}}

#### CSS
```css
.s-modal.bottom:not([hidden]) {
	display: flex;
	align-items: flex-end;
}

.s-modal.bottom > * {
	max-width: 1110px;
	position: relative;
}

.s-modal.bottom .package {
	max-width: 710px;
	margin: 0 auto;
}
```

###### Newsletter signup CSS
```css
.modal-newsletter .grid {
	grid-template-columns: 1fr;
	grid-row-gap: 10px;
}

.modal-newsletter input, .modal-newsletter .button {
	padding: 1em 1em .7em;
	border-radius: 2px;
	border: none;
	color: #222;
	align-self: unset;
}

@media (min-width: 600px) {
	.modal-newsletter .grid {
		grid-template-columns: 3fr 1fr;
	}
}
```
