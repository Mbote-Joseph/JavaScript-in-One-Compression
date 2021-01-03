let number = document.querySelector(".number");
let followers = document.querySelector(".followers");
let count = 0;

setInterval(() => {
  if (count < 1000) {
    count++;
    number.innerHTML = count;
  }
}, 1);

setTimeout(() => {
  followers.innerHTML = "Followers on Instagram";
}, 4000);

clearTimeout(1000);
