let User = function (firstName, courses) {
  this.firstName = firstName;
  this.courses = courses;
  this.getCourses = function () {
    console.log(`The courses registered are : ${this.courses}`);
  };
};
let joseph = new User("Joseph", 5);
console.log(joseph);
let mbote = new User("Mbote", 4);
console.log(mbote);
// They create an object prototyped
