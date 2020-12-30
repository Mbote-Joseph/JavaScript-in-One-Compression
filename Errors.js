// when anything goes wrong in javascript we want to take control and we need  a mechanism to handle that.
// We need to handle errors gracefully

let car = new Car();
console.log("Continuing...");
//Error

// Error handling using try and catch
try {
  let car = new Car();
} catch (error) {
  console.log("error: ", error);
}
console.log("Continuing ...");

// Handling Errors using try, catch and finally
// -Finally is always executed.
try {
  let car = new Car();
} catch (error) {
  console.log("error :", error);
} finally {
  console.log("This always executes");
}

// Developer defined errors
//throw

try {
  // Some code here ...
  throw new Error("My custom error");
} catch (error) {
  console.log("error :", error);
} finally {
  console.log("this always executes.");
}
