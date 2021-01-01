const { listeners } = require("process");

// interpolation is used in joining diffrent strings in javascript.
// It is really a good way to use strings.
let fullName = "Mbote Joseph";
let email = "mbotejoseph001@gmail.com";
let school = " Jomo Kenyatta university of Agriculture and Technology";
let registrationNumber = "SCT211-0011/2018";
let yearOfStudy = "2nd Year";
let course = "BSc. Computer Science";

console.log(`
    ${fullName} is a student.
    He studies at ${school} .
    He takes ${course} and currently in ${yearOfStudy}.

    Kind regards,
    ${registrationNumber}.
    ${email}
    ${fullName}.
`);
