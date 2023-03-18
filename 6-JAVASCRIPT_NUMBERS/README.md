## 7 JavaScript Numbers

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
