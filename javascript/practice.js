// Practice
console.log(Number("17") - String(10)); // 17 - '10' = 17-10 = 7
console.log(parseFloat("a132b") * 5); // NaN * 5 = NaN

// * easy
// A
console.log(Number("25")); // 25
console.log(Number("25px")); // NaN
console.log(parseInt("25px")); // 25
console.log(parseFloat("25.7em")); // 25.7

// B
console.log(String(99)); // 99 => string
console.log(typeof String(false)); // false
console.log(String(null)); // null

// C
console.log(Boolean(0)); // false
console.log(Boolean(" ")); // true
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true

// * medium
// A
console.log(5 + "5"); // 55 => str
console.log("10" - 2); // 8 => number
console.log(typeof ("3" * "4")); // 12 => number
console.log("8" / 2 + "1"); // 4 + "1" = 41 => str

// B
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(Number(null)); // 0

// C
console.log(parseInt("12.9px")); // 12
console.log(parseFloat("45kg")); // 45
console.log(parseInt("a123")); // NaN

// * hard
// A
console.log(10 + true); // 11
console.log(10 + false); // 10
console.log("5" + 5 + 5); // "555"
console.log(5 + 5 + "5");

// B
console.log("10" - "5" + "5");
console.log("10" - "5" + 5);
console.log("10" / "2" + 3);

// C
console.log(Boolean("false"));
console.log(Boolean(false));
console.log(Number("   20   "));
console.log(Number(""));
console.log(Number("   "));

// D
console.log(parseInt("0xF")); // 16 (hexadecimal)
console.log(parseInt("010")); // ?
console.log(parseInt("0b101")); // ?
