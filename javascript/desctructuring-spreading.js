// JS da descructuring(parchalash) ve spreading(yoyish)
const user = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  isMarried: false,
};
let name = "Doe";
// let age = user.age;
// let city = user.city;
// let country = user.country;
// let isMarried = user.isMarried;
// console.log(name, age, city, country, isMarried);
// Destructuring
const { name: firstName, age, city, countries, isMarried } = user;
console.log(name, age, isMarried); // Doe 30 false
console.log(firstName); // John
console.log(countries); // undefined

let year = 2026;
let isElectric = true;
const car = {
  brand: "Ford",
  model: "Mustang",
  year: 2020,
  color: "red",
  isElectric: false,
};

const { brand, model, color, year: carYear, isElectric: carIsElectric } = car;
console.log(brand, model, color, carYear, carIsElectric); // Ford Mustang red 2020 false

const toys = ["counter-strike 2", "dota2", "pubg", "fortnite"];
let a = toys[0];
// let b = toys[1];
// let c = toys[2];
// let d = toys[3];
// console.log(a, b, c, d); // counter-strike dota2 pubg fortnite
const [e, b, c, d] = toys;
console.log(e, b, c, d); // counter-strike dota2 pubg fortnite

const colors = ["qizil", "yashil", "ko'k"];

const [first, second, third] = colors;
console.log(first); // "qizil"
console.log(second); // "yashil"
// O'tkazib yuborish
const [, , thirdColor] = colors;
console.log(thirdColor); // "ko'k"

// Funksiya parametrlarida destructuring
function greet({ name, age }) {
  console.log(`Salom, ${name}! Yoshingiz: ${age}`);
}

greet({ name: "Malika", age: 22 }); // Salom, Malika! Yoshingiz: 22

// Spread operator (...)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1); // [1, 2, 3]
console.log(...arr1); // 1 2 3

// Arraylarni birlashtirish
console.log(arr1.concat(arr2));
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Arrayni copy qilish
const copiedArray = [...arr1];
console.log(copiedArray); // [1, 2, 3]

// Objectlarni birlashtirish
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 3, c: 4 }

const defaults = { theme: "dark", lang: "uz" };
const userSettings = { lang: "en", fontSize: 14 };
const settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: 'dark', lang: 'en', fontSize: 14 }
// ⚠️ Keyingisi oldingilarni ustiga yozadi

const user2 = { name: "Ali", age: 25 };
const updated = { ...user2, age: 26 };
console.log(updated); // { name: "Ali", age: 26 }

// Rest operator ... (yig'ish operatori)
const numbers = [1, 2, 3, 4, 5];
// const [firstNum, secondNum, , , num] = numbers;
// console.log(firstNum, secondNum, num); // 1 2 5
// Arrayda ishlatish
const [firstNum, secondNum, ...rest] = numbers;
console.log(firstNum, secondNum); // 1 2
console.log(rest); // [3, 4, 5]
// Objectda ishlatish
const person = {
  name: "Sara",
  age: 28,
  city: "Los Angeles",
  country: "USA",
  isMarried: false,
};

const { name: personName, age: personAge, ...others } = person;
console.log(personName, personAge); // Sara 28
console.log(others); // { city: 'Los Angeles', country: 'USA', isMarried: false }

// Function argument sifatida rest operatorini ishlatish
function sum(...nums) {
  // console.log(nums); // [1, 2, 3, 4, 5]
  return nums.reduce((a, b) => a + b, 0);
  // 1. a = 0, b = 1; a + b = 1 => a = 1
  // 2. a = 1, b = 2; a + b = 3 => a = 3
  // 3. a = 3, b = 3; a + b = 6 => a = 6
  // 4. a = 6, b = 4; a + b = 10 => a = 10
  // 5. a = 10, b = 5; a + b = 15 => a = 15
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(6, 8, 10, 12)); // 36

// swap values
let f = 5;
let g = 7;

// 1-usul:
// let temp = f;
// f = g;
// g = temp;
// console.log(f, g); // 7 5

// 2-usul: destructuring
[f, g] = [g, f];
console.log(f, g); // 7 5
