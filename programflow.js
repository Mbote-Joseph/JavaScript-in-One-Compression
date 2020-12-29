// if()

let age = 20;
if (age >= 20) {
  console.log("Age is greater than 20.");
}

// if() ... else

let group = 5;
if (group < 5) {
  console.log("group less than 5");
} else if (group == 5) {
  console.log("It is group 5");
} else {
  console.log("The group is greater than 5");
}

// switch() statement
let country = "kenya";
switch (country) {
  case "tanzania":
    console.log("The capital city is Dar es saalam");
    break;
  case "kenya":
    console.log("The capital city is Nairobi");
    break;
  case "uganda":
    console.log("The capital city is Kampala");
    break;
  default:
    console.log("The country is not known");
}

//for() loop
for (let i = 0; i < 5; i++) {
  console.log("The value at this point is " + i);
}

// while() loop

let count = 0;

while (count <= 3) {
  console.log(count);
  count++;
}
