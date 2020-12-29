// DOM defines how the data of a web page is orgarnized and manipulated.

// Handling a button click
let okButton = document.getElementById("ok-button");
okButton.addEventListener("click", function () {
  // code here
  alert("I'm clicked !!!");
});

// Removing & Adding Element to the DOM
let paragraph = document.getElementById("text-area");
paragraph.style.display = "none"; //Removing it
paragraph.style.display = "block"; //Adding it back
paragraph.style.display = "inline"; //Adding it back
