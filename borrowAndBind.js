// This avoids duplication of methods inside objects.

let joseph = {
  firstName: "Joseph",
  lastName: "Mbote",
  role: "Admin",
  courses: 5,
  getInfo: function () {
    console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and takes ${this.courses} courses.
        `);
  },
};

let mbote = {
  firstName: "Mbote",
  lastName: "Jose",
  role: "Sub-Admin",
  courses: 2,
};

joseph.getInfo();
//This Provide a reference
joseph.getInfo.bind(mbote)(); //You can call it this way.

//OR
let mboteInfo = joseph.getInfo.bind(mbote); //This Provide a reference
mboteInfo();

//Note
//getInfo - It is providing a reference
//getInfo()- It is calling that method
