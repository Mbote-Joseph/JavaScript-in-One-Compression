// In Array "every" keyword plays a very important role.
let isEven = (element) => {
  return element % 2 === 0;
};
let results = [2, 4, 6, 8, 10].every(isEven);
console.log(results);

// This can be accomplished by a single line of code using callback functions
// This helps to keep the code short.
let isEvenNumber = [2, 3, 4, 5, 6, 7, 8].every((element) => element % 2 === 0);
console.log(isEvenNumber);

const myNumber = [4, 6, 9, 21, 34, 55, 67, 69, 89];
myNumber[2] = 32;
console.log(myNumber);
