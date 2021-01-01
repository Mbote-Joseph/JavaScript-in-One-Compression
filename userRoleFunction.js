function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is the ${role} and has all the ${role} priveledges.`;
    case "datamanager":
      return `${name} is the ${role} and has all the ${role} priveledges of the data access.`;
    case "salesperson":
      return `${name} is the ${role} and has all the ${role} priveledges.`;
    default:
      return `${name} is the ${role} and is just a trial user.`;
  }
}

getUserRole("Mbote Joseph", "admin");
console.log(getUserRole("Mbote Joseph", "admin"));

// This is a common way and a good wa
let userAbilities = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is the ${role} and has all the ${role} priveledges.`;
    case "datamanager":
      return `${name} is the ${role} and has all the ${role} priveledges of the data access.`;
    case "salesperson":
      return `${name} is the ${role} and has all the ${role} priveledges.`;
    default:
      return `${name} is the ${role} and is just a trial user.`;
  }
};

console.log(userAbilities("Mbote", "student"));

// And we can also Arroy Function for the same
let userAbility = (name, role) => {
  switch (role) {
    case "admin":
      return `${name} is the ${role} and has all the ${role} priveledges.`;
    case "datamanager":
      return `${name} is the ${role} and has all the ${role} priveledges of the data access.`;
    case "salesperson":
      return `${name} is the ${role} and has all the ${role} priveledges.`;
    default:
      return `${name} is the ${role} and is just a trial user.`;
  }
};

console.log(userAbility("Joseph", "datamanager"));
