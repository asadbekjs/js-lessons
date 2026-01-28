const student = {
  name: "John Doe",
  age: 20,
  course: "Computer Science",
  address: {
    city: "New York",
    country: "USA",
  },
  login: function () {
    console.log("User logged in");
  },
};
console.log(student.course); // Computer Science
console.log(student["name"]); // John Doe
console.log(student.address.city); // New York
student.login(); // User logged in

// 1. Object.keys() - returns an array of keys
const keys = Object.keys(student);
console.log(keys);

// 2. Object.values() - returns an array of values
const values = Object.values(student);
console.log(values);

// 3. Object.entries() - returns an array of key-value pairs
const entries = Object.entries(student);
console.log(entries);

// for-in loop for object
for (let key in student) {
  console.log(student[key]);
}
