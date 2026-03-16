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
