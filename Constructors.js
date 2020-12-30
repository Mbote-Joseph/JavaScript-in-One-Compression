// Constructor Functions.
// -It is used to instanciate new Objects.

function Car() {}
let car = new Car();

//this keyword in constructor Function

function Car(id) {
  this.carId = id;
}
let car = new Car(123);
console.log(car.carId);
//123

// Methods in constructor Functions
function Car(id) {
  this.carId = id;
  this.start = function () {
    console.log("Start : " + this.carId);
  };
}
let car = new Car(123);
car.start(); //Start : 123
