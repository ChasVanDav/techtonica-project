// First up, let's create a new list item and store it in a variable.
var newListItem = document.createElement('li');

// Now let's update the text content of that list item.
newListItem.textContent = 'Jalapenos';

// And finally, let's add that list item as a child of the ul.
document.querySelector('ul').appendChild(newListItem);


//Adding checkboxes
// Get the unordered list by id
const ul = document.getElementById("ingredientList");

// Get all list items
const listItems = ul.getElementsByTagName("li");

// Loop through each list item
for (let i = 0; i < listItems.length; i++) {
    const li = listItems[i];

    // Create a checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Add an event listener to the checkbox
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('strikethrough');
        } else {
            li.classList.remove('strikethrough');
        }
    });

    // Prepend the checkbox to the list item
    li.prepend(checkbox);
}