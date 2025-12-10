let name = "G'aybulla";
let hi = "Salom"; // 'Salom'
// concatenation - birlashtirish
console.log(hi + ", " + name + "!"); // Salom, G'aybulla!
console.log(hi + 32); // Salom32
console.log(5 + "5"); // 55 => string

// type conversion - turini o'zgartirish
console.log(Number("5") + 5); // 10
// type coercion - avtomatik tur o'zgartirish
console.log("7" + 2); // 72 => string

// template literals (template strings)
let text = `${hi}, ${name}! Yoshingiz ${30 + 3} da.`;
console.log(text);

let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(answer2, answer3);

// string length
console.log(hi.length); // 5
console.log(name.length); // 9
console.log("adminjon ".length); // 9 (bo'sh joy(space) ham hisoblanadi)

// access characters by index
console.log(name[0]); // G
console.log(name[3]); // y
console.log(answer2[answer2.length - 1]); // '

// String object
let programming1 = new String("JavaScript");
console.log(programming1); // [String: 'JavaScript']
console.log(typeof programming1); // object

let programming2 = "JavaScript";
console.log(programming2); // JavaScript
console.log(typeof programming2); // string

console.log(programming1 == programming2); // true
console.log(programming1 === programming2); // false

// Interpolation(template literal) in strings
let firstName = "Ali";
let lastName = "Vali";
let age = 25;

let info = `Ismi: ${firstName}
Familiyasi: ${lastName}
Yoshi: ${age}
Yoshining 5 yil keyingi qiymati: ${age + 5}`;
console.log(info);
