function addDestination() {
    let $city = $($('#input .inputData')[0]);
    let $country = $($('#input .inputData')[1]);
    let $season = $('#seasons');

    if($city.val() !== '' && $country.val() !== '') {
        let $destinationsList = $('#destinationsList');
        let $tr = $('<tr>');

        let $cityAndTownTd = $('<td>');
        $cityAndTownTd.text(`${$city.val()}, ${$country.val()}`);

        let $seasonTd = $('<td>');
        let args = $season.val().split('');
        args[0] = args[0].toUpperCase();

        $seasonTd.text(args.join(''));

        $tr.append($cityAndTownTd);
        $tr.append($seasonTd);

        $destinationsList.append($tr);

        let updatedCount = Number($(`#${$season.val()}`).val()) + 1;
        $(`#${$season.val()}`).val(updatedCount);

        $city.val('');
        $country.val('');
        $season.val('summer');
    }
}