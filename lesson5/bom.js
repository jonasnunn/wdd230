const list = document.querySelector("#list");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    input.focus();
});



// button.addEventListener('click', () => {
//     if (input != ""){
//         console.log(input)
//         var newLi = document.createElement("li");
//         var delButton = document.createElement("button");
//         newLi.textContent = "Alma 5";
//         console.log(newLi)
//         delButton.innerHTML = "&#120";
//         newLi.append(delButton);
//         list.appendChild(newLi);
//         delButton.addEventListener("click", function() {
//             newLi.remove();
//         })
//         // input.setFocus();
//         input.innerHTML = ""
//     }
// });