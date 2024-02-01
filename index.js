const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiid="54a4f4ddca166ee037d974b18c188b5e";

let cityinput=document.getElementById("input_city");
let buttonsearch=document.getElementById("button_search");

async function checkweather(city){
    try{
        const response = await fetch(apiurl+`&appid=${apiid}`+`&q=${city}`) 
        var data=await response.json();

        console.log(data);
        document.querySelector(".ctemp").innerHTML=Math.round(data.main.temp)+`°c`;
        document.querySelector(".ccity").innerHTML=city;
        document.querySelector("#humiditydata").innerHTML=Math.round(data.main.humidity)+`%`;
        document.querySelector("#windspeeddata").innerHTML=Math.round(data.wind.speed)+`km/hr`;

        if(data.weather[0].main=="Clear") {
            document.querySelector(".weather_logo").src = "clear.png";
        }else if(data.weather[0].main=="Mist"||data.weather[0].main=="Smoke") {
            document.querySelector(".weather_logo").src = "mist.png";
        }else if(data.weather[0].main=="Clouds") {
            document.querySelector(".weather_logo").src = "clouds.png";
        }else if(data.weather[0].main=="Rain") {
            document.querySelector(".weather_logo").src = "rain.png";}
        else if(data.weather[0].main=="Drizzle") {
            document.querySelector(".weather_logo").src = "drizzle.png";
        }else if(data.weather[0].main=="Snow") {
            document.querySelector(".weather_logo").src = "snow.png";}
        
        document.querySelector(".card").style.height="90%";
        document.querySelector(".content").style.display="flex";
        
    }catch{
        
        document.querySelector(".card").style.height="10%";
        document.querySelector(".content").style.display="none";
        alert("Invalid country name")
    }
}
buttonsearch.addEventListener("click",()=>{
    checkweather(cityinput.value);
})