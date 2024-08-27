/*
Write a JavaScript function that takes two numbers as input and returns the larger number. Use the ternary operator (condition? valueIfTrue : valueIfFalse) for this task.

if (condition){            condition ? valueIfTrue : valueIfFalse
  valueIfTrue
} else {
  valueIfFalse
}

*/


function findLargerNumber(num1, num2) {
    return (num1 > num2) ? num1 : num2
}


console.log(findLargerNumber(5, 1));//return 5
console.log(findLargerNumber(1, 7));//return 7
