const doc = document;
const contry = doc.getElementById("js-select");
const checkboxes = doc.getElementsByClassName("cb");
const radioes = doc.getElementsByClassName("radio");
const msg = doc.getElementById("js-msg");
const bg = doc.getElementById("js-msgbg");

const onChangeEvent1 = () => {
    console.log(`${contry.value}`);
}


const onChangeEvent2 = () =>{
    console.log(" ------- ");
    for(let i = 0;i < checkboxes.length;i++){
        if(checkboxes[i].checked){
            console.log(checkboxes[i].value);
        }
    }
    console.log(" ------- ");
}


contry.addEventListener("change",onChangeEvent1);

// js_cb1.addEventListener("change",onChangeEvent2);

for(let cb of checkboxes){
    cb.addEventListener("change",onChangeEvent2);
}

const onChangeEvent3 = () =>{
    let checkValue;
    for(let i = 0;i < radioes.length;i++){
        if(radioes[i].checked){
            checkValue = radioes[i].value;
        }
    }

    msg.innerHTML = checkValue;
    if(checkValue === "株式"){
        msg.style.backgroundColor = "#99ffff";
    }else if(checkValue === "債権"){
        msg.style.backgroundColor = "#ff9999";
    }else if(checkValue === "不動産"){
        msg.style.backgroundColor = "#66cccc";
    }else if(checkValue === "投資信託"){
        msg.style.backgroundColor = "#ffcc66";
    }else if(checkValue === "金"){
        msg.style.backgroundColor = "#cccc00";
    }else if(checkValue === "外貨預金"){
        msg.style.backgroundColor = "#33ff33";
    }else{
        msg.style.backgroundColor = "#ff99ff";
    }
}

for(let rd of radioes){
    rd.addEventListener("change",onChangeEvent3);
}
