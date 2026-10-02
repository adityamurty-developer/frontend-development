function calculateTotal(expenses){
    let total = 0;
    for(let price of expenses){
        total += price;
    }
    return total;
}

function calculateAverage(expenses) {
    let average = calculateTotal(expenses) / expenses.length;
    let rounded_average = Number(average.toFixed(2));
    return rounded_average;
}

function findMaximum(expenses) {
    let max_expense = expenses[0];
    for(let expense of expenses){
        if(expense > max_expense){
            max_expense = expense;
        }
    }
    return max_expense;
}

function findMinimum(expenses) {
    let min_expense = expenses[0];
    for(let expense of expenses){
        if(expense < min_expense){
            min_expense = expense;
        }
    }
    return min_expense;
}

const expenses = [250, 120, 800, 180, 299];

console.log(calculateTotal(expenses));
console.log(calculateAverage(expenses));
console.log(findMaximum(expenses));
console.log(findMinimum(expenses));

console.log(`===== Expense Summary =====
Total: ${calculateTotal(expenses)}
Average: ${calculateAverage(expenses)}
Maximum: ${findMaximum(expenses)}
Minimum: ${findMinimum(expenses)}
===========================`);