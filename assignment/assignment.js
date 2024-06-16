/*question 1
function convertToNumber(str) {
    try {
        let num = Number(str);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        return num;
    } catch (error) {
        return "Invalid number";
    }
}
// Test cases
console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // "Invalid number"
*/
/* question 2
function getPerson(person) {
    try {
        if (typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)) {
            throw new Error("Invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
        return error.message;
    }
}
// Test cases
console.log(getPerson({ name: "Mithun", age: 20 })); // Name: Mithun, Age: 20
console.log(getPerson({ name: "Mithun" })); // Invalid parameter type
console.log(getPerson(["name", "Mithun"])); // Invalid parameter type
*/
/* question 3
class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}.`;
    }
  }
  const myCar = new Car("Skoda", "Rapid", 2022);
  console.log(myCar.getDescription());
  */
 /* question 4
  class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
    getSalary() {
      return this.salary;
    }
  }
  const employee1 = new Employee("John Doe", "Software Engineer", 80000);
  console.log(employee1.getSalary()); 
  */
 /*question5
 class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}
const person1 = new Person("Alice", 25);
console.log(person1.getDetails());
const person2 = new Person();
console.log(person2.getDetails()); 
*/
/*question6
class Calculator {
    static add(num1, num2) {
      return num1 + num2;
    }
  }
  const result = Calculator.add(5, 10);
console.log(result); // Output: 15
*/
/*question 7
class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
    setPassword(newPassword) {
      if (newPassword.length < 8 ||
          !/[a-z]/i.test(newPassword) ||
          !/[0-9]/.test(newPassword)) {
        console.error("Password must be at least 8 characters long and contain at least one number and one uppercase or lowercase letter.");
      } else {
        this.password = newPassword;
      }
    }
    getPassword() {
      return "*".repeat(this.password.length);
    }
  }
  const user1 = new User("Alice", "password123"); // Invalid password (too short)
user1.setPassword("MyPassword123"); // Valid password
const user2 = new User("Bob", "StrongPassword123");
console.log(user1.getPassword()); // Output: ************* (hidden password)
console.log(user2.getPassword()); // Output: ****************** (hidden password)
*//* question 8
function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  const person1 = new Person("Alice");
  person1.greet(); // Output: "Hello, my name is Alice"
  const person2 = new Person("Bob");
  person2.greet(); // Output: "Hello, my name is Bob"
  */
 /*question 9
  function numberChecker(arr) {
    return function(num) {
      return arr.includes(num);
    };
  }
  const numbers = [1, 2, 3, 4, 5];
  const checkNum = numberChecker(numbers);
  console.log(checkNum(3)); // Output: true (3 is in the array)
  console.log(checkNum(6)); // Output: false (6 is not in the array)
    */
   /*question 10
  function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  const products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
  ];
  const clothingProducts = filterByCategory(products)("Clothing");
  console.log(clothingProducts); // Output: [{ name: "Shirt", category: "Clothing" }, { name: "Pants", category: "Clothing" }]
  const accessoriesProducts = filterByCategory(products)("Accessories");
  console.log(accessoriesProducts); // Output: [{ name: "Hat", category: "Accessories" }, { name: "Sunglasses", category: "Accessories" }]
    */
