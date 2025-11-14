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
