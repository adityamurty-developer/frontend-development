// array methods

// 1. push() --> add elements at the end 

let foodItems = ["Potato", "Apple", "Mango", "Capsicum", "Tomato"];
console.log(foodItems);
console.log(`length before: ${foodItems.length}`);
console.log("");

foodItems.push("Chips", "Maggie",);

console.log(foodItems);
console.log(`length after: ${foodItems.length}`);
console.log("");

// 2. pop() --> deletes from the end 

let deleted_item = foodItems.pop();
console.log(`Deleted food item is: ${deleted_item}`);
console.log("");

// 3. toString() --> converts an array to a string 

console.log(foodItems.toString());