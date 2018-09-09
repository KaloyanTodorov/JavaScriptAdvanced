function calendar(arr) {
    let content = $('#content');

    let argDay = arr[0];
    let argMonth = arr[1] - 1;
    let argYear = arr[2];

    let firstDayOfMonth = new Date(argYear, argMonth, 1);
    let month = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };

    let daysOfWeek = {
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat',
        7: 'Sun'
    }

    let table = $('<table>');
    let caption = $(`<caption>${month[firstDayOfMonth.getMonth()]} ${argYear}</caption>`);
    let tbody = $('<tbody>');
    let theader = $('<tr>');
    let previousMonthCells = ( firstDayOfMonth.getDay() != 0 ? firstDayOfMonth.getDay() : 7 );
    let lastDayOfMonth = new Date(argYear, argMonth + 1, 0).getDate();

    for (const key in daysOfWeek) {
        
        theader.append($(`<th>${daysOfWeek[key]}</th>`));
    }

    let trPrev;
    let currentDay = 1;
    if (previousMonthCells != 1) {
        trPrev = $('<tr>');
        for (let i = 1; i <= 7; i++) {
            if(i < previousMonthCells) {
                trPrev.append($('<td>'));
            } else {
                if(currentDay !== argDay) {
                    trPrev.append(`<td>${currentDay}</td>`);
                } else {
                    trPrev.append(`<td class="today">${currentDay}</td>`)
                }
                currentDay++;
            }
        }
    }

    tbody.append(theader)
         .append(trPrev);
    
    let currentWeek = $('<tr>');
    let breakWeek = 0;
    for (let i = currentDay; i <= lastDayOfMonth; i++) {
        breakWeek++;
        if(i !== argDay) {
            currentWeek.append($(`<td>${i}</td>`));
        } else {
            currentWeek.append($(`<td class="today">${i}</td>`));
        }
        
        if (breakWeek === 7) {
            tbody.append(currentWeek);
            breakWeek = 0;
            currentDay = i;
            currentWeek = $('<tr>')
        }
    }

    let remainingDaysOfWeek = (7 - new Date(argYear, argMonth, lastDayOfMonth).getDay());

    for (let i = 1; i <= remainingDaysOfWeek; i++) {
        currentWeek.append($('<td>'));
    }

    tbody.append(currentWeek);
    
    table.append(caption)
         .append(tbody);

    content.append(table);
}