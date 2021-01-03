// what fill does is to replace all the elements with the given value
let myValues = [2, 4, 6, 8, 9, 10];
console.log(myValues.fill("J"));

// You can also specify the position fill should

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.fill("M", 3)); //it will start at index 3

//We can also specify the range
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number.fill("M", 3, 5)); //it will start at index 3 and stop at index 5

// Fiter on the other hand is used to generate a new array
//It expects us to pass a call back function

let randomNumbers = [23, 56, 89, 96, 55, 48, 78, 96, 36];
let results = randomNumbers.filter((num) => num % 2 == 0);
console.log(results);
