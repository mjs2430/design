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
        min-height: calc(100vw * 1.2);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        background-color: #333;
      }

      .immersive::slotted(*) {
        position: relative;
        margin: 15px 0;
        padding: 0 15px;
        box-sizing: content-box;
        max-width: 920px;
        text-align: center;
      }

      .immersive::slotted(video),
      .immersive::slotted(img) {
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
        filter: brightness(var(--brightness, 0.5));
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
}

customElements.define("graduation-top", GraduationTop);
