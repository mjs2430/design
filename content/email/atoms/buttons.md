---
title: "buttons"
description: "the EDS button system"
menu: atoms

--- 

Buttons are made entirely of HTML and CSS and should never be images. The default button is dark gray with white text.

#### EXAMPLE

<div class="eds" style="background-color: #ececec;">
    <eds-button></eds-button>
</div>

#### HTML
```html
<table border="0" cellpadding="0" cellspacing="0">
   <tr>
      <td align="center" valign="top" class="button">
         <a href="#" target="_blank" class="button-link">Button Text</a>
      </td>
   </tr>
</table>
```

#### CSS
Be sure to use the `.button` and `.button-link` classes as shown above. To change the background color, there are helper classes: `.bg-white` and `.bg-blue`. To change the link color, there are also helper classes: `.dark` and `.blue`. Simply add these after the required classes. All of the CSS for these classes is already included in the base templates.


<script>
class EdsButton extends HTMLElement {
  /**
   * Element Shadow Template
   * Went with ShadowDOM on this one for a graceful failure of nothing
   * and because very little if any is customizable.
   */
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
<head>
	<style type="text/css">
	/*typography*/
	.p {font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 400;color: #222;font-size: 16px;line-height: 24px;}
	.small {font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 400;color: #222;font-size: 14px;line-height: 20px;}
	h1 {font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 600;font-size: 36px;line-height: 48px;color: #222;}
	h2 {font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 600;font-size: 20px;line-height: 24px;text-transform: uppercase;color: #222;}
	h3 {font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;font-weight: 600;font-size: 18px;line-height: 24px;text-transform: uppercase;color: #222;}
	h4 {font-family: 'McClatchy Serif Web', Georgia, serif;font-weight: 600;font-size: 18px;line-height: 24px;color: #222;}
	.link-blue {color: #31409f;text-decoration: none;border-bottom: 1px solid #31409f;}
	.link-white {color: #fff;text-decoration: none;border-bottom: 1px solid #fff;}
	/*buttons*/
	.button {padding: 8px 16px;border-radius: 2px;background-color: #222;}
	.button-link {display: block;font-family: 'McClatchy Sans Web', Tahoma, Arial, sans-serif;color: #fff;font-weight: 600;font-size: 16px;line-height: 24px;letter-spacing: 1px;text-transform: uppercase;text-decoration: none;}
	/*background color modifiers for cards and buttons*/
	.bg-dark {background-color: #222;}
	.bg-white {background-color: #fff;}
	.bg-blue {background-color: #31409f;}
	/*text modifiers--be sure to keep these last*/
	.bold {font-weight: 600;}
	.serif {font-family: 'McClatchy Serif Web', Georgia, serif;}
	.dark {color: #222;}
	.white {color: #fff;}
	.blue {color: #31409f;}
	</style>
</head>
<body>
        <table border="0" cellpadding="0" cellspacing="20">
           <tr>
              <td align="center" valign="top" class="button">
                 <a href="#" target="_blank" class="button-link">Button Text</a>
              </td>
              <td align="center" valign="top" class="button bg-blue">
                 <a href="#" target="_blank" class="button-link">Button Text</a>
              </td>
              <td align="center" valign="top" class="button bg-white">
                 <a href="#" target="_blank" class="button-link dark">Button Text</a>
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