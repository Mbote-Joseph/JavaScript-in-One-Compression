// functions help in creating reusable codes
// This is a short hand code
function isEven(element) {
  return element % 2 === 0;
}
console.log(isEven(5));
// OR - Using Arrow Functions
let isEvenNumber = (element) => {
  return element % 2 === 0;
};
console.log(isEvenNumber(5));
// It is Also the same as :-
function isNumberEven(element) {
  if (element % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isNumberEven(5));
