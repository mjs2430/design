/**
 * Zone placement logic
 */

class Zones {

  /**
   * Static to the class to prevent overloading.
   */

  static get zoneMap() {
    return {
      "zone1": "top",
      "zone2": 3,
      "zone3": 6,
      "zone4": 11,
      "zone5": 15
    }
  }

  /**
   * Returns the story body
   */

  get story() {
    return document.querySelector("article.story-body");
  }

  /**
   * Filter story body insertion points to prevent clashing
   * editorial elements on the page. It's much easier to do
   * this here than in the loop.
   */

  get validInsertionPoints() {
    let grafs = document.querySelectorAll("article.story-body > p");
    return grafs;
    return [...grafs].filter(p => {
      if(p.textContent.length < 100) {
        return false;
      }

      if(p.previousElementSibling.nodeName != "P") {
        return false;
      }

      return true;
    });
  }

  /**
   * The default zone HTML with a couple areas to 
   * target with CSS and JS.
   */

  template(z) {
    let t = document.createElement("template");
    t.innerHTML = `
      <div class="zone ${z.class}" data-zone="${z.name}"></div>
    `;
    return t;
  }

  /**
   * Render zones from the config onto the page
   */

  render(zones) {
    zones.forEach(z => {
      let position = this.constructor.zoneMap[z.name];

      if(position) {
        let clone = this.template(z).content.cloneNode(true);

        switch(position) {
          case "top":
            document.body.insertBefore(clone, this.story);
            break;
          default:
            let ip = this.validInsertionPoints[position];
            if(ip) {
              this.story.insertBefore(clone, ip)
            } else {
              console.warn(`no insertion point for ${z.name}`);
            }
        }

        return z.name;
      } else {
        console.warn("misconfigured zone: ", z);
      }
    });
  }

  /**
   * Wipes the zones out
   */

  clear() {
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
