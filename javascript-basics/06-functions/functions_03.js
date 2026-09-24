// arrow function in js

const sum = (a, b) => {
    return a+b;
};

console.log(sum(2, 3));

console.log("");

// printing mul table of 5 using arrow function

const mul_table = (n) => {
    for(let i = 1; i <= 10; i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
};

mul_table(5);

console.log("");

// printing employee details: name, company, role, salary

const employee = (name, company, role, salary) => {
    console.log(`Employee name: ${name}\nEmployee company: ${company}\nEmployee role: ${role}\nEmployee salary: ${salary}`);
    console.log("");
};

employee("Aditya", "Zoho", "Python Developer", 800000);
employee("Rahul", "TCS", "Frontend Developer", 500000);
employee("Priya", "Infosys", "Java Developer", 1200000);