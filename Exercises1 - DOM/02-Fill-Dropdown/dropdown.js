function addItem() {
    let newItemText = document.getElementById('newItemText').value.trim();
    let newItemValue = document.getElementById('newItemValue').value.trim();

    if (newItemText !== '' && newItemValue !== '') {
        let addedOption = document.getElementById('menu').appendChild(document.createElement('option'));
        addedOption.textContent = newItemText;
        addedOption.value = newItemValue;
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }
}