---
title: "two column module"
description: "two col module"
menu: layouts 

---

This is the most-used base template, with a maximum table width of 600px. The default padding is 24px, which leaves a 552px-wide area for content. On screens with a width of 480px and smaller that support media queries, the template will scale to a width of 100%, with a maximum width of 480px. All of the default CSS is included in this template in addition to the basic HTML structure.


#### EXAMPLE of TWO EQUAL-WIDTH COLUMNS (264px each)
<div class="example" style="margin:16px auto 40px;">
    <two-column-module></two-column-module>
</div>

#### HTML

```html
<!-- TWO EQUAL COLLAPSING COLUMNS -->
<table border="0" cellpadding="0" cellspacing="0" width="100%">
   <tr>
      <td align="left" valign="top" class="col collapse first" width="264">
         image and/or copy goes here
      </td>
      <td align="left" valign="top" class="col collapse last" width="264">
         image and/or copy goes here
      </td>
   </tr>
</table>

```


<script>
class TwoColumnModule extends HTMLElement {
  /**
   * Element Shadow Template
   * Went with ShadowDOM on this one for a graceful failure of nothing
   * and because very little if any is customizable.
   */
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
	<center>
		<!-- BODY TABLE // -->
		<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="body-table">
			<tr>
				<td align="center" valign="top" id="body-cell">
					<!-- MAIN TABLE // -->
					<table border="0" cellpadding="0" cellspacing="0" width="600" id="email-table">
						<tr>
							<td align="left" valign="top" width="100%" class="card bg-white p">
                            <!-- TWO EQUAL COLLAPSING COLUMNS -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                               <tr>
                                  <td align="left" valign="top" class="col collapse first" width="264">
                                     <img src="https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" width="264" style="width: 100%;">
                                  </td>
                                  <td align="left" valign="top" class="col collapse last" width="264">
                                     <h4>Lil' Pup</h4>
                                     image and/or copy goes here
                                  </td>
                               </tr>
                            </table>                                
							</td>
						</tr>
					</table>
					<!-- // MAIN TABLE -->
				</td>
			</tr>
		</table>
		<!-- // BODY TABLE -->
		<!-- Font Awesome Free by @fontawesome - https://fontawesome.com -->
	</center>
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
customElements.define("two-column-module", TwoColumnModule);
</script>