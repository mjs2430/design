/**
 * Voter Ballot 
 * 2020 Voter Guide
 */

import VoterBaseElement from "./voter-base-element.js";
import "./voter-ballot-race.js";
import "./voter-ballot-measure.js";
import "./voter-panel.js";
import "./voter-ballot-save.js";
import "./mc-toast.js";
import { trackInteraction } from "https://media.mcclatchy.com/labs/tracking.js";
import "https://media.mcclatchy.com/labs/dynamic-modal.js";

class VoterBallot extends VoterBaseElement {

  // Shadow DOM template
  get template() {
    const t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">
    <style>
      :host {
        display: block;
        margin: 30px auto;
        max-width: 1140px;
        box-sizing: content-box;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 15px;
        margin: 30px 0;
      }

      form > * {
        margin: 15px auto 0;
      }

      form > :first-child {
        margin-top: 0;
      }

      .logo {
        display: block;
        width: 350px;
      }

      .address {
        grid-column: span 2;
      }

      input {
        width: 100%;
        max-width: 728px;
        padding: 10px;
        box-sizing: border-box;
        background-color: transparent;
        border: 1px solid #222;
        border-radius: 2px;
        font-size: larger;
      }

      .button.submit {
        width: auto;
      }

      .submit[disabled] {
        background-color: #ddd;
        color: rgba(0,0,0,0.2);
        cursor: wait;
      }

      .intro {
        max-width: var(--story-width);
        margin: 0 auto;
        padding: 0 15px;
        --hf: var(--sans);
        --ht: uppercase;
        --hw: bold;
      }

      @media(min-width: 630px) {
        :host {
          padding: 0 15px;
        }

        .logo {
          width: 400px;
        }

        .intro {
          padding: 0;
        }
      }

      slot[name="description"] {
        display: block;
      }

      .summary {
        color: #757575;
        text-align: center;
      }

      h5 {
        margin-bottom: 10px;
      }

      .grid {
        grid-auto-flow: dense;
      }

      .empty-message {
        display: none;
        max-width: var(--story-width);
      }

      .empty-message .summary {
        color: #222;
      }

      :host(.empty) .empty-message {
        display: block;
      }

      :host(.empty) .how-to-use {
        display: none;
      }

      .inline-print-logo {
        display: inline-block;
        vertical-align: middle;
        height: 12px;
        width: 12px;
        padding: 4px;
        background-color: #31409F;
        fill: white;
        border-radius: 50%;
      }

      .partial-message {
        display: none;
        text-align: left;
      }

      :host(.partial) .partial-message {
        display: block;
      }

      @media print {
        .intro, .partial-message {
          display: none !important;
        }

        slot[name="races"].grid {
          display: block;
          margin-top: 15px;
        }

        #races {
          max-width: var(--story-width);
          margin: 0 auto;
        }

        #races:before {
          content: "The list below only includes your selected candidates.";
          display: block;
          margin-top: 30px;
          font-style: italic;
        }

        voter-ballot-save, voter-panel, .submit {
          display: none;
        }

        ::slotted(ballot-race) {
          border-top: 1px solid #ddd;
        }
      }
    </style>

    <form>
      <img class="logo" src="https://media.mcclatchy.com/hi/voter-guide/icons/vg-logo.svg" alt="2020 Voter Guide logo">
      <input type="text" class="address" name="address" placeholder="e.g., 1452 E 53rd St, Chicago, IL">
      <input type="submit" class="submit button impact" value="View my ballot"></a>
    </form>

    <div class="intro">
      <slot name="description">
        <p>Welcome to our Voter Guide. Please enter your address above to see races that will be on your November ballot and to read in-depth surveys with candidates. Addresses are used to personalize this content; no information you provide is saved or will be used for any other purpose. Some down-ballot races may be missing because of limitations in the available data.</p>
      </slot>

      <div class="how-to-use">
        <h4 class="expander" onclick="this.classList.toggle('open')">How to use this guide</h4>
        <p>Each race and measure on your ballot will be represented in a box below. To see additional information about the candidates click the "See more candidate information" near the bottom. Some races will have an additional button on the bottom. Click that to see candidate responses to our questions.</p>
        <p>Once you are ready, click a candidate to make your choice. When you have finished making your selections, click the <svg class="inline-print-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"/></svg> icon at the bottom right of the screen to print your choices.</p>
        <p>If you do not wish to print your ballot, you can also bookmark this page. When you return on the same phone, tablet, or computer, we will load your previous choices. We are not storing your choices on our servers or transmitting them in any way. They are confined to your device.</p>
      </div>

      <div class="empty-message">
        <h4>We're sorry</h4>
        <p>We don't see any races. It's possible you are searching in a state we aren't covering. If you think there is an issue, please <a href="/customer-service">contact us</a>.</p>
      </div>
    </div>

    <div id="races" hidden>
      <slot name="races" class="grid"></slot>
      <p class="summary partial-message">We do not see any local or city races. This might be a partial ballot.</p>
    </div>
    <voter-panel></voter-panel>
    <voter-ballot-save></voter-ballot-save>
    <mc-toast class="bottom right"></mc-toast>

    <dynamic-modal>
      <img slot="image" src="https://media.mcclatchy.com/target/assets/cc-decline-modal-laptop.png">
      <h1>You must be a subscriber to view this content</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus eros in ornare vulputate. Integer congue orci sit amet dui euismod tempus. Phasellus ut orci imperdiet, elementum augue et, accumsan.</p>
      <a class="button big" data-interaction="Voter Guide clicked subscribe button" href="/subscribe">Subscribe now</a>
    </dynamic-modal>
    `;
    return t;
  }

  // Initial setup of this element
  constructor() {
    super();
    this.ready = true;

    // Into the shadows
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Form submission event listener
    this.form = this.shadowRoot.querySelector("form");
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.getBallot();
      trackInteraction("Voter Guide address searched");
    });

    // Listen for selections and save
    this.addEventListener("selection-made", (e) => {
      const selections = this.querySelectorAll("voter-ballot-race[selected], voter-ballot-measure[selected]");
      const storage = {
        address: this.address,
        selections: []
      }

      selections.forEach((ele) => {
        storage.selections.push({ 
          id: ele.dataset.id, 
          selection: ele.selected
        });
      });

      this.storage = storage;
    });


    // Element shortcuts
    this.toast = this.shadowRoot.querySelector("mc-toast");
    this.paywall = this.shadowRoot.querySelector("dynamic-modal");
    this.panel = this.shadowRoot.querySelector("voter-panel");
    this.submitButton = this.shadowRoot.querySelector(".submit");

    // Listen for more info clicks
    this.addEventListener("details-clicked", (e) => {
      // Ballot Race version
      if(e.detail.race) {
        this.panel.race = e.detail.race;
        this.panel.show("race");
        this.toast.message = "Getting candidate details ...";
        this.toast.show();
      }

      // Ballot measure version
      if(e.detail.measure) {
        this.panel.measure = e.detail.measure;
        this.panel.show("measure");
      }

      trackInteraction("Voter Guide race details clicked");
    });

    this.addEventListener("details-loaded", (e) => {
      this.toast.hide();
    });

    // Listen for a survey being clicked
    this.addEventListener("survey-clicked", (e) => {
      // Check subscriber status 
      // if(digitalData?.user?.subscription?.status == "sub_0") {
      //   this.panel.race = e.detail.race;
      //   this.panel.show("survey");
      //   this.toast.message = "Getting survey details ...";
      //   this.toast.show();
      //   trackInteraction("Voter Guide subscriber clicked survey button");
      // } else {
      //   this.paywall.show();
      //   trackInteraction("Voter Guide non-subscriber clicked survey button");
      // }

      // Short circuit for testing
      this.panel.race = e.detail.race;
      this.panel.show("survey");
      this.toast.message = "Getting survey details ...";
      this.toast.show();
      trackInteraction("Voter Guide subscriber clicked survey button");
    });

    this.addEventListener("survey-loaded", (e) => {
      this.toast.hide();
    });
  }

  // Runs when added to the DOM
  async connectedCallback() {
    if(this.storage && this.ready) {
      this.address = this.storage.address;
      await this.getBallot();
      this.loadSelections();
    }
  }

  // Fetches the races
  async getBallot() {
    let order = 0;
    this.ready = false;
    this.submitButton.disabled = true;
    this.toast.message = "Getting your personalized ballot ...";
    this.toast.show();

    // Clear out a previous ballot
    this.querySelectorAll("voter-ballot-race, voter-ballot-measure").forEach(r => { r.remove(); });
    this.classList.remove("partial");

    // API functions found in voter-element
    const [positions, measures] = await Promise.all([
      this.fetchPositions(this.address),
      fetch("https://media.mcclatchy.com/2020/voter_guide/qa/data/measures.json").then(response => response.json())
      // this.fetchMeasures(this.address)
    ]);

    // Load the positions
    try {
      let pos = positions.data.voterguidePositions.data.positions.filter(p => {
        return p.state != "US" && p.normalized_position.id != 11;
      });

      // Check for an empty ballot
      this.classList.toggle("empty", pos.length == 0);

      // Loop through what we got
      pos.forEach((p, i) => {
        const br = document.createElement("voter-ballot-race");
        br.race = p;
        br.setAttribute("slot", "races");
        order += 1;
        br.style.order = order;
        this.appendChild(br);
      });

      // Check for missing city or local races (possible partial)
      let local = pos.filter((d) => {
        return d.level.toLowerCase() == "city" || d.level.toLowerCase() == "local";
      });

      this.classList.toggle("partial", pos.length > 0 && local.length == 0)

    } catch(err) {
      console.error("Issue parsing positions", err);
    }

    // Load the measures
    try {
      let mes = measures.data.voterguideMeasures.data.positions;
      mes.forEach((m, i) => {
        const bm = document.createElement("voter-ballot-measure");
        bm.measure = m;
        bm.setAttribute("slot", "races");
        order += 1;
        bm.style.order = order;
        this.appendChild(bm);
      });
    } catch(err) {
      console.error("Issues parsing ballot measures", err);
    }

    // Load any previous selections
    if(this.storage) {
      this.loadSelections();
    }

    // Show it and mark ready for more pulls
    this.shadowRoot.querySelector("#races").hidden = false;
    this.ready = true;
    this.toast.hide();
    this.submitButton.disabled = false;
  }

  // Load previous selections if any
  loadSelections() {
    this.storage.selections.forEach((s) => {
      let ele = this.querySelector(`[data-id="${s.id}"]`);
      if(ele) ele.selected = s.selection;
    });

    this.showSaveButton();
  }

  showSaveButton(v = true) {
    this.shadowRoot.querySelector("voter-ballot-save").classList.toggle("showing", v);
  }

  /**
   * Getters and Setters
   */

  // Returns a parsed version
  get storage() {
    const ls = window.localStorage.getItem("voter-guide");
    return ls ? JSON.parse(ls) : undefined;
  }

  // Stringifies and stores 
  set storage(obj) {
    window.localStorage.setItem("voter-guide", JSON.stringify(obj));
    this.showSaveButton();
  }

  clearStorage() {
    window.localStorage.removeItem("voter-guide");
  }

  get address() {
    return this.form.address.value;
  }

  set address(val) {
    this.form.address.value = val;
  }
}

// Register the element
customElements.define("voter-ballot", VoterBallot);

// ES6 default export
export default VoterBallot;
