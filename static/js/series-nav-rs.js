class SeriesNav extends HTMLElement {
  get title() {
    return this.getAttribute("title");
  }

  get summary() {
    return this.getAttribute("summary");
  }

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
      <link rel="stylesheet" href="/design/css/atoms.css">
      <link rel="stylesheet" href="/design/css/molecules.css">
      <link rel="stylesheet" href="/design/css/cards.css">

      <style>
        :host {
          --tc: white;
          --lc: white;
          max-width: 100% !important;
          background-color: #373737;
          display: block !important;
          padding: 15px 0 !important;
        }

        .center {
          text-align: center;
          display: block;
          max-width: 720px;
          margin: 0 auto;
        }

        h1 {
          font-weight: 400;
        }

        .grid {
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          max-width: 1140px;
          margin: 30px auto;
        }

        .grid .package {
          display: block;
          text-align: center;
        }

        .grid time {
          display: block;
        }
      </style>

      <div class="package center">
        <h5>MORE FROM THIS SERIES</h5>
        <h1>${this.title}</h1>
        <p class="summary">${this.summary}</p>
      </div>
      <div class="grid"></div>
    `;
    return t;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.cardTemplate = document.createElement("template");
    let rs = document.querySelector(".related-stories");

    if(rs === null) {
      return;
    }

    rs.classList.add("related-series");
    rs.attachShadow({ mode: "open" });
    rs.shadowRoot.appendChild(this.template.content.cloneNode(true));

    this.grid = rs.shadowRoot.querySelector(".grid");

    rs.querySelectorAll("article").forEach((story, i) => {
      let a = document.createElement("article");
      a.innerHTML = `
        <div class="package">
          <h5>PART ${i + 1}</h5>
          <h3>${ story.querySelector("h3").innerText }</h3>
          <time>${ story.querySelector("time").innerText }</time>
        </div>
      `;
      this.grid.appendChild(a);
    });
  }
}

customElements.define("series-nav", SeriesNav);
