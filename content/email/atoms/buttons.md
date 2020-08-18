---
title: "buttons"
description: ""
menu: atoms

---

Buttons are made entirely of HTML and CSS and should never be images. The default button is dark gray with white text and dark gray border. Our buttons are coded so that the entire area of color is clickable and not just the text. To make this method work in Outlook, it requires a border, which in our case, matches the background color.

#### Samples

<eds-button></eds-button>

#### HTML
```html
<table role="presentation" border="0" cellpadding="0" cellspacing="0">
	<tr>
		<td align="center" valign="top" class="button">
			<a href="#" target="_blank" class="button-link">Button Text</a>
		</td>
	</tr>
</table>
```

#### CSS
Be sure to include the `.button` and `.button-link` classes as shown above.

To change the background color, there are helper classes: `.bg-white` and `.bg-blue`. You must also add in a border class to match that goes in *after* the `.button-link` class. The border classes are `.border-white` and `.border-blue` (`.button-link` already has the dark gray border for the default button).

To change the link color, the helper classes are: `.gray` and `.blue`. The link color should match the background color of the card, with the exception of a light gray card. Here the button text can still be white.

All of the CSS for these classes is already included in the base templates.


<script>
class EdsButton extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
		<head>
			<style>
				@import url( '/css/email/eds.css' )
			</style>
		</head>
		<body>
			<table role="presentation" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" valign="top" class="button">
						<a href="javascript:void(0)" target="_blank" class="button-link">Button Text</a>
					</td>
					<td class="ps8"></td>
					<td align="center" valign="top" class="button bg-blue">
						<a href="javascript:void(0)" target="_blank" class="button-link border-blue white">Button Text</a>
					</td>
					<td class="ps8"></td>
					<td align="center" valign="top" class="button bg-white">
						<a href="javascript:void(0)" target="_blank" class="button-link border-white gray">Button Text</a>
					</td>
				</tr>
			</table>
		</body>
		`;
		return t;
	}
	constructor() {
		super();
	}
	connectedCallback() {
		let clone = this.template.content.cloneNode(true);
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(clone);
	}
} // end Class
customElements.define("eds-button", EdsButton);
</script>
