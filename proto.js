let User = function (firstName, courses) {
  this.firstName = firstName;
  this.courses = courses;
  this.getCourses = function () {
    console.log(`The courses registered are : ${this.courses}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`The first Name is : ${this.firstName}`);
};

let joseph = new User("Joseph", 5);
joseph.getCourses();
joseph.getFirstName();
// console.log(joseph);
let mbote = new User("Mbote", 4);
mbote.getCourses();
mbote.getFirstName();
// console.log(mbote);
// They create an object prototyped
