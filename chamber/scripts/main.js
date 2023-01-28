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
document.querySelector('#date').innerHTML = '&copy ' + year + " Jonas Nunn";

