const { type } = require("os");

typeof 1; //number
typeof true; //boolean
typeof "Hello"; //String
typeof function () {}; //function
typeof {}; //Object
typeof null; //Object
typeof undefined; //indefined
typeof NaN; //number

// Common Type conversions
//- used to convert from one type to another type

//Convert to String
let foo = 55;
foo.toString();

//Convert String to integer
Number.parseInt("55"); //55 as a number

//Convert String to Number
Number.parseFloat("55.99"); //55.99 as a number
