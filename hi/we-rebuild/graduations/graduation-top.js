/**
 * Topper for graduation landing pages
 * created 5.14.2020
 */

class GraduationTop extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
      }

      .immersive {
        position: relative;
        padding-top: 100px;
        min-height: calc(100vw * .4);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        background-image: 
          linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.7) 70%),
          url(${this.background});
        background-size: cover;
        background-position: 50% 20%;
      }

      .immersive::slotted(*) {
        position: relative;
        padding: 0 15px;
        box-sizing: content-box;
        max-width: 920px;
        text-align: center;
      }

      @media(min-width: 920px) {
        .immersive::slotted(.h1) {
          font-size: 45px !important;
        }
      }

      .main {
        display: block;
        max-width: var(--story-width, 728px);
        margin: 30px auto;
      }

      .main::slotted(*) {
        padding: 0 15px;
        box-sizing: content-box;
        font-family: var(--sans, "McClatchy Sans") !important;
      }
    </style>

    <slot class="immersive" name="immersive"></slot>
    <slot class="main"></slot>
    `;
    return t;
  }

  constructor() {
    super();

    // Insert the Shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    // Show it
    this.hidden = false;
  }

  get background() {
    return this.getAttribute("background");
  }

  set background(val) {
    if(val) {
      this.setAttribute("background", val);
    } else {
      this.removeAttribute("background");
    }
  }
}

customElements.define("graduation-top", GraduationTop);
