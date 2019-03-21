function increment(selector) {
    let container = $(selector);

    let textareaElement = $('<textarea>');
    textareaElement.addClass('counter');
    textareaElement.val(0);
    textareaElement.attr('disabled', true);

    let incrementButtonElement = $('<button>');
    incrementButtonElement.attr('id', 'incrementBtn');
    incrementButtonElement.addClass('btn');
    incrementButtonElement.text('Increment');

    let addButtonElement = $('<button>');
    addButtonElement.attr('id', 'addBtn');
    addButtonElement.addClass('btn');
    addButtonElement.text('Add');

    let ulElement = $('<ul>');
    ulElement.addClass('results');

    container.append(textareaElement);
    container.append(incrementButtonElement);
    container.append(addButtonElement);
    container.append(ulElement);

    let counter = 0;

    incrementButtonElement.on('click', incrementCounter);

    addButtonElement.on('click', addListElement);

    function incrementCounter() {
        counter++;
        textareaElement.val(counter);
        return counter;
    }

    function addListElement() {
        let liElement = $('<li>');
        liElement.text(counter);
        ulElement.append(liElement);
    }
}