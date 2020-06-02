/**
 * We rebuild section card
 */

class WeRebuildSection extends HTMLElement {

  get template() {
    let t = document.createElement("template");
    t.innerHTML = `
    <style>
    :host {
      padding: 15px 15px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    svg {
      height: 60px;
    }

    .content {
      display: block;
      max-width: var(--story-width, 728px);
      margin: 15px auto;
      text-align: center;
    }

    .h1, ::slotted(.h1) {
      font-size: 1.5rem;
      font-family: var(--serif, "McClatchy Serif");
      font-weight: normal;
      margin: 0;
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
    }
    </style>

    <svg id="We_Rebuild" data-name="We Rebuild" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 518.3 201.2">
      <path id="bars" d="M159.2,29.3H518.3V58.5H159.2ZM72.6,172.8H518.2v28.4H72.6Z" fill="#e31e25"/>
      <rect id="square" width="159.2" height="159.2" fill="#002b8a"/>
      <path id="we" d="M107.7,50.3l1.7-.6.6-2.6H95.1l-.6,2.6,2.6.7c2.9.8,2.6,1.6,1.7,3.2L78.6,88.7l1.1-35.4c0-1.8.2-2.7,2.9-3.1l3.5-.5.6-2.6H60.8l-.6,2.6,1.5.5c2.2.6,3.1.9,3.2,3.1v2.9L45.2,89.1l1.2-35.8c0-1.8.2-2.5,2.9-3.1l2.9-.5.6-2.6H27.2l-.6,2.6,1.4.5c2.2.6,3.2.9,3.2,3.1l.3,58.7h3.1L65,62.8l.3,49.2h3.1L103,54C104.4,51.6,104.6,51.5,107.7,50.3Zm5.8,52.5c-4.9,0-9.2-2.8-9.2-11.6v-.4c18.7-2.9,28.2-10.4,28.2-19.1,0-5.9-5.4-8.8-11.9-8.8-14.5,0-29.4,16.6-29.4,33.8,0,10.5,6.1,15.4,14.3,15.4,10.7,0,19.5-8.3,24.4-16.1l-1.7-1.5C124.6,98.1,119.9,102.8,113.5,102.8ZM117.6,67c2.6,0,3.8,1.7,3.8,4.8,0,7.4-5.2,13.5-16.8,16.5C105.4,77.9,111.3,67,117.6,67Z" fill="#fff"/>
      <path id="rebuild" d="M219.1,99.1c0-16.8-9.5-25.2-23.2-25.2H172v84.6h16.1V124.7h3.8l12.5,33.8h16.7l-14-37.3C213.9,117.5,219.1,110.2,219.1,99.1Zm-26,14.5h-5V86.2h5.2c7.5,0,10.2,5,10.2,13.3S200.8,113.6,193.1,113.6Zm51.7,7.6h20.8V108.7H244.8V86.2h23.1V73.9H228.6v84.6h39.6V146.2H244.8Zm66.6-7.1c6.6-2.9,10.8-8.6,10.8-17.8,0-15.4-8.9-22.4-23.6-22.4H276.8v84.6h22c15.5,0,26.4-8.9,26.4-24.4C325.3,123.6,319.9,117.1,311.4,114.1ZM292.8,85.2h4.5c6.6.1,9.6,3.4,9.6,11.6s-3,12.4-9.8,12.4h-4.3v-24Zm5,61.9h-5v-27h5c7.6-.1,11.3,4,11.3,13.1S305.4,147,297.8,147.1ZM367,134.5c0,8.7-3.2,12.1-9,12.1s-9.4-3.5-9.4-12.3V74H332.2v60.3c0,16.6,10.1,26,25.5,26s24.3-9.7,24.3-26V74H367Zm24.3-60.6h16.3v84.6H391.3Zm42.6,0H417.6v84.6h37.5V146H433.9Zm50.6,0H463.8v84.6h20.8c20.7,0,33.5-13.4,33.7-41.9S505.2,73.9,484.5,73.9Zm-1.1,71.5h-3.3V87h3.4c12,0,18.2,8.6,18.1,29.5S495.4,145.4,483.4,145.4Z" fill="#002b8a"/>
    </svg>

    <slot name="sponsor"></slot>

    <slot class="content" name="content">
      <h2 class="h1"><i>We Rebuild</i> brings together perspectives and solutions for a path to restore our communities in a post-pandemic world.</h2>
    </slot>

    <slot class="buttons" name="buttons"></slot>
    `;
    return t;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    // Only run once
    if(this.shadowRoot) return;

    // Drop the shadow
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define("we-rebuild-section", WeRebuildSection);
