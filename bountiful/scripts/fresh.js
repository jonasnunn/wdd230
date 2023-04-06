const url = "https://andejuli.github.io/wdd230/fruit.json";

// Event listener on submit button
let submitBut = document.querySelector("#sb");
let myform = document.querySelector("#myform");
let info = document.querySelector("#info");
submitBut.addEventListener("click", () => {
    myform.style.display = "none";
    info.style.display = "grid";
    setFormInfo();
    console.log("ran")
})

// declare global variables
let carbs = 0;
let protein = 0;
let fat = 0;
let calories = 0;
let sugar = 0;

let name1;
let name2;
let name3;
let name4;
let name5;
let car1;
let pro1;
let fat1;
let cal1;
let sug1;
let car2;
let pro2;
let fat2;
let cal2;
let sug2;
let car3;
let pro3;
let fat3;
let cal3;
let sug3;
let car4;
let pro4;
let fat4;
let cal4;
let sug4;
let car5;
let pro5;
let fat5;
let cal5;
let sug5;

const currentDate = new Date().toISOString().slice(0, 10);

function getDrinkCounter() {
    return drinkCounter;
}

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    setFruit(data);
}
getFruitData();


const setFruit = (data) => {
    let r1 = Math.floor(Math.random() * 38)
    let r2 = Math.floor(Math.random() * 38)
    let r3 = Math.floor(Math.random() * 38)
    let r4 = Math.floor(Math.random() * 38)
    let r5 = Math.floor(Math.random() * 38)

    let ftext = document.querySelector("#fruitlabel1")
    ftext.textContent = data[r1].name;
    name1 = data[r1].name;
    let ftext2 = document.querySelector("#fruitlabel2")
    ftext2.textContent = data[r2].name;
    name2 = data[r2].name;
    let ftext3 = document.querySelector("#fruitlabel3")
    ftext3.textContent = data[r3].name;
    name3 = data[r3].name;
    let ftext4 = document.querySelector("#fruitlabel4")
    ftext4.textContent = data[r4].name;
    name4 = data[r4].name;
    let ftext5 = document.querySelector("#fruitlabel5")
    ftext5.textContent = data[r5].name;
    name5 = data[r5].name;


    car1 = data[r1].nutritions.carbohydrates;
    pro1 = data[r1].nutritions.protein;
    fat1 = data[r1].nutritions.fat;
    cal1 = data[r1].nutritions.calories;
    sug1 = data[r1].nutritions.sugar;
    
    car2 = data[r2].nutritions.carbohydrates;
    pro2 = data[r2].nutritions.protein;
    fat2 = data[r2].nutritions.fat;
    cal2 = data[r2].nutritions.calories;
    sug2 = data[r2].nutritions.sugar;

    car3 = data[r3].nutritions.carbohydrates;
    pro3 = data[r3].nutritions.protein;
    fat3 = data[r3].nutritions.fat;
    cal3 = data[r3].nutritions.calories;
    sug3 = data[r3].nutritions.sugar;

    car4 = data[r4].nutritions.carbohydrates;
    pro4 = data[r4].nutritions.protein;
    fat4 = data[r4].nutritions.fat;
    cal4 = data[r4].nutritions.calories;
    sug4 = data[r4].nutritions.sugar;

    car5 = data[r5].nutritions.carbohydrates;
    pro5 = data[r5].nutritions.protein;
    fat5 = data[r5].nutritions.fat;
    cal5 = data[r5].nutritions.calories;
    sug5 = data[r5].nutritions.sugar;
}

const setFormInfo = () => {
    let name = document.querySelector("#nameP");
    name.textContent = document.querySelector("#fname").value;
    let email = document.querySelector("#emailP");
    email.textContent = document.querySelector("#email").value;
    let phone = document.querySelector("#phoneP");
    phone.textContent = document.querySelector("#phone").value;
    
    let check1 = document.querySelector("#one");
    let check2 = document.querySelector("#two");
    let check3 = document.querySelector("#three");
    let check4 = document.querySelector("#four");
    let check5 = document.querySelector("#five");
    let run1 = true;
    let run2 = true;
    let run3 = true;
    let run4 = true;
    let run5 = true;

    for (i = 0; i < 3; i++){ 
      // console.log(i)
      
      if (check1.checked && run1){
        run1 = false;
        if (i == 0){
          let fruit1 = document.querySelector("#fruit1");
          fruit1.textContent = name1
        }
        else if (i == 1){
          let fruit2 = document.querySelector("#fruit2");
          fruit2.textContent = name1
        }
        else if (i == 2){
          let fruit3 = document.querySelector("#fruit3");
          fruit3.textContent = name1
        }
        carbs += car1;
        protein += pro1;
        fat += fat1;
        calories += cal1;
        sugar += sug1;
      }

      else if (check2.checked && run2){
        run2 = false;
        if (i == 0){
          let fruit1 = document.querySelector("#fruit1");
          fruit1.textContent = name2
        }
        else if (i == 1){
          let fruit2 = document.querySelector("#fruit2");
          fruit2.textContent = name2
        }
        else if (i == 2){
          let fruit3 = document.querySelector("#fruit3");
          fruit3.textContent = name2
        }
        carbs += car2;
        protein += pro2;
        fat += fat2;
        calories += cal2;
        sugar += sug2;
      }
      else if (check3.checked && run3){
        run3 = false;
        if (i == 0){
          let fruit1 = document.querySelector("#fruit1");
          fruit1.textContent = name3
        }
        else if (i == 1){
          let fruit2 = document.querySelector("#fruit2");
          fruit2.textContent = name3
        }
        else if (i == 2){
          let fruit3 = document.querySelector("#fruit3");
          fruit3.textContent = name3
        }
        carbs += car3;
        protein += pro3;
        fat += fat3;
        calories += cal3;
        sugar += sug3;
      }
      else if (check4.checked && run4){
        run4 = false;
        if (i == 0){
          let fruit1 = document.querySelector("#fruit1");
          fruit1.textContent = name4
        }
        else if (i == 1){
          let fruit2 = document.querySelector("#fruit2");
          fruit2.textContent = name4
        }
        else if (i == 2){
          let fruit3 = document.querySelector("#fruit3");
          fruit3.textContent = name4
        }
        carbs += car4;
        protein += pro4;
        fat += fat4;
        calories += cal4;
        sugar += sug4;
      }
      else if (check5.checked && run5){
        run5 = false;
        if (i == 0){
          let fruit1 = document.querySelector("#fruit1");
          fruit1.textContent = name5
        }
        else if (i == 1){
          let fruit2 = document.querySelector("#fruit2");
          fruit2.textContent = name5
        }
        else if (i == 2){
          let fruit3 = document.querySelector("#fruit3");
          fruit3.textContent = name5
        }
        carbs += car5;
        protein += pro5;
        fat += fat5;
        calories += cal5;
        sugar += sug5;
      }
    }

    let spec = document.querySelector("#spec");
    spec.textContent = document.querySelector("#message").value;
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
