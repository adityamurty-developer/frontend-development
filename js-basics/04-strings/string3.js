// string methods

let name = "Aditya";
console.log(name.length);  // calculates str length

console.log(name.toUpperCase());  // uppercase

console.log(name.toLowerCase());  // lowercase

let word = "  Hello World  ";
console.log(word.trim());  // removes outer spaces

let sentence = "Hey i love Java Script";
console.log(sentence.includes("Java Script"));  // check if present

console.log(sentence.startsWith("Hey"));
console.log(sentence.endsWith("Script"));

console.log(sentence.indexOf("Java"));  // returns the index of first char 

let new_word = "HelloWorld";
console.log(new_word.slice(2, 7));  // end pos is not included 

let new_sentence = "I love JavaScript";
console.log(new_sentence.replace("JavaScript", "Python"));

let num = "12345";
console.log(num.split(""));