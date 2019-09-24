/**
 * Dynamic content logic
 */

class Dynamics {

  /**
   * Initial setup
   */

  constructor(...zones) {
    this.constructor.zones = new Zones(...zones);
    this.constructor.render(...zones);
  }

  /**
   * Fills a zone with templated content on the page
   */

  static render(...zones) {
    zones.forEach(z => {
      let slot = document.querySelector(`[data-zone=${z.name}]`);

      z.units.forEach(u => {
        let t = document.querySelector(`template[data-unit=${u}]`);
        slot.appendChild(t.content.cloneNode(true));
      });
    });
  }
}

/**
 * Demo code only
 */

new Dynamics(...Typologies.pay);
