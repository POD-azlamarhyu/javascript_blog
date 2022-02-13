const doc = document;
const div2 = doc.getElementById("div2");
const URL = "https://weather.tsukumijima.net/api/forecast";

const HttpFetchAPI = async() => {
    try{
        const cityRes = await fetch("https://weather.tsukumijima.net/primary_area.xml");
        const city = await cityRes.json();
        console.log(cityRes);

        const cityId = 016010;
        const res = fetch(`${URL}/City/${cityId}`);
    }
}