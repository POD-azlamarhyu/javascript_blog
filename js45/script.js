
const doc = document;
const in1 = doc.getElementById("js-input-1");
const btn1 = doc.getElementById("js-btn-1");
const colorAry = ["#FFD489","#FFB64D","#FFE543","#C3FF43","#82FF43","#43FFAA","#5FFAFF","#5FBDFF","#5F6DFF"];
const bg = doc.getElementById("js-submit-2");
const jsSub = doc.getElementById("js-submit-3");

const btn2 = doc.getElementById("js-btn-2");
const btn3 = doc.getElementById("js-btn-3");
const in2 = doc.getElementById("js-input-2");

const onClickEvent1 = () => {
    console.log(`${in1.value}`);
}

const randomColor = () =>{
    let i = Math.floor(Math.random()*(colorAry.length+1));
    return colorAry[i];
}

const onClickEvent2 = () => {
    bg.style.backgroundColor = randomColor();
}

const onClickEvent3 = () =>{
    if(in2.value === null || in2.value === ""){
        confirm("値が入力されたいません");
    }else{
        console.log(in2.value);
    }
}

btn1.addEventListener("click",onClickEvent1);
btn2.addEventListener("click",onClickEvent2);
btn3.addEventListener("click",onClickEvent3);

