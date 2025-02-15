let doc = document;
let doc_ans = doc.getElementById("js-ans");
doc_ans.innerHTML = "はい";

let doc_card = doc.getElementById("js-card");
doc_card.innerHTML = `<div><p>楽天カードとEPOSカードを使っています。</p></div>`;

let doc_qr = doc.getElementById("js-qr");
doc_qr.textContent = "d払い・AUPay・楽天Pay・SC・PayPayを使っています。";