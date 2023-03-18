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
