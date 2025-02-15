let doc = document;
let elemMain = doc.createElement("main");
let elemH2 = doc.createElement("h2");
let elemParam = doc.createElement("p");
let elemDiv = doc.createElement("div");
let elemLink = doc.createElement("a");
const nav = doc.getElementById("nav");
const navChild1 = doc.getElementById("nav1");
const navChild2 = doc.getElementById("nav2");
const navChild3 = doc.getElementById("nav3");
const elemChenge = doc.createElement("p");
const footer = doc.getElementById("ftr");
const foo1 = doc.getElementById("foo2");

elemH2.textContent = "証券口座を作ろう";
elemParam.textContent = "証券口座は現代の富の魔法です.";

elemMain.appendChild(elemH2);
elemMain.appendChild(elemParam);

//クラス名とidを決定している
nav.setAttribute("class","navigation");
elemDiv.id = "nav4";

elemDiv.textContent = "About";
nav.insertBefore(elemDiv,navChild1);

elemLink.href = "https://www.rakuten-bank.co.jp/";
elemLink.textContent = "リンク";
elemChenge.textContent = "楽天銀行・楽天証券";
elemChenge.re
nav.after(elemMain);
navChild3.before(elemLink);

elemParam.replaceWith(elemChenge);

footer.removeChild(foo1);

