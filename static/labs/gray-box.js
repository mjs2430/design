/**
 * Gray Box element
 */

class GrayBox extends HTMLElement {
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        background-color: #f4f4f4;
        max-width: unset !important;
        padding: 15px !important;
        --tf: var(--sans);
        --ts: medium;
      }

      .content {
        max-width: var(--story-width);
        margin: 0 auto;
      }
    </style>

    <div class="content">
      <slot></slot>
    </div>
    `;
    return t;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define("gray-box", GrayBox);
