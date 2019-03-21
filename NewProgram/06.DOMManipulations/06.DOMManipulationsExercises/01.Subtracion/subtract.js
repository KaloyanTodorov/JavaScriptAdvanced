function subtract() {
    const $firstNum = $('#firstNumber');
    const $secondNum = $('#secondNumber');
    const $result = $('#result');

    const result = Number($firstNum.val()) - Number($secondNum.val());

    $result.text(result);
}