const doc = document;
const contry = doc.getElementById("js-select");
const checkbox = doc.querySelectorAll("input");

const onChangeEvent1 = () => {
    console.log(`${contry.value}`);
}




contry.addEventListener("change",onChangeEvent1);

for(let cb of checkbox){
    cb.addEventListener("change",() => {
        console.log(`${cb.value}`);
    });
}