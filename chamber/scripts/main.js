// Hamburger Button
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive', );
});

//Modified Date
let currentDate = document.lastModified
document.querySelector('#last-modified').innerHTML = "Last Modified: " + currentDate

// Current Date
let date = new Date();
let year = date.getFullYear();
let today = date.getDate();
let month = date.getMonth();
let day = date.getDay();
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
document.querySelector('#date-header').innerHTML = days[day] + ", " + today + " " + months[month] + " " +  year;
document.querySelector('#date-footer').innerHTML = '&copy ' + year + " Jonas Nunn";

// Message for monday or tuesday
if (day == 1 || day == 2){
    document.querySelector("#banner").style.display = "block";
}

localStorage.setItem("name", "Jonas Nunn - Permanent")
sessionStorage.setItem("Current Class", "WDD 230 - not Permanent")



// Windchill calculations
const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/allen%2C%20tx?unitGroup=us&key=5WRNLWGHZZSTGCT4HG57TDCM6&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = t.toFixed(1);
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector('#ws').textContent = data.currentConditions.windspeed;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';
    console.log(data);
  };
getWeather();


const temp = document.querySelector("#t").textContent;
const wSpeed = document.querySelector("#ws").textContent;
let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wSpeed, 0.16)) + (.04275*temp*Math.pow(wSpeed, 0.16)));

if (temp <= 50 && wSpeed >= 3) {
    const windChill = document.querySelector(".wind-chill")
    windChill.textContent = chill;
}