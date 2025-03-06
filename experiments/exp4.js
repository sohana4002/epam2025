function reverseNumber(num) {
    let reversedStr = Math.abs(num).toString().split('').reverse().join('');
    let reversedNum = parseInt(reversedStr) * Math.sign(num);
    return reversedNum;
}

function showReversedNumber() {
    let num = document.getElementById("numberInput").value;
    let reversed = reverseNumber(parseInt(num));
    document.getElementById("result").innerText = "Reversed: " + reversed;
}
