var list = document.querySelector(".list");
var lastScroll = localStorage.getItem("scroll")

if(lastScroll) {
  list.scrollBy(0, lastScroll);
}

list.addEventListener("click", e => {
  localStorage.setItem("scroll", list.scrollTop);
})
