const images = document.querySelectorAll('[data-src]');
const options = {threshold: .5};
function preloadImages(img) {
    const source = img.getAttribute("data-src")
    if (!source){
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver (
    (entries) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
            }
            else{
                preloadImages(entry.target)
            }
        })
        
    },
    options
);

images.forEach(img => {
    io.observe(img);
})

let todayDate = document.lastModified
document.querySelector('#last-modified').innerHTML = "Last Modified: " + todayDate

nav = document.querySelector("#nav");
hamButton = document.querySelector("#ham-icon");
menu = document.querySelector("#mobile-menu");
let menuOpen = false;
hamButton.addEventListener("click", ()=> {
    if(!menuOpen)  {
      hamButton.classList.add('open');
      menu.classList.add('open');
      menuOpen = true;
    }
    else {
      hamButton.classList.remove('open');
      menu.classList.remove('open');
      menuOpen = false;
    }
  // nav.style.flex.direction = "column";
});

// Weather Forecast
const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad?unitGroup=us&key=5WRNLWGHZZSTGCT4HG57TDCM6&contentType=json";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = t.toFixed(1);
    document.querySelector("#maxt").textContent = data.days[0].tempmax;
    document.querySelector("#mint").textContent = data.days[0].tempmin;
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    // document.querySelector('#ws').textContent = data.currentConditions.windspeed;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#hum').textContent = data.currentConditions.humidity;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';
    // console.log(data);

    //Day 1
    document.querySelector("#maxt1").textContent = data.days[1].tempmax;
    document.querySelector("#mint1").textContent = data.days[1].tempmin;
    let image1 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[1].icon}.svg`;
    document.querySelector('#weather_icon1').src = image1;
    document.querySelector('#condition1').textContent =  data.days[1].conditions;
    document.querySelector('#weather_icon1').alt= data.days[1].conditions + ' icon';
    
    //Day 2
    document.querySelector("#maxt2").textContent = data.days[2].tempmax;
    document.querySelector("#mint2").textContent = data.days[2].tempmin;
    let image2 = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.days[2].icon}.svg`;
    document.querySelector('#weather_icon2').src = image2;
    document.querySelector('#condition2').textContent =  data.days[2].conditions;
    document.querySelector('#weather_icon2').alt= data.days[2].conditions + ' icon';
  };
getWeather();