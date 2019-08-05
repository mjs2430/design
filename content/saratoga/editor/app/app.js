import {uid, debounce} from './utils.js';

var editor = new Mobiledoc.Editor({
  placeholder: "Start writing here ..",
  autofocus: true
})

var element = document.querySelector("#editor");
editor.render(element);
