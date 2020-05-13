/**
 * We Rebuild section skin
 */

import SimpleGrid from "./simple-grid.js";

class WeRebuild extends SimpleGrid {

  /**
   * Require to extend
   */

  constructor() {
    super();
  }

  beforeShow() {
    // Section nav
    let nav = this.main.querySelector("#nav-section-front");
    if(nav) {
      nav.setAttribute("slot", "nav");
      nav.querySelector("h2").textContent = "More Coverage";
      this.appendChild(nav);
    }

    // A little more style cleanup at the global level
    this.style.sheet.insertRule(`
    .subnav-section-name { 
      margin-top: 0; 
      line-height: 1em !important;
    }`);

    this.style.sheet.insertRule(`
    .subnav-section-icon { 
      align-self: center !important;
    }`);
  }
}

// Register the element
customElements.define("we-rebuild", WeRebuild);
