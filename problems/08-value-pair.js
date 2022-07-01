/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
<<<<<<< HEAD
  // your code here
  let arr = [];
=======
  let arr = [];

>>>>>>> b33a6ca179e3fcf1cb8e63de923dcc956b111bce
  arr.push(obj1[key]);
  arr.push(obj2[key]);

  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
