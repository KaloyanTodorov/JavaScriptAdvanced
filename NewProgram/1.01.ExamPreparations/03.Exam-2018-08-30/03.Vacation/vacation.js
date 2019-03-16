class Vacationer {
    constructor(fullName, creditCard = [1111, "", 111]) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        this.creditCard = creditCard;
        this.wishList = [];

        return this;
    }


    get fullName() {
        return this._fullName;
    }

    set fullName(arr) {
        if (arr.length !== 3) {
            throw Error("Name must include first name, middle name and last name");
        }

        const firstName = arr[0];
        const middleName = arr[1];
        const lastName = arr[2];

        let firstNamePattern = (/^([A-Z][a-z]+)$/g).test(firstName);
        let middleNamePattern = (/^([A-Z][a-z]+)$/g).test(middleName);
        let lastNamePattern = (/^([A-Z][a-z]+)$/g).test(lastName);


        if(!firstNamePattern || !middleNamePattern || !lastNamePattern ) {
            throw Error('Invalid full name');
        }

        this._fullName = {firstName, middleName ,lastName};
    }

    get creditCard() {
        return this._creditCard;
    }

    set creditCard(input) {
        if(input.length < 3) {
            throw Error("Missing credit card information");
        }

        // TODO: Check if more than 3 parameters are passed

        let cardNumber = input[0] || input.creditCard;
        let expirationDate = '' + input[1] || input.expirationDate;
        let securityNumber = input[2] || input.securityNumber;

        if(typeof cardNumber !== 'number' || typeof (securityNumber) !== 'number') {
            throw Error("Invalid credit card details");
        }

        if (expirationDate === undefined) {
            expirationDate = '';
        }

        this._creditCard = {
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            securityNumber: securityNumber,
        }
    }

    generateIDNumber(){
        let fNameLetter = this.fullName.firstName.charCodeAt(0);
        let mNameLength = this.fullName.middleName.length;
        let lNameDigit = '';
        let lNameLetter = this.fullName.lastName[this.fullName.lastName.length - 1];
        switch (lNameLetter) {
            case 'a':
            case 'e':
            case 'o':
            case 'i':
            case 'u':
                lNameDigit = '8';
                break;
            default:
                lNameDigit = '7';
                break;
        }

        return 231 * fNameLetter + 139 * mNameLength + lNameDigit;
    }

    addCreditCardInfo(input) {
        if(input.length < 3) {
            throw Error("Missing credit card information");
        }

        // TODO: Check if more than 3 parameters are passed

        let cardNumber = input[0];
        let expirationDate = input[1];
        let securityNumber = input[2];

        // TODO: make a check for the expirationDate????
        if(typeof cardNumber !== 'number' || typeof (securityNumber) !== 'number') {
            throw Error("Invalid credit card details");
        }

        this._creditCard = {
            cardNumber: cardNumber,
            expirationDate: expirationDate,
            securityNumber: securityNumber,
        }

        return this;
    }

    addDestinationToWishList(destination) {
        //TODO: Check for empty string
        if(this.wishList.indexOf(destination) > -1) {
            throw Error("Destination already exists in wishlist");
        }

        if (typeof destination !== 'string') {
            throw Error("Destination should be string");
        }

        this.wishList.push(destination);

        this.wishList.sort((a, b) => a.length > b.length);

        return this;
    }

    getVacationerInfo() {
        let wishlist = ''
        if(this.wishList.length > 0) {
            wishlist = this.wishList.join((', '));
        } else {
            wishlist = 'empty';
        }

        const result =
            `Name: ${this._fullName.firstName} ${this._fullName.middleName} ${this._fullName.lastName}\n`+
            `ID Number: ${this.idNumber}\n` +
            `Wishlist:\n${wishlist}\n` +
            `Credit Card:\n` +
            `Card Number: ${this._creditCard.cardNumber}\n` +
            `Expiration Date: ${this._creditCard.expirationDate}\n` +
            `Security Number: ${this._creditCard.securityNumber}`;
        return result;
    }
}


// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]).addCreditCardInfo([123, "test", 0]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"]);
// vacationer1.addDestinationToWishList(5);
// vacationer1.addDestinationToWishList({});
vacationer1.addDestinationToWishList("").addDestinationToWishList('5').addDestinationToWishList("test").addDestinationToWishList("te");

// console.log(vacationer1.wishList);
// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "", 9888]);
} catch (err) {
    console.log("Error: " + err.message);
}


vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());

//
// // Validate instance creation
// let Vacationer = result;
//
// let classInstance1;
// expect(() => classInstance1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]), 'Instance creation failed with valid parameters').to.not.throw();
// let classInstance2;
// expect(() => classInstance2 = new Vacationer(["Vania", "Ivanova", "Zhivk0va"]), 'Instance creation did not fail with invalid parameters').to.throw();
// let classInstance3;
// expect(() => classInstance3 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]), 'Instance creation failed with valid parameters').to.not.throw();
// let classInstance4;
// expect(() => classInstance4 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], ['123456789', "10/01/2018", 777]), 'Instance creation did not fail with invalid parameters').to.throw();