/**
 * Ballot Ready measure detail view
 * 2020 Voter Guide
 */

import VoterBaseElement from "./voter-base-element.js";

class VoterMeasureDetails extends VoterBaseElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">
    <style>
      :host {
        display: block;
      }

      .package {
        --hf: var(--sans);
        --hw: 700;
        --ht: uppercase;
        margin: 0;
      }
    </style>

    <h1 class="package">${this.measure.name}</h1>
    <div class="package">
      <h4>Text on the Ballot</h4>
      <p class="summary">${this.measure.text}</p>
    </div>
    <div class="package">
      <h4>Summary</h4>
      <p class="summary">${this.measure.summary}</p>
    </div>
    <div class="package">
      <h4>Comparison</h4>
      <p class="summary">${this.measure.pro_snippet}</p>
      <p class="summary">${this.measure.con_snippet}</p>
    </div>
    `;
    return t
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  stamp() {
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

// Register the element
customElements.define("voter-measure-details", VoterMeasureDetails);

// ES6 default export
export default VoterMeasureDetails;
