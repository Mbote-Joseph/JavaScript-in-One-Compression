// Inheritance help to avoid duplication of code.

class Vehicle {
  constructor() {
    this.type = "Car";
  }
  start() {
    return `Starting : ${this.type}`;
  }
}

class Car extends Vehicle {
  // Other features of sub class Car class
}

let car = new Car();
console.log(car.type); //Car

// Also
class Vehicle {
  constructor() {
    this.type = "Car";
  }
  start() {
    return `Starting : ${this.type}`;
  }
}

class Car extends Vehicle {
  constructor() {
    super(); // You need to call super() ---- super.start()
  }
  // Other features of sub class Car class
}

let car = new Car();
console.log(car.type); //Car
