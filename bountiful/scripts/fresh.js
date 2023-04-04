const url = "https://andejuli.github.io/wdd230/fruit.json";

// Event listener on submit button
let submitBut = document.querySelector("#sb");
let myform = document.querySelector("#myform");
let info = document.querySelector("#info");
submitBut.addEventListener("click", () => {
    myform.style.display = "none";
    info.style.display = "grid";
})

// declare variables
let r1;
let r2;
let r3;
let r4;
let r5;

let carbs;
let protein;
let fat;
let calories;
let sugar;

const currentDate = new Date().toISOString().slice(0, 10);

function getDrinkCounter() {
    return drinkCounter;
}

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayFruit(data);
    setNutritionData(data);
    setFormInfo(data);
}

getFruitData();

const displayFruit = (data) => {
    r1 = Math.floor(Math.random() * 38)
    r2 = Math.floor(Math.random() * 38)
    r3 = Math.floor(Math.random() * 38)
    r4 = Math.floor(Math.random() * 38)
    r5 = Math.floor(Math.random() * 38)

    let ftext = document.querySelector("#fruitlabel1")
    ftext.textContent = data[r1].name;
    let ftext2 = document.querySelector("#fruitlabel2")
    ftext2.textContent = data[r2].name;
    let ftext3 = document.querySelector("#fruitlabel3")
    ftext3.textContent = data[r3].name;
    let ftext4 = document.querySelector("#fruitlabel4")
    ftext4.textContent = data[r4].name;
    let ftext5 = document.querySelector("#fruitlabel5")
    ftext5.textContent = data[r5].name;
}


const setNutritionData = (data) => {
    carbs = data[r1].nutritions.carbohydrates + data[r2].nutritions.carbohydrates + data[r3].nutritions.carbohydrates
    protein = data[r1].nutritions.protein + data[r2].nutritions.protein + data[r3].nutritions.protein
    fat = data[r1].nutritions.fat + data[r2].nutritions.fat + data[r3].nutritions.fat
    calories = data[r1].nutritions.calories + data[r2].nutritions.calories + data[r3].nutritions.calories
    sugar = data[r1].nutritions.sugar + data[r2].nutritions.sugar + data[r3].nutritions.sugar
}

const setFormInfo = (data) => {
    let name = document.querySelector("#nameP");
    name.textContent = documnet.querySelector("formElement.firstname");
    let email = document.querySelector("#emailP");
    email.textContent = "joe@gmail.com";
    let phone = document.querySelector("#phoneP");
    phone.textContent = "469-744-4698";
    let fruit1 = document.querySelector("#fruit1");
    fruit1.textContent = data[r1].name;
    let fruit2 = document.querySelector("#fruit2");
    fruit2.textContent = data[r2].name;
    let fruit3 = document.querySelector("#fruit3");
    fruit3.textContent = data[r3].name;
    let spec = document.querySelector("#spec");
    spec.textContent = "Nothing";
    let date = document.querySelector("#date");
    date.textContent = currentDate;
    let carbP = document.querySelector("#carbsP");
    carbP.textContent = carbs;
    let proP = document.querySelector("#proP");
    proP.textContent = protein;
    let fatP = document.querySelector("#fatP");
    fatP.textContent = fat;
    let sugarP = document.querySelector("#sugarP");
    sugarP.textContent = sugar;
    let calP = document.querySelector("#calP");
    calP.textContent = calories;
}

// Local Storage drink count 
let drinkcount = 0;

function drinkCount(){
  if (localStorage.getItem("drinkcount")){
    drinkcount = Number(localStorage.getItem("drinkcount")) + 1;
    localStorage.setItem("drinkcount", drinkcount);
    // console.log("IF PART");
  }
  else {
    localStorage.setItem("drinkcount", 1)
    // console.log("ELSE PART");
  }
}
document.querySelector("#sb").addEventListener("click", drinkCount)

// formElement.name.value