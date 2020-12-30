// Arrow functions helps in making code concise.
// It should have :
// -Parameter ()
// -Arrow function symbol
// -Return value

let getId = () => 123;
console.log(getId); //123

// OR
let getId = (prefix) => prefix + 123;
console.log(getId("ID : ")); // ID : 123

// OR
let getId = (prefix, suffix) => prefix + 123 + suffix;
console.log(getId("ID : ", "!")); // ID : 123 !

// OR
let getId = (prefix, suffix) => {
  return prefix + 123 + suffix;
};
console.log(getId("ID : ", "!")); // ID : 123 !

// Note:
// -When returning a block of code curry braces are important and return keyword is required

// OR
let getId = (_) => 123;
console.log(getId()); //123
// Underscore may be used<It means a variable in Javascript>

// Arrow functions do not have their own "this" value.
// "this" refers to the enclosing context
