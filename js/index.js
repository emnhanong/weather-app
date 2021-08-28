const keyApi = "1c97e238dfc0a5bf8559d0722df9ce62";
const emptyData = "--";

const city = document.querySelector(".city-name");
const weather = document.querySelector(".weather");
const img_weather = document.querySelector(".img_weather");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunsire");
const sundown = document.querySelector(".sundown");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const inputSearch = document.querySelector("#search-input");



inputSearch.addEventListener("change", (e)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${keyApi}&lang=vi`)
    .then(response => response.json())
    .then((data)=>{
        console.log(data);
        city.innerHTML = data.name || emptyData;
        weather.innerHTML = data.weather[0].description || emptyData;
        img_weather.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.innerHTML = Math.round(data.main.temp) || emptyData;
     
        sunrise.innerHTML = moment.unix(data.sys.sunrise).format("H:mm") || emptyData;
        sundown.innerHTML = moment.unix(data.sys.sundown).format("H:mm") || emptyData;

        humidity.innerHTML = data.main.humidity || emptyData;
        wind.innerHTML = (data.wind.speed * 3.6).toFixed(2) || emptyData;

      
    })
})

