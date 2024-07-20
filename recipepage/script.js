// First up, let's create a new list item and store it in a variable.
var newListItem = document.createElement('li');

// Now let's update the text content of that list item.
newListItem.textContent = 'Jalapenos';

// And finally, let's add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem);

//Adding checkboxes
const ingredientList = document.getElementById("ingredientList");
let checkbox = document.createElement("input");

checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

let label = document.createElement("label");

label.htmlFor = "id";

label.appendChild(
    document.createTextNode("This creates the label for checkbox")
);

ingredientList.appendChild(checkbox);
ingredientList.appendChild(label);