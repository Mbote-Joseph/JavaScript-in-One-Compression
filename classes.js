// Class Basic
class Car {}
let car = new Car();

// Constructor and Properties
// -A constructor is a function that get executed when a new instance of an object get executed

class Car {
  constructor(id) {
    this.id = id;
  }
}
let car = new Car(123);
console.log(car.id); //123

// OR
class Car {
  constructor(id) {
    this.id = id;
  }
}
let car = new Car(123);
car.id = 456;
console.log(car.id); //456

// Methods
// -Function that exist in an object

class Car {
  constructor(id) {
    this.id = id;
  }
  //Mthod- function keyword is not requiered
  identity() {
    return `Car Id : ${this.id}`;
  }
}
let car = new Car(123);
console.log(car.identity()); //Car Id : 123

// Exported Class
export class Animal {}
