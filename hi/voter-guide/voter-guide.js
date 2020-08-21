/**
 * Voter Guide Simple Grid extension
 * 2020 Voter Guide
 */

import "https://media.mcclatchy.com/labs/skins/simple-grid.js"
import "./voter-ballot.js"

class VoterGuide extends window.SimpleGrid {

  // Lede gets a different treatment here
  handleLede() {
    let lede = this._articles[0];

    if(lede) {
      lede.querySelector("h3.h1").classList.remove("h1");
      lede.querySelector("summary").remove();
    }
  }

  // A couple additional styles specific to this mock
  connectedCallback() {
    super.connectedCallback();
    this.addCSS(`
      .subnav-section-icon { display: none; }
      .subnav-section-name { margin-top: 0 !important; }

      @media print {
        body {
          background-color: white;
        }

        .flag .top.flex {
          height: 52px;
        }

        .story-body, 
        voter-guide article, 
        .zone-el,
        #nav-section-front,
        footer,
        .bottom-nav,
        .upper-nav,
        .flag .flex.icons, .flag .flex.signin,
        #onetrust-banner-sdk,
        fake-ad,
        .package.no-img {
          display: none !important;
        }
      }
    `);
  }

  handleZones() {
    // Move ad test
    if(this.hasAttribute("ads")) {
      let vb = this.querySelector("voter-ballot");
      let z5 = this.getZone(5);
      z5.setAttribute("slot", "races");
      z5.style.order = 6;
      vb.appendChild(z5);

      let z9 = this.getZone(9);
      z9.setAttribute("slot", "races");
      z9.style.order = 12;
      vb.appendChild(z9);

      this.addCSS(`
        voter-ballot .zone-el {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ntv-ap {
          order: 3;
        }
      `);

      // Gonna do something fun with Zeus
      window.zeus = window.zeus || {};
      window.zeus.on("SLOT_RENDER_ENDED", e => {
        let zone = e.element.closest(".zone-el");
        let width = e.element.getBoundingClientRect().width;

        if(width > 300) {
          zone.style.setProperty("grid-column", "span 3");
        }
      });

    }
  }
}

// Register the element
customElements.define("voter-guide", VoterGuide);

// ES6 default export
export default VoterGuide;
