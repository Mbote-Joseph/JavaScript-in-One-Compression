// In multiple instances many things/conditions has to be put into considerations.
// -Consider Logging to a site online you could use multiple ways to achieve the objective of being logged in:
//-Google
//-Facebook
//-Email

let google = true;
let facebook = false;
let email = false;
// result = google || facebook || email;

if (google || facebook || email) {
  console.log("You are successfully Logged In!");
} else {
  console.log("Kindly Sign Up to be able to view the courses");
}
