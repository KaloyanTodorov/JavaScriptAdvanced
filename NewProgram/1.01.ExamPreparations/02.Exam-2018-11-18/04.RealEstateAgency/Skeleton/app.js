function realEstateAgency () {
    let $apartmentRent = $('input[name="apartmentRent"]');
    let $apartmentType = $('input[name="apartmentType"]');
    let $agencyCommission = $('input[name="agencyCommission"]');

    let $regOfferButton = $('button[name="regOffer"]');
    let $building = $('#building');

    let $message = $('#message');

    $regOfferButton.on('click', function() {
        if(Number($apartmentRent.val()) > 0 &&
            Number($agencyCommission.val() >= 0 &&
            Number($agencyCommission.val()) <= 100 &&
            $apartmentType.val() !== '' &&
            $apartmentType.val().indexOf(':') <= -1)) {

            let $apartment = $('<div class="apartment"></div>');

            let $rent = $('<p>');
            $rent.text(`Rent: ${$apartmentRent.val()}`);

            let $type = $('<p>');
            $type.text(`Type: ${$apartmentType.val()}`);

            let $commision = $('<p>');
            $commision.text(`Commission: ${$agencyCommission.val()}`);

            $apartment.append($rent);
            $apartment.append($type);
            $apartment.append($commision);

            $building.append($apartment);

            $message.text("Your offer was created successfully.");
        } else {
            $message.text("Your offer registration went wrong, try again.");
        }


        $apartmentRent.val('');
        $apartmentType.val('');
        $agencyCommission.val('');
    })

    let $familyBudget = $('input[name="familyBudget"]');
    let $familyApartmentType = $('input[name="familyApartmentType"]');
    let $familyName = $('input[name="familyName"]');

    let $findOffer = $('button[name="findOffer"]');

    $findOffer.on('click', function () {
        if(Number($familyBudget.val()) > 0 &&
            $familyApartmentType.val() !== '' &&
            $familyName.val() !== '') {

            let $allApartments = $('#building div.apartment ');

            for (const apartment of $allApartments.toArray()) {
                let apartmentType = apartment.childNodes[1].textContent.replace('Type: ', '');
                let apartmentPrice = Number(apartment.childNodes[0].textContent.replace('Rent: ', ''));
                let commision = Number(apartment.childNodes[2].textContent.replace('Commission: ', ''));

                let apartmentTotalPrice = apartmentPrice + apartmentPrice * (commision / 100);

                if($familyApartmentType.val() === apartmentType && $familyBudget.val() >= apartmentTotalPrice) {

                    let $agencyProfit = $('#roof h1');
                    let profitForAgency = apartmentPrice * ((commision / 100) * 2);

                    $agencyProfit.text(`Agency profit: ${profitForAgency} lv.`);

                    let $familyNameP = $('<p>');
                    $familyNameP.text($familyName.val());

                    let $liveHere = $('<p>live here now</p>');

                    let $moveOutButton = $('<button>MoveOut</button>');

                    $moveOutButton.on('click', () => {

                        $message.text(`They had found cockroaches in ${$familyName.val()}'s apartment`);
                        $moveOutButton.parent().remove();
                    });

                    $(apartment).css("border", "2px solid red");
                    $(apartment).empty();

                    $(apartment).append($familyNameP);
                    $(apartment).append(($liveHere));
                    $(apartment).append($moveOutButton);

                    $message.text('Enjoy your new home! :))');
                } else {
                    $message.text("We were unable to find you a home, so sorry :(");
                }

                break;
            }
        }
    })
}