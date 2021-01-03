// Objects help in storing related date as one.

let student = {
  name: "Mbote Joseph",
  regNo: "SCT211-0011/2018",
  age: 22,
  partTime: false,
};
// You can also use the dot operator to access the items
console.log(student.name);
console.log(student.regNo);
console.log(student.age);
console.log(student.partTime);
// You can also use the square brackets,[]
//-Note- The key should be encloaed by the quotes (It should be used as a string)
console.log(student["name"]);

//Array of Objects.
let students = [
  {
    name: "Mbote Joseph",
    regNo: "SCT211-0011/2018",
  },
  {
    name: "Juma Ali",
    regNo: "SCT211-0011/2018",
  },
];
console.log(students[0]);
console.log(students);
