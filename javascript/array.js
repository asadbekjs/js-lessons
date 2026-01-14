// JS da array
let fruits = ["Olma", "Banan", "Apelsin"];
console.log(fruits); // ["Olma", "Banan", "Apelsin"]

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Array uzunligi
console.log(fruits.length); // 3

// Elementlarga indeks orqali murojaat qilish
console.log(fruits[0]); // "Olma"
console.log(fruits[1]); // "Banan"
console.log(fruits[5]); // undefined, indeks mavjud emas

// Element o'zgartirish
fruits[1] = "Anor";
console.log(fruits); // ["Olma", "Anor", "Apelsin"]

const cars = new Array("bmw", "toyota", "chevrolet");
console.log(cars.toString());

const users = [
  {
    id: 1,
    firstName: "Mardon",
    email: "mardonjorayev@gmail.com",
  },
  {
    id: 2,
    firstName: "Yulduz",
    email: "yulduzusmonova@gmail.com",
  },
  {
    id: 3,
    firstName: "Alex",
    email: "alexsasha77@gmail.com",
  },
];
// console.log(users[1]);
for (let i = 0; i < users.length; i++) {
  console.log(users[i].firstName + " " + users[i].email);
}

console.log(typeof users); // object
console.log(Array.isArray(users)); // true
console.log(Array.isArray({ name: "john", age: 36 })); // false
