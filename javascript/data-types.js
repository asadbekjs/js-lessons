// Data types - ma'lumot turlari
// primitive types va reference(object) type
// * 1. number
let myFavouriteNumber = 7;
console.log(myFavouriteNumber);
// type checking
// typeof operator
console.log(typeof myFavouriteNumber); // number
console.log(typeof 12.77); // number
// * 2. string
let txt = "text";
console.log(typeof txt, txt);
console.log(typeof "test", typeof `lorem`);

// * 3. boolean (true, false)
let isAdmin = true;
let isMarried = false;
console.log(isAdmin, isMarried);
console.log(typeof isMarried);

// * 4. undefined
let lastName;
console.log(lastName, typeof lastName);
lastName = "Muxtorov";
console.log(typeof lastName); // string

var userName;
console.log(userName, lastName);
console.log(typeof userName); // undefined

// * 5. null
let user = null;
console.log(user);
console.log(typeof user); // object // js bug
// ...
user = {
  name: "Manual Tester",
  phone: "+998991234567",
  email: "manualtester283@gmail.com",
};
// * 6. BigInt
const bigIntVariable = 123456789012345n;
console.log(bigIntVariable);
console.log(typeof bigIntVariable); // bigint

// * 7. Symbol
const symbolVariable = Symbol(1233789340);
console.log(symbolVariable);
console.log(typeof symbolVariable);

// Reference type(object)
// 8. * object
const admin = {
  login: "admin12345",
  password: "1234567",
  isSuperAdmin: false,
};
console.log(admin);
console.log(typeof admin);
console.log(admin.login, admin.password, admin.isSuperAdmin);

// * array
const nums = [12, 77, 1.75, 45.89];
console.log(nums, typeof nums);

// * function
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(1, 5)); // 6
console.log(typeof addNumbers); // function
