"use strict";

var doc = document;
var in1 = doc.getElementById("js-input1");
var in2 = doc.getElementById("js-input2");
var in3 = doc.getElementById("js-input3");

var onInputEvent1 = function onInputEvent1() {
  console.log("\n---- Q1 ----");
  console.log("".concat(in1.value));
};

in1.addEventListener('input', onInputEvent1);

var onInputEvent2 = function onInputEvent2() {
  console.log("\n---- Q2 ----");
  console.log("".concat(in2.value));
};

in2.addEventListener('input', onInputEvent2);

var onInputEvent3 = function onInputEvent3() {
  console.log("\n---- Q3 ----");
  console.log("".concat(in3.value));
};

in3.addEventListener('input', onInputEvent3);