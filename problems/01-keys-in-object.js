/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

function keysInObject(obj) {
  let arr = [];   //declare empty array

  for (let key in obj) {    //looping through the keys in the obj
    arr.push(key);    //pushing each key into the array
  }

  //arr = obj.keys();     //calling function and assigning the output to the arr var

  return arr;     //return array
}

let animals = { dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo' }
let foods = { apple: 'tart', lemon: 'sour', mango: 'sweet' }
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
