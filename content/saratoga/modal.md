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
{{< highlight html >}}{{< modal >}}{{< /highlight >}}

#### CSS
```css
.modal {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: 0;
	padding: 100px 15px 0;
	max-width: unset;
	overflow: scroll;
	z-index: 9999;
	transform: translateZ(0);
	pointer-events: none;
}

.modal > * {
	position: relative;
	width: 100%;
	max-width: 710px;
	margin: 15px auto;
	pointer-events: auto;
}

.modal .package {
	padding: 30px 50px 30px 15px;
}

.modal .close {
	position: absolute;
	top: 0;
	right: 0;
	padding: 15px;
	cursor: pointer;
}

/** Toggles and kids */

.modal input, .modal .button {
	padding: 1em 1em .7em;
	border-radius: 2px;
	border: none;
	color: #222;
	align-self: unset;
}

.modal.screen {
	background-color: rgba(255,255,255,0.8);
	pointer-events: auto;
}

.modal[hidden] {
	display: none;
}
```

## Bottom version

#### EXAMPLE
<button class="ghost" onclick="toggleModal('bottom-modal')">Show modal</button>

#### HTML
{{< highlight html >}}{{< modal type="bottom" >}}{{< /highlight >}}

#### CSS
```css
/** Bottom version */

.modal.bottom {
	display: flex;
	align-items: flex-end;
}

.modal.bottom > * {
	max-width: 1110px;
	position: relative;
}

.modal.bottom .package {
	max-width: 710px;
	margin: 0 auto;
}

.newsletter-signup .grid {
	grid-template-columns: 1fr;
	grid-row-gap: 10px;
}

@media (min-width: 600px) {
	.newsletter-signup .grid {
		grid-template-columns: 3fr 1fr;
	}
}
```

