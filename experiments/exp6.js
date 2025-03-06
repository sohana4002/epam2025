const numbers = [10, -5, 23, -8, 4, 0, 12, -1, 7, 15];

function filterPositiveNumbers() {
    return numbers.filter(num => num >= 0);
}

console.log("Original Array:", numbers);
console.log("Filtered Array (Non-negative numbers):", filterPositiveNumbers());

function displayFilteredArray() {
    document.getElementById("result").innerText = 
        "Filtered Array: " + filterPositiveNumbers().join(", ");
}
