
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
const openModal = function() {
  modal.style.display = "block";
}

btn.onclick = openModal;

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
  openModal();
  }, 5 * 1000)


// Text and Background color changer by user input with error message

  document.addEventListener('DOMContentLoaded', () => {
    const textColorInput = document.getElementById('textColor');
    const bgColorInput = document.getElementById('bgColor');
    const applyBtn = document.getElementById('applyBtn');
  
    // Function to validate if the input is a valid color
    function isValidColor(color) {
      const s = new Option().style;
      s.color = color;
      return s.color !== '';
    }
  
    applyBtn.addEventListener('click', () => {
      const newTextColor = textColorInput.value;
      const newBgColor = bgColorInput.value;
  
      if (newTextColor) {
        if (isValidColor(newTextColor)) {
          document.body.style.color = newTextColor;
        } else {
          alert("Invalid text color entered. Please try again.");
        }
      }
  
      if (newBgColor) {
        if (isValidColor(newBgColor)) {
          document.body.style.backgroundColor = newBgColor;
        } else {
          alert("Invalid background color entered. Please try again.");
        }
      }
    });
  });