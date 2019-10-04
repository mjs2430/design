/**
 * Dynamic content logic
 */

class Dynamics extends Zones {

  /**
   * Initial setup
   */

  constructor(zones) {
    super();
    this.fill(zones);
  }

  /**
   * Fills a zone with templated content on the page
   */

  fill(zones) {
    this.render(zones);
    zones.forEach(z => {
      let slot = document.querySelector(`[data-zone=${z.name}]`);

      if(slot) {
        z.units.forEach(u => {
          let t = document.querySelector(`template[data-unit=${u}]`);

          if(t) {
            slot.appendChild(t.content.cloneNode(true));
          } else {
            console.warn(`missing unit template: ${u}`);
          }
        });
      } else {
        console.warn(`missing zone: ${z.name}`);
      }
    });
  }
}

/**
 * Demo code only
 */

var mi = mi || {};
mi.bucket = window.location.hash.substring(1) || "active-generalist";
mi.dynamics = new Dynamics(Typologies[mi.bucket]);
