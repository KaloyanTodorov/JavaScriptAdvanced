function makeReservation() {
    let $submitButton = $('#submit');
    let $editButton = $('#edit');
    let $continueButton = $('#continue');

    let $inforPreviewUl = $('#infoPreview');

    let $fullName = $('#fullName');
    let $email = $('#email');
    let $phonenumber = $('#phoneNumber');
    let $address = $('#address');
    let $postalCode = $('#postalCode');


    let $fullnameLi = $('<li>');
    let $emailLi = $('<li>');
    let $phoneNumberLi = $('<li>');
    let $addressLi = $('<li>');
    let $postalCodeLi = $('<li>');


    $submitButton.on('click', function () {

        if($fullName.val().length > 0 && $email.val().length > 0) {

            $fullnameLi.text(`Name: ${$fullName.val()}`);

            $emailLi.text(`E-mail: ${$email.val()}`);

            $phoneNumberLi.text(`Phone: ${$phonenumber.val()}`);

            $addressLi.text(`Address: ${$address.val()}`);

            $postalCodeLi.text(`Postal Code: ${$postalCode.val()}`);

            $inforPreviewUl.append($fullnameLi);
            $inforPreviewUl.append($emailLi);
            $inforPreviewUl.append($phoneNumberLi);
            $inforPreviewUl.append($addressLi);
            $inforPreviewUl.append($postalCodeLi);

            $fullName.val('')
            $email.val('');
            $phonenumber.val('');
            $address.val('');
            $postalCode.val('');

            $submitButton.attr('disabled', true);
            $editButton.attr('disabled', false);
            $continueButton.attr('disabled', false);
        }
    })

    $editButton.on('click', function () {
        let fullNameValue = $fullnameLi.text().replace('Name: ', '');
        let emailValue = $emailLi.text().replace('E-mail: ', '');
        let phoneNumberValue = $phoneNumberLi.text().replace('Phone: ', '');
        let addressValue = $addressLi.text().replace('Address: ', '');
        let $postalCodeValue = $postalCodeLi.text().replace('Postal Code: ', '');

        $fullName.val(fullNameValue);
        $email.val(emailValue);
        $phonenumber.val(phoneNumberValue);
        $address.val(addressValue);
        $postalCode.val($postalCodeValue);

        $inforPreviewUl.empty();

        $submitButton.attr('disabled', false);
        $editButton.attr('disabled', true);
        $continueButton.attr('disabled', true);
    })

    $continueButton.on('click', function () {
        $submitButton.attr('disabled', true);
        $editButton.attr('disabled', true);
        $continueButton.attr('disabled', true);

        let $container = $('#container');
        let $h2 = $('<h2>Payment details</h2>');
        let $paymentOptions = $('<select id="paymentOptions" class="custom-select"></select>');

        let $optionDefault = $('<option selected disabled hidden>Choose</option>');
        let $optionCreditCard = $('<option value="creditCard">Credit Card</option>');
        let $optionBankTransfer = $('<option value="bankTransfer">Bank Transfer</option>');

        $paymentOptions.append($optionDefault);
        $paymentOptions.append($optionCreditCard);
        $paymentOptions.append($optionBankTransfer);


        let $extraDetailsDiv = $('<div id="extraDetails"></div>');

        $container.append($h2);
        $container.append($paymentOptions);
        $container.append($extraDetailsDiv);

        let $checkoutButton = $('<button id="checkOut">Check Out</button>');

        $paymentOptions.on('change', function () {

            $extraDetailsDiv.empty();

            if ($paymentOptions.val() === 'creditCard') {

                let $cardNumber = $('<div class="inputLabel">Card Number<input></div><br>');
                let $expirationDate = $('<div class="inputLabel">Expiration Date<input></div><br>');
                let $securityNumbers = $('<div class="inputLabel">Security Numbers<input></div><br>');

                $extraDetailsDiv.append($cardNumber);
                $extraDetailsDiv.append($expirationDate);
                $extraDetailsDiv.append($securityNumbers);

            } else if($paymentOptions.val() === 'bankTransfer') {

                let $pDetails = $('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>')

                $extraDetailsDiv.append($pDetails);
            }

            $extraDetailsDiv.append($checkoutButton);

            $checkoutButton.on('click', () => {
                $('#wrapper')
                    .empty()
                    .append($('<h4>Thank you for your reservation!</h4>'));
            })
        })


    })
}