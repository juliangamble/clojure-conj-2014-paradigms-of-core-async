// Compiled by ClojureScript 0.0-2156
goog.provide('hello_clojurescript');
goog.require('cljs.core');
hello_clojurescript.handle_click = (function handle_click(){return alert("Hello!");
});
hello_clojurescript.clickable = document.getElementById("clickable");
hello_clojurescript.clickable.addEventListener("click",hello_clojurescript.handle_click);
