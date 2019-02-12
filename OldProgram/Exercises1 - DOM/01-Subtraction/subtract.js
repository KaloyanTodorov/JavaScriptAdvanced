function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    return document.getElementById('result').textContent = firstNumber - secondNumber;

}