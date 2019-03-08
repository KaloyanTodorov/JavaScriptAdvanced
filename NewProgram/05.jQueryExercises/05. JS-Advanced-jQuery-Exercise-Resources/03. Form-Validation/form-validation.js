function validate() {
	let $submitButton = $('#submit');
	let $username = $('#username');
	let $email = $('#email'); 
	let $password = $('#password');
	let $confirmPassword = $('#confirm-password');
	let $isCompanyChecked = $('#company'); 
	let $companyInfo = $('#companyInfo');
	let $companyNumber = $('#companyNumber')
	let areAllFieldsValid = true;
	let $validMessage = $('#valid');

	$isCompanyChecked.on('change', function() {
		if($isCompanyChecked.is(':checked')) {
			$companyInfo.css('display', 'block');
		} else {
			$companyInfo.css('display', 'none');
		}
	})

	$submitButton.on('click', function(e) {
		e.preventDefault();
		const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
		if(usernamePattern.test($username.val())) {
			$username.css('border-color', '');
		} else {
			$username.css('border-color', 'red');
			areAllFieldsValid = false;
		}

		if ($password.val() !== $confirmPassword.val()) {
            $password.css('border-color', 'red');
            $confirmPassword.css('border-color', 'red');
            areAllFieldsValid = false;
        } else {
            let passwordPattern = /^[\w]{5,15}$/i;
            if (passwordPattern.test($password.val())) {
                $password.css('border-color', '');
            } else {
                $password.css('border-color', 'red');
                areAllFieldsValid = false;
            }

            if (passwordPattern.test($confirmPassword.val())) {
                $confirmPassword.css('border-color', '');
            } else {
                $confirmPassword.css('border-color', 'red');
                areAllFieldsValid = false;
            }
        }

        let emailPattern = /[\w+]@([\w]*\.)+/;
        if(emailPattern.test($email.val())) {
            $email.css('border-color', '');
        } else {
            $email.css('border-color', 'red');
            areAllFieldsValid = false;
        }

        if($isCompanyChecked.is(':checked')) {
            if(Number.isNaN($companyNumber.val()) ||
                (Number($companyNumber.val()) < 1000 || Number($companyNumber.val()) > 9999)) {
                    $companyNumber.css('border-color', 'red');
                    areAllFieldsValid = false;
            } else {
                $companyNumber.css('border-color', '');
            }
        }

        if(areAllFieldsValid) {
            $validMessage.css('display', 'block');
        } else {
            $validMessage.css('display', 'none');
        }
	})
}
