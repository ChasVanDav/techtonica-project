//step 6: Try using JS DOM manipulation to change the text of the first li to "YAY I WORK""
var firstLi = document.querySelector('li');
firstLi.textContent = 'YAY I WORK';

//step 7: Using DOM manipulation add one more li to the end of your list, give it all the information needed
const newLi = document.createElement('li');
newLi.textContent = 'this is for step 7 of the knowledge check';
newLi.textContent = 'I am learning Javascript and getting pretty good at it!';
list.appendChild(newLi);

//step 8: Using DOM manipulation change the color of the person's hometown
const hometownElement = document.getElementById('hometown');
hometownElement.style.color = 'orange'; 

