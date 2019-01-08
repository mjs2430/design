/**
 * Series nav toggle
 *
 * For simplicity in a demo we stuck with an onclick handler in the DOM.
 */

function toggleSeriesNav() {
  let t = window.event.target;
  let p = t.parentNode;

  if(p && p.classList.contains("series-nav")) {
    p.classList.toggle("open");
  }
}
