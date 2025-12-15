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

function sum(n) {
  let total = 0;
  for (let i = 1; i < n; i++) {
    total += i; // total = total + i
  }
  return total;
}

let totalSum = sum(5); // 1 + 2 + 3 + 4 = 10
console.log(totalSum);
console.log(sum(10)); // 1 + 2 + ... + 9 = 45
