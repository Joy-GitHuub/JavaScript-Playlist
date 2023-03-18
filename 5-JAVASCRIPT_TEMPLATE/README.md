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
