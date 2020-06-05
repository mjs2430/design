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
        display: flex;
        min-height: calc(100vw * 1.2);
        background-size: cover;
        background-position: 50% 20%;
        background-image: var(--background, none);
      }

      @media(min-width: 768px) {
        .immersive {
          min-height: calc(100vw * .5625);
        }
      }

      @media(min-width: 920px) {
        .immersive {
          min-height: calc(100vw * .45)
        }
      }

      .background::slotted(video),
      .background::slotted(img) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-width: unset;
        margin: 0;
        padding: 0;
        object-fit: cover;
        object-position: 50% 20%;
      }

      .overlay {
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.7) 70%);
      }

      .overlay::slotted(*) {
        position: relative;
        margin: 15px 0;
        padding: 0 15px;
        box-sizing: content-box;
        max-width: var(--story-width, 720px);
        text-align: center;
      }

      @media(min-width: 768px) {
        .overlay::slotted(.h1) {
          font-size: 40px !important;
        }
      }

      @media(min-width: 920px) {
        .overlay::slotted(.h1) {
          max-width: 920px;
          font-size: 48px !important;
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

    <div class="immersive">
      <slot class="background" name="background"></slot>
      <slot class="overlay" name="immersive"></slot>
    </div>

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
    // Check for a background attribute (original method)
    if(this.background) {
      this.style.setProperty("--background", `url(${this.background})`);
    }

    // Show it
    this.hidden = false;
  }

  get background() {
    return this.getAttribute("background");
  }
}

customElements.define("graduation-top", GraduationTop);
