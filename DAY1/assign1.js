const str = "Hello World";
console.log(str);
console.log("-------------------------------------------------------");

// length → number of characters
console.log(str.length);
console.log("-------------------------------------------------------");

// toUpperCase → convert to uppercase
console.log(str.toUpperCase());
console.log("-------------------------------------------------------");

// toLowerCase → convert to lowercase
console.log(str.toLowerCase());
console.log("-------------------------------------------------------");

// charAt → character at index
console.log(str.charAt(4));
console.log("-------------------------------------------------------");

// indexOf → first occurrence
console.log(str.indexOf("o"));
console.log("-------------------------------------------------------");

// lastIndexOf → last occurrence
console.log(str.lastIndexOf("o"));
console.log("-------------------------------------------------------");

// includes → check substring
console.log(str.includes("World"));
console.log("-------------------------------------------------------");

// startsWith → check prefix
console.log(str.startsWith("Hello"));
console.log("-------------------------------------------------------");

// endsWith → check suffix
console.log(str.endsWith("World"));
console.log("-------------------------------------------------------");

// slice → extract substring
console.log(str.slice(0, 5));
console.log("-------------------------------------------------------");

// substring → extract substring (similar to slice)
console.log(str.substring(6, 11));
console.log("-------------------------------------------------------");

// substr → extract substring (deprecated but still works)
console.log(str.substr(6, 5));
console.log("-------------------------------------------------------");

// replace → replace first match
console.log(str.replace("World", "JavaScript"));
console.log("-------------------------------------------------------");

// replaceAll → replace all matches
const str2 = "apple apple apple";
console.log(str2.replaceAll("apple", "banana"));
console.log("-------------------------------------------------------");

// trim → remove whitespace
const spaced = "   padded text   ";
console.log(spaced.trim());
console.log("-------------------------------------------------------");

// trimStart → remove leading spaces
console.log(spaced.trimStart());
console.log("-------------------------------------------------------");

// trimEnd → remove trailing spaces
console.log(spaced.trimEnd());
console.log("-------------------------------------------------------");

// split → convert to array
console.log(str.split(" "));
console.log("-------------------------------------------------------");

// concat → join strings
console.log("Hello".concat(" ", "JS"));
console.log("-------------------------------------------------------");

// repeat → repeat string
console.log("Hi! ".repeat(3));
console.log("-------------------------------------------------------");

// padStart → pad beginning
console.log("5".padStart(3, "0"));
console.log("-------------------------------------------------------");

// padEnd → pad end
console.log("5".padEnd(3, "0"));
console.log("-------------------------------------------------------");

// localeCompare → compare strings
console.log("apple".localeCompare("banana"));
console.log("-------------------------------------------------------");