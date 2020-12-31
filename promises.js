// Promises are designed to work with asynchronous JavaScript
// -eg Timer

let promise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "Some Value");
});
console.log(promise);

// Settling a Promise
let promise = new Promise(function (resolve, rejct) {
  setTimeout(resolve, 100, "Some Value.");
});
promise.then(
  (value) => console.log("Fulfilled :" + value), //ran when resolved successfully.
  (error) => console.log("rejected :" + error) //ran when rejected/there is an error
);
