let myMap = new Map();

myMap.set(0, "zero");
myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
myMap.set(4, "four");

console.log(myMap);

for (let key of myMap.keys()) {
  console.log(`The Keys are ${key}`);
}

for (let value of myMap.values()) {
  console.log(`The values are ${value}`);
}

for (let [key, value] of myMap) {
  console.log(`The Keys are: ${key} and the values are: ${value}`);
}

myMap.forEach((v, k) => console.log(`${v} and key ${k}`));

myMap.delete(2);
console.log(myMap);
