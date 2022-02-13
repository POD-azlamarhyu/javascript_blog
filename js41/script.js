const doc = document;
const jsRest =  doc.getElementById("js-rest");
const jsGraph = doc.getElementById("js-graph");
const div = doc.getElementById("js-div");

const engel = doc.getElementById("js-engel");
const rg = doc.getElementById("js-rg");

console.log(jsRest.getAttribute("id"));
console.log(jsGraph.getAttribute("class"));

console.log(jsRest.id);
console.log(jsGraph.className);

let attribute = doc.createAttribute("lang");
attribute.value = "jp";
jsRest.setAttributeNode(attribute);

attribute = doc.createAttribute("class");
attribute.value = "cs-div";
div.setAttributeNode(attribute);

engel.setAttribute("class","cs-engel");
rg.setAttribute("id","alt-id");
engel.target.value = "_brank";
