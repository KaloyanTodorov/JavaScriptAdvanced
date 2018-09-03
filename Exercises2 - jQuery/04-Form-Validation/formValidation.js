function validate() {
    let allFieldsAreValid = true;
    let username = $('#username');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let email = $('#email');
    let companyNumber = $('#companyNumber');
    let companyCheckbox = $('#company');
    let showCompanyInfo = $('#companyInfo');
    let submit = $('#submit');
    let valid = $('#valid');

    companyCheckbox.on('change', function () {
        if(companyCheckbox.is(':checked')) {
            showCompanyInfo.show();
        } else {
            showCompanyInfo.hide();
        }
    });

    submit.on('click', function (ev) {
        ev.preventDefault();

        let usernamePattern = /^[A-Za-z0-9]{3,20}$/i;
        if (usernamePattern.test(username.val())) {
            username.css('border-color', '');
            // allFieldsAreValid = true;
        } else {
            username.css('border-color', 'red');
            allFieldsAreValid = false;
        }

        if (password.val() !== confirmPassword.val()) {
            password.css('border-color', 'red');
            confirmPassword.css('border-color', 'red');
            allFieldsAreValid = false;
            // console.log('passwords are different!');
        } else {
            let passwordPattern = /^[\w]{5,15}$/i;
            if (passwordPattern.test(password.val())) {
                password.css('border-color', '');
                // allFieldsAreValid = true;
                // console.log('test true password');
            } else {
                password.css('border-color', 'red');
                allFieldsAreValid = false;
                // console.log('test false password');
            }

            if (passwordPattern.test(confirmPassword.val())) {
                confirmPassword.css('border-color', '');
                // allFieldsAreValid = true;
                // console.log('test true confirm password');
            } else {
                confirmPassword.css('border-color', 'red');
                allFieldsAreValid = false;
                // console.log('test false confirm password');
            }
        }

        let emailPattern = /[\w+]@([\w]*\.)+/;
        if(emailPattern.test(email.val())) {
            email.css('border-color', '');
            // allFieldsAreValid = true;
        } else {
            email.css('border-color', 'red');
            allFieldsAreValid = false;
        }

        if(companyCheckbox.is(':checked')) {
            if(isNaN(companyNumber.val()) ||
                (Number(companyNumber.val()) < 1000 || Number(companyNumber.val()) > 9999)) {
                    companyNumber.css('border-color', 'red');
                    allFieldsAreValid = false;
            } else {
                companyNumber.css('border-color', '');
                // allFieldsAreValid = true;
            }
        }

        if(allFieldsAreValid) {
            console.log(("test true"));
            valid.show();
        } else {
            console.log(("test false"));
            valid.hide();
        }
    })
}
