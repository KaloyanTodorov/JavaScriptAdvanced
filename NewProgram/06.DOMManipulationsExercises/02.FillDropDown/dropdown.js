function addItem() {
    let $newItemText = $('#newItemText');
    let $newItemValue = $('#newItemValue');

    let $dropdownMenu = $('#menu');

    $dropdownMenu
    .append($('<option>')
                .attr('value', $newItemValue.val())
                .text($newItemText.val()));

    $newItemText.val('');
    $newItemValue.val('');
}