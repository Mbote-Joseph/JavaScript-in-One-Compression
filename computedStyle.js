let red = document.querySelector(".red");
let pink = document.querySelector(".pink");
let orange = document.querySelector(".orange");

let center = document.querySelector("center");

console.log(window.getComputedStyle(red).backgroundColor);
// In getting computed styles window object which take an object and a style can be used

// That can be done easily by using a function and an arrow function can really help.
let getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

//console.log(getBGColor(red));
//var color = getBGColor(orange);

// orange.addEventListener("mouseenter", () => {
//   center.style.background = orangeColor;
// });

let magicColorChanger = (element, color) => {
  return element.addEventListener("click", () => {
    center.style.background = color;
  });
};
magicColorChanger(red, getBGColor(red));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(orange, getBGColor(orange));
