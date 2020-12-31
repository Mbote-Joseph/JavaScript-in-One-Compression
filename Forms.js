// We can always use javascript to handle forms . This could include:
// -Prevent default form submission
// -Accessing Form fields
// -Showing validation errors
// -Posting from javascript

// Example HTML Code.
<div>
  <input name="user" placeholder="User Name" />
  <span id="user-error"></span>
</div>;

// The submit Event
let form = document.getElementById("user-form");
form.addEventListener("submit", (event) => {
  // Prevent the browser from submitting the default form
  event.preventDefault();
});

// Accessing form fields
// form.element[]

let form = document.getElementById("user-form");

form.addEventListener("submit", (event) => {
  let user = form.elements["user"];
  let avatarFile = form.elements["avatar-file"];

  console.log(user.value, avatarFile.value);
  event.preventDefault();
});

//Showing Validation errors
// Form field
let user = form.elements["user"];
let userError = document.getElementById("user-error");

userError.textContent = "Invalid entry";
userError.style.color = "red";
user.style.borderColor = "red";
user: focus();

// One can also apply conditions
if (user.value.length < 4) {
  userError.textContent = "Invalid entry";
  userError.style.color = "red";
  user.style.borderColor = "red";
  user: focus();
}

// Posting from Javascript
// -jquery helps in the posting of data in javascript.

import $ from "jquery";

let form = document.getElementById("user-form");

form.addEventListener("submit", (event) => {
  let user = form.elements["user"];
  let avatarFile = form.elements["avatar-file"];

  let posting = {
    user: user.value,
    avatarFile: avatarFile.value,
  };

  let promise = $.post("https://myid.mockapi.io/api/v1/users", posting);

  promise.then(
    (data) => console.log("Data : ", data),
    (error) => console.log("Error : ", error)
  );
  event.preventDefault();
});
