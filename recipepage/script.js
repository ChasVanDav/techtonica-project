
//adding checkboxes
// Get the unordered list by id
const ul = document.getElementById("ingredientList");

// Get all list items
const listItems = ul.getElementsByClassName("ingredient");

// loop through each list item
for (let i = 0; i < listItems.length; i++) {
    const li = listItems[i];

    // checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = '5px';
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

//pop up window
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

setTimeout(() => {
  // call modal open function
  }, 30 * 1000)