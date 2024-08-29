/*
Write a JavaScript function that takes an array of numbers as input and returns a new array with all duplicates removed. Use the Set object to achieve this.

*/


// function removeDuplicates(arr) {
//     let unique = [];
//     arr.forEach(element => {
//         if (!unique.includes(element)) {
//             unique.push(element);
//         }
//     });
//     return unique;
// }

// const arrayWithDuplicates = [1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
// console.log(removeDuplicates(arrayWithDuplicates));


function removeDuplicates(arr) {
    //what is the input --- array
    //what output do I want --- set of an array (ie unique values)
    //.add() to add unique values to the Set
    //what data type am I working with 

    let unique = new Set();

    arr.forEach( element => {
        unique.add(element);
    })
    return [...unique];
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
console.log(removeDuplicates(arrayWithDuplicates));

