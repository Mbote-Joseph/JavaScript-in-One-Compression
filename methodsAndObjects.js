// One can also use functions in Objects
let user = {
  firstName: "Mbote",
  lastName: "Joseph",
  email: function () {
    return `${this.firstName.toLowerCase()}.${this.lastName.toLowerCase()}@learncodingonline.com`;
  },
  loggedIn: true,
  courses: [],
  buyCourse: function (courseName) {
    this.courses.push(courseName);
  },
  getCoursesEnrolled: function () {
    return ` ${this.email()} is enrolled to ${this.courses.length} Courses.`;
  },
  info: function () {
    return `Student name : ${this.firstName} ${this.lastName}.
Email Address : ${this.email()} 
Logged in : ${this.loggedIn}
Courses Enrolled : ${this.courses.join(",")} 
      `;
  },
};
console.log(user.email());
user.buyCourse("JavaScript");
user.buyCourse("React");
console.log(` Enrolled in : ${user.courses.join(",")}`);
console.log(user.getCoursesEnrolled());
console.log(user.info());
