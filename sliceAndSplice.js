// In slice we slice out the elements in the given range of values and prints them
//if the end point is not specified it slice up to the end and prints them
let array = [12, 23, 45, 69, 78, 25, 45, 23, 15];
console.log(array.slice(2, 6)); //[ 45, 69, 78, 25 ]
console.log(array.slice(2)); //[45, 69, 78, 25, 45, 23, 15]

// Splice can take up to 3 parameters
//-The starting index where the splicing starts
//-The number of items to be spliced
//-The Value to replace the spliced elements
let usersList = ["John", "Kang'ethe ", "Moses", "Joseph", "Macharia"];
usersList.splice(1, 2, "Hi");
console.log(usersList); //[ 'John', 'Hi', 'Joseph', 'Macharia' ]
