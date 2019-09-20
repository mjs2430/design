/**
 * Dynamic content logic
 */

class Dynamics {

  /**
   * Initial setup
   */

  constructor(...zones) {
    this.zones = new Zones(...zones);

    zones.forEach(z => {
      this.fillZone(z);
    });
  }

  /**
   * Fills a zone with templated content on the page
   */

  fillZone(zone) {
    let slot = document.querySelector(`[data-zone=${zone.name}]`);

    zone.units.forEach(u => {
      let t = document.querySelector(`template[data-unit=${u}]`);
      slot.appendChild(t.content.cloneNode(true));
    });
  }
}

var dynamcis = new Dynamics(
  { 
    "name": "zone1",
    "type": "single",
    "units": ["leaderboard"]
  },
  { 
    "name": "zone2",
    "type": "single",
    "units": ["ad"]
  },
  { 
    "name": "zone3",
    "type": "combo",
    "units": ["subscription", "ad"]
  },
  {
    "name": "zone4",
    "type": "single",
    "class": "wide",
    "units": ["banner"]
  },
  {
    "name": "zone5",
    "type": "combo",
    "units": ["podcast", "ad"]
  }
);
