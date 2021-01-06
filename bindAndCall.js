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

//This will call it unlike bind whhich was Providing a reference
joseph.getInfo.call(mbote); //You can call it this way.

//Note
//getInfo - It is providing a reference
//getInfo()- It is calling that method
