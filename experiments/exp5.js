function calculateProfit() {
    let initialAmount = parseFloat(prompt("Enter the initial deposit amount:"));
    if (isNaN(initialAmount) || initialAmount <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid deposit amount.";
        return;
    }
    const interestRate = 0.05; 
    let profit = initialAmount * interestRate;
    let totalAmount = initialAmount + profit;
    document.getElementById("result").innerHTML = `
        <p><strong>Initial Deposit:</strong> $${initialAmount.toFixed(2)}</p>
        <p><strong>Interest Rate:</strong> 5% per year</p>
        <p><strong>Profit:</strong> $${profit.toFixed(2)}</p>
        <p><strong>Total Amount After 1 Year:</strong> $${totalAmount.toFixed(2)}</p>
    `;
    console.log(`Deposit: $${initialAmount.toFixed(2)}, Profit: $${profit.toFixed(2)}, Total: $${totalAmount.toFixed(2)}`);
}
