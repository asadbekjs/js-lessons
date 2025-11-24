// JavaScript Switch Case Example
// Kun raqamiga qarab hafta kunini chiqarish

// let day = 3;
// if (day === 1) {
//   console.log("Dushanba");
// } else if (day === 2) {
//   console.log("Seshanba");
// } else if (day === 3) {
//   console.log("Chorshanba");
// } else if (day === 4) {
//   console.log("Payshanba");
// } else if (day === 5) {
//   console.log("Juma");
// } else if (day === 6) {
//   console.log("Shanba");
// } else if (day === 7) {
//   console.log("Yakshanba");
// } else {
//   console.log("Noto'g'ri kun raqami");
// }
// switch (new Date().getDay()) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;
//   default:
//     console.log("Noto'g'ri kun raqami");
// }

// let color = "red";
// switch (color) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("Get Ready");
//     break;
//   case "green":
//     console.log("Go");
//     break;
//   default:
//     console.log("Invalid color");
// }

let orderStatus = "pending";
switch (orderStatus) {
  case "pending":
    console.log("Your order is being processed.");
    break;
  case "confirmed":
    console.log("Your order has been confirmed.");
    break;
  case "delivered":
    console.log("Your order has been delivered.");
    break;
  case "canceled":
    console.log("Your order has been canceled.");
    break;
  default:
    console.log("Unknown order status.");
}
