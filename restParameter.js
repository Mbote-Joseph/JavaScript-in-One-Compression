// It is a modern javascript feature that allows a function to store multiple arguments in a single array.

function sendCars(...allCarIds) {
  allCarIds.forEach((id) => console.log(id));
}
sendCars(100, 200, 555);
//100 200 555

//OR

function sendCars(day, ...allCarIds) {
  allCarIds.forEach((id) => console.log(id));
}
sendCars("Monday", 100, 200, 555);
//100 200 555

//Note:
//  -COmma is not permmitted after the rest element
