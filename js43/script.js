const doc = document;
const in1 = doc.getElementById("js-input1");
const in2 = doc.getElementById("js-input2");
const in3 = doc.getElementById("js-input3");

const onInputEvent1 = ()=> {
    console.log("\n---- Q1 ----");
    console.log(`${in1.value}`);
}

in1.addEventListener('input',onInputEvent1);


const onInputEvent2 = ()=> {
    console.log("\n---- Q2 ----");
    console.log(`${in2.value}`);  
}

in2.addEventListener('input',onInputEvent2);

const onInputEvent3 = ()=> {
    console.log("\n---- Q3 ----");
    console.log(`${in3.value}`);  
}

in3.addEventListener('input',onInputEvent3);