// IIFE's - Imediately invoked Function Expressions

(function () {
  console.log("In function");
})();

// By using () parameter the function is called.

//OR

let app = (function () {
  let carId = 123;
  console.log("In function");
  return {};
})();
