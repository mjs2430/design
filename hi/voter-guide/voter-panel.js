/**
 * Side panel
 * 2020 Voter Guide
 */

import VoterBaseElement from "./voter-base-element.js";
import "./voter-survey.js";
import "./voter-race-details.js";
import "./voter-measure-details.js";
import ScrollLock from "./scroll-lock.js";

class VoterPanel extends VoterBaseElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <link rel="stylesheet" href="${this.sds}">
    <style>
      :host {
        --shadow: -4px 1px 4px 0px rgba(0, 0, 0, .2);

        position: fixed;
        top: 0;
        right: 0;
        width: var(--story-width);
        max-width: calc(100% - 55px);
        height: 100%;
        z-index: 9999;
        box-sizing: border-box !important;
        background-color: white;
        padding: 0;
        box-shadow: var(--shadow);
        transform: translateX(calc(var(--story-width) + 50px));
        transition: transform .5s ease-in-out;
      }

      :host(.showing) {
        transform: translateX(0);
      }

      :host(.showing) .screen {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform: translateX(-50vw);
      }

      .card {
        position: relative;
        height: 100%;
        box-sizing: border-box;
        overflow: scroll;
      }

      button {
        background-color: white;
        border: solid transparent;
        border-radius: 4px 0px 0px 4px;
        box-sizing: border-box;
        box-shadow: var(--shadow);
        position: fixed;
        top: 45px;
        left: -40px;
        width: 40px;
        height: 80px;
        padding: 10px;
        cursor: pointer;
      }
    </style>

    <div class="screen"></div>
    <div class="card"></div>
    <button aria-label="close panel">
      <svg height="20px" width="20px" viewBox="0 0 512 512">
        <path d="M477.5 273L283.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9l154-154.7-154-154.7c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L477.5 239c9.3 9.4 9.3 24.6 0 34zm-192-34L91.1 44.7c-9.4-9.4-24.6-9.4-33.9 0L34.5 67.4c-9.4 9.4-9.4 24.5 0 33.9l154 154.7-154 154.7c-9.3 9.4-9.3 24.5 0 33.9l22.7 22.7c9.4 9.4 24.6 9.4 33.9 0L285.5 273c9.3-9.4 9.3-24.6 0-34z"></path>
      </svg>
    </button>
    `;
    return t;
  }


  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    // Card
    this.card = this.shadowRoot.querySelector(".card");

    // Close button
    this.button = this.shadowRoot.querySelector("button");
    this.button.addEventListener("click", () => {
      this.hide();
    });

    this.screen = this.shadowRoot.querySelector(".screen");
    this.screen.addEventListener("click", () => {
      this.hide();
    });

    // Swipe listeners
    this.addEventListener("touchstart", (e) => {
      this.start = e.changedTouches[0];
    }, false);

    this.addEventListener("touchend", (e) => {
      this.end = e.changedTouches[0];
      this.handleGesture();
    }, false);
  }

  show(v = "survey") {
    while(this.card.firstChild) {
      this.card.lastChild.remove();
    }

    switch(v) {
      case "race":
        let vrd = document.createElement("voter-race-details");
        vrd.race = this.race;
        vrd.stamp();
        this.card.appendChild(vrd);
        break;
      case "measure":
        let vmd = document.createElement("voter-measure-details");
        vmd.measure = this.measure;
        vmd.stamp();
        this.card.appendChild(vmd);
        break;
      case "survey":
        let vs = document.createElement("voter-survey");
        vs.sid = this.race.candidate_survey;
        this.card.appendChild(vs);
        break;
      default:
        // Do nothing
    }

    this.classList.add("showing");
    this.card.scrollTop = 0;
    ScrollLock.enable();
  }

  hide() {
    this.classList.remove("showing");
    ScrollLock.disable()
  }


  // Swipe handler
  handleGesture() {
    let { width, height } = this.getBoundingClientRect();
    let rh = (this.end.screenX - this.start.screenX) / width;
    let rv = (this.end.screenY - this.start.screenY) / height;

    if(rh > rv && rh > 0.25) {
      this.hide();
    }
  }
}

// Register the element
customElements.define("voter-panel", VoterPanel);

// ES6 default export
export default VoterPanel;
