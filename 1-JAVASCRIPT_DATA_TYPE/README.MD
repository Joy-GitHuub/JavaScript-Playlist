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
