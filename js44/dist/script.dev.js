"use strict";

var doc = document;
var contry = doc.getElementById("js-select");
var checkboxes = doc.getElementsByClassName("cb");
var radioes = doc.getElementsByClassName("radio");
var msg = doc.getElementById("js-msg");
var bg = doc.getElementById("js-msgbg");

var onChangeEvent1 = function onChangeEvent1() {
  console.log("".concat(contry.value));
};

var onChangeEvent2 = function onChangeEvent2() {
  console.log(" ------- ");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      console.log(checkboxes[i].value);
    }
  }

  console.log(" ------- ");
};

contry.addEventListener("change", onChangeEvent1); // js_cb1.addEventListener("change",onChangeEvent2);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = checkboxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var cb = _step.value;
    cb.addEventListener("change", onChangeEvent2);
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

var onChangeEvent3 = function onChangeEvent3() {
  var checkValue;

  for (var i = 0; i < radioes.length; i++) {
    if (radioes[i].checked) {
      checkValue = radioes[i].value;
    }
  }

  msg.innerHTML = checkValue;

  if (checkValue === "株式") {
    msg.style.backgroundColor = "#99ffff";
  } else if (checkValue === "債権") {
    msg.style.backgroundColor = "#ff9999";
  } else if (checkValue === "不動産") {
    msg.style.backgroundColor = "#66cccc";
  } else if (checkValue === "投資信託") {
    msg.style.backgroundColor = "#ffcc66";
  } else if (checkValue === "金") {
    msg.style.backgroundColor = "#cccc00";
  } else if (checkValue === "外貨預金") {
    msg.style.backgroundColor = "#33ff33";
  } else {
    msg.style.backgroundColor = "#ff99ff";
  }
};

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = radioes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var rd = _step2.value;
    rd.addEventListener("change", onChangeEvent3);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}