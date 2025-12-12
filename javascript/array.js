// JS da array
let fruits = ["Olma", "Banan", "Apelsin"];
console.log(fruits); // ["Olma", "Banan", "Apelsin"]

// Array uzunligi
console.log(fruits.length); // 3

// Elementlarga indeks orqali murojaat qilish
console.log(fruits[0]); // "Olma"
console.log(fruits[1]); // "Banan"
console.log(fruits[5]); // undefined, indeks mavjud emas

// Element o'zgartirish
fruits[1] = "Anor";
console.log(fruits); // ["Olma", "Anor", "Apelsin"]
