"use strict";

var doc = document;
var elemMain = doc.createElement("main");
var elemH2 = doc.createElement("h2");
var elemParam = doc.createElement("p");
var elemDiv = doc.createElement("div");
var elemLink = doc.createElement("a");
var nav = doc.getElementById("nav");
var navChild1 = doc.getElementById("nav1");
var navChild2 = doc.getElementById("nav2");
var navChild3 = doc.getElementById("nav3");
var elemChenge = doc.createElement("p");
var footer = doc.getElementById("ftr");
var foo1 = doc.getElementById("foo2");
elemH2.textContent = "証券口座を作ろう";
elemParam.textContent = "証券口座は現代の富の魔法です.";
elemMain.appendChild(elemH2);
elemMain.appendChild(elemParam); //クラス名とidを決定している

nav.setAttribute("class", "navigation");
elemDiv.id = "nav4";
elemDiv.textContent = "About";
nav.insertBefore(elemDiv, navChild1);
elemLink.href = "https://www.rakuten-bank.co.jp/";
elemLink.textContent = "リンク";
elemChenge.textContent = "楽天銀行・楽天証券";
elemChenge.re;
nav.after(elemMain);
navChild3.before(elemLink);
elemParam.replaceWith(elemChenge);
footer.removeChild(foo1);