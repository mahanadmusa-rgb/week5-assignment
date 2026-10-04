let budget = 0;
let expenses = 0;

budget = Number(prompt("Enter your monthly budget:"));
expenses = Number(prompt("Enter your total expenses:"));
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
let remainingBalance = calculateBalance(budget, expenses);
console.log("=== SpendWise Budget Summary ===");
console.log("Budget: Ksh " + budget);
console.log("Expenses: Ksh " + expenses);
console.log("Remaining Balance: Ksh " + remainingBalance);