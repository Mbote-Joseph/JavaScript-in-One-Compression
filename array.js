// Array are used to store many items.
// We can perform diffrent operations in our arrays.
// -Adding
// -Removing
//-Inserting

// Adding
let values = []; //This is an empty array
values.push(33);
values.push(36);
console.log(values); //[33,36]

// Removing the Last Item
let counties = ["Nyandarua", "Kiambu", "Nairobi"];
let option = counties.pop();
console.log(option); //Nairobi

// Removing the first element in the Array.
let list = [45, 26, 4, 78, 96, 35, 48, 15];
let first = list.shift();
console.log(first); //45

// Removing an item as a specific index.
let numbers = [100, 54, 69, 78, 45, 12, 45, 89, 36, 45, 78, 96];
let luckyNumbers = numbers.splice(2, 1); //Gives the item at index 2 and only one element.
console.log(luckyNumbers); //69

// Note that one item is already removed.
let removeAndAdd = numbers.splice(3, 2, 11, 22, 33); // This removed 2 items from index 3 and then  insert the other items at index 3 ...
console.log(removeAndAdd); //(2) [45, 12]
console.log(numbers); //(12) [100, 54, 78, 11, 22, 33, 45, 89, 36, 45, 78, 96]

let test = numbers.join(", "); // Makes it one item.
console.log(test); //100, 54, 78, 11, 22, 33, 45, 89, 36, 45, 78, 96

// Array Iteration
let carIds = [
  { carId: 123, style: "Sedan" },
  { carId: 456, style: "convertible" },
  { carId: 789, style: "Sedan" },
];
carIds.forEach((car) => console.log(car));

carIds.forEach((car, index) => console.log(car, index));

// Array filtering
let carIds = [
  { carId: 123, style: "Sedan" },
  { carId: 456, style: "convertible" },
  { carId: 789, style: "Sedan" },
];
let convertibles = carIds.filter((car) => car.style === "convertible");

console.log(convertibles);

// Array Testing
let carIds = [
  { carId: 123, style: "Sedan" },
  { carId: 456, style: "convertible" },
  { carId: 789, style: "Sedan" },
];
let result = carIds.every((car) => car.carId > 0);
console.log(result); //true/false

// Locate for first Match
let carIds = [
  { carId: 123, style: "Sedan" },
  { carId: 456, style: "convertible" },
  { carId: 789, style: "Sedan" },
];
let car = carIds.find((car) => car.carId > 500);
console.log(car);
