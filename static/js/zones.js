/**
 * Zone placement logic
 */

class Zones {

  /**
   * Initial setup
   */

  constructor(...zones) {
    this.skips = 0;
    this.current = [];

    zones.forEach(z => {
      this.current.push(this.render(z));
    });
  }

  /**
   * Zone Getters
   */

  
  get zoneMap() {
    return {
      "zone1": "top",
      "zone2": 3,
      "zone3": 6,
      "zone4": 11,
      "zone5": 15
    }
  }

  get story() {
    return document.querySelector("article.story-body");
  }

  get paragraphs() {
    return document.querySelectorAll("article.story-body > p");
  }

  template(config) {
    let t = document.createElement("template");
    t.innerHTML = `
      <div class="zone ${config.class}" data-zone="${config.name}"></div>
    `;
    return t;
  }

  /**
   * Render zones from the config onto the page
   */

  render(config) {
    this.skips = 0;
    let position = this.zoneMap[config.name];

    if(position) {
      let clone = this.template(config).content.cloneNode(true);

      switch(position) {
        case "top":
          document.body.insertBefore(clone, this.story);
          break;
        default:
          if(Number.isInteger(position)) {
            this.adjustInsertionPoint(position);
          }

          this.story.insertBefore(clone, this.paragraphs[position])
          break;
      }

      return config.name;
    } else {
      console.warn("misconfigured zone: ", config);
    }
  }

  /**
   * Checks the point of insertion for various issues and also
   * adds the previously-skipped paragraphs
   */

  adjustInsertionPoint(position) {
    let p = this.paragraphs[position + this.skips];
    console.log(p.textContent.length);
  }

  /**
   * Wipes the zones out
   */

  clear() {
    this.current = [];
    document.querySelectorAll("[data-zone]").forEach(ele => {
      ele.remove();
    });
  }

  /**
   * Fetches a zone element
   */

  get(name) {
    return document.querySelector(`[data-zone="${name}"]`);
  }
}
