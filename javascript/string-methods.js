// String metodlari and xususiyatlari
let sample = "  Hello, World!  ";

// trim() - boshidagi va oxiridagi bo'sh joylarni olib tashlaydi
console.log(sample.trim()); // "Hello, World!"

sample = sample.trim(); // endi sample o'zgaruvchisida bo'sh joylarsiz qiymat saqlanadi
// toUpperCase() - barcha harflarni katta harfga o'zgartiradi
console.log(sample.toUpperCase()); // "HELLO, WORLD!"

// toLowerCase() - barcha harflarni kichik harfga o'zgartiradi
console.log(sample.toLowerCase()); // "hello, world!"

// charAt() - berilgan indeksdagi belgini qaytaradi
console.log(sample.charAt(7)); // "W" aks holda sample[7] ham ishlaydi

// chartCodeAt() - berilgan indeksdagi belgining Unicode qiymatini qaytaradi
console.log(sample.charCodeAt(7)); // 87 (W harfining Unicode qiymati)

// at() - berilgan indeksdagi belgini qaytaradi, manfiy indekslar ham ishlaydi
console.log(sample.at(-1)); // "!" oxirgi belgini qaytaradi
console.log(sample.at(-2)); // "d" oxiridan ikkinchi belgini qaytaradi
console.log(sample.at(2)); // "e" uchinchi belgini qaytaradi
console.log(sample.at(32)); // undefined, indeks mavjud emas

// concat() - ikkita yoki undan ko'p stringlarni birlashtiradi
let greet = "Hello";
let place = "World";
console.log(greet.concat(place)); // "HelloWorld"
console.log(greet.concat(", ", place, "!")); // "Hello, World!"

// slice(start, end) - stringning bir qismni kesib oladi
console.log(sample); // "Hello, World!"
console.log(sample.slice(0, 5)); // "Hello"
console.log(sample.slice(7)); // "World!"
console.log(sample.slice(-6, -1)); // "World"

// substring(start, end) - slice ga o'xshash, lekin manfiy indekslarni qabul qilmaydi
console.log(sample.substring(0, 5)); // "Hello"
console.log(sample.substring(7)); // "World!"
console.log(sample.substring(-6, -1)); // "" (manfiy indekslar 0 ga tenglanadi)

// padStart(targetLength, padString) - string boshiga belgilar qo'shadi
let code = "123";
console.log(code.padStart(6, "0")); // "000123"
console.log(code.padStart(8, "x")); // "xxxxx123"

// padEnd(targetLength, padString) - string oxiriga belgilar qo'shadi
console.log(code.padEnd(6, "0")); // "123000"
console.log(code.padEnd(8, "x")); // "123xxxxx"

// repeat(count) - stringni berilgan marta takrorlaydi
let laugh = "ha";
console.log(laugh.repeat(3)); // "hahaha"
console.log(laugh.repeat(0)); // ""

// replace(searchValue, newValue) - birinchi uchragan qiymatni yangi qiymat bilan almashtiradi
let phrase = "I like JavaScript. JavaScript is fun.";
console.log(phrase.replace("JavaScript", "Python")); // "I like Python. JavaScript is fun."
console.log(phrase); // asl string o'zgarmaydi

// replaceAll(searchValue, newValue) - barcha uchragan qiymatlarni yangi qiymat bilan almashtiradi
console.log(phrase.replaceAll("JavaScript", "Python")); // "I like Python. Python is fun."

// includes(searchValue) - string ichida berilgan qiymat bor-yo'qligini tekshiradi
console.log(phrase.includes("JavaScript")); // true
console.log(phrase.includes("Ruby")); // false

// startsWith(searchValue) - string berilgan qiymat bilan boshlanadimi? shuni tekshiradi
console.log(phrase.startsWith("I like")); // true
console.log(phrase.startsWith("JavaScript")); // false

// endsWith(searchValue) - string berilgan qiymat bilan tugaydimi? shuni tekshiradi
console.log(phrase.endsWith("fun.")); // true
console.log(phrase.endsWith("JavaScript.")); // false

// split(separator) - stringni berilgan ajratgich bo'yicha bo'lib beradi
let csv = "apple,banana,cherry";
let fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]

let words = phrase.split(" "); // so'zlar bo'yicha bo'lish
console.log(words); // ["I", "like", "JavaScript.", "JavaScript", "is", "fun."]

let chars = phrase.split(""); // harflar bo'yicha bo'lish
console.log(chars); // har bir belgi alohida element sifatida

// indexOf(searchValue) - string ichida berilgan qiymatning birinchi uchrashgan indeksini qaytaradi
console.log(phrase.indexOf("JavaScript")); // 7
console.log(phrase.indexOf("Python")); // -1 (topilmasa -1 qaytaradi)
