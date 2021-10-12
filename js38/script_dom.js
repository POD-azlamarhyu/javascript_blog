let doc = document;
let js_parag = doc.getElementsByTagName("h2");

for(let i=0;i < js_parag.length;i++){
    console.log(js_parag[i]);
}

let doc = document;
let js_h2 = doc.getElementById("js-head-2");
let js_parag = doc.getElementById("js-parag");

console.log(js_h2);
console.log(js_parag);
"use strict";

let doc = document;
let js_parag = doc.getElementsByClassName("js-parag");

for(let i=0;i < js_parag.length;i++){
    console.log(js_parag[i]);
}

let doc = document;
let js_parag = doc.getElementsByTagName("h2");

for(let i=0;i < js_parag.length;i++){
    console.log(js_parag[i]);
}

let doc = document;
let js_parag = doc.getElementsByName("js-div");

for(let i=0;i < js_parag.length;i++){
    console.log(js_parag[i]);
}

let doc = document;
let js_qs = doc.querySelector("div");
let js_qsa = doc.querySelectorAll("div");
console.log(js_qs);

for(let i=0;i < js_qsa.length;i++){
    console.log(js_qsa[i]);
}