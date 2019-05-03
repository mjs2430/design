class JayWalkups extends HTMLElement {
  constructor() {
    super();
  }

  get songs() {
    return JSON.parse(this.getAttribute("songs"));
  }

  connectedCallback() {
    let observer = new IntersectionObserver(this.swap.bind(this));
    observer.observe(this);
  }

  swap(entries) {
    let e = entries[0];

    if(!e.isIntersecting) {
      let r = Math.floor(Math.random() * this.songs.length);
      this.textContent = this.songs[r];
    }
  }
}

customElements.define("jay-walkups", JayWalkups);
