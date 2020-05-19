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
    // A little more style cleanup at the global level
    this.addStyles(`
    .subnav-section-name { 
      margin-top: 0; 
      line-height: 1em !important;
    }

    .subnav-section-icon { 
      align-self: center !important;
    }

    we-rebuild .ad-widget {
      margin: 0 auto;
    }
    `);

    // Lots of logos going on here
    let navHead = this.query(".subnav-section-name").textContent = "More Coverage";
  }
}

// Register the element
customElements.define("we-rebuild", WeRebuild);
