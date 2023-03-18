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
