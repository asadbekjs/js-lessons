// * arifmetik(arithmetic) operatorlar
// modulus operatori
console.log(6 % 3); // 0
console.log(2 % 3, 7 % 10); // 2 // 7
console.log(5 ** 2); // 25
console.log(144 ** (1 / 2)); // 12
console.log(729 ** (1 / 3)); // 8.99
// increment / decrement
// Postfix Increment(x++)
// let x = 5;
// let y = x++;
// console.log(x); // 6
// console.log(y); // 5
// Prefix Increment(++x)
let x = 7;
let y = ++x;
console.log(x); // 8
console.log(y); // 8
// postfix decrement
let a = 12;
let b = a--;
console.log(a); // 11
console.log(b); // 12
// prefix decrement
let c = 4;
let d = --c;
console.log(c); // 3
console.log(d); // 3

// solishtirish(comparison) operatorlar
// ==(loose equality) va ===(strict equality)
console.log(77 == "77"); // true
console.log(5 == 7); // false
console.log(5 == "5"); // true (string '5' is coerced to number 5)
console.log(false == 0); // true (false is coerced to 0)
console.log(null == undefined); // true
console.log(5 === "5"); // false (different types: number vs string)
console.log(false === 0); // false (different types: boolean vs number)
console.log(null === undefined); // false (different types: object vs undefined)
console.log(77 === 77); // true
console.log(5 != 3); // true
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(5 !== 5); // false

// Assignment(tayinlash) operators
let z = 7;
console.log(z); // 7
z += 5; // z = z + 5
console.log(z); // 12
z /= 2; // z = z / 2
console.log(z); // 6
z %= 5;
console.log(z); // 1
z **= 4;
console.log(z); // 1

// Logical(mantiqiy) operators
// && - (and)
const isAdult = true;
const hasTicket = true;
console.log(isAdult && hasTicket); // true
// || - (or)
const isStudent = false;
const isSenior = true;
console.log(isStudent || isSenior); // true

// ! - Not
const isMember = false;
console.log(!isMember); // true
