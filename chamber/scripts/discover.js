if (!localStorage.getItem("lastVisit")){
    localStorage.setItem("lastVisit", Date.now())
    document.querySelector("#diff").innerHTML = "Welcome New Visitor";
    console.log("First if section")
}
else {
    let currentDate = Date.now();
    let lastDate = localStorage.getItem("lastVisit");
    let difference = (currentDate - lastDate) / 1000 / 60 / 60 / 24;
    difference = Math.round(difference)
    document.querySelector("#diff").innerHTML = difference;
    localStorage.setItem("lastVisit", Date.now())
}

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
            // console.log(entries);
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