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
            console.log(entries);
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