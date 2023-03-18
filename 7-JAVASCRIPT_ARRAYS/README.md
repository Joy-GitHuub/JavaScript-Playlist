## 8 JavaScript Arrays
### 8.1 What is javaScript Array?
- An array is a special variable, which can hold more than one value:
- const cars = ["Saab", "Volvo", "BMW"];

### 8.2 Why use Arrays?
- An array can hold many values under a single name, and you can access the values by referring to an index number.
- Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value. Each item in an array has a number attached to it, called a numeric index, that allows you to access it. In JavaScript, arrays start at index zero and can be manipulated with various methods.

### 8.3 Using the JavaScript Keyword new
- const cars = new Array("Saab", "Volvo", "BMW");

### 8.4 Array Elements Can Be Objects
- JavaScript variables can be objects. Arrays are special kinds of objects.
- The typeof operator returns object because a JavaScript array is an object.
### Example:
```js
1. const cars = ["Saab", "Volvo", "BMW"];
2. const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
3. const cars = new Array("Saab", "Volvo", "BMW");

*** Note:
    - Array index start with 0.
    - [0] is the first element. [1] is the second element.

4. cars.length(); // Returns the number of elements
4. cars.sort(); // Sorts the array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0]; // Accessing the first Array Element
let lastFruit = fruits[fruits.length - 1];
```

### 8.5 Array pop()
- The pop() method removes the last element from an array
- The pop() method returns the value that was "popped out"

### 8.6 Array push()
- The push() method adds a new element to an array (at the end)
- The push() method returns the new array length:

### 8.7 Array shift()
- The shift() method removes the first array element
- The shift() method returns the value that was "shifted out"

### 8.8 Array unshift()
- The unshift() method adds a new element to an array (at the beginning)
- The unshift() method returns the new array length

### 8.9 Array Changing Elements
- Array elements are accessed using their index number
- const fruits = ["Banana", "Orange", "Apple", "Mango"];
- fruits[0] = "Kiwi";

### 8.10 Merging (Concatenating) Arrays
- The concat() method creates a new array by merging (concatenating) existing arrays
### Example:
```js

1. Array pop();
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

2. Array push();
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

3. Array shift()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();

4.  Array unshift()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

5. Array Changing Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";

6. Array concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
```