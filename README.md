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


## 2 JavaScript Data Types

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


### The Typeof Operator
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

## 3 JavaScript Function
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

## 4 JavaScript Obejct

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

## 5 JavaScript Strings
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

## 6 JavaScript Template Literals
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