// Type conversion and type coercion
// 1. Number()
console.log(typeof NaN); // number
const age = "27";
console.log(typeof age); // string
console.log(Number("48")); // 48 => number
console.log(typeof Number(age)); // number
console.log(Number("$t-e`xt")); // NaN - Not a Number
console.log(Number("12a0c")); // NaN
console.log(Number("12.77")); // 12.77
// 2. parseInt(), parseFloat()
console.log(parseInt("17")); // 17
console.log(typeof parseInt("17")); // number
console.log(parseInt("102.25")); // 102
console.log(parseInt("z-generation")); // NaN
console.log(parseInt("12abd")); // 12
console.log(parseFloat("17.89")); // 17.89
console.log(typeof parseFloat("102.12")); // number
console.log(parseFloat("117")); // 117
console.log(parseFloat("tester")); // NaN
console.log(parseFloat("12.58as")); // 12.58

// 3. String()
console.log(String(78)); // 78
console.log(typeof String(102)); // string
console.log(typeof String(true)); // string

// 4. Boolean()
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true

// Type coercion
console.log(5 + "12"); // '5' + '12' = '512' => string
console.log("15" * 3); // 45 => number
console.log(30 - "44"); // -14 => number
console.log("145" / 5); // 29 => number
