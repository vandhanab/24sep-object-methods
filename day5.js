// Creating the car object Question 
// 1.Question:
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022
  };
  
  // Freezing the car object to prevent modifications
  Object.freeze(car);
  
  // Attempting to modify the model property
  car.model = "Camry";
  
  // Displaying the result
  console.log(car);



  // Creating the user object
  // 2.Question:
const user = {
    name: "Vandana",
    age: 22,
    email: "vandanabathula33@gmail.com"
};
  
  // Checking if the object is frozen before freezing
  console.log("Is user object frozen before freezing?", Object.isFrozen(user)); // false
  
  // Freezing the user object
  Object.freeze(user);
  
  // Checking if the object is frozen after freezing
  console.log("Is user object frozen after freezing?", Object.isFrozen(user)); // true



  // Creating the product object
  // 3.Question:
const product = {
    name: "Laptop",
    category: "Electronics",
    price: 1200
  };
  
  // Checking if the object is sealed before sealing
  console.log("Is product object sealed before sealing?", Object.isSealed(product)); // false
  
  // Sealing the product object
  Object.seal(product);
  
  // Checking if the object is sealed after sealing
  console.log("Is product object sealed after sealing?", Object.isSealed(product)); // true



  // Creating the laptop object
  // 4.Question
const laptop = {
    brand: "Dell",
    model: "XPS 13",
    price: 1500
  };
  
  // Listing all the keys in the laptop object
  const keys = Object.keys(laptop);
  
  // Displaying the keys
  console.log(keys);


  // Creating the house object
 // 5.Question
const house = {
    location: "New York",
    size: "3000 sqft",
    price: 850000
  };
  
  // Retrieving all the values from the house object
  const values = Object.values(house);
  
  // Displaying the values
  console.log(values);


  // Creating the smartphone object
  // 6.Question
const smartphone = {
    brand: "Apple",
    model: "iPhone 14",
    price: 999
  };
  
  // Sealing the smartphone object
  Object.seal(smartphone);
  
  // Modifying the price
  smartphone.price = 1099;
  
  // Checking if the object is sealed
  const isSealed = Object.isSealed(smartphone);
  
  // Displaying the modified object and the sealed status
  console.log(smartphone);  // { brand: "Apple", model: "iPhone 14", price: 1099 }
  console.log("Is smartphone object sealed?", isSealed);  // true



  // Creating the book object
  // 7.Question
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925
  };
  
  // Freezing the book object
  Object.freeze(book);
  
  // Attempting to modify the publishedYear
  book.publishedYear = 2023;  // This modification will be ignored
  
  // Checking if the object is frozen
  const isFrozen = Object.isFrozen(book);
  
  // Displaying the modified object and the frozen status
  console.log(book);  // { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 }
  console.log("Is book object frozen?", isFrozen);  // true



  // Creating the person object
  // 8.Question
// Creating the person object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  // Retrieving all the keys of the person object
  const personKeys = Object.keys(person);
  
  // Retrieving all the values of the person object
  const personValues = Object.values(person);
  
  // Displaying the keys and values
  console.log("Keys:", personKeys);    // ["firstName", "lastName", "age"]
  console.log("Values:", personValues); // ["John", "Doe", 30]

  

  // Creating the course object
  // 9.Question
const course = {
    title: "JavaScript Basics",
    instructor: "Jane Smith",
    duration: "4 weeks"
  };
  
  // Retrieving key-value pairs of the course object
  const entries = Object.entries(course);
  
  // Displaying the key-value pairs
  console.log("Key-value pairs:", entries); 
  // [["title", "JavaScript Basics"], ["instructor", "Jane Smith"], ["duration", "4 weeks"]]
  
  // Removing the 'duration' property from the course object
  delete course.duration;
  
  // Displaying the modified object
  console.log("Modified course object:", course);
  // { title: "JavaScript Basics", instructor: "Jane Smith" }



  // Creating the employee object
  // 10.Question
const employee = {
    name: "Alice Johnson",
    position: "Developer",
    salary: 75000
  };
  
  // Sealing the employee object
  Object.seal(employee);
  
  // Modifying the position
  employee.position = "Senior Developer";
  
  // Attempting to add a new property
  employee.department = "IT";  // This modification will be ignored
  
  // Listing all properties using Object.keys()
  const employeeKeys = Object.keys(employee); // Changed variable name
  
  // Displaying the modified object and the keys
  console.log("Modified employee object:", employee);
  // { name: "Alice Johnson", position: "Senior Developer", salary: 75000 }
  console.log("Keys:", employeeKeys);  // ["name", "position", "salary"]
  
  
  
  
