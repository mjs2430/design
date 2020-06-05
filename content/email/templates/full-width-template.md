---
title: "full width email template"
description: "the full screen email template"
menu: templates

---

This template is not used as frequently as the standard one, but is particularly useful when a design calls for a large hero image in the background. The maximum base table width is 100%, which means background images and background colors extend the full width of the viewport.<br><br>
The email containers on every row are still set for a maximum width of 600px with 24px of padding on the sides, which again leaves a 552px-wide area for content. On screens with a width of 480px and smaller that support media queries, the email container will scale to a width of 100%, with a maximum width of 480px. All of the default CSS is included in this template in addition to the basic HTML structure.<br><br>
This template can also be modified if for any reason gutters are needed on the sides. The base table can be changed to 600px and the email containers on every row to 552px (still with 24px of padding), which means there will always be 24px of background gutter on the sides, even on mobile screens.

<a class="button big promo" style="margin-bottom:32px;" target="_blank" href="https://drive.google.com/file/d/10EsPhNR_64FQqmwPqBw2ny8kwvR3B5G9/view?usp=sharing" download >download HTML</a>


#### EXAMPLE
<div class="example">
    <full-width-template></full-width-template>
</div>



<script>
class FullWidthTemplate extends HTMLElement {
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
		<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
			<tr>
				<td align="center" valign="top" id="body-cell">

					<span class="preview-text"><!-- PREVIEW TEXT GOES HERE --> &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</span>

					<!--PREVENT OUTLOOK FROM DEFAULTING TO TIMES NEW ROMAN BECAUSE OF CUSTOM FONTS-->
					<!--[if mso]>
					<style type="text/css">
					body, table, td, h1, h2, h3, .p, a, .button-link {font-family: Tahoma, Arial, sans-serif !important;}
					h4, .serif {font-family: Georgia, serif !important;}
					</style>
					<![endif]-->

					<!-- MAIN TABLE // -->
					<table border="0" cellpadding="0" cellspacing="0" width="100%" id="email-table">
						<!-- HEADER BLOCK // -->
						<tr>
							<td align="center" valign="top" width="100%" id="header">
								<%@ include view='mccDynamicHeader' %>
							</td>
						</tr>
						<!-- // HEADER BLOCK -->
						<tr>
							<td align="center" valign="top" width="100%" class="">

								<table border="0" cellpadding="0" cellspacing="0" width="600" class="collapse">
									<tr>
										<td align="center" valign="top" width="100%" class="">
											INSERT MODULE HERE
										</td>
									</tr>
								</table>

							</td>
						</tr>
						<tr>
							<td align="center" valign="top" width="100%" class="">

								<table border="0" cellpadding="0" cellspacing="0" width="600" class="collapse">
									<tr>
										<td align="center" valign="top" width="100%" class="">
											INSERT MODULE HERE
										</td>
									</tr>
								</table>

							</td>
						</tr>
						<tr>
							<td align="center" valign="top" width="100%" class="">

								<table border="0" cellpadding="0" cellspacing="0" width="600" class="collapse">
									<tr>
										<td align="center" valign="top" width="100%" class="">
											INSERT MODULE HERE
										</td>
									</tr>
								</table>

							</td>
						</tr>
						<tr>
							<td align="center" valign="top" width="100%" class="">

								<table border="0" cellpadding="0" cellspacing="0" width="600" class="collapse">
									<tr>
										<td align="center" valign="top" width="100%" class="">
											INSERT MODULE HERE
										</td>
									</tr>
								</table>

							</td>
						</tr>
						<tr>
							<td align="center" valign="top" width="100%" class="">

								<table border="0" cellpadding="0" cellspacing="0" width="600" class="collapse">
									<tr>
										<td align="center" valign="top" width="100%" class="">
											INSERT MODULE HERE
										</td>
									</tr>
								</table>

							</td>
						</tr>
						<!-- TERMS BLOCK (IF SUBSCRIPTION EMAIL) // -->
						<tr>
							<td align="center" valign="top" width="100%" class="">

                <table border="0" cellpadding="0" cellspacing="0" width="600" class="collapse">
									<tr>
										<td align="center" valign="top" width="100%" class="terms">
         								<%@ include view='tos_digital_2019_10' %>
										</td>
									</tr>
								</table>

							</td>
						</tr>
						<!-- // TERMS BLOCK -->
						<!-- FOOTER BLOCK // -->
						<tr>
							<td align="center" valign="top" width="100%">

                        <table border="0" cellpadding="0" cellspacing="0" width="600" class="collapse">
									<tr>
										<td align="center" valign="top" width="100%" id="footer">
                                 <%@ include view='mccDynamicFooterLeftAligned' %>
										</td>
									</tr>
								</table>

							</td>
						</tr>
						<!-- // FOOTER BLOCK -->
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
customElements.define("full-width-template", FullWidthTemplate);
</script>
