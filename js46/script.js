const doc = document;
const btn1 = doc.getElementById("js-btn1");
const URL = "https://weather.tsukumijima.net/api/forecast/city/";

const div3 = doc.getElementById("div3");
const btn2 = doc.getElementById("js-btn2");

const HttpFetchAPI = async () => {
    try{
        const cityId = "016010";
        const res = await fetch(`${URL}${cityId}`);
        const resJson =  await res.json();
        console.log(`地点${cityId} : 札幌市の情報を取得しました`);
        console.log(resJson);
    }catch(err){
        console.error(err);
    }
}

btn1.addEventListener("click",HttpFetchAPI);


const displayJsonData = (resJson) => {
    const param1 = doc.createElement("p");
    const param2 = doc.createElement("p");
    const loc = resJson.location;
    const weather = resJson.forecasts[0].detail;
    param1.textContent = `場所 : ${loc.area+" " + loc.city+" "+loc.district}`;
    div3.appendChild(param1);
    param2.textContent = `天気 : ${weather.weather}`;
    div3.appendChild(param2);
    console.log(resJson.location);
}

const displayBody = async () => {
    try{
        const cityId = "017010";
        const res = await fetch(`${URL}${cityId}`);
        const resJson =  await res.json();

        console.log(resJson);
        displayJsonData(resJson);
    }catch(err){
        console.error(err);
    }
}


btn2.addEventListener("click",displayBody);