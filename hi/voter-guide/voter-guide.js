/**
 * Voter Guide Simple Grid extension
 * Created 5.26.2020
 */

class VoterGuide extends SimpleGrid {

  // Lede gets a different treatment here
  handleLede() {
    let lede = this._articles[0];

    if(lede) {
      lede.querySelector("h3.h1").classList.remove("h1");
    }
  }

  // A couple additional styles specific to this mock
  connectedCallback() {
    super.connectedCallback();
    this.addCSS(".subnav-section-icon { display: none; }");
    this.addCSS(`.subnav-section-name { margin-top: 0 !important; }`);
  }
}



/**
 * Ballot integration
 */

class VoterBallot extends HTMLElement {

  // Main Shadow DOM template
  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      :host {
        display: block;
        margin: 30px auto;
        max-width: 1140px;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      form > * {
        margin: 15px auto 0;
      }

      form > :first-child {
        margin-top: 0;
      }

      .logo {
        display: block;
        width: 250px;
      }

      .inputs {
        display: grid;
        grid-template-columns: repeat(2, minmax(150px, 1fr));
        grid-gap: 15px;
        max-width: 920px;
      }

      @media(min-width: 768px) {
        .inputs {
          grid-template-columns: repeat(4, minmax(150px, 1fr));
        }
      }

      .address {
        grid-column: span 2;
      }

      input {
        padding: 10px;
        background-color: transparent;
        border: 1px solid #222;
        border-radius: 2px;
        font-size: medium;
      }

      .button {
        display: block;
        color: var(--bc, #fff);
        background-color: var(--bbc, #373737);
        font: 700 medium var(--sans);
        border: 1px solid transparent;
        text-transform: uppercase;
        padding: .4em 1em;
        border-radius: 2px;
        cursor: pointer;
      }

      .summary {
        display: block;
        font-size: 0.875rem;
        font-family: var(--sans);
        color: #757575;
        text-align: center;
        text-decoration: none;
      }

      .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 30px;
        margin-top: 15px;
      }

      @media (min-width: 1140px) {
        .grid {
          grid-template-columns: 1fr 1fr;
          grid-auto-flow: dense;
        }

        .grid::slotted(.big) {
          grid-column: span 2;
        }
      }
    </style>

    <form>
      <img class="logo" src="https://www.kansascity.com/wps/build/images/mcclatchydc/logo-impact.svg">
      <div class="inputs">
        <input class="address" name="address" placeholder="Address">
        <input name="city" placeholder="City">
        <input name="zip" placeholder="Zip">
      </div>
      <input type="submit" class="button" value="View my ballot"></a>
      <a href="#" class="summary">Why do we need your address?</a>
    </form>

    <slot class="grid"></slot>
    `;
    return t;
  }

  constructor() {
    super();

    // Into the shadows
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Form submission event
    this.form = this.shadowRoot.querySelector("form");
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  // Runs when added to the DOM
  connectedCallback() {
    // Nothing so far
  }

  // Form submission handler
  async handleSubmit(e) {
    e.preventDefault();

    // Clear any previous results
    while(this.firstChild) {
      this.lastChild.remove();
    }

    // Let's go get our new ones
    let sample = await fetch("https://media.mcclatchy.com/2020/voter_guide/qa/data/sample.json?v=2").then(response => response.json());
    sample.forEach(pos => {
      let br = document.createElement("ballot-race");
      br.race = pos;
      this.appendChild(br);
    });
  }

  // Convenience function for user supplied data
  // Will swap to API endpoint builder when we get there
  get userData() {
    return {
      address: this.form.address.value,
      city: this.form.city.value,
      zip: this.form.zip.value
    }
  }
}



/**
 * Ballot Race
 */

class BallotRace extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">
    <style>
      :host {
        display: block;
        background-color: white;
        box-shadow: 
          0 1px 2px 0 rgba(0, 0, 0, .2), 
          0 1px 5px 0 rgba(0, 0, 0, .13);
        align-self: stretch;
      }

      .label {
        display: block !important;
      }

      .label .h5 {
        display: block;
      }

      .republican {
        color: #bc2938;
      }

      .democratic {
        color: #103e81;
      }

      .green {
        color: #1ba10d;
      }

      .grid {
        grid-gap: 0;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }

      .candidate {
        padding: 0 15px;
      }

      .candidate .package > * {
        margin-top: 5px;
      }

      .candidate .thumb {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #ddd;
        background-image: var(--image-url, none);
        background-repeat: no-repeat;
        background-size: cover;
      }

      .expander {
        cursor: pointer;
      }

      .info {
        padding: 0 15px 15px 60px !important;
      }

      .social-media a {
        padding: 0 10px 0 0;
      }

      .social-media img {
        width: 24px;
      }
    </style>

    <div class="package impact">
      <span class="h5">${this._race.name}</span>
    </div>
    <div class="grid">
      ${this._race.candidates.map((c, i) => `
      <div class="candidate">
        <div class="expander">
          <div class="thumb" style="--image-url: url(${c.thumb_url})"></div>
          <div class="package">
            <h4>${c.first_name} ${c.middle_name || ""} ${c.last_name} ${c.suffix || ""}</h4>
            <p class="h6">
              <span class="${c.party_name.toLowerCase()}"><b>${c.party_name.toUpperCase()}</b></span> 
              ${c.incumbent ? `- INCUMBENT` : ""}
            </p>
          </div>
        </div>
        <div class="package info" style="padding: 0;">
          <h5>Links</h5>
          <div class="flex social-media">
            ${c.urls.map((u, i) => `
            <a href="${u.url}" target="_blank">
              <img src="https://media.mcclatchy.com/2020/voter_guide/qa/icons/${u.type}.svg">
            </a>
            `).join('')}
          </div>
        </div>
      </div>
      `).join('')}
    </div>
    `;
    return t;
  }

  constructor() {
    super();
    this._race = {};
  }

  // Fires when added to the DOM
  connectedCallback() {
    this.stamp();
  }

  // Restamps on race change
  get race() {
    return this._race;
  }

  set race(race) {
    this._race = race;
    this.stamp();
  }

  stamp() {
    if(!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }

    // Out with the old
    while(this.shadowRoot.firstChild) {
      this.shadowRoot.firstChild.remove();
    }

    // In with the new
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    this.classList.toggle("big", this._race.candidates.length > 6);

    // Listen for expander clicks
    this.shadowRoot.querySelectorAll(".expander").forEach(e => {
      e.addEventListener("click", this.handleExpanded.bind(this));
    });
  }

  get sds() {
    let mi = document.head.querySelector("link[href*=mi-styles]");
    let sds = document.head.querySelector("link[href*=sds]");
    return mi ? mi.href : sds.href;
  }

  handleExpanded(e) {
    let bbTop = e.currentTarget.getBoundingClientRect().top;
    let candidates = Array.from(this.shadowRoot.querySelectorAll(".candidate"));
    let row = candidates.filter(c => {
      return c.getBoundingClientRect().top == bbTop;
    });

    row.forEach(c => {
      c.querySelector(".expander").classList.toggle("open");
    });
  }
}

// Register the elements
customElements.define("voter-guide", VoterGuide);
customElements.define("voter-ballot", VoterBallot);
customElements.define("ballot-race", BallotRace)
