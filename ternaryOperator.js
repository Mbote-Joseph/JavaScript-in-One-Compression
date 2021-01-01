// it is a short hand conditional Operator

// -The first part carries a true and the second part carries a false value.
let student = true;

student
  ? console.log("Yeah he is a university student !")
  : console.log("He is not a student in this country");

//- Behind the scene  it is simply
// condition ? (true):(false);

// It is the same code as:-
if (student) {
  console.log("Yeah he is a university student !");
} else {
  console.log("He is not a student in this country");
}
