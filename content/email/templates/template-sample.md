---
title: "email sample template"
description: "a template example"
menu: templates 

---

To add text you can simply type it. Markdown will convert it to HTML for you. Below is some examples of headers using Markdown. 

I have not made this panel a story body. My theory was that you are going to have to apply custom styles and I didn't want the positioning of story body elements in SDS to bleed in and you not get what you want when the email goes out. We can change that and I can help look into it once you have some pages. If we need to totally remove SDS from this whole section we can, and if we need to write custom CSS we can. SDS is still setting the typography and such for you, and all cards are available (though I don't think they will help you much).


#### EXAMPLE
<div class="eds">

<body>
	<center>
		<!-- BODY TABLE // -->
		<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="body-table">
		<!-- Preheader -->
        <span style="font-size: 1px;color: #f4f4f4;line-height: 1px;display: none;">Join us live, June 4 from 12.30 to 1:30 p.m. EDT. &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</span>
			<tr>
				<td align="center" valign="top" id="body-cell">
					<!--PREVENT OUTLOOK FROM DEFAULTING TO TIMES NEW ROMAN BECAUSE OF CUSTOM FONTS-->
					<!--[if mso]>
					<style type="text/css">
					body, table, td, a, span {font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;}
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
					<!-- EMAIL TABLE // -->
					<table border="0" cellpadding="0" cellspacing="0" width="600" id="email-table">
						<tr>
							<td align="center" valign="top" width="100%" style="background: #000;padding:0 0 0 0;">
                                    <table width="100%">
                                        <tr>
                                            <td class="row-blue container default-text white">
                                                <h2 style="padding-bottom: 0;text-align: center;color:#fff;">McClatchy Virtual Event Series</h2>
                                            </td>
                                        </tr> 
                                    </table>
                                    <img src="https://media.mcclatchy.com/email-assets/2020/19-bending-the-curve-email-hero.png" width="80%" alt="bending the curve logo" style="width: 80%;"> 
							</td>
						</tr>
<tr>
    <td align="left" valign="top" width="100%" class="container row-white default-text">
        <h2 style="padding-bottom: 16px;">A livestreamed three-part series</h2>
        Join <%= recipient.siteBrand.lowerThePropertyName %> and the 30 local newsrooms that together make McClatchy for a livestreamed discussion, <strong>Path to the Vaccine</strong>, where we’ll explore the current journey to a coronavirus vaccine with medical research underway and vaccine trials already launched.                       
       </td> 
</tr>
<tr>
   <td align="left" valign="top" width="100%" class="container row-gray default-text">
                <h3 style="padding-bottom: 24px;">Confirmed speakers include:</h3>                           
             <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="left" valign="top" width="136">
                        <img class="headshot" src="https://media.mcclatchy.com/email-assets/2020/21-natalie-dean-headshot.png" width="120" height="120" alt="natalie dean headshot" />
                    </td>
                    <td align="left" valign="middle" class="default-text">
                       <b>Natalie Dean, Ph.D</b><br>
Assistant Professor in the Department of Biostatistics <br>
University of Florida
                    </td>
                </tr>
            </table>   
              <br>      
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="left" valign="top" width="136">
                        <img class="headshot" src="https://media.mcclatchy.com/email-assets/2020/21-jonathan-quick-headshot.png" width="120" height="120" alt="jonathan quick headshot" />
                    </td>
                    <td align="left" valign="middle" class="default-text">
                        <b>Jonathan D. Quick, MD, MPH</b><br />
                      Infectious disease expert <br>
Author of The End of Epidemics: The Looming Threat to Humanity and How to Stop It
                    </td>
                </tr>
            </table> 
            <br><br>
            <h3 style="padding-bottom: 24px;">Moderator:</h3>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="left" valign="top" width="136">
                        <img class="headshot" src="https://media.mcclatchy.com/email-assets/2020/21-audrey-dutton-headshot.png" width="120" height="120" alt="audrey dutton headshot" />
                    </td>
                    <td align="left" valign="middle" class="default-text">
                        <b>Audrey Dutton</b><br />
                       Investigative Reporter <br>
Idaho Statesman
                    </td>
                </tr>
            </table> 
    </td>
 </tr> 
<tr>
    <td align="left" valign="top" width="100%" class="container row-white default-text">
        <h3>Event details</h3>
        Path to the Vaccine will be live streamed from <strong>12:30 - 1:30 p.m. EDT on Thursday, June 4</strong>. <br><br>
        COVID-19: Bending the Curve is presented by PhRMA
        <br><br>
        <table border="0" cellpadding="0" cellspacing="0">
           <tr>
              <td align="center" valign="top" class="button button-blue">
                 <a href="NEEDEVENTBRITEURL" target="_blank" class="button-link">register now</a>
              </td>
           </tr>
        </table>
    </td>
</tr>				
						<!-- FOOTER BLOCK // -->
						<tr>
							<td align="center" valign="top" width="100%" id="footer" style="padding-top: 24px;">
								<%@ include view='mccDynamicFooterFlexibleWidth' %>
							</td>
						</tr>
						<!-- // FOOTER BLOCK -->
					</table>
					<!-- // EMAIL TABLE -->
				</td>
			</tr>
		</table>
		<!-- // BODY TABLE -->
	</center>
</body>
</div>

#### HTML

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title></title>
	<style type="text/css">
	/*DELETE ALL RESET, DEFAULT & EMAIL STYLES AND ADD IN CLIENT-SPECIFIC STYLES AFTER INLINING--DO NOT DELETE FONTS OR MOBILE STYLES*/
        
	/*----------RESET----------*/
    #body-cell,#body-table,body{height:100%!important;margin:0;padding:0;width:100%!important}table{border-collapse:collapse}img{display:block;border:0;outline:0;text-decoration:none;height:auto;width:100%;}a img{border:0;outline:0;text-decoration:none}.img-inline{display:inline}h1,h2,h3,h4,h5,h6{margin:0;padding:0;color:#222;line-height:100%}

	/*----------FONTS----------*/
    @font-face{font-family:'McClatchy Sans Web';font-style:normal;font-weight:400;src:url(https://media.mcclatchy.com/email-assets/global/fonts/mcclatchy-sans-web-regular.woff)}@font-face{font-family:'McClatchy Sans Web';src:url(https://media.mcclatchy.com/email-assets/global/fonts/mcclatchy-sans-web-demi.woff);font-weight:600;font-style:normal}@font-face{font-family:'McClatchy Serif Web';font-style:normal;font-weight:400;src:url(https://media.mcclatchy.com/email-assets/global/fonts/mcclatchy-serif-web-regular.woff)}@font-face{font-family:'McClatchy Serif Web';src:url(https://media.mcclatchy.com/email-assets/global/fonts/mcclatchy-serif-web-demi.woff);font-weight:600;font-style:normal}@font-face{font-family:'McClatchy Sans Cond Web';src:url(https://media.mcclatchy.com/email-assets/global/fonts/mcclatchy-sans-cond-web-demi.woff);font-weight:600;font-style:normal}
        
	/*----------DEFAULT STYLES----------*/
	body, #body-cell {background-color: #f4f4f4;}
	#header {padding-bottom: 24px;}
	.container {padding: 24px;}
	.row-white {background-color: #fff;}
	.row-blue {background-color: #31409f;}
	.row-dark {background-color: #222;}
	.row-gray {padding: 24px;}
    a {font-weight: 600;color: #31409f;}
	h1 {font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 600;font-size: 36px;line-height: 48px;}
	.serif {font-family: 'McClatchy Serif Web', 'Times New Roman', serif;}
	h2 {font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 600;font-size: 20px;line-height: 24px;letter-spacing: -0.5px;text-transform: uppercase;padding-bottom: 8px;}
	h3 {font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 600;font-size: 16px;line-height: 24px;text-transform: uppercase;padding-bottom: 8px;}
	h4 {font-family: 'McClatchy Serif Web',"Times New Roman", serif;font-weight: 600;font-size: 18px;line-height: 24px;}
	.link {color: #4d63ab;text-decoration: none;border-bottom: 1px solid #4d63ab;}
	.link-white {color: #fff;text-decoration: none;border-bottom: 1px solid #fff;}
	.button {padding: 8px 16px;border-radius: 2px;}
	.button-dark {background-color: #222;}
	.button-white {background-color: #fff;}
	.button-blue {background-color: #31409f;}
	.button-link {display: block;font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 600;color: #fff;font-size: 16px;line-height: 24px;letter-spacing: 1px;text-transform: uppercase;text-decoration: none;}
	.button-white-link {display: block;font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 600;color: #222;font-size: 16px;line-height: 24px;letter-spacing: 1px;text-transform: uppercase;text-decoration: none;}
	.button-white-link-alt {display: block;font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 600;color: #31409f;font-size: 16px;line-height: 24px;letter-spacing: 1px;text-transform: uppercase;text-decoration: none;}


	/*----------EMAIL STYLES----------*/
    .headshot {
        border-radius: 100%;
        object-fit: cover;
        width: 120px;
        height: 120px;
        border: 1px solid #222;
    }
	.pub-icon {
		padding-right: 8px;
	}
	.title {
		padding-left: 8px;
	}
	.default-text {
		font-family: 'McClatchy Sans Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
		color: #222;
	}
	.section-icon {
		padding-bottom: 24px;
	}
	.small {
		font-family: 'McClatchy Sans Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-size: 14px;
		line-height: 20px;
		font-weight: 400;
		color: #222;
	}
	.col {
		padding-left: 12px;
		padding-right: 12px;
	}
	.col-photo {
		padding-bottom: 8px;
	}
	.headline-link {
		text-decoration: none;
	}
	.badge {
		padding-left: 8px;
		padding-right: 8px;
	}
	.icon-small {
		padding-bottom: 8px;
	}
	.first {
		padding-left: 0;
	}
	.last {
		padding-right: 0;
	}
	.bold {font-weight: 600;}
	.white {color: #fff;}
	.blue {color: #31409f;}

	/*----------MOBILE STYLES----------*/
	@media only screen and (max-width: 480px) /*you can change this value*/ {
		#email-table {
			height: auto !important;
			max-width: 480px !important; /*you can change this value*/
			width: 100% !important;
		}
		img {
			max-width: 100% !important;
		}
		.collapse {
			display: block !important;
			width: 100% !important;
		}
		.small {
			text-align: center !important;
		}
		.col {
			padding-right: 0 !important;
			padding-left: 0 !important;
			padding-bottom: 24px !important;
		}
		.last {
			padding-bottom: 0 !important;
		}
		.col-photo {
			width: 100% !important;
		}
	}
	@media only screen and (max-width: 320px) {}
	</style>
</head>

<body>
	<center>
		<!-- BODY TABLE // -->
		<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="body-table">
		
		<!-- Preheader -->
        <span style="font-size: 1px;color: #f4f4f4;line-height: 1px;display: none;">Join us live, June 4 from 12.30 to 1:30 p.m. EDT. &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</span>

			<tr>
				<td align="center" valign="top" id="body-cell">
					<!--PREVENT OUTLOOK FROM DEFAULTING TO TIMES NEW ROMAN BECAUSE OF CUSTOM FONTS-->
					<!--[if mso]>
					<style type="text/css">
					body, table, td, a, span {font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;}
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

					<!-- EMAIL TABLE // -->
					<table border="0" cellpadding="0" cellspacing="0" width="600" id="email-table">
						<tr>
							<td align="center" valign="top" width="100%" style="background: #000;padding:0 0 0 0;">
                                    <table width="100%">
                                        <tr>
                                            <td class="row-blue container default-text white">
                                                <h2 class="white" style="padding-bottom: 0;text-align: center;">McClatchy Virtual Event Series</h2>
                                            </td>
                                        </tr> 
                                    </table>
                                    <img src="https://media.mcclatchy.com/email-assets/2020/19-bending-the-curve-email-hero.png" width="80%" alt="bending the curve logo" style="width: 80%;"> 
							</td>
						</tr>
<tr>
    <td align="left" valign="top" width="100%" class="container row-white default-text">
        <h2 style="padding-bottom: 16px;">A livestreamed three-part series</h2>

        Join <%= recipient.siteBrand.lowerThePropertyName %> and the 30 local newsrooms that together make McClatchy for a livestreamed discussion, <strong>Path to the Vaccine</strong>, where we’ll explore the current journey to a coronavirus vaccine with medical research underway and vaccine trials already launched.
                        
       </td> 
</tr>

<tr>
   <td align="left" valign="top" width="100%" class="container row-gray default-text">
                <h3 style="padding-bottom: 24px;">Confirmed speakers include:</h3>
                            
             <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="left" valign="top" width="136">
                        <img class="headshot" src="https://media.mcclatchy.com/email-assets/2020/21-natalie-dean-headshot.png" width="120" height="120" alt="natalie dean headshot" />
                    </td>
                    <td align="left" valign="middle" class="default-text">
                       <b>Natalie Dean, Ph.D</b><br>
Assistant Professor in the Department of Biostatistics <br>
University of Florida

                    </td>
                </tr>
            </table>   
              <br>      
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="left" valign="top" width="136">
                        <img class="headshot" src="https://media.mcclatchy.com/email-assets/2020/21-jonathan-quick-headshot.png" width="120" height="120" alt="jonathan quick headshot" />
                    </td>
                    <td align="left" valign="middle" class="default-text">
                        <b>Jonathan D. Quick, MD, MPH</b><br />
                      Infectious disease expert <br>
Author of The End of Epidemics: The Looming Threat to Humanity and How to Stop It

                    </td>
                </tr>
            </table> 
     
            <br><br>
            <h3 style="padding-bottom: 24px;">Moderator:</h3>

            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="left" valign="top" width="136">
                        <img class="headshot" src="https://media.mcclatchy.com/email-assets/2020/21-audrey-dutton-headshot.png" width="120" height="120" alt="audrey dutton headshot" />
                    </td>
                    <td align="left" valign="middle" class="default-text">
                        <b>Audrey Dutton</b><br />
                       Investigative Reporter <br>
Idaho Statesman

                    </td>
                </tr>
            </table> 
    </td>
 </tr> 
<tr>
    <td align="left" valign="top" width="100%" class="container row-white default-text">
        <h3>Event details</h3>
        Path to the Vaccine will be live streamed from <strong>12:30 - 1:30 p.m. EDT on Thursday, June 4</strong>. <br><br>
        COVID-19: Bending the Curve is presented by PhRMA
                           
        <br><br>
        <table border="0" cellpadding="0" cellspacing="0">
           <tr>
              <td align="center" valign="top" class="button button-blue">
                 <a href="NEEDEVENTBRITEURL" target="_blank" class="button-link">register now</a>
              </td>
           </tr>
        </table>
    </td>
</tr>

 

						
						<!-- FOOTER BLOCK // -->
						<tr>
							<td align="center" valign="top" width="100%" id="footer" style="padding-top: 24px;">
								<%@ include view='mccDynamicFooterFlexibleWidth' %>
							</td>
						</tr>
						<!-- // FOOTER BLOCK -->
					</table>
					<!-- // EMAIL TABLE -->
				</td>
			</tr>
		</table>
		<!-- // BODY TABLE -->
	</center>
</body>
</html>
 

```

#### CSS

```css
.collapse {
    display: block;
    width: 100%;
}

```
