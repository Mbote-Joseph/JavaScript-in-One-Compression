// this keyword is used to an object

let fn = function () {
  //console.log(this === window); //This is very important about regular function
};
fn(); //true

let o = {
  cardId: 123,
  getId: function () {
    return this.cardId; // It refers  to the cardId defined earier
  },
};
console.log(o.getId()); //123

// For all regular function calls this points to window object.
// For object functions it is a reference
console.log(this); //points  on the window object

let users = {
  name: "Mbote Joseph",
  courses: [],
  enrolledCourse: function (newCourse) {
    this.courses.push(newCourse); //At this case it doesn't point to the window object
  },
  totalCourses: function () {
    return this.courses.length;
  },
};
users.enrolledCourse("React");
users.enrolledCourse("Angular");
users.enrolledCourse("JavaScript");
console.log(users.totalCourses());
console.log(users.courses);
