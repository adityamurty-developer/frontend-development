// var → can be redeclared and reassigned
var age = 25;
var age = 60;  
console.log(age)    // output will be 60 because last assigned var is considered

// let → cannot be redeclared, but can be reassigned
let marks = 86;
console.log(marks)
// let marks = 23 --> this gives an error because marks is already declare but we can reassign the value of marks
marks = 23;
console.log(marks)

// const → cannot be redeclared or reassigned
const PI = 3.14;
let radius = 12;
let area = PI * radius * radius;
console.log(area);


// let and const were introduced in ES6 (2015).
// In modern JavaScript, prefer let/const over var.