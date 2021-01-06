class User {
  constructor(name, email) {
    //A constructor is the method that runs as soon the object is being created.
    this.name = name;
    this.email = email;
  }
  courseList = [];
  getInfo() {
    return `The name is ${this.name} and the email is ${this.email}`;
  }
  enrollCourse(course) {
    this.courseList.push(course);
  }
  getCourse() {
    return this.courseList;
  }
}

let jose = new User("Joseph Mbote", "mbotejoseph001@gmail.com");
jose.getInfo();
jose.enrollCourse("Javascript");
jose.enrollCourse("Angular");

console.log(jose);
