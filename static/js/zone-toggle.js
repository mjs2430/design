/**
 * Toggles zones for testing the story deck
 */

class ZoneToggle extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      .panel {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        padding: 30px 30px 85px;
        box-sizing: border-box;
        pointer-events: none;
        transition: backgroundColor .4s;
      }

      span {
        color: #999;
        margin: 10px 0;
        cursor: pointer;
        opacity: 0;
        transform: translateY(30px);
        transition: all .4s ease;
      }

      span:hover, span.active {
        color: #222;
      }

      .button {
        background-color: #31409F;
        fill: white;
        color: white;
        border-radius: 50%;
        width: 45px;
        height: 45px;
        box-shadow: 4px 4px 10px #999;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 10px;
        position: fixed;
        bottom: 30px;
        right: 30px;
      }

      :host(.open) .panel {
        background-color: rgba(255,255,255,.9);
        pointer-events: auto;
      }

      :host(.open) span {
        transform: translateY(0);
        opacity: 1;
      }
    </style>

    <div class="panel">
      <span data-bucket="active-generalist">Active Generalist - no sub</span>
      <span data-bucket="active-generalist-subscriber">Active Generalist - sub</span>
      <span data-bucket="civic-hero">Civic Hero - no sub</span>
      <span data-bucket="civic-hero-subscriber">Civic Hero - sub</span>
    </div>

    <div class="button primary">
      <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
    </div>
    `;
    return t;
  }
  
  /**
   * Init
   */

  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));

    this.fab.addEventListener("click", e => {
      this.classList.toggle("open");
    });

    this.spans.forEach(span => {
      span.addEventListener("click", e => {
        let bucket = e.target.dataset.bucket;
        this.classList.remove("open");
        window.location.hash = bucket;
        window.scrollTo({ top: 0 });
        window.location.reload();
      });

      if(span.dataset.bucket == this.bucket) {
        span.classList.add("active");
      }
    });
  }

  get spans() {
    return this.shadowRoot.querySelectorAll("span");
  }

  get fab() {
    return this.shadowRoot.querySelector(".button");
  }

  get bucket() {
    return location.hash.substring(1) || "active-generalist";
  }
}

customElements.define("zone-toggle", ZoneToggle);
