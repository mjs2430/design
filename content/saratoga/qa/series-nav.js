class SeriesNav extends HTMLElement {
  get title() {
    return this.getAttribute("title");
  }

  get summary() {
    return this.getAttribute("summary");
  }

  get part() {
    return parseInt(this.getAttribute("part"));
  }

  get chapter() {
    return this.getAttribute("chapter-header");
  }

  get kicker() {
    return this.getAttribute("kicker");
  }

  get nextCardLocations() {
    try {
      return JSON.parse(this.getAttribute("next-card-locations"));
    } catch (e) {
      return false;
    }
  }

  get nextStory() {
    if( this.part >= this.feed.length ) {
      return false;
    }

    return this.feed[this.part]
  }

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
      <style>
        :host {
          max-width: 100% !important;
          background: var(--background, #373737);
          display: block !important;
          padding: 15px 0 !important;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        h1 {
          font: 400 30px/1.2em "McClatchy Serif", serif;
        }

        h3 {
          font: 400 18px/1.2em "McClatchy Serif", serif;
        }

        h5 {
          font: 500 14px/1.2em "McClatchy Sans", sans-serif;
        }

        time {
          display: block;
          font: 300 11px/1.2em "McClatchy Sans", sans-serif;
        }

        article {
          position: relative;
        }

        figure {
          margin: 0;
        }

        figure img {
          display: block;
          width: 100%;
        }

        .label {
          margin: 0;
          display: flex;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 2;
        }

        .label > * {
          margin: 0;
          padding: 5px 10px 3px;
          color: white;
          background-color: #373737;
        }

        .top {
          display: block;
          max-width: 720px;
          margin: 0 auto;
          color: var(--tc, white);
        }

        .summary {
          font: 400 14px/1.5em "McClatchy Sans", sans-serif;
        }

        .package {
          position: relative;
          padding: 15px;
          text-align: center;
        }

        .package > * {
          margin: 10px 0 0 0;
        }

        .package > :first-child {
          margin-top: 0;
        }

        .grid {
          display: grid;
          grid-gap: 30px;
          max-width: 1140px;
          margin: 0 auto;
          padding: 15px 0;
        }

        @media(min-width: 768px) {
          .grid {
            grid-template-columns: 1fr 1fr;
            padding: 15px;
          }
        }

        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          padding: 45px 30px 15px;
          background: linear-gradient(transparent, rgba(0,0,0,0.6) 45px, rgba(0,0,0,0.9));
          color: white;
        }
      </style>

      <div class="package top">
        <h5>MORE FROM THIS SERIES</h5>

        ${this.title ? `
        <h1>${this.title}</h1>
        ` : ''}

        ${this.summary ? `
        <p class="summary">${this.summary}</p>
        ` : ''}
      </div>
      <div class="grid">
        ${ this.feed.map((story, i) => `
        <article>
          ${i == this.part ? `
          <div class="label sticky">
            <h5 class="promo">READ NEXT</h5>
          </div>
          ` : ``}
          <figure>
            <img src="${story.lede}">
          </figure>
          <div class="package overlay">

          ${this.chapter ? `
            <h5>${this.chapter} ${i + 1}</h5>
          ` : ''}

            <h3><a href="${story.url}">${ story.title }</a></h3>
            <time>${ story.time }</time>
          </div>
        </article>
        `.trim()).join("")}
      </div>
    `;
    return t;
  }

  constructor() {
    super();
  }

  async connectedCallback() {
    let rs = document.querySelector(".related-stories");

    if(rs === null) {
      return;
    }

    let articles = Array.from(rs.querySelectorAll("article"));
    this.feed = await this.fetchAll(articles);

    rs.classList.add("related-series");
    rs.attachShadow({ mode: "open" });
    rs.shadowRoot.appendChild(this.template.content.cloneNode(true));

    if(this.kicker) {
      let header = document.querySelector(".story-body .header");
      if(header) {
        header.after(this.kickerTemplate.content.cloneNode(true));
      }
    }

    if(this.nextCardLocations) {
      this.nextCardLocations.forEach(loc => {
        let insertPoint = document.querySelector(loc);
        insertPoint.after(this.readNextTemplate.content.cloneNode(true));
      });
    } else {
      console.warn("no read next card locations defined");
    }
  }

  /**
   * Returns a Promise of all related story articles  
   */

  async fetchAll([...articles]) {
    return Promise.all(
      articles.map(article => { 
        return this.fetch(article, {
          credentials: "omit",
          cache: "force-cache"
        }) 
      })
    );
  }

  /**
   * Fetches an article by url and returns metadata
   */

  async fetch(article) {
    let item = {
      url: article.querySelector("h3 a").href,
      title: article.querySelector("h3").innerText.trim(),
      time: article.querySelector("time").innerText.trim()
    }

    let response = await fetch(item.url);
    let text = await response.text();
    let t = document.createElement('template');
    t.innerHTML = text;

    item.lede = t.content.querySelector('[property="og:image"]').getAttribute('content');
    item.author = this.getAuthor(text);

    return item;
  }

  /**
   * Pulls authors out of the page HTML with regex
   */

  getAuthor(html) {
    let contentSource = html.match(/mistats.contentsource="([\w\s]*).*"/)

    if(contentSource.length > 1) {
      let authors = contentSource[1].split(",");

      if( authors.length == 1) {
        return `By ${authors}`;
      }

      return `By ${ authors.slice(0, -1).join(", ") } and ${ authors.slice(-1) }`;
    }

    return "";
  }

  /**
   * Next horizontal card
   */

  get readNextTemplate() {
    let t = document.createElement("template");
    t.innerHTML = `
      <style>
        .sn-readnext {
          padding: 0 !important;
          min-height: 200px;
          flex-wrap: wrap;
        }

        .sn-readnext .package {
          flex-grow: 3;
        }

        @media (max-width: 600px) {
          .sn-readnext figure {
            height: calc(100vw * .5625);
          }
        }
      </style>

      <div class="card horizontal impact story-module sn-readnext">
        <figure>
          <div class="label sticky"><h5 class="impact">READ NEXT</h5></div>
          <a href="${this.nextStory.url}"><img src="${this.nextStory.lede}"></a>
        </figure>
        <div class="package">

        ${this.chapter ? `
          <h5>${this.chapter} ${this.part + 1} OF ${this.feed.length} in ${this.title.toUpperCase()}</h5>
        ` : ''}

          <h3><a href="${this.nextStory.url}">${this.nextStory.title}</a></h3>
          <h6>${this.nextStory.author.toUpperCase()}</h6>
        </div>
      </div>
    `;
    return t;
  }

  /**
   * kicker enhancement
   */

  get kickerTemplate() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      .sn-kicker {
        padding: 15px !important;
        box-sizing: border-box;
      }
    </style>

    <div class="package impact sn-kicker">
      <span class="h5">${this.chapter || ''} ${this.part} OF ${this.feed.length} in ${this.title.toUpperCase()}</span>
    </div>
    `;
    return t;
  }
}

customElements.define("series-nav", SeriesNav);
