// For loop
// for (let i = 0; i < 20; i++) {
//   console.log("Hello World!");
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 1; i < 10; i++) {
//   sum += i; // sum = sum + i
// }
// console.log(sum);

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 1) {
//     sum += i; // sum = sum + i
//   }
// }
// console.log(sum);

// for (let i = 50; i >= 1; i--) {
//   console.log(i);
// }

// Infinite loop
// for (let i = 1; i > 0; i++) {
//   console.log(i);
// }

// let p = 1;
// for (let i = 1; i <= 10; i++) {
//   p *= i; // p = p * i
// }
// console.log(p); // 3628800 = 10!

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log("Loop to'xtaydi, chunki i 5 ga teng bo'ldi");
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     console.log("5 qiymati o'tkazib yuborildi");
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 50; i += 3) {
//   console.log(i);
// }

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
