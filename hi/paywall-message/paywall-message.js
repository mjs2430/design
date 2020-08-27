/**
 * Paywall message
 * created 8.20.20
 */

class PaywallMessage extends HTMLElement {
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        font: italic 1rem/1.5rem var(--sans);
      }

      ::slotted(*) {
        font-style: italic;
      }
    </style>

    <slot></slot>
    `;
    return t;
  }

  constructor() {
    super();
    this.moved = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    if(!this.moved) {
      this.moved = true;
      let story = document.querySelector(".story-body");

      // Hide if paywall not dropped
      if(!pageInfo["access.tags"].match("matopend")) {
        this.hidden = true;
      }

      // Move it into position
      let ip = Array.from(story.children).find(d => { return d.matches("p") });
      if(ip) {
        ip.insertAdjacentElement("beforebegin", this);
      }
    }
  }
}

// Register the element
customElements.define("paywall-message", PaywallMessage);
