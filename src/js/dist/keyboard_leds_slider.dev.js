"use strict";

var _slider = require("@material/slider");

var _dialog = require("@material/dialog");

setTimeout(function () {
  var slider = new _slider.MDCSlider(document.querySelector('.mdc-slider'));
  var dialog = new _dialog.MDCDialog(document.querySelector('.mdc-dialog'));
  dialog.listen('MDCDialog:opened', function () {
    slider.layout();
  });
  slider.listen('MDCSlider:change', function () {
    return console.log("Value changed to ".concat(slider.value));
  });
}, 100);