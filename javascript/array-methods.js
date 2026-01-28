// Array methods
// 1. at()
// const cars = ["audi", "bmw", "porsche"];
// console.log(cars.at(1)); // "bmw"
// console.log(cars.at(4)); // undefined
// console.log(cars.at(-1)); // 'porsche'

// 2. toString()
// console.log(cars.toString()); // 'audi,bmw,porsche'

// console.log(typeof cars); // object
// console.log(Array.isArray(cars)); // true

// push()
// let newLength1 = cars.push("toyota", "merc");
// console.log(cars);
// console.log(newLength1);

// unshift()
// let newLength2 = cars.unshift("chevrolet");
// console.log(cars);
// console.log(newLength2);

// pop()
// const lastElement = cars.pop();
// console.log(cars);
// console.log(lastElement);

// shift()
// const firstElement = cars.shift();
// console.log(cars);
// console.log(firstElement);

// join()
// console.log(cars.join(" * "));

// // concat()
// const myGirls = ["alina", "jessica"];
// const myBoys = ["john", "jack", "alex"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// indexOf()
// console.log(cars);
// console.log(cars.indexOf("bmw")); // 1
// console.log(cars.indexOf("ferrari")); // -1

// // includes()
// console.log(cars.includes("audi")); // true
// console.log(cars.includes("tesla")); // false

// slice()
// console.log(cars.slice(1, 3));
// console.log(cars.slice(1));

// splice()
// console.log(cars.splice(2, 2));
// console.log(cars.splice(1));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits);

// forEach()
// console.log(fruits);
// fruits.forEach((value, index) => {
//   console.log(value, index);
// });
// // simple for loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// // for-of loop
// for (let element of fruits) {
//   console.log(element);
// }

// * Practice
// const numbers = [-5, 8, 0, 12, -6, 5]; // [12, -6]
// DRY - Don't Repeat Yourself
// const positiveNumbers = [];
// const negativeNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     positiveNumbers.push(numbers[i]);
//   } else {
//     negativeNumbers.push(numbers[i]);
//   }
// }
// console.log(positiveNumbers, negativeNumbers);
// const nums = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 3 === 0) {
//     nums.push(numbers[i]);
//   }
// }
// console.log(nums);

// const arr = [3, 5, 12, -7, 8, 15];
// let num = 1;
// arr.forEach((value) => {
//   if (value % 2 === 0 || value % 5 === 0) {
//     num *= value;
//   }
// });
// console.log(num);

// const arr = [2, 3, -4, 0];
// let s = 0;
// for (let i = 0; i < arr.length; i++) {
//   s += arr[i] ** 2;
// }
// console.log(s);

// map() method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.map((value) => value * 2);

console.log(newNumbers);
const mappedArray = numbers.map((value, index) => {
  return `Son ${index + 1}: ${value}`;
});
console.log(mappedArray);

// filter() method
const nums = numbers.filter((value) => value % 2 === 0);
console.log(nums);

const filteredArray = numbers.filter((value) => value > 5);
console.log(filteredArray);

// find() method
const foundNum = numbers.find((value) => value > 7);
console.log(foundNum); // 8

const foundIndex = numbers.findIndex((value) => value > 7);
console.log(foundIndex); // 7

// sort() method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
// Output: ["Apple", "Banana", "Mango", "Orange"] (alphabetical order)
const numbers2 = [40, 100, 1, 5, 25, 10];
const ascedingArray = numbers2.sort((a, b) => a - b);
console.log(ascedingArray); // [1, 5, 10, 25, 40, 100]

const descedingArray = numbers2.sort((a, b) => b - a);
console.log(descedingArray); // [100, 40, 25, 10, 5, 1]
