const url = "https://jonasnunn.github.io/wdd230/data.json"

async function getBusData() {
    const response = await fetch(url);
    // console.log(response)
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    displayCards(data.businesses);
    displayTable(data.businesses);
}
  
getBusData();


const displayCards = (businesses) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    businesses.forEach((businesses) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let website = document.createElement('h3');
      let phone = document.createElement('h3');
      let address = document.createElement('h3');
      let logo = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${businesses.name}`;
      website.textContent = `${businesses.website}`
      phone.textContent = `${businesses.phone}`
      address.textContent = `${businesses.address}`
            
      // Build the image portrait by setting all the relevant attribute
      logo.setAttribute('src', businesses.imageurl);
      logo.setAttribute('alt', `Logo of ${businesses.name}`);
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(website)
      card.appendChild(phone)
      card.appendChild(logo);
      card.appendChild(address);
  
      cards.appendChild(card);
    } // end of forEach loop
)} // end of function expression


function displayTable(businesses) {
  businesses.forEach((businesses) => {
    let tr = document.createElement("tr");
    let td_name = document.createElement("td");  
    let td_phone = document.createElement("td");  
    let td_website = document.createElement("td");  
    let td_address = document.createElement("td");  
    let td_mlevel = document.createElement("td");  

    td_name.textContent = `${businesses.name}`
    td_phone.textContent = businesses.phone   
    td_website.textContent = businesses.website
    td_address.textContent = businesses.address
    td_mlevel.textContent = businesses.mlevel
    
    tr.appendChild(td_name);
    tr.appendChild(td_phone);
    tr.appendChild(td_website);
    tr.appendChild(td_address);
    tr.appendChild(td_mlevel);

    document.querySelector("table").appendChild(tr);
  }) 
}


// Clicked card button 
cardBut = document.querySelector("#cards-but")
cardClass = document.querySelector(".cards")
listBut = document.querySelector("#list-but")
listClass = document.querySelector(".table")


cardBut.addEventListener('click', () => {
  console.log("clicked cards button");
  cardClass.style.display = "flex";
  listClass.style.display = "none";
});


// Event listener for list

listBut.addEventListener('click', () => {
  console.log("clicked list button");
  cardClass.style.display = "none";
  listClass.style.display = "block";
});