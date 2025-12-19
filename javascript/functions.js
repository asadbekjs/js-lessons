// JS da functions
// 1. Function Declaration
// logMessage(); // Funksiyani chaqirish (hoisting tufayli ishlaydi)

// function logMessage() {
//   console.log("Bu oddiy matn chop qiluvchi funksiya");
// }

// logMessage(); // Funksiyani chaqirish

// function addition() {
//   let a = 5;
//   let b = 10;
//   let sum = a + b;
//   return sum;
// }

// let result = addition(); // Funksiyani chaqirish
// console.log(result); // Natijani konsolga chiqarish
// console.log(addition()); // To'g'ridan-to'g'ri konsolga chiqarish

// function greet(name) {
//   return `Salom, ${name}!`;
// }

// let greetingMessage = greet("Ali");
// console.log(greetingMessage);
// console.log(greet("Vali"));
// console.log(greet("Usmon"));

// function multiply(x, y) {
//   return x * y;
// }
// let product = multiply(4, 5);
// console.log(product); // 20
// console.log(multiply(7, 3)); // 21

// function sum(n) {
//   let total = 0;
//   for (let i = 1; i < n; i++) {
//     total += i; // total = total + i
//   }
//   return total;
// }

// let totalSum = sum(5); // 1 + 2 + 3 + 4 = 10
// console.log(totalSum);
// console.log(sum(10)); // 1 + 2 + ... + 9 = 45

// function calculateFactorial(m) {
//   let result = 1;
//   for (let i = 1; i <= m; i++) {
//     result *= i; // result = result * i;
//   }
//   return result;
// }
// console.log(calculateFactorial(5)); // 1 * 2 * 3 * 4 * 5 = 120
// console.log(calculateFactorial(6)); // 1 * 2 * 3 * 4 * 5 * 6 = 720

// 2. Function Expression
// const logMessage = function () {
//   console.log("Bu oddiy matn chop qiluvchi funksiya - Function Expression");
// };

// logMessage(); // Funksiyani chaqirish

// console.log(addNumbers(12, 4)); // ReferenceError: Cannot access 'addNumbers' before initialization
// const addNumbers = function (a, b) {
//   return a + b;
// };

// let sumResult = addNumbers(7, 8);
// console.log(sumResult); // 15
// console.log(addNumbers(10, 20)); // 30

const calculateTriangleArea = function (a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Tomonlar musbat son bolishi kerak";
  } else if (a + b <= c || a + c <= b || b + c <= a) {
    return "Bunday uchburchak mavjud emas";
  }
  let p = (a + b + c) / 2;
  let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  return s;
};

console.log(calculateTriangleArea(3, 4, 5)); // 6
console.log(calculateTriangleArea(1, 2, 3)); // Bunday uchburchak mavjud emas
console.log(calculateTriangleArea(5, -4, 6)); // Tomonlar musbat son bolishi kerak

// 3. Arrow Function
const logMessage = () => {
  console.log("Bu oddiy matn chop qiluvchi funksiya - Arrow Function");
};
logMessage(); // "Bu oddiy matn chop qiluvchi funksiya - Arrow Function"

const concatStrings = (str1, str2) => str1 + str2;

let combinedString = concatStrings("Salom, ", "dunyo!");
console.log(combinedString); // "Salom, dunyo!"
console.log(concatStrings("JavaScript ", "funksiyalari")); // "JavaScript funksiyalari"

// const logResultOfExam = (score) => {
//   if (score < 56) {
//     console.log("Imtihondan yiqildingiz");
//   } else if (score < 70) {
//     console.log("3 baho oldingiz");
//   } else if (score < 86) {
//     console.log("4 baho oldingiz");
//   } else console.log("5 baho oldingiz");
// };

// logResultOfExam(100);

// Function topshiriqlari
// const reverseString = (str) => {
//   const characters = str.split(""); // Stringni arrayga aylantirish
//   const reversedCharacters = characters.reverse(); // Array elementlarini teskari tartibga keltirish
//   const reversedStr = reversedCharacters.join(""); // Teskari tartibdagi arrayni stringga aylantirish
//   return reversedStr;
// };

// console.log(reverseString("hello")); // "olleh"
// console.log(reverseString("Husanboy")); // "yobnasuH"
// console.log(reverseString("level")); // "level"

const reverseString = (str) => {
  const characters = str.split(""); // Stringni arrayga aylantirish
  let reversedStr = "";
  for (let i = characters.length - 1; i >= 0; i--) {
    reversedStr += characters[i];
  }
  return reversedStr;
};

console.log(reverseString("hello")); // "olleh"

const countDigits = (number) => {
  const numberStr = String(number); // Raqamni stringga aylantirish
  return numberStr.length;
};

console.log(countDigits(12345)); // 5
console.log(countDigits(7)); // 1
