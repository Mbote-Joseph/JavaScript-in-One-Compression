// This are ways to call a funcction
// The main purpose of call and apply is to change the Value of this.

// call
let o = {
  carId: 123,
  getId: function () {
    return this.carId;
  },
};
let newCar = { carId: 456 };
console.log(o.getId.call(newCar)); //456

//apply
let o = {
  carId: 123,
  getId: function (prefix) {
    return prefix + this.carId;
  },
};
let newCar = { carId: 456 };
console.log(o.getId.apply(newCar, ["ID : "]));
// ID : 456

// bind
// - It is used to copy the fuction and also change 'this' value.

let o = {
  carId: 123,
  getId: function () {
    return this.carId;
  },
};
let newCar = { carId: 456 };
let newFunction = o.getId.bind(newCar);
console.log(newFunction()); //456
