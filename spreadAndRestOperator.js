//Spread operator
let row = [4, 6, 7, 7, 9, 5, 6, 7, 9, 2, 3, 4, 7, 11];
let result = Math.max(...row);
console.log(result);
//It spread an object or an array

//Rest Operator- It is mainly used in the function parameter.
function add(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(add(...row));
