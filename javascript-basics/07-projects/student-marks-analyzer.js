const marks = [85, 72, 91, 64, 38, 56];
let total = 0;

for(let mark of marks){
    total += mark;
}

console.log(`Total marks: ${total}`)

let average = total / marks.length;
let average_result = Number(average.toFixed(4));

console.log(`Average marks: ${average_result}`);

let max_marks = marks[0];
for(let i = 0; i < marks.length; i++){
    if(marks[i] > max_marks){
        max_marks = marks[i];
    }
}

console.log(`Max marks: ${max_marks}`);

let min_marks = marks[0];
for(let j = 0; j < marks.length; j++){
    if(marks[j] < min_marks){
        min_marks = marks[j];
    }
}

console.log(`Min marks: ${min_marks}`);

let pass_count = 0;
let fail_count = 0;

for(let mark of marks){
    if(mark >= 40){
        pass_count++;
    } else{
        fail_count++;
    }
}

console.log(`Passed students: ${pass_count}\nFailed students: ${fail_count}`);

let grade;

if (average_result >= 90) {
    grade = "A";
} else if (average_result >= 75) {
    grade = "B";
} else if (average_result >= 60) {
    grade = "C";
} else if (average_result >= 40) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Grade: ${grade}`);

let pass_percentage = (pass_count / marks.length) * 100;
let rounded_pass_percentage =  Number(pass_percentage.toFixed(4));
console.log(`Pass percentage: ${rounded_pass_percentage}%`);

console.log(`\n===== Student Marks Summary =====
Total marks: ${total}
Average marks: ${average_result}
Max marks: ${max_marks}
Min marks: ${min_marks}
Passed students: ${pass_count}
Failed students: ${fail_count}
Grade: ${grade}
Pass percentage: ${rounded_pass_percentage}%
=================================`);