/*
 * Fundraising chart for Fresno EDU lab landing page
 */

class FundraisingChart extends HTMLElement {
  get collected() {
    return this.getAttribute("collected");
  }

  set collected(amount) {
    this.setAttribute("collected", amount);
  }

  get goal() {
    return this.getAttribute("goal");
  }

  set goal(amount) {
    return this.setAttribute("goal", amount);
  }

  get percentComplete() {
    return Math.floor((this.collected / this.goal) * 100);
  }

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
    :host {
      display: block;
    }

    .phases {
      display: flex;
      justify-content: space-between;
    }

    .titles {
      font: 11px/1em "McClatchy Sans", sans-serif;
    }

    .amounts {
      font: 600 21px/1em "McClatchy Sans", sans-serif;
    }

    .bar {
      position: relative;
      background-color: #ddd;
      border: 1px solid #757575;
      border-radius: 4px;
      height: 30px;
    }

    .fill {
      background-color: #31409F;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
    </style>

    <div class="phases">
      <chart-phase value="${this.collected}">Received to date</chart-phase>
      <slot></slot>
    </div>

    <div class="bar">
      <div class="fill" style="width: ${this.percentComplete}%"></div>
    </div>
    `;
    return t;
  }

  constructor() {
    super();

    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define("fundraising-chart", FundraisingChart);




/**
 * Chart Phase helper component
 */

class ChartPhase extends HTMLElement {
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      
    </style>
    `;
    return t;
  }
}
