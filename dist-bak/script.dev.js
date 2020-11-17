"use strict";

var _topAppBar = require("@material/top-app-bar");

var _drawer = require("@material/drawer");

// Instantiation
var topAppBarElement = document.querySelector('.mdc-top-app-bar');
var topAppBar = new _topAppBar.MDCTopAppBar(topAppBarElement);

var drawer = _drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

var listEl = document.querySelector('.mdc-drawer .mdc-list');
var mainContentEl = document.querySelector('.main-content');
listEl.addEventListener('click', function (event) {
  var location = event.path[0].children[2].innerHTML;
  goto(location.toLowerCase());
  drawer.open = !drawer.open;
});
document.body.addEventListener('MDCDrawer:closed', function () {});
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', function () {
  drawer.open = !drawer.open;
});
console.log("Loaded drawer");