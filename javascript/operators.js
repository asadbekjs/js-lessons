// * arifmetik operatorlar
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

// solishtirish operatorlar
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
