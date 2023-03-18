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
