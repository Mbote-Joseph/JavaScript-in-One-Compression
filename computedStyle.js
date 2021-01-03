let red = document.querySelector(".red");

console.log(window.getComputedStyle(red).backgroundColor);
// In getting computed styles window object which take an object and a style can be used

// That can be done easily by using a function and an arrow function can really help.
let getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

console.log(getBGColor(red));
