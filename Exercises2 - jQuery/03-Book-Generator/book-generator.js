function createBook(selector, bookTitle, bookAuthor, ISBN) {
    let bookGenerator = (function() {
        let id = 1;
        return function(selector, bookTitle, bookAuthor, ISBN) {
            let container = $(selector);
            let bookContainer = $('<div>');
            bookContainer.attr('id', `book${id}`).css('border', 'none');

            $(`<p class="title">${bookTitle}</p>`).appendTo(bookContainer);
            $(`<p class='author'>${bookAuthor}</p>`).appendTo(bookContainer);
            $(`<p class='isbn'>${ISBN}</p>`).appendTo(bookContainer);
            let selectBtn = $('<button>Select</button>').appendTo(bookContainer);
            let deselectBtn = $('<button>Deselect</button>').appendTo(bookContainer);

            bookContainer.appendTo(container);
            selectBtn.on('click', () => bookContainer.css('border', '2px solid blue'));
            deselectBtn.on('click', () => bookContainer.css('border', 'none'))
            id++;
        }
    }());

    bookGenerator(selector, bookTitle, bookAuthor, ISBN);
    bookGenerator(selector, bookTitle, bookAuthor, ISBN);
    bookGenerator(selector, bookTitle, bookAuthor, ISBN);
}

