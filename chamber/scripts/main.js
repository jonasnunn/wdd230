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
if (day == 1 || day == 5){
    document.querySelector("#banner").style.display = "block";
}

