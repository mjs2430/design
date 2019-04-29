class JayWalkups extends HTMLElement {
  constructor() {
    super();
    this.tick = 0;
  }

  get songs() {
    return [
      `"This is a Game" by Nick Waterhouse`,
      `"Unsquare Dance" by Dave Brubeck`,
      `"This is America" by Childish Gambino`,
      `"Calabria 2008" by Enur`,
      `"Block Rockin Beats" by The Chemical Brothers`,
      `"Boom Boom" by John Lee Hooker`,
      `"Sinnerman" by Nina Simone`,
      `"Bamboleo" by the Gipsy Kings`,
      `"Clap Your Hands" by The Reverend Payton's Big Damn Band`
    ]
  }

  connectedCallback() {
    setInterval(this.swap.bind(this), 7000);
  }

  backspace() {
    return new Promise(resolve => {
      requestAnimationFrame(() => {
        this.textContent = this.textContent.slice(0, -1);
        resolve(this.textContent.length);
      });
    });
  }

  type(string, len = 0) {
    requestAnimationFrame(() => {
      this.textContent = string.slice(0, len);
      if(len < string.length) {
        this.type(string, len + 1);
      }
    });
  }

  async swap() {
    await this.backspace();
    if(this.textContent.length > 0) {
      this.swap();
    } else {
      this.tick++;
      if(this.tick >= this.songs.length) {
        this.tick = 0;
      }

      this.type(this.songs[this.tick])
    }
  }
}

customElements.define("jay-walkups", JayWalkups);
