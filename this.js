// this keyword is used to an object

let fn = function () {
  console.log(this === window);
};
fn(); //true

let o = {
  cardId: 123,
  getId: function () {
    return this.cardId; // It refers  to the cardId defined earier
  },
};
console.log(o.getId()); //123
