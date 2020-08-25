---
title: "Digest Newsletter"
description: "email template for digest newsletters"
menu: "templates"

---

This is the most common newsletter design. The HTML for this template can be used as-is if needed, but if an update needs to be made to the actual live digest newsletter template, the AM team will need to be involved.

<a class="button big promo" style="margin-bottom:24px;" href="#">Get HTML</a>

### example
<div class="example">
		<newsletter-digest></newsletter-digest>
</div>

<script type="text/javascript">
class NewsletterDigest extends HTMLElement {
	get template() {
		let t = document.createElement("template");
		t.innerHTML = `
		<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<style>
				@import url( '/css/email/eds.css' )
			</style>
		</head>
		<body>

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
customElements.define("newsletter-digest", NewsletterDigest);
</script>
