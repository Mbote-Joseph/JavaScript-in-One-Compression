// Prototypes helps in saving memory since the function is not kept being duplicated once called.

// Without Protypes.
function Car(id) {
  this.carId = id;
  this.start = function () {
    console.log("Start : " + this.carId);
  };
}
let car = new Car(123);
car.start(); //Start :123

// Using Prototypes
function Car(id) {
  this.carId = id;
}
Car.prototype.start = function () {
  console.log("Start : " + this.carId);
};
let car = new Car(456);
car.start(); //Start : 456

// Expanding objects using prototype.
// -Prototypes are used to expand objects and give new functionality to all instances of an object.

// String.prototype
String.prototype.hello = function () {
  return this.toString() + "Hello";
};
console.log("foo".hello()); //foo Hello
