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
      <style>
        :host {
          max-width: 100% !important;
          background-color: #373737;
          display: block !important;
          padding: 15px 0 !important;
          color: white !important;
        }

        h1 {
          font: 400 30px/1.2em "McClatchy Serif", serif;
        }

        h3 {
          font: 400 18px/1.2em "McClatchy Serif", serif;
        }

        h5 {
          font: 600 14px/1.2em "McClatchy Sans", sans-serif;
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

        .top {
          display: block;
          max-width: 720px;
          margin: 0 auto;
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
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          grid-gap: 30px;
          max-width: 1140px;
          margin: 30px auto;
        }

        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          padding: 45px 30px 15px;
          color: white;
          background: linear-gradient(transparent, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.8));
        }
      </style>

      <div class="package top">
        <h5>MORE FROM THIS SERIES</h5>
        <h1>${this.title}</h1>
        <p class="summary">${this.summary}</p>
      </div>
      <div class="grid">
        ${ this.feed.map((story, i) => `
        <article>
          <figure>
            <img src="${story.lede}">
          </figure>
          <div class="package overlay">
            <h5>PART ${i + 1}</h5>
            <h3>${ story.title }</h3>
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
  }

  /**
   * Returns a Promise of all related story articles  
   */

  async fetchAll([...articles]) {
    return Promise.all(
      articles.map(article => { 
        return this.fetch(article) 
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
}

customElements.define("series-nav", SeriesNav);
