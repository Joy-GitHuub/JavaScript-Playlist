# JavaScript Documentation

## 1. Introduction

### 1.1 What is JavaScript?
- JavaScript is the world's most popular programming language.
- JavaScript is the programming language of the Web.
- JavaScript is easy to learn.
- This tutorial will teach you JavaScript from basic to advanced.
- JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.

### 1.2 JavaScript Versions
- ECMAScript is a JavaScript standard developed by Ecma International. Since 2015, major versions have been published every June. ECMAScript 2022, the 13th and current version, was released in June 2022.

### 1.3 JavaScript Variables
- Variables are containers for storing Data (storing data values).
```js
// JavaScript Variables

// 4 Ways to Declare a JavaScript Variable:
// => Using var
// => Using let
// => Using const
// => Using nothing

var x = 5;
var y = "Joy";
var z = false;

let a = 4;
let b = 6;
let c = a+b;
console.log(c)
```

### 1.4 JavaScript Operators
- The Assignment Operator (=) assigns a value to a variable.

```js
// Assignment Examples
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;
```

### 1.5 Types of JavaScript Operators
- There are Different types of JavaScript operators:
     -  Arithmetic Operators
     -  Assignment Operators
     -  Comparison Operators
     -  Logical Operators
     -  Conditional Operators
     -  Type Operators


### 1.6 Arithmetic Operatros
- Arithmetic operators perform arithmetic on numbers (literals or variables).
    - (+)Addition
    - (-)Subtraction
    - (*)Multiplication
    - (**)Exponentiation (ES2016)
    - (/)Division
    -  (%)Modulus (Remainder)
    - (++)Increment
    - (--)Decrement
 ### Example: 
 ```js 
let a = 20;
let b = 2;
let x = a+b; //22
let y = a-b; // 18
let z = a*b; // 40
let p = a/b; // 10
```


## 2. JavaScript Data Types

### 2.1 How Many Data Types?
- JavaScript has 8 DataTypes
    - String
    - Number
    - Boolean
    - Undefined
    - Null
    - Bigint
    - Symbol
    - Object
        - The Object DataTypes
            1. An Object
            2. An Array
            3. A Date
### Example:
```js
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
```

### 2.2 Different Data Types in JS?
- Primitive data types are number, string, boolean, NULL, Infinity and symbol. Non-primitive data types is the object. The JavaScript arrays and functions are also objects.
### Example:
```js
- What is JavaScript Primitive Data Type?
1. String
2. Number
3. Boolean
4. Symbol
5. undefined
5. null

- What is JavaScript non-Primitive Data Type?
1. Object
2. Array
3. Function
```

### 2.3 The Typeof Operator
- You can use the JavaScript typeof operator to find the type of a JavaScript variable.
- The typeof operator returns the type of a variable or an expression:
### Example:
```js
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof (3 + 4)        // Returns "number"
let car;    // Value is undefined, type is undefined
```

## 3. JavaScript Function
- A JavaScript Function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).
### 3.1 Function Syntax
- A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
- Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
- The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)
- The code to be executed, by the function, is placed inside curly brackets: {}
### Example:
```js 
function myFunction(num1, num2) {
    return num1 * num2;
};
```

### 3.2 Function Return
- When JavaScript reaches a return statement, the function will stop executing.
- If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
- Functions often compute a return value. The return value is "returned" back to the "caller":
### Example:
```js
function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
let x = myFunction(4, 3);   // Function is called, return value will end up in x
console.log(x);
```

## 4. JavaScript Obejct

### 4.1 What is JavaScript Object?
- In JavaScript, an object is an unordered collection of key-value pairs. Each key-value pair is called a property.
- The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.
### Example:
```js
let person= {
    firstName : "Joy",
    lastName: "Bose",
};
// The person object has two properties firstName and lastName with the corresponding values "Joy" and "Bose".
```

### 4.2 Object Accessing Properties
1. The dot notation (.)
2. Array-like notation ([]); 
### Example:
```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
// dot notation (.)
console.log(person.firstName);
console.log(person.lastName);
// Array-like notation ([]);
console.log(person['firstName']);
console.log(person['lastName']);
```

### 4.3 Modifying the value of a Property
- To change the value of a property, you use the assignment operator (=). For example:
### Example:
```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
person.firstName = 'Jane';
console.log(person);
```

### 4.4 Adding a new property to an object
### Example:
```js
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
person.age = 25;
console.log(person);
```

### 4.5 Deleting a property of an object
- To delete a property of an object, you use the delete operator:
### Example:
```js
// delete objectName.propertyName;
let person = {
    firstName: 'John',
    lastName: 'Doe';
    age :25;
};
delete person.age;
console.log(person);
```

### 4.6 Checking if a property exists
- To check if a property exists in an object, you use the 'in' operator:
### Example:
```js
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};
console.log('ssn' in employee);
console.log('employeeId' in employee);

// Output:
false
true
``` 

## 5. JavaScript Strings
 ### 5.1 What is JS String?
 - Summary: in this tutorial, you’ll learn about the JavaScript string primitive type and how to use it to define strings.
 - JavaScript strings are primitive values. Also, strings are immutable. It means that if you modify a string, you will always get a new string. The original string doesn’t change.

 ### 5.2 String Methods
 ### Example:
 ```js
let str = "Good Morning"
console.log(str.length); // 13

// Accessing characters
let str = "Hello";
console.log(str[0]); // "H"

1. String length
2. String slice()
3. String substring()
4. String substr()
5. String replace()
6. String replaceAll()
7. String toUpperCase()
8. String toLowerCase()
9. String concat()
10. String trim()
11. String trimStart()
12. String trimEnd()
13. String padStart()
14. String padEnd()
15. String charAt()
16. String charCodeAt()
17. String split()

//  Extracting String Part
- There are 3 methods for extracting a part of a string:
1. slices(start, end);
2. substring(start, end);
3. substr(start, length);

// JavaScript String Slice()
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

// Replacing String Content
const text = "Please Learn JS";
const newText = text.replace("JS", "JavaScript");

// String Concat()
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

// String Trim
- The trim() method removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
let text2 = text1.trim();

// JavaScript String charAt()
- The charAt() method returns the character at a specified index (position) in a string:
let text = "HELLO WORLD";
let char = text.charAt(0);

// JavaScript String Split()
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
```



### 5.3 String Search Methods
### Example:
```js
// JavaScript Search Methods
1. String indexOf();
2. String lastIndexOf();
3. String search(); //Recived regular expression
4. String match(); //Recived regular expression
5. String matchAll(); //Recived regular expression
6. String includes(); // not regular expression
7. String startsWith(); // not regular expression
8. String endsWith(); //not regular expression

// String matchAll()
let text = "I love cats. Cats are very easy to love. Cats are very popular."
const x = (text.matchAll(/Cats/gi));
for (const i of x) {
    console.log(i);
};

// String includes
let text = "I love cats. Cats are very easy to love. Cats are very popular.";
```

## 6. JavaScript Template Literals
### 6.1 What is Template Literals?
- Template literals are literals delimited with backtick ( ` ) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
- Synonyms:
    -Template Literals
    -Template Strings
    -String Templates
    -Back-Tics Syntax

### Examples:
```js
let text = `Hello World!`;
let text = `He's often called "Johnny"`;

let text =
`The quick
brown fox
jumps over
the lazy dog`;
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
```

## 7. JavaScript Numbers

### 7.1 Types of number?
- JavaScript has only one type of number. Numbers can be written with or without decimals.
- JavaScript Numebrs are Always 64-bit Floating Point
- Floating point arithmetic is not always 100% accurate:
- JavaScript uses the (+) operator for both addition and concatenation.
- Numbers are added. Strings are Concatenated.
### Example:
```js
1. Floating point arithmetic is not always 100% accurate:
let x = 0.2+ 0.1;

2. To solve the problem above, it helps to multiply and divide:
let x = (0.2 * 10 + 0.1 * 10) / 10;

3. If you add two numbers, the result will be a number:
let x = 10;
let y = 20;
let z = x + y;

4. If you add two strings, the result will be a string concatenation:
let x = "10";
let y = "20";
let z = x + y;
```

### 7.2 NaN - Not a Number
- NaN is a JavaScript reserved word indication that a number is not a legal number.
- NaN is a number: typeof NaN returns number: (typeof NaN).
### Example:
```js
let x = 100 / "Apple";
let x = 100 / "10";
let x = NaN;
let y = 5;
let z = x + y;
console.log(typeof z);
```

### 7.3 What is isNaN() Function
- In JavaScript NaN is short for "Not-a-Number". The isNaN() method returns true if a value is NaN. The isNaN() method converts the value to a number before testing it.
### Example:
```js
 var j ="Hello World" // isNaN (j) returns true
  var n = 15; // isNaN (n) returns false

  if(isNaN(n) == true)   // NaN means >> Not a Number
  {
      console.log("yes, it's a string");
  }
  else{
      console.log("no, it's a number");
    }
```

### 7.4 Number toString() 
- By default, JavaScript displays numbers as base 10 decimals.
- But you can use the toString() method to output numbers from base 2 to base 36.
- Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
### Example:
```js
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);

- To use the toString() method, you simply need to call the method on a number value. 
var num = 24;
var str = num.toString();
24.toString(); // Error: Invalid or unexpected token
(24).toString(); // "24"
(9.7).toString(); // "9.7"
(-20).toString(); // "-20"
```

### 7.5 Numbers as Objects
- Normally JavaScript numbers are primitive values created from literals
- But Numbers can also be defined as objects with the keyword "new"
### Example:
```js
let x = 123; //typeof Number;
let y = new Number(123); // typeof Object;
- Note: 
1. Do not create Number objects.
2. The new keyword complicates the code and slows down execution speed.

let x = new Number(500);
let y = new Number(500);
console.log(x == y)
3. Comparing two JavaScript objects always returns false.
```

### 7.6 JavaScript Number Methods
-  number methods can be used on all JavaScript numbers:
### Example:
```js
1. Number toString(); //The toString() method returns a number as a string.

2. Number toExponential(); //toExponential() returns a string, with a number rounded and written using exponential notation.
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

3. Number toFixed(); //toFixed() returns a string, with the number written with a specified number of decimals
let x = 9.5;
x.toFixed(0); // output 10
x.toFixed(2); // output 9.50
x.toFixed(4); // output 9.5000
x.toFixed(6); //output 9.500000

4. Number toPrecision(); // toPrecision() returns a string, with a number written with a specified length
5. Number ValueOf(); //valueOf() returns a number as a number.

*** Converting Variables to Numbers
1. Number(); //Returns a number converted from its argument.
Number(true); //output 1
Number(false); //output 0
Number("10"); //output 10
Number("  10"); //output 10
Number("10  "); //output 10
Number(" 10  "); //output 10
Number("10.33"); //output 10.33
Number("10,33"); //output NaN
Number("10 33"); //output NaN
Number("John"); //output NaN
Number(new Date("1970-01-01")); //output 0

2. parseFloat(); //Parses its argument and returns a floating point number
3. parseInt(); //Parses its argument and returns a whole number
    a. Number.isInteger(10);
    b. Number.isSafeInteger(12345678901234567890);
```

## 8. JavaScript Arrays
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

### Splicing and Slicing in Arrays
- The splice() method adds new items to an array.
- the slice() method slices out a pices on an array.
### Example:
```js
1. Array splice()
const myArray = ['a', 'b', 'c', 'd', 'e', 'g', 'i'];
let x = myArray.splice(1, 3, 'Joy', "Joy1");
console.log(x);

2. Array slice();
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0, 3);
```
### 8.11 Array Sort / Reversing
- The sort() method sorts an array alphabetically
- The  reverse() method reverses the element in an array
- You can use it to sort an array in descending order
- By default, the sort() function sorts values as strings.
- the sort() method will produce incorrect result when sorting numbers
### EXample:
```js
1. Array sort();

2. Array reverse();

3. Number sort() compare function
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
points.sort(function(a, b){return b - a});

4. Sorting an Array in Random Order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});

5. Sorting Object Arrays
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
cars.sort(function(a, b){return a.year - b.year});

6. Comparing string properties is a little more complex: (Improtent)
cars.sort(function(a, b){
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});
```

## 9. Array iteration

### 9.1 Concept array iteration
- Array iteration methods operate on every array item.

### 9.2 Array forEach()
- The forEach() method calls a function (a callback function) once for each array element.
- Note that the function takes 3 arguments:
    -The item value
    -The item index
    -The array itself
### Example:
```js
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value, index, array) {
    console.log(value, index, array)
};
```

### 9.3 Array map()
- The map() method creates a new array by performing a function on each array element.
- The map() method does not execute the function for array eleemnts without values
- The map() method does not change the original array.
### Example:
```js
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

*** Note: 
        - The Item value
        - The item index
        - The array itself
function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2) // Return new Array.
```

### 9.4 Array Filter()
- The filter() method creates a new array with array elements that pass a test.
### Example:
```js
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
*** Note: 
        - The Item value
        - The item index
        - The array itself
function myFunction(value, index, array) {
  return value > 18; //Return New Array;
}
```

### 9.5 Array reduce()
- The reduce() method runs a function on each array element to produce (reduce it to) a single value.
- The reduce() method works from left-to-right in the array.
- The reduce() method does not reduce the original array.
** Note that the function takes 4 arguments:
    - The Total (the initial value / previously returned value)
    - The item value
    - The item index
    - The array itself
### Example:
```js
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
*** Note: 
        - The Total (the initial value / previously returned value)
        - The Item value
        - The item index
        - The array itself
function myFunction(total, value) {
  return total + value;
}

let sum = array.reduce(function (prev, curr) {
    return prev + curr;
}, 10);
let max = array.reduce(function (acc, curr) {
    return Math.max(acc, curr);
}, 0);

var array = [36, 25, 6, 15];

let x= array.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 36 + 25 + 6 + 15 = 82


// Implementation Reduce in JavaScript
function myReduce(array, cb, acc) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        acc = cb(acc, element);
    }
    return acc;
};
let sum = myReduce(array, function (prev, curr) {
    return prev + curr;
}, 0);
let max = myReduce(array, function (prev, curr) {
    return Math.max(prev, curr);
}, 00)
console.log(sum);
console.log(max);
```

### 9.6 Array reduceRight()
- The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
- The reduceRight() works from right-to-left in the array. See also reduce().
- The reduceRight() method does not reduce the original array.
### Example:
```js
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);
function myFunction(total, value, index, array) {
  return total + value;
};


//Implementation reduceRight() in JavaScript
const array = [10, 20, 30, 40, 500, 60, 70, 80, 90];
function myRightReduce(array, cb, acc) {
    for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i];
        acc = cb(acc, element);
    };
    return acc;
};
const max = myRightReduce(array, function (prev, curr) {
    return Math.max(prev, curr);
}, 40);
console.log(max);
```

### 9.7 Array every()
- The every() method checks if all array values pass a test.
### Example:
```js
*** Note: that the function takes 3 arguments:
    - The item value
    - The item index
    - The array itself
    - thisArg?: (any): boolean (optional)-acc
const array = [10, 20, 30, 40, 500, 60, 70, 80, 90];
let every = array.every(function (value, index, array) {
    return value >= 10;
},true);
console.log(every);


// Implementation every() in JavaScript
function myEveryFun(array, cb, acc) {
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array)) {
            acc = true;
        } else {
            acc = false;
            return acc;
        }
    };
    return acc;
};

const every = myEveryFun(array, function (value, index, array) {
    return value >= 10;
}, true);
console.log(every);
```

### 9.8 Array some()
- The some() method checks if some array values pass a test.
### Example:
```js
*** Note: that the function takes 3 arguments:
    - The item value
    - The item index
    - The array itself
    - thisArg?: (any): boolean (optional)-acc
let some = array.some(function (value, index, array) {
    return value > 100
}, false);
console.log(some);

// implementation some() methods
const array = [10, 20, 30, 1, 500, 60, 70, 80, 90];
function mySomeFun(array, cb, acc) {
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (cb(value, i, array)) {
            acc = true;
            return acc
        } else {
            acc = false;
        }
    };
    return acc;
};
const some = mySomeFun(array, function (value, i, array) {
    return value % 10 != 0;
}, true);
console.log(some);
```

### 9.9 Array find()
- The find() method returns the value of the first array element that passes a test function.
- This example finds (returns the value of) the first element that is larger than 18
### Example:
```js
*** Note that the function takes 3 arguments:
        - The item value
        - The item index
        - The array itself
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
function myFunction(value, index, array) {
  return value > 18;
};

const array = [10, 20, 30, 10, 501, 60, 70, 80, 90];
let find = array.find(function (value, index, array) {
    return value % 2 === 0;
});


// Implementation Find() method
function myFindFun(array, cb) {
    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (cb(value, i, array)) {
            return value;
        };
    };
};
let find = myFindFun(array, function (value, index, array) {
    return value % 2 !== 0;
});
console.log(find);
```

### 9.10 Array indexOf()
- The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
### Example:
```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // Expected output: 1
console.log(beasts.indexOf('bison', 2)); // Expected output: 4

console.log(beasts.indexOf('giraffe')); // Expected output: -1
```

### 9.11 Array includes()
- ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
### Example:
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // is true
fruits.includes("Potato"); // is false
```

### 9.12 Array Spread(...)
- The ... operator expands an iterable (like an array) into more elements:
### Example:
```js
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4];
```

## 10. Variable Const

### 10.1 Array Const
- In 2015, JavaScript introduced an important new keyword: const.
- It has become a common practice to declare arrays using const:
- Cannot be Reassigned
- Array Elements Can be Reassigned
- An array declared with const cannot be reassigned
- Const Block Scope
- An array declared with const has Block Scope.
- An array declared with var does not have block scope

### Example:
```js
const cars = ["Saab", "Volvo", "BMW"];

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];  ///Error

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");

const cars; // Error
cars = ["Saab", "Volvo", "BMW"]; //Error


const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
```

## 11. JavaScript Dates

### 11.1 Date Objects
### Example:
```js
1. new Date()
2. new Date(date string)
3. new Date(year,month)
4. new Date(year,month,day)
5. new Date(year,month,day,hours)
6. new Date(year,month,day,hours,minutes)
7. new Date(year,month,day,hours,minutes,seconds)
8. new Date(year,month,day,hours,minutes,seconds,ms)
9. new Date(milliseconds)

-- new Date() creates a date object with the current date and time
const d = new Date();

*** Note:- JavaScript counts months from 0 to 11:
        - January = 0.
        - December = 11.
```

### 11.2 Date Formats
- There are generally 3 types of JavaScript date input formats:
    - ISO DATE ("2015-03-25" (The International Standard))
    - Short DATE ("03/25/2015")
    - Long DATE ("Mar 25 2015" or "25 Mar 2015")

### 11.3 Date Get Methods
### Example:
```js
1. getFullYear()	Get year as a four digit number (yyyy)
2. getMonth()	Get month as a number (0-11)
3. getDate()	Get day as a number (1-31)
4. getDay()	Get weekday as a number (0-6)
5. getHours()	Get hour (0-23)
6. getMinutes()	Get minute (0-59)
7. getSeconds()	Get second (0-59)
8. getMilliseconds()	Get millisecond (0-999)
9. getTime()	Get time (milliseconds since January 1, 1970)

*** new Date()
const d = new Date("2021-03-25");
d.getFullYear();

const d = new Date("2021-03-25");
d.getMonth();


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date("2021-03-25");
let month = months[d.getMonth()];

const d = new Date();
console.log(d.getDate());

const d = new Date();
d.getHours();

const d = new Date();
d.getMinutes();

const d = new Date();
d.getSeconds();

const d = new Date();
d.getMilliseconds();

const d = new Date();
d.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = days[d.getDay()];
console.log(day);

let d = new Date();
d.getTime();


const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
let years = Math.round(Date.now() / year);
```

## 12. JavaScript Math

### 12.1 Math Object
### Example:
```js
1. Math.E        // returns Euler's number
2. Math.PI       // returns PI
3. Math.SQRT2    // returns the square root of 2
4. Math.SQRT1_2  // returns the square root of 1/2
5. Math.LN2   // returns the natural logarithm of 2
6. Math.LN10  // returns the natural logarithm of 10
7. Math.LOG2E    // returns base 2 logarithm of E
8. Math.LOG10E   // returns base 10 logarithm of E

*** Number to Integer
1. Math.round(x)
2. Math.ceil(x)
3. Math.floor(x)
4. Math.trunc(x)

*** Math.min() and Math.max()
Math.min(0, 150, 30, 20, -8, -200);
Math.max(0, 150, 30, 20, -8, -200);

*** Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
Math.random()

// Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
cos(x)	Returns the cosine of x (x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
sin(x)	Returns the sine of x (x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x)
```

### 12. 2 Math random()
- Math.random() always returns a number lower than 1.
- Math.random() used with Math.floor() can be used to return random integers.
### Example:
```js
// Returns a random number:
Math.random();

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);

// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
```

## 13. JavaScript Booleans / Conditions
- A JavaScript boolean represents one of two values: (true | false).
- JavaScript has a Boolean data type. It can only take the values true or false.
- You can use the Boolean() function to find out if an expression (or a variable) is true:

### 13.1 Comparisons and Conditions
- The chapter JS Comparisons gives a full overview of comparison operators.
### Example:
```js
1. == (equal to)
2. > (greater than)
3. <> (less than)
4. ===	(equal value and equal type)
5. !=	(not equal)
6. !==	(not equal value or not equal type)
7. >=	(greater than or equal to)
7. <=	(less than or equal to)

let x = 0;
Boolean(x); // False

let x = -0;
Boolean(x); // False

let x = "";
Boolean(x); // False

let x;
Boolean(x); // False

let x = null;
Boolean(x); // False

let x = false;
Boolean(x); // False

let x = 10 / "Hallo"; //NaN
Boolean(x); // False 
```

### 13.2 Logical Operator
- Logical Operators are used to determine the logic between variables or values.
- (&&) => AND
- (||) => OR
- (!) => NOT

- The Optional Chaining Operator (?.)
- The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

### 13.3 JS if, else and else if
- Use if to specify a block of code to be executed, if a specified condition is true
- Use else to specify a block of code to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false
- Use switch to specify many alternative blocks of code to be executed
### Example:
```js
if (condition) {
  //  block of code to be executed if the condition is true
}

if (hour < 18) {
  greeting = "Good day";
}

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

### 13.4 JS Switch Statement
- The switch statement is used to perform different actions based on different conditions.
- Use the switch statement to select one of many code blocks to be executed.

- This is how it works:
        - The switch expression is evaluated once.
        - The value of the expression is compared with the values of each case.
        - If there is a match, the associated block of code is executed.
        - If there is no match, the default code block is executed.
### Example:
```js
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}


switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
```

## 14. JavaScript Loop
- Different Kinds of Loops
    - FOR
    - FOR/IN
    - FOR/OF
    - WHILE
    - DO/WHILE

- The For Loop
    - The for statement creates a loop with 3 optional expressions:
        - Expression 1 is executed (one time) before the execution of the code block.
        - Expression 2 defines the condition for executing the code block.
        - Expression 3 is executed (every time) after the code block has been executed.

- The JavaScript for in statement loops through the properties of an Object:
- The JavaScript for of statement loops through the values of an iterable object.
### Example:
```js
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}


for (key in object) {
  // code block to be executed
}

for (variable of iterable) {
  // code block to be executed
}

while (condition) {
  // code block to be executed
}

while (i < 10) {
  text += "The number is " + i;
  i++;
}

do {
  // code block to be executed
}
while (condition);
```

### 14.1 Break And Continue
- The Break statement "Jumps Out" of a loop.
- The contunue statement "Jumps over" one iteration in the loop.
### Example:
```js
let x = [3, 4, 63, 74, 2, 73, 44, 50, 44];
for (let i = 0; i < x.length; i++) {
    let value = x[i];
    if (value > 60) {
        continue;
    }
    console.log(value);
};

let x = [3, 4, 63, 74, 2, 73, 44, 50, 44];
for (let i = 0; i < x.length; i++) {
    let value = x[i];
    if (value > 70) {
        break;
    }
    console.log(value);
}
```

## 15. JavaScript Sets
- A JavaScript Set is a collection of unique values.
- Each value can only occur once in Set.

- Essential Set Methods
    - Method
        - new Set() Creates a new Set.
        - add() Adds a new element to the Set.
        - delete() removes an element from a Set.
        - has() Returns true if a value exists in the Set.
        - forEach() Invokes a callback for each element in the Set.
        - values() Returns an iterator with all the values in a Set.
    - Property
        - size Returns the number of elements in a Set.

### Example:
```js
// Create a Set
const letters = new Set();
// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Create a Set
const letters = new Set(["a","b","c"]);


const x = new Set();
console.log(x);
x.add("A");
x.add("Apple");
x.add("B");
x.add("Ball");
x.add("C");
x.add("Cat");
x.add("E");
x.add("Ego");
x.add("G");
x.add("Goat");
x.forEach(function (value, i, array) {
    // console.log(value);
})
// let y = x.values();
for (const y of x.values()) {
    console.log(y);
}

x.clear();
```
        
## 16. JavaScript Map
- A Map holds key-value pairs where the keys can be any datatype.
- A Map remembers the original insertion order of the keys.
### Example:
```js
1. new Map()	Creates a new Map
2. set()	Sets the value for a key in a Map
3. get()	Gets the value for a key in a Map
4. delete()	Removes a Map element specified by the key
5. has()	Returns true if a key exists in a Map
6. forEach()	Calls a function for each key/value pair in a Map
7. entries()	Returns an iterator with the [key, value] pairs in a Map
** size	Returns the number of elements in a Map

// You can create a JavaScript Map by:
- Passing an Array to new Map().
- Create a Map and use Map.set().

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits.set("Potato", 100);
let apples = fruits.get("apples");
console.log(apples);

console.log(fruits) 
fruits.delete("bananas")
console.log(fruits)

let has = fruits.has(true)
console.log(has);

fruits.forEach(function (value, key, Map) {
    console.log(value, key, Map);
});

for (const i of fruits.entries()) {
    console.log(i);
}

fruits.clear()
console.log(fruits);
```

## 17. Regular Expressions
- A Regular expression is a sequence of characters that forms a search pattern.
- The search pattern can be used for text search and text replace operations.

### 17.1 What is Regular Expression?
- A regular expression is a sequence of characters that forms a search pattern.
- A regular expression can be a single character, or a more complicated pattern.

### 17.2 Using String Methods
- In JavaScript, regular expressions are often used with the two string methods: search() and replace().
- The search() method uses an expression to search for a match, and returns the position of the match.
- The replace() method returns a modified string where the pattern is replaced.
### Example:
```js
let search = "My name is Joy. I am from in bangladesh";
console.log(search.search(/JOY/gi));

let text = "cat, (Felis catus), also called house cat or domestic cat, domesticated member of the family Felidae, order Carnivora, and the smallest";
let replace = text.replace(/cat/gi, "DOG");
console.log(replace);

console.log(/E/i.test("The best things in life are free!")); // Return TRUE/FALSE
console.log(/H/gi.exec("The best things in life are free!")); //It searches a string for a specified pattern, and returns the found text as an object.

let x = 1;
console.log(x++); // 1
console.log(x++); //2
console.log(x++); // 3
console.log(x--); // 4
console.log(x--); //3
console.log(x--); //2
let x =1;
console.log(++x); //2
console.log(++x); //3
console.log(--x); //2
console.log(--x); //1

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
``` 

## 18. JavaScript Scope
- Scope determines the accessibility (visibility) of variables.
- JavaScript has 3 types of scope:
    - Block Scope
    - Function Scope
    - Global Scope
### Example:
```js
Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

** These two keywords provide Block Scope in JavaScript.

- Variables declared inside a { } block cannot be accessed from outside the block:
{
  const x = 2;
}
// x can NOT be used here
{
  let x = 2;
}
// x can NOT be used here

{
  var x = 2;
}
// x CAN be used here

Local Scope
- Variables declared within a JavaScript function, become LOCAL to the function.

// code here can NOT use carName
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName

Global JavaScript Variables
- A variable declared outside a function, becomes GLOBAL.

let carName = "Volvo";
// code here can use carName
function myFunction() {
// code here can also use carName
}

The Lifetime of JavaScript Variables
The lifetime of a JavaScript variable starts when it is declared.

Function (local) variables are deleted when the function is completed.

In a web browser, global variables are deleted when you close the browser window (or tab).

** JavaScript Initializations are Not Hoisted
var x = 5; // Initialize x
var y = 7; // Initialize y
console.log(x,y);

let p = 5;
console.log(p + q); //Cannot access 'q' before initialization
let q = 10
```

## 19. JavaScript This Keyword
### 19.1 What is this?
- In JavaScript, the this keyword refers to an object.
- The value of this depends on in which context it appears: function, class, or global.
### Example:
```js
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function (hobby) {
        this.hobby = hobby;
        return this;
    }
};
let x = person.myFunction("Programming");
console.log(x);
```

## 20. JavaScript Arrow Function
- Arrow functions were introduced in ES6.
```js
let myFunction = (a, b) => a * b;
hello = () => "Hello World!";
hello = (val) => "Hello " + val;
```

## 21. Classes
- Use the keyword class to create a class.
- Always add a method named constructor().
### Example
```js
class ClassName {
  constructor() { ... }
}

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  };
};
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
```

### 21.1 Class Methods
- Class Methods
  - Class methods are created with the same syntax as object methods.
  - Use the keyword class to create a class.
  - Always add a constructor() method.
  - Then add any number of methods.
  ### Example
```js
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
};

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    };
    age(year) {
        this.release = `${year - this.year} Year ago.`
        return this;
    };
};
const car1 = new Car("Frod", 2009);
const year = new Date().getFullYear();
console.log(car1.age(year));
```

## 22. JavaScript OBJECTS
```js
In JavaScript, almost "everything" is an object.

  - Booleans can be objects (if defined with the new keyword)
  - Numbers can be objects (if defined with the new keyword)
  - Strings can be objects (if defined with the new keyword)
  - Dates are always objects
  - Maths are always objects
  - Regular expressions are always objects
  - Arrays are always objects
  - Functions are always objects
  - Objects are always objects

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

### 22.1 Object Properties
- Properties are the most important part of any JavaScript Object.
- Properties can usually be changed, added, and deleted, but some are read only.

```js
** Accessing JavaScript Properties
objectName.property      // person.age
objectName["property"]   // person["age"]
objectName[expression]   // x = "age"; person[x]

** Adding New Properties
person.nationality = "English";

** Delete Properties
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
delete person.age;
delete person["age"];
```

- JavaScript for...in Loop
- The JavaScript for...in statement loops through the properties of an object.
```js
for (let variable in object) {
  // code to be executed
}

// nasted Object in Array
const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
};
for (const key in myObj.cars) {
    let carName = myObj.cars[key].name;
    let models = myObj.cars[key].models;
    for (const i of models) {
        console.log(`Car Name=> ${carName} and models=> ${i}`);
    }
}
```

### 22.2 Object Methods
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() { // fullName is a Method. 
    return this.firstName + " " + this.lastName;
  }
};

** In an object method, this refers to the object.
** Alone, this refers to the global object.
** In a function, this refers to the global object.
** In a function, in strict mode, this is undefined.
** In an event, this refers to the element that received the event.
** Methods like call(), apply(), and bind() can refer this to any object.

*** Accessing Object Methods
 - objectName.methodName();
 - name = person.fullName();
```

### 22.3 Object Accessors
- JavaScript Accessors (Getters and Setters).

- JavaScript Getter (The get Keyword)
```js
// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "ENGLISH",
    get lang() {
        return this.language;
    }
};
console.log(person.lang);
```

- JavaScript Setter (the set Keyword)
```js
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "ENGLISH",
    set setAge(age) {
        this.age = age;
    },
};
// person.setAge = 20;
console.log(person);
```