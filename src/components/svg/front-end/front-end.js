import "./front-end.scss";
class FrontEnd extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
<?xml version="1.0" encoding="utf-8"?>
<svg animate version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t viewBox="0 0 511 511" style="enable-background:new 0 0 511 511;" xml:space="preserve">

<g>
\t<path class="st0" d="M483.9,31.1H27.1c-12.8,0-23.1,10.4-23.1,23.1v299.3c0,12.8,10.4,23.1,23.1,23.1h155.6l-11.5,40.4h-33.8
\t\tc-4.1,0-7.4,3.3-7.4,7.4c0,4.1,3.3,7.4,7.4,7.4h39.4c0,0,0,0,0,0c0,0,0,0,0,0h94.5c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4
\t\th-84.7l11.5-40.4h73.2c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4H27.1c-4.6,0-8.4-3.8-8.4-8.4V54.3c0-4.6,3.8-8.4,8.4-8.4h456.8
\t\tc4.6,0,8.4,3.8,8.4,8.4v299.3c0,4.1,3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4V54.3C507.1,41.5,496.7,31.1,483.9,31.1z"/>
\t<path class="st0" d="M468.2,62.7H42.8c-4.1,0-7.4,3.3-7.4,7.4v267.8c0,4.1,3.3,7.4,7.4,7.4h228.4c4.1,0,7.4-3.3,7.4-7.4
\t\tc0-4.1-3.3-7.4-7.4-7.4h-221v-190h410.6v32c0,4.1,3.3,7.4,7.4,7.4c4.1,0,7.4-3.3,7.4-7.4V70C475.6,66,472.2,62.7,468.2,62.7z
\t\t M460.8,125.7H50.2V77.4h410.6V125.7z"/>
\t<path class="st0" d="M153.1,108.9h236.3c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4H153.1c-4.1,0-7.4,3.3-7.4,7.4
\t\tC145.7,105.6,149,108.9,153.1,108.9z"/>
\t<path class="st0" d="M420.9,108.9h15.8c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4h-15.8c-4.1,0-7.4,3.3-7.4,7.4
\t\tC413.5,105.6,416.8,108.9,420.9,108.9z"/>
\t<path class="st0" d="M74.3,108.9c1.9,0,3.8-0.8,5.2-2.2c1.4-1.4,2.2-3.3,2.2-5.2c0-1.9-0.8-3.8-2.2-5.2c-1.4-1.4-3.3-2.2-5.2-2.2
\t\tc-1.9,0-3.8,0.8-5.2,2.2c-1.4,1.4-2.2,3.3-2.2,5.2c0,1.9,0.8,3.8,2.2,5.2C70.5,108.1,72.4,108.9,74.3,108.9z"/>
\t<path class="st0" d="M98,108.9c1.9,0,3.8-0.8,5.2-2.2c1.4-1.4,2.2-3.3,2.2-5.2c0-1.9-0.8-3.8-2.2-5.2c-1.4-1.4-3.3-2.2-5.2-2.2
\t\tc-1.9,0-3.8,0.8-5.2,2.2c-1.4,1.4-2.2,3.3-2.2,5.2c0,1.9,0.8,3.8,2.2,5.2C94.1,108.1,96,108.9,98,108.9z"/>
\t<path class="st0" d="M121.6,108.9c1.9,0,3.8-0.8,5.2-2.2c1.4-1.4,2.2-3.3,2.2-5.2c0-1.9-0.8-3.8-2.2-5.2c-1.4-1.4-3.3-2.2-5.2-2.2
\t\tc-1.9,0-3.8,0.8-5.2,2.2c-1.4,1.4-2.2,3.3-2.2,5.2c0,1.9,0.8,3.8,2.2,5.2C117.7,108.1,119.7,108.9,121.6,108.9z"/>
\t<path class="st0" d="M452.4,196.6H318.5c-12.8,0-23.1,10.4-23.1,23.1v244.2c0,12.8,10.4,23.1,23.1,23.1h133.9
\t\tc12.8,0,23.1-10.4,23.1-23.1V219.7C475.6,206.9,465.2,196.6,452.4,196.6z M460.8,463.9c0,4.6-3.8,8.4-8.4,8.4H318.5
\t\tc-4.6,0-8.4-3.8-8.4-8.4v-8.4h150.6V463.9z M460.8,440.7H310.1V290.1h150.6V440.7z M460.8,275.3H310.1v-32.5h150.6V275.3z
\t\t M460.8,228.1H310.1v-8.4c0-4.6,3.8-8.4,8.4-8.4h133.9c4.6,0,8.4,3.8,8.4,8.4V228.1z"/>
\t<path class="st0" d="M326.4,266.5H413c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4h-86.6c-4.1,0-7.4,3.3-7.4,7.4
\t\tC319,263.2,322.3,266.5,326.4,266.5z"/>
\t<path class="st0" d="M436.7,266.5h7.9c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4h-7.9c-4.1,0-7.4,3.3-7.4,7.4
\t\tC429.3,263.2,432.6,266.5,436.7,266.5z"/>
\t<path class="st0" d="M90.1,165c-8.4,0-15.3,6.8-15.3,15.3v102.4c0,8.4,6.8,15.3,15.3,15.3h118.1c8.4,0,15.3-6.8,15.3-15.3V180.3
\t\tc0-8.4-6.8-15.3-15.3-15.3H90.1z M196.6,179.8l-47.4,41.8l-47.4-41.8H196.6z M89.6,274.2v-85.4l48.4,42.7L89.6,274.2z M101.7,283.2
\t\tl47.4-41.8l47.4,41.8H101.7z M208.7,274.2l-48.4-42.7l48.4-42.7V274.2z"/>
\t<path class="st0" d="M255.5,179.8h181.2c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4H255.5c-4.1,0-7.4,3.3-7.4,7.4
\t\tC248.1,176.5,251.4,179.8,255.5,179.8z"/>
\t<path class="st0" d="M271.3,204.4h-15.8c-4.1,0-7.4,3.3-7.4,7.4c0,4.1,3.3,7.4,7.4,7.4h15.8c4.1,0,7.4-3.3,7.4-7.4
\t\tC278.6,207.7,275.3,204.4,271.3,204.4z"/>
\t<path class="st0" d="M271.3,243.8h-15.8c-4.1,0-7.4,3.3-7.4,7.4c0,4.1,3.3,7.4,7.4,7.4h15.8c4.1,0,7.4-3.3,7.4-7.4
\t\tC278.6,247.1,275.3,243.8,271.3,243.8z"/>
\t<path class="st0" d="M271.3,283.2h-15.8c-4.1,0-7.4,3.3-7.4,7.4c0,4.1,3.3,7.4,7.4,7.4h15.8c4.1,0,7.4-3.3,7.4-7.4
\t\tC278.6,286.5,275.3,283.2,271.3,283.2z"/>
\t<path class="st0" d="M342.1,392.5h86.6c8.4,0,15.3-6.8,15.3-15.3v-55.1c0-8.4-6.8-15.3-15.3-15.3h-86.6c-8.4,0-15.3,6.8-15.3,15.3
\t\tv55.1C326.9,385.6,333.7,392.5,342.1,392.5z M355.1,377.7l30.3-19.3l30.3,19.3H355.1z M429.3,330.5v38.3l-30.1-19.1L429.3,330.5z
\t\t M415.8,321.6l-30.3,19.3l-30.3-19.3H415.8z M341.6,330.5l30.1,19.1l-30.1,19.1V330.5z"/>
\t<path class="st0" d="M334.3,424h102.4c4.1,0,7.4-3.3,7.4-7.4c0-4.1-3.3-7.4-7.4-7.4H334.3c-4.1,0-7.4,3.3-7.4,7.4
\t\tC326.9,420.7,330.2,424,334.3,424z"/>
</g>
</svg>

`;
  }
}
customElements.define("front-end-component", FrontEnd);
const paths = document.querySelectorAll("front-end-component path");

for (const path of paths) {
  path.setAttribute(
    "style",
    `stroke-dasharray: ${path.getTotalLength()};stroke-dashoffset: ${path.getTotalLength()}`
  );
}
