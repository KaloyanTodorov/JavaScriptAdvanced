function domSearch(selector, isCaseSensitive = false) {
    // TODO
    $(selector).addClass('items-control');
    let addControls = $('<div class="add-controls">');
    addControls
        .append($('<label>"Enter text: "</label>').append($('<input>')))
        .append($('<a class="button">Add</a>')
            .css('display', 'inline-block')
            .on('click', addItem));
    $(selector).append(addControls);

    $(selector).addClass(' -controls');
    let searchControls = $('<div class="search-controls"></div>');
    searchControls.append($('<label>"Search: "</label>').append($('<input>')));
    $(selector).append(searchControls);

    $(selector).addClass('result-controls');
    let resultControls = $('<div class="result-controls"></div>')
        .append($('<ul class="items-list"></ul>'));

    $(selector).append(resultControls);

    $('.search-controls label input').on('input', searchElements);

    function addItem() {
        let currentInput = $('.add-controls input');

        if(currentInput.val() !== '')  {

            let li = $('<li class="list-item"></li>')
                .append($('<a class="button">X</a>').on('click', removeItem))
                .append($(`<strong>${currentInput.val()}</strong>`));

            $('ul.items-list').append(li);
            currentInput.val('');
        }
    }

    function removeItem() {
        $(this.parentNode).remove();
    }

    function searchElements() {
        let searchWord = $(this).val();
        if(!isCaseSensitive) {
            searchWord = searchWord.toLowerCase();
        }

        let listItems = $('li.list-item strong').toArray();
        // console.log(listItems);

        for (let item of listItems) {
            let current = $(item);

            if (current.text().indexOf(searchWord) < 0) {
                current.parent().css('display', 'none');
            } else {
                current.parent().css('display', '');
            }
        }
    }

}