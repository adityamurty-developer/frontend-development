// Get user's input using prompt("Enter a num: "), and check if the num is a multiple of 5 or not.

let num = prompt("Enter a num: ");

if(num % 5 === 0){
    console.log(num, "is a multiple of 5.");
} else{
    console.log(num, "is not a multiple of 5.");
}