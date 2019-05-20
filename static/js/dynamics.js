class Dynamics {

  /**
   * Init
   */

  constructor(typology) {
    typology.ads.forEach(ad => {
      this.inject(ad);
    });

    typology.modules.forEach(m => {
      this.move(m);
    });
    
    window.glade.run();
  }

  /**
   * Inserts ad
   */

  inject(config) {
    let c = Object.assign({
      width: 300,
      height: 250
    }, config);

    let t = document.createElement('template');
    t.innerHTML = `
    <div class="ad-widget" 
      data-glade 
      data-ad-unit-path="${c.path}"
      width="${c.width}"
      height="${c.height}"></div>
    `;

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
}

/**
 * Call it
 * This is just for an easy demo and would come from Adobe instead.
 */

if(location.hash) {
  fetch(`../${location.hash.substring(1)}.json`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      new Dynamics(json);
    })
    .catch(e => {
      console.log(e);
    });;
}
