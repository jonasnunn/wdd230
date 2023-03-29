const url = "https://andejuli.github.io/wdd230/fruit.json";

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayFruit(data);
}

const displayFruit = (data) => {
  
    let r1 = Math.floor(Math.random() * 38)
    let r2 = Math.floor(Math.random() * 38)
    let r3 = Math.floor(Math.random() * 38)
    let r4 = Math.floor(Math.random() * 38)
    let r5 = Math.floor(Math.random() * 38)
    
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

    console.log(data[r1].nutritions.carbohydrates)
    
    // let protein = 
    // let fat = 
    // let sugar = 
    // let calories = 

}

getFruitData();