// The deafault parameter should be the last in the list of parameters.

let trackCar = function (carId, city = "New York") {
  console.log(`Tracking  ${carId} in ${city}.`);
};

console.log(trackCar(123));
//Tracking 123 in New York.

console.log(trackCar(456, "Chicago"));
// Tracking 456 in Chicago.
