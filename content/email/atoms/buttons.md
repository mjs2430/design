---
title: "buttons"
description: "the EDS button system"
menu: atoms

--- 

Buttons are made entirely of HTML and CSS and should never be images. The default button is dark gray with white text.

#### EXAMPLE

<div style="background-color: #ececec;padding: 24px;">
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
     <style>
       @import url( '/css/email/eds.css' )
     </style>
</head>
<body>
        <table border="0" cellpadding="0" cellspacing="20">
           <tr>
              <td align="center" valign="top" class="button">
                 <a href="javascript:void(0)" target="_blank" class="button-link">Button Text</a>
              </td>
             <td class="ps8"></td>
              <td align="center" valign="top" class="button bg-blue">
                 <a href="javascript:void(0)" target="_blank" class="button-link">Button Text</a>
              </td>
            <td class="ps8"></td>    
              <td align="center" valign="top" class="button bg-white">
                 <a href="javascript:void(0)" target="_blank" class="button-link dark">Button Text</a>
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