/**
 * Zone placement logic
 */

class Zones {

  /**
   * Initial setup
   */

  constructor() {
    this.skips = 0;
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
      let position = this.zoneMap[z.name];

      if(position) {
        let clone = this.template(z).content.cloneNode(true);

        switch(position) {
          case "top":
            document.body.insertBefore(clone, this.story);
            break;
          default:
            let ip = this.paragraphs[position + this.skips];

            while(this.check(ip) !== true) {
              this.skips++;
              ip = ip.nextElementSibling;

              if(!ip) {
                console.warn("Out of possible zone insertion points");
                break;
              }
            }

            if(ip) {
              this.story.insertBefore(clone, ip)
            }
        }

        return z.name;
      } else {
        console.warn("misconfigured zone: ", z);
      }
    });
  }

  /**
   * Design rules for a failed insertion point
   */

  check(p) {
    if(p.previousElementSibling.nodeName != "P") {
      return false;
    }

    if(p.textContent.length < 100) {
      return false;
    }

    return true;
  }

  /**
   * Wipes the zones out
   */

  clear() {
    this.skips = 0;
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
