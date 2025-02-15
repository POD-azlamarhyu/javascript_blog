let sample = [10,30,400,1,33,45,3,52,6];

console.log(sample);
console.log(sample.length);

sample = [10,30,400,1,33,45,3,52,6];

sample.pop()
console.log(sample);

sample = [10,30,400,1,33,45,3,52,6];

sample.push(0)
console.log(sample);



sample.shift();
console.log(sample);

sample.unshift();
console.log(sample);


sample.splice(1,2);
console.log(sample);

sample = [10,30,400,1,33,45,3,52,6];

console.log(sample.reverse());

console.log(sample.sort());

sample = [10,30,400,1,33,45,3,52,6];

console.log(sample.slice(1));
console.log(sample.slice(1,3));

sample = [10,30,400,1,33,45,3,52,6];

let sum = 0;

sample.reverse().forEach((elem) => {
    sum += elem;
})
console.log(sum);

const filterAry = sample.filter((elem)=> {
    return 10 < elem && elem < 200;
})
console.log(filterAry);

sample.map((elem) => {
    console.log(elem);
})

let bool = sample.every((elem)=>{
    return 0 < elem && elem <= 1000;
})

console.log(bool);

bool = sample.every((elem)=>{
    return 120 === elem;
})

console.log(bool);

bool = sample.some((elem)=>{
    return elem < 0 ;
})

console.log(bool);

bool = sample.some((elem)=>{
    return 100 <  elem;
})

console.log(bool);