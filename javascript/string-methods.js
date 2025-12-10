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
