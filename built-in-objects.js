// Common Built-in Object
//They include:-
//-String
//-Date
//-Math
//-Number

//String
let result = "Hello Mbote Joseph";
result = result.toLowerCase();
result = result.toUpperCase();
result = result.trim();

//Plus many more Operation under String Object.

//Math
let number = Math.random(); //Gives Random numbers between 0 & 1
let number1 = Math.random() * 50; //Gives Random numbers between 0 & 50
let res = Math.trunc(number);
let res1 = Math.trunc(number1);
let round = Math.round(number1);
let upper = Math.ceil(number1);
let floor = Math.floor(number1);

// Date
let date = new Date();
console.log(date);

let date1 = new Date().toDateString();
console.log(date1);

//Number
let results = 0 / 0;
console.log(Number.isNaN(results));
