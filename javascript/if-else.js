const number = -7;
if (number > 0) {
  console.log("Berilgan son musbat");
} else {
  console.log("Berilgan son manfiy");
}

console.log("if blockidan keyingi code qatori");

let score = 55;
if (score >= 56 && score < 70) {
  console.log("3 baho");
} else if (score >= 70 && score < 86) {
  console.log("4 baho");
} else if (score >= 86 && score <= 100) {
  console.log("5 baho");
} else {
  console.log("Imtihondan o'ta olmadi");
}

let productPrice = 100;
const isMember = true;
const hasCoupen = true;

if (isMember) {
  console.log("A'zolikka chegirma qo'llaniladi: 10%");
  productPrice *= 0.9; // productPrice = productPrice * 0.9
}
if (hasCoupen) {
  console.log("Kuponga chegirma qo'llaniladi: 5%");
  productPrice *= 0.95;
}
if (productPrice < 50) {
  console.log("Qo'shimcha chegirma qo'llaniladi: 5%");
  productPrice *= 0.95;
}

console.log("Jami to'lov: ", productPrice);

let color = "green";
if (color === "red") {
  console.log("Stop!");
} else if (color === "yellow") {
  console.log("Wait...");
} else {
  console.log("Go");
}

let son = 17;
if (son % 2 === 0) {
  console.log("Son ikkiga bo`linadi");
}
if (son % 3 === 0) {
  console.log("Son uchga bo`linadi");
}
if (son % 5 === 0) {
  console.log("Son beshga bo`linadi");
}

// let age = Number(prompt("Sizning yoshingiz: "));
// let ticketPrice;
// if (age <= 12) {
//   ticketPrice = 5;
// } else if (age > 12 && age <= 18) {
//   ticketPrice = 8;
// } else {
//   ticketPrice = 20;
// }
// console.log("Sizning chiptangingiz narxi: ", ticketPrice, "$");

// Nested condition
// const isLoggedIn = false;
// const isAdmin = false;

// if (isLoggedIn) {
//   if (isAdmin) {
//     console.log("Xush kelibsiz, Admin!");
//   } else {
//     console.log("Xush kelibsiz, Foydalanuvchi!");
//   }
// } else {
//   console.log("Iltimos, tizimga kiring");
// }

// const role = "ADMIN"; // "DISPATCHER" "DRIVER" "ADMIN"
// const isLoggedIn = true;
// let roleBasedText;
// if (isLoggedIn) {
//   if (role === "ADMIN") {
//     roleBasedText = "ADMIN";
//   } else if (role === "DISPATCHER") {
//     roleBasedText = "DISPATCHER";
//   } else {
//     roleBasedText = "DRIVER";
//   }
//   console.log("Tizimga", roleBasedText, "kirdi");
// } else {
//   console.log("Iltimos, tizimga kiring");
// }

// let a = +prompt("sonlarni kiriting:");
// let b = +prompt("sonlarni kiriting:");
// if (a > b) {
//   console.log(a);
// } else {
//   console.log(a, b);
// }

// let a = +prompt("birinchi sonni kiriting"); // 3
// let b = +prompt("ikkinchi sonni kiriting"); // 3
// let c = +prompt("uchinchi sonni kiritng"); // 6
// if (a + b === c || a + c === b || b + c === a) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

let x = +prompt("x ni kiriting"); // 0.25
let y = +prompt("y ni kiriting"); // 0.56
let z = +prompt("z ni kiriting"); // 0.78
if (x < 1 && y < 1 && z < 1) {
  if (x < y && x < z) {
    x = (y + z) / 2;
  } else if (y < x && y < z) {
    y = (x + z) / 2;
  } else {
    z = (x + y) / 2;
  }
  console.log(x, y, z);
} else {
  console.log(x, y, z);
}
