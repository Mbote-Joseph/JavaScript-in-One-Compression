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
