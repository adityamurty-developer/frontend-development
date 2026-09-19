// for...of → gives values

let numbers = [10, 20, 30, 40, 50];

for (let value of numbers) {
    console.log(value);
}


// for...in → gives keys/properties

let employee = {
    name: "Rohan",
    age: 22,
    salary: 50000
};

for (let key in employee) {
    console.log(key, ":", employee[key]);
}