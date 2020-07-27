/**
 * Dummy ad component
 */

class FakeAd extends HTMLElement {

  // Shadow DOM template
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        --color: #f2b6be;

        display: flex;
        align-items: center;
        justify-content: center;
        order: var(--order);
      }

      @media(min-width: 660px) {
        :host([columns="2"]), :host([columns="3"]) {
          grid-column: span 2;
        }
      }

      @media(min-width: 990px) {
        :host([columns="3"]) {
          grid-column: span 3;
        }
      }
      
      .ad {
        background-color: var(--color);
      }

      :host(.fill) {
        background-color: var(--color);
      }

      :host(.fill) .ad {
        display: none;
      }
    </style>

    <div class="ad"></div>
    `;
    return t;
  }

  // Load the template on construction
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Convenience
    this.ad = this.shadowRoot.querySelector(".ad");
  }

  // Called when added to the DOM
  connectedCallback() {
    this.renderAd(...this.size);
  }

  // Size can take a single array, or nested array sizes 
  // using the following format: [width, height]
  get size() {
    let s = this.getAttribute("size");

    try {
      let p = JSON.parse(s);
      if(Array.isArray(p[0])) {
        return p[Math.floor(Math.random() * p.length)];
      } else {
        return p;
      }
    } catch(e) {
      return [300, 250]
    }
  }

  // Updating the order shifts where the ad sits in the grid
  get order() {
    return this.getAttribute("order");
  }

  set order(val) {
    if(val) {
      this.setAttribute("order", val);
    } else {
      this.removeAttribute("order");
    }
  }

  // Updating the columns changes how many the ad will use
  get columns() {
    return this.getAttribute("columns");
  }

  set columns(val) {
    if(val) {
      this.setAttribute("columns", val);
    } else {
      this.removeAttribute("columns");
    }
  }

  // Render an ad
  renderAd(width, height) {
    this.ad.style.width = `${width}px`;
    this.ad.style.height = `${height}px`;

    if(width > 600) {
      this.columns = 3;
    } 
    else if (width > 300) {
      this.columns = 2;
    }
    else {
      this.columns = 1;
    }
  }

  // Watch a couple of attributes for changes
  static get observedAttributes() {
    return ["order", "columns"];
  }

  // Fires when a watched attribute changes
  attributeChangedCallback(name, ov, nv) {
    switch(name) {
      case "order":
        this.style.setProperty("--order", nv);
        break;
      case "columns":
        // Handled with CSS instead
        break;
      default:
        // Do nothing
    }
  }
}

// Register the element
customElements.define("fake-ad", FakeAd);

// Export for ES6
export default FakeAd;
