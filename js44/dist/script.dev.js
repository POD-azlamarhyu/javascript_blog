"use strict";

var doc = document;
var contry = doc.getElementById("js-select");
var checkbox = doc.querySelectorAll("input");

var onChangeEvent1 = function onChangeEvent1() {
  console.log("".concat(contry.value));
};

contry.addEventListener("change", onChangeEvent1);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var cb = _step.value;
    cb.addEventListener("change", function () {
      console.log("".concat(cb.value));
    });
  };

  for (var _iterator = checkbox[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}