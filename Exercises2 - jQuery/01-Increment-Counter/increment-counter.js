function increment(selector) {
    let container = $(selector);
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    textArea.addClass('counter');
    textArea.val(0);
    textArea.prop('disabled', true);

    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    incrementBtn.on('click', increment);

    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    addBtn.on('click', add);

    list.addClass('results');

    container.append(textArea);
    container.append(incrementBtn);
    container.append(addBtn);
    container.append(list);

    function increment() {
        textArea.val(Number(textArea.val()) + 1);
    }

    function add() {
        let li = $(`<li>${textArea.val()}</li>`);
        list.append(li);
    }
}