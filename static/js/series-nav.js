class SeriesNav extends HTMLElement {
  get stories() {
    return JSON.parse(this.getAttribute("stories"));
  }

  get part() {
    return parseInt(this.getAttribute("part"));
  }

  get title() {
    return this.getAttribute("title");
  }

  get summary() {
    return this.getAttribute("summary");
  }

  get nextStory() {
    if( this.part >= this.feed.length ) {
      return false;
    }

    return this.feed[this.part]
  }

  /**
   * Runs when added to the DOM
   */

  async connectedCallback() {
    this.feed = await this.fetchAll(this.stories);

    let storyBody = document.querySelector('[role="main"]');
    storyBody.after(this.grid.content.cloneNode(true));

    let header = document.querySelector(".header");
    header.after(this.jump.content.cloneNode(true));

    if(this.nextStory) {
      let insertPoint = document.querySelector(".story-body p:nth-of-type(8)");
      insertPoint.after(this.readNext.content.cloneNode(true));
    }
  }

  /**
   * Promise for all stories
   */

  async fetchAll([...stories]) {
    return Promise.all(
      stories.map(url => { 
        return this.fetch(url) 
      })
    );
  }

  /**
   * Fetches the url and pulls out relevant data
   */

  async fetch(url) {
    let response = await fetch(url);
    let text = await response.text();
    let t = document.createElement('template');
    let c = t.content;
    t.innerHTML = text;

    return {
      url: url,
      lede: c.querySelector('[property="og:image"]').getAttribute('content'),
      title: c.querySelector('[property="og:title"]').getAttribute('content'),
      pubdate: c.querySelector("#publish_date").innerText.trim(),
      author: c.querySelector(".bio .byline").innerText.trim()
    }
  }

  /**
   * Grid template
   */

  get grid() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      #series .grid {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        margin-top: 30px;
      }

      #series .package {
        align-items: center;
        text-align: center;
      }
      
      #series .overlay {
        position: absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        padding-top: 30px;
        color: white;
        background: linear-gradient(transparent, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.8));
        --tc: white;
      }

      #series .summary {
        max-width: 720px;
      }
    </style>

    <section id="series">
      <div class="package">
        <h5>MORE IN THIS SERIES</h5>
        <h1 class="soft">${this.title}</h1>
        <p class="summary">${this.summary}</p>
      </div>
      <div class="grid">
        ${this.feed.map((story, i) => `
        <a class="card" href="${story.url}">
          ${i == this.part ? `
          <div class="label sticky">
            <h5 class="promo">READ NEXT</h5>
          </div>
          ` : ``}
          <figure>
            <img src="${story.lede}">
          </figure>
          <div class="package overlay">
            <h5>PART ${i+1}</h5>
            <h3>${story.title}</h3>
            <time>${story.pubdate}</time>
          </div>
        </a>
        `.trim()).join("")}
      </div>
    </div>
    `;
    return t;
  }

  /**
   * Jump template
   */

  get jump() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
      .sn2-jump {
        padding: 0;
        flex-direction: row;
        justify-content: space-between;
      }

      .sn2-jump * {
        margin: 0;
        padding: 15px;
        text-transform: none;
      }
    </style>

    <div class="flex promo sn2-jump">
      <span class="h5">PART ${this.part} OF ${this.stories.length} in ${this.title.toUpperCase()}</span>
      <a href="#sn2" class="h6">View all stories</a>
    </div>
    `;
    return t;
  }

  /**
   * Next horizontal card
   */

  get readNext() {
    let t = document.createElement("template");
    t.innerHTML = `
      <style>
        .sn2-readnext {
          padding: 0;
          min-height: 200px;
        }

        .sn2-readnext .package {
          flex-grow: 3;
        }
      </style>

      <div class="card horizontal promo sn2-readnext">
        <figure>
          <div class="label sticky"><h5 class="promo">READ NEXT</h5></div>
          <a href="${this.nextStory.url}"><img src="${this.nextStory.lede}"></a>
        </figure>
        <div class="package">
          <h5>PART ${this.part + 1} OF ${this.stories.length} in ${this.title.toUpperCase()}</h5>
          <h3><a href="${this.nextStory.url}">${this.nextStory.title}</a></h3>
          <h6>${this.nextStory.author.toUpperCase()}</h6>
        </div>
      </div>
    `;
    return t;
  }
}

customElements.define("series-nav", SeriesNav);
