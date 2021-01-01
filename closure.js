let app = (function () {
  let carId = 123;
  let getId = function () {
    return carId;
  };

  // This Is start of a closure.
  return {
    getId: getId,
  };
  // This is the end of the closure.
})();
console.log(app.getId());

// OR
function closure() {
  let name = "Mbote Joseph";
  function sayMyName() {
    console.log(name);
  }
  return sayMyName;
}
let value = closure();
value(); //Mbote Joseph

// Closure using Arrow functions
let test = () => {
  let school = "JKUAT";
  let getSchool = () => {
    console.log(school);
  };
  return getSchool;
};
let result = test();
result(); //JKUAT

// Another type of closure
function addNumbers(x) {
  return function (y) {
    return x + y;
  };
}
let add = addNumbers(10);
console.log(add(2));
// Another weired way to call it is :-
console.log(addNumbers(6)(7));
