// JavaScript Math Functions
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(5, 3)); // 5 ning 3-darajasi
console.log(Math.cbrt(1331)); // 11

console.log(Math.min(5, -5, 10, 0)); // -5
console.log(Math.max(5, -5, 10)); // 10
console.log(Math.random());
console.log(Math.random()); // har safar turli son beradi (0 < x < 1)
console.log(Math.PI); // 3.141592653589793
console.log(Math.log10(1000)); // 3
console.log(Math.abs(-55)); // 55
console.log(Math.abs(10)); // 10

// math rounding
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.5)); // 5
// down rounding
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(5.2)); // 5
// up rounding
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.1)); // 5

// toFixed
let num = 5.6789;
console.log(num.toFixed(2)); // 5.68
console.log(num.toFixed(0)); // 6
console.log(num.toFixed(4)); // 5.6789
console.log(num.toFixed(6)); // 5.678900
console.log(typeof num.toFixed(2)); // string
