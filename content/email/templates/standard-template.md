---
title: "standard email template"
description: "the standard (600px) email template"
menu: templates 

---

This is the most-used base template, with a maximum table width of 600px. The default padding is 24px, which leaves a 552px-wide area for content. On screens with a width of 480px and smaller that support media queries, the template will scale to a width of 100%, with a maximum width of 480px. All of the default CSS is included in this template in addition to the basic HTML structure.

<a class="button big promo" style="margin-bottom:32px;" target="_blank" href="https://drive.google.com/file/d/10EsPhNR_64FQqmwPqBw2ny8kwvR3B5G9/view?usp=sharing" download >download HTML</a>


#### EXAMPLE
<div class="example">
    <standard-template></standard-template>
</div>



<script>
class StandardTemplate extends HTMLElement {
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
					<span class="preview-text"><!-- PREVIEW TEXT GOES HERE --> &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</span>
					<!--PREVENT OUTLOOK FROM DEFAULTING TO TIMES NEW ROMAN BECAUSE OF CUSTOM FONTS-->
					<!--[if mso]>
					<style type="text/css">
					body, table, td, h1, h2, h3, .p, a, .button-link {font-family: Tahoma, Arial, sans-serif !important;}
					h4, .serif {font-family: Georgia, serif !important;}
					</style>
					<![endif]-->
					<!-- HEADER TABLE // -->
					<table border="0" cellpadding="0" cellspacing="0" width="100%" id="header-table">
						<tr>
							<td align="center" valign="top" width="100%" id="header">
								<%@ include view='mccDynamicHeader' %>
							</td>
						</tr>
					</table>
					<!-- // HEADER TABLE -->
					<!-- MAIN TABLE // -->
					<table border="0" cellpadding="0" cellspacing="0" width="600" id="email-table">
						<tr>
							<td align="center" valign="top" width="100%" class="card bg-blue p">
                                <h1 class="white">Welcome</h1>
							</td>
						</tr>
						<tr>
							<td align="left" valign="top" width="100%" class="card bg-white p">
                                <h1 class="serif">Thank you for subscribing</h1><br>
								Dear reader,<br /><br />
								Welcome to The Charlotte Observer. With your subscription, you’re helping support vital local journalism in our community, and we deeply appreciate your commitment. The Observer’s journalists are also deeply committed—to making sure we bring you the important news in our city and state, to telling you stories about inspiring people around us and to sharing information that helps you live a good life here. For our reporters, editors, videographers and others, this is also our community—where we live, work, shop and play. Our local roots and connection are at the heart of The Observer’s mission to serve our community. Thank you for helping make our work possible with your support.<br />
							</td>
						</tr>
						<tr>
							<td align="center" valign="top" width="100%" class="ps24 pt24">
								<h2>Get to know us</h2>
							</td>
						</tr>
						<tr>
							<td align="center" valign="top" width="100%" class="card">
								<table border="0" cellpadding="0" cellspacing="0" width="100%">
									<tr>
										<td align="left" valign="top" width="136">
											<img class="headshot" src="https://i.imgur.com/hUS7a8m.jpg" width="120" height="120" alt="editor/publisher headshot" />
										</td>
										<td align="left" valign="middle" class="default-text">
											<b>A Kitten</b><br />
											Executive Editor<br />
											McClatchy News
										</td>
									</tr>
								</table>
<br>
								<table border="0" cellpadding="0" cellspacing="0" width="100%">
									<tr>
										<td align="left" valign="top" width="136">
											<img class="headshot" src="https://i.imgur.com/hUS7a8m.jpg" width="120" height="120" alt="editor/publisher headshot" />
										</td>
										<td align="left" valign="middle" class="default-text">
											<b>A Kitten</b><br />
											Executive Editor<br />
											McClatchy News
										</td>
									</tr>
								</table>
							</td>
						</tr>
						<tr>
							<td align="center" valign="top" width="100%" class="ps24 pt24 bg-blue p white">
								<h2 class="white" style="padding-bottom:8px;">Sign up for newsletters</h2>
                                Email newsletters are an easy way to keep up with breaking news and the latest on your favorite topics.
							</td>
						</tr>
						<tr>
							<td align="center" valign="top" width="100%" class="card bg-blue p white">
                                <table border="0" cellpadding="0" cellspacing="0">
                                   <tr>
                                      <td align="center" valign="top" class="button bg-white">
                                         <a href="javascript:void(0)" target="_blank" class="button-link blue">Button Text</a>
                                      </td>
                                   </tr>
                                </table>
							</td>
						</tr>
						<!-- TERMS BLOCK (IF SUBSCRIPTION EMAIL) // -->
						<tr>
							<td align="center" valign="top" width="100%" class="terms">
								<%@ include view='tos_digital_2019_10' %>
							</td>
						</tr>
						<!-- // TERMS BLOCK -->
						<!-- FOOTER BLOCK // -->
						<tr>
							<td align="center" valign="top" width="100%" id="footer">
								<%@ include view='mccDynamicFooterLeftAligned' %>
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
customElements.define("standard-template", StandardTemplate);
</script>