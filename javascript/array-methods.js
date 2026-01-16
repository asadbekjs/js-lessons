// Array methods
// 1. at()
const cars = ["audi", "bmw", "porsche"];
console.log(cars.at(1)); // "bmw"
console.log(cars.at(4)); // undefined
console.log(cars.at(-1)); // 'porsche'

// 2. toString()
console.log(cars.toString()); // 'audi,bmw,porsche'

console.log(typeof cars); // object
console.log(Array.isArray(cars)); // true

// push()
let newLength1 = cars.push("toyota", "merc");
console.log(cars);
console.log(newLength1);

// unshift()
let newLength2 = cars.unshift("chevrolet");
console.log(cars);
console.log(newLength2);

// pop()
const lastElement = cars.pop();
console.log(cars);
console.log(lastElement);

// shift()
const firstElement = cars.shift();
console.log(cars);
console.log(firstElement);

// join()
console.log(cars.join(" * "));

// concat()
const myGirls = ["alina", "jessica"];
const myBoys = ["john", "jack", "alex"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// indexOf()
console.log(cars);
console.log(cars.indexOf("bmw")); // 1
console.log(cars.indexOf("ferrari")); // -1

// includes()
console.log(cars.includes("audi")); // true
console.log(cars.includes("tesla")); // false

// slice()
// console.log(cars.slice(1, 3));
// console.log(cars.slice(1));

// splice()
console.log(cars.splice(2, 2));
console.log(cars.splice(1));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

// forEach()
console.log(fruits);
fruits.forEach((value, index) => {
  console.log(value, index);
});
// simple for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// for-of loop
for (let element of fruits) {
  console.log(element);
}
