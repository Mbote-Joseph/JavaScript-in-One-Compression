function doAddition(x) {
  return function add(y) {
    return x + y;
  };
}

console.log(doAddition(5)(10)); //This is what is known as currying.
