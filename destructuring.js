// Destructuring Arrays.

let carIds = [1, 2, 3];
let [car1, car2, car3] = carIds;
console.log(car1, car2, car3);
//1 2 3

let carId = [1, 2, 5];
let car1, remainingCars;
[car1, ...remainingCars] = carId;

console.log(car1, remainingCars);
//1 [2,5]

// Destructuring Objects

let car = { id: 5000, style: "convertible" };
let { id, style } = car;

console.log(id, style);
//5000 convertible

let car = { id: 5000, style: "covertible" };
let id, style;
({ id, style } = car);

console.log(id, style);
//5000 convertible
