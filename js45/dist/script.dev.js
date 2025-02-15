"use strict";

var doc = document;
var in1 = doc.getElementById("js-input-1");
var btn1 = doc.getElementById("js-btn-1");
var colorAry = ["#FFD489", "#FFB64D", "#FFE543", "#C3FF43", "#82FF43", "#43FFAA", "#5FFAFF", "#5FBDFF", "#5F6DFF"];
var bg = doc.getElementById("js-submit-2");
var jsSub = doc.getElementById("js-submit-3");
var btn2 = doc.getElementById("js-btn-2");
var btn3 = doc.getElementById("js-btn-3");
var in2 = doc.getElementById("js-input-2");

var onClickEvent1 = function onClickEvent1() {
  console.log("".concat(in1.value));
};

var randomColor = function randomColor() {
  var i = Math.floor(Math.random() * (colorAry.length + 1));
  return colorAry[i];
};

var onClickEvent2 = function onClickEvent2() {
  bg.style.backgroundColor = randomColor();
};

var onClickEvent3 = function onClickEvent3() {
  if (in2.value === null || in2.value === "") {
    confirm("値が入力されたいません");
  } else {
    console.log(in2.value);
  }
};

btn1.addEventListener("click", onClickEvent1);
btn2.addEventListener("click", onClickEvent2);
btn3.addEventListener("click", onClickEvent3);