const apiKey = "d71ce1e4b96b1a5b49e685724637f30d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#city-name");
const searchBtn = document.querySelector("#search-button")
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
    }
    else{
        var data = await response.json();
  
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="Image/clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="Image/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="Image/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="Image/mist.png";
        }
        else if(data.weather[0].main=="Wind"){
            weatherIcon.src="Image/wind.png";
        }
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display= "none";
    
    }

    }

    
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})