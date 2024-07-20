//adding a new item to the ul list
// create a new list item and store it in a variable.
var newListItem = document.createElement("li");

// update the text content of that list item.
newListItem.textContent = "Onions";

//  add that list item as a child of the ul.
document.querySelector("ul").appendChild(newListItem);


//adding checkboxes
// Get the unordered list by id
const ul = document.getElementById("ingredientList");

// Get all list items
const listItems = ul.getElementsByTagName("li");

// loop through each list item
for (let i = 0; i < listItems.length; i++) {
    const li = listItems[i];

    // checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
//adding strikethrough feature 
    // event listener for checkbox
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            li.classList.add("strikethrough");
        } else {
            li.classList.remove("strikethrough");
        }
    });

    // prepend the checkbox to the list item
    li.prepend(checkbox);
}