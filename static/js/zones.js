/**
 * Zone placement logic
 */

class Zones {

  /**
   * Initial setup
   */

  constructor(...zones) {
    this.skips = 0;

    this.zoneMap = {
      "zone1": "top",
      "zone2": 3,
      "zone3": 6,
      "zone4": 11,
      "zone5": 15
    }

    zones.forEach(z => {
      this.renderZone(z);
    });
  }

  /**
   * Zone Getters
   */

  get story() {
    return document.querySelector("article.story-body");
  }

  get paragraphs() {
    return document.querySelectorAll("article.story-body > p");
  }

  template(config) {
    let t = document.createElement("template");
    t.innerHTML = `
      <div class="zone ${config.class}" 
           data-zone="${config.name}"
           data-type="${config.type}"></div>
    `;
    return t;
  }

  /**
   * Render zones from the config onto the page
   */

  renderZone(config) {
    let position = this.zoneMap[config.name];

    if(position) {
      let clone = this.template(config).content.cloneNode(true);

      switch(position) {
        case "top":
          document.body.insertBefore(clone, this.story);
          break;
        default:
          this.story.insertBefore(clone, this.paragraphs[position])
          break;
      }
    } else {
      console.warn("misconfigured zone: ", config);
    }
  }
}
