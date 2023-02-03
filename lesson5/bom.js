const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener('click', () => {
    if (input != ""){
        console.log(input)
        var newLi = document.createElement("li");
        var delButton = document.createElement("button");
        newLi.textContent = "Alma 5";
        console.log(newLi)
        delButton.innerHTML = "&#120";
        newLi.append(delButton);
        list.appendChild(newLi);
        delButton.addEventListener("click", function() {
            newLi.remove();
        })
        // input.setFocus();
        input.innerHTML = ""
    }
});


