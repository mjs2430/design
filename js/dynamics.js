var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

class Dynamics {

  /**
   * Init
   */

  constructor(typology) {
    googletag.cmd.push(() => {
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });

    typology.ads.forEach(ad => {
      this.inject(ad);
    });

    typology.modules.forEach(m => {
      this.move(m);
    });
  }

  /**
   * Inserts ad
   */

  inject(config) {
    let c = Object.assign({
      id: this.guid(),
      width: 300,
      height: 250
    }, config);

    let t = document.createElement('template');

    t.innerHTML = `<div class="ad-widget" id="${c.id}"></div>`;
    googletag.cmd.push(() => {
      googletag
        .defineSlot(c.path, [c.width, c.height], c.id)
        .addService(googletag.pubads());
      googletag.display(c.id);
    });

    let ip = document.querySelector(c.location);
    if(ip) {
      ip.before(t.content.cloneNode(true));
    }
  }

  /**
   * Moves a module
   */

  move(c) {
    let e = document.querySelector(c.query);
    if(e) {
      if(c.newLocation == "hide") {
        e.hidden = true;
      } else {
        let ip = document.querySelector(c.newLocation);
        if(ip) {
          ip.before(e);
        }
      }
    }
  }

  /**
   * Generates an ad uid
   */

  guid() {
    let array = new Uint8Array(4);
    window.crypto.getRandomValues(array);
    return `div-gpt-ad-${array.join("")}-0`;
  }
}

/**
 * Typologies
 */

var Typology = {
  "steadfast-neighbor": {
    "ads": [
      {
        "path": "/7675/KCM.site_kansascity/News/Local",
        "location": ".story-body p:nth-of-type(6)"
      },
      {
        "path": "/7675/KCM.site_kansascity/News/Local",
        "location": ".story-body p:nth-of-type(12)"
      }
    ],
    "modules": [
      {
        "query": ".transparency",
        "newLocation": ".story-body p:nth-of-type(8)"
      },
      {
        "query": ".inline-cta",
        "newLocation": ".story-body p:nth-of-type(3)"
      }
    ]
  },
  "free-agent": {
    "ads": [
      {
        "path": "/7675/KCM.site_kansascity/News/Local",
        "location": ".story-body",
        "width": 728,
        "height": 90
      },
      {
        "path": "/7675/KCM.site_kansascity/News/Local",
        "location": ".story-body p:nth-of-type(3)"
      },
      {
        "path": "/7675/KCM.site_kansascity/News/Local",
        "location": ".story-body p:nth-of-type(6)"
      },
      {
        "path": "/7675/KCM.site_kansascity/News/Local",
        "location": ".story-body p:nth-of-type(9)"
      },
      {
        "path": "/7675/KCM.site_kansascity/News/Local",
        "location": ".story-body p:nth-of-type(12)"
      },
      {
        "path": "/7675/KCM.site_kansascity/News/Local",
        "location": ".story-body + section",
        "width": 728,
        "height": 90
      }
    ],
    "modules": [
      {
        "query": ".transparency",
        "newLocation": "hide"
      },
      {
        "query": ".inline-cta",
        "newLocation": "hide"
      }
    ]
  }
}

/**
 * Call it
 * This is just for an easy demo and would come from Adobe instead.
 */

if(location.hash) {
  let json = Typology[location.hash.substring(1)];
  if(json) {
    new Dynamics(json);
  }
}

