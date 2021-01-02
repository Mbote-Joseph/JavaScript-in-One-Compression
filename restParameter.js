// It is a modern javascript feature that allows a function to store multiple arguments in a single array.

function sendCars(...allCarIds) {
  allCarIds.forEach((id) => console.log(id));
}
sendCars(100, 200, 555);
//100 200 555

//OR

function sendCars(day, ...allCarIds) {
  allCarIds.forEach((id) => console.log(day, id));
}
sendCars("Monday", 100, 200, 555);
//100 200 555

//Note:
//  -Comma is not permmitted after the rest element

function callStudent(...names) {
  names.forEach((id) =>
    console.log(`The student ${id} is required in the admin board.`)
  );
}
callStudent("Mbote", "Joseph", "Moses", "John", "Kang'ethe", "Mwangi");

let students = new Array(
  "Mbote Joseph",
  "Moses kamau",
  "Joseph Kang'ethe",
  "John Mwangi",
  "peter Macharia"
);
callStudent(...students);
