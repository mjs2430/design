class JayWalkups extends HTMLElement {
  constructor() {
    super();
  }

  get songs() {
    return [
      `"This is a Game" by Nick Waterhouse`,
      `"Unsquare Dance" by Dave Brubeck`,
      `"This is America" by Childish Gambino`,
      `"Calabria 2008" by Enur`,
      `"Boom Boom" by John Lee Hooker`,
      `"Sinnerman" by Nina Simone`,
      `"Bamboleo" by the Gipsy Kings`
    ]
  }

  connectedCallback() {
    let observer = new IntersectionObserver(this.swap.bind(this));
    observer.observe(this);
  }

  swap(entries) {
    let e = entries[0];
    let r = Math.floor(Math.random() * this.songs.length);

    if(e.isIntersecting) {
      this.textContent = this.songs[r];
    }
  }
}

customElements.define("jay-walkups", JayWalkups);
