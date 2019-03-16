let HolidayPackage = require('../HolidayPackage');
let { assert } = require('chai');

describe('Testing HolidayPackage', function () {
    describe('Testing constructor', function () {
        it('should add vacationer', function () {
            let vacation = new HolidayPackage("Italy", "spring");

            assert.equal(vacation.destination, "Italy");
            assert.equal(vacation.season, 'spring');
        });
    });

    describe('Testing addVacationer(vacationerName)', function () {
        let vacation;

        beforeEach(function () {
            vacation = new HolidayPackage('Test', 'summer');
        })

        it('should add vacationer', function () {
            vacation.addVacationer('Test testov');

            assert.equal(vacation.vacationers.length, 1);
        });

        it('should add more than 1 vacationer', function () {

            vacation.addVacationer('Test testov');
            vacation.addVacationer('Test testovss');

            assert.equal(vacation.vacationers.length, 2);
        });

        it('should throw error if integer is passed', function () {
            assert.throws(function () {
                vacation.addVacationer( 444);
            }, "Vacationer name must be a non-empty string");
        });

        it('should throw error if object is passed', function () {
            assert.throws(function () {
                vacation.addVacationer( {name: "Menche"});
            }, "Vacationer name must be a non-empty string");
        });

        it('should throw error if array is passed', function () {
            assert.throws(function () {
                vacation.addVacationer( [1, 2, 3]);
            }, "Vacationer name must be a non-empty string");
        });

        it('should throw error if function is passed', function () {
            assert.throws(function () {
                vacation.addVacationer( () => {});
            }, "Vacationer name must be a non-empty string");
        });

        it('should throw error if space string is passed', function () {
            assert.throws(function () {
                vacation.addVacationer( ' ');
            }, "Vacationer name must be a non-empty string");
        });

        it('should throw error if more than 2 params are passed', function () {
            assert.throws(function () {
                vacation.addVacationer( 'Test Testov Test');
            }, "Name must consist of first name and last name");
        });

        it('should throw error if 1 params is passed', function () {
            assert.throws(function () {
                vacation.addVacationer( 'Test');
            }, "Name must consist of first name and last name");
        });

        it('should throw error if empty string is passed', function () {
            assert.throws(function () {
                vacation.addVacationer( '');
            }, "Name must consist of first name and last name");
        });
    });

    describe('Testing showVacationers()', function () {
        let vacation;

        beforeEach(function () {
            vacation = new HolidayPackage('Italu', 'summer');
        })
        it('should show correct message if 3 vacationers', function () {
            vacation.addVacationer('Test testov');
            vacation.addVacationer('Menche Mencheva');
            vacation.addVacationer('Jizza Djoni');

            let result = "Vacationers:\nTest testov\nMenche Mencheva\nJizza Djoni";

            assert.equal(vacation.showVacationers(), result);
        });

        it('should show correct message when 1 vacationer', function () {
            vacation.addVacationer('Test testov');

            let result = "Vacationers:\nTest testov";

            assert.equal(vacation.showVacationers(), result);
        });

        it('should show correct message when no vacationers are added', function () {
            let result = "No vacationers are added yet";

            assert.equal(vacation.showVacationers(), result);
        });


    });

    describe('Testing insuranceIncluded(insurance)', function () {
        let vacation;
        beforeEach(function () {
            vacation = new HolidayPackage('Italy', 'summer');
        });

        it('should return true if insurance is included', function () {
            vacation.insuranceIncluded = true;

            assert.equal(vacation.insuranceIncluded, true);
        });

        it('should return false if insurance is not passed', function () {

            assert.equal(vacation.insuranceIncluded, false);
        });

        it('should return false if insurance is passed as false', function () {
            vacation.insuranceIncluded = true;
            vacation.insuranceIncluded = false;

            assert.equal(vacation.insuranceIncluded, false);
        });

        it('should throw error if not a boolean is passed', function () {
            assert.throws(function () {
                vacation.insuranceIncluded = 'true';
            }, "Insurance status must be a boolean");
        });

        it('should throw error if not a boolean is passed', function () {
            assert.throws(function () {
                vacation.insuranceIncluded = {insuranceIncluded: true};
            }, "Insurance status must be a boolean");
        });
    });

    describe('Testing generateHolidayPackage()', function () {
        let vacation;
        let vacation2;

        beforeEach(function () {
            vacation = new HolidayPackage("italy", "Summer");
            vacation2 = new HolidayPackage("italy", "spring");
        })

        it('should return correct message for 3 people, no insurance and summer', function () {
            vacation.addVacationer('Test Testov');
            vacation.addVacationer('Test ss');
            vacation.addVacationer('Test Tesdsdstov');

            const result = "Holiday Package Generated\nDestination: italy\nVacationers:\nTest Testov\nTest ss\nTest Tesdsdstov\nPrice: 1400";

            assert.equal(vacation.generateHolidayPackage(), result);

        });

        it('should return correct message for 3 people, insurance and summer', function () {
            vacation.insuranceIncluded = true;
            vacation.addVacationer('Test Testov');
            vacation.addVacationer('Test ss');
            vacation.addVacationer('Test Tesdsdstov');

            const result = "Holiday Package Generated\nDestination: italy\nVacationers:\nTest Testov\nTest ss\nTest Tesdsdstov\nPrice: 1500";

            assert.equal(vacation.generateHolidayPackage(), result);

        });

        it('should return correct message for 1 people, no insurance and summer', function () {
            vacation.insuranceIncluded = false;
            vacation.addVacationer('Test Testov');

            const result = "Holiday Package Generated\nDestination: italy\nVacationers:\nTest Testov\nPrice: 600";

            assert.equal(vacation.generateHolidayPackage(), result);

        });

        it('should return correct message for 1 people, insurance and summer', function () {
            vacation.insuranceIncluded = true;
            vacation.addVacationer('Test Testov');

            const result = "Holiday Package Generated\nDestination: italy\nVacationers:\nTest Testov\nPrice: 700";

            assert.equal(vacation.generateHolidayPackage(), result);

        });

        it('should return correct message for 3 people, no insurance and spring', function () {
            vacation2.addVacationer('Test Testov');
            vacation2.addVacationer('Test ss');
            vacation2.addVacationer('Test Tesdsdstov');

            const result = "Holiday Package Generated\nDestination: italy\nVacationers:\nTest Testov\nTest ss\nTest Tesdsdstov\nPrice: 1200";

            assert.equal(vacation2.generateHolidayPackage(), result);
        });

        it('should return correct message for 3 people, insurance and spring', function () {
            vacation2.insuranceIncluded = true;
            vacation2.addVacationer('Test Testov');
            vacation2.addVacationer('Test ss');
            vacation2.addVacationer('Test Tesdsdstov');

            const result = "Holiday Package Generated\nDestination: italy\nVacationers:\nTest Testov\nTest ss\nTest Tesdsdstov\nPrice: 1300";

            assert.equal(vacation2.generateHolidayPackage(), result);
        });

        it('should return correct message for 1 people, no insurance and spring', function () {
            vacation2.insuranceIncluded = false;
            vacation2.addVacationer('Test Testov');

            const result = "Holiday Package Generated\nDestination: italy\nVacationers:\nTest Testov\nPrice: 400";

            assert.equal(vacation2.generateHolidayPackage(), result);
        });

        it('should return correct message for 1 people, insurance and spring', function () {
            vacation2.insuranceIncluded = true;
            vacation2.addVacationer('Test Testov');

            const result = "Holiday Package Generated\nDestination: italy\nVacationers:\nTest Testov\nPrice: 500";

            assert.equal(vacation2.generateHolidayPackage(), result);
        });

        it('should throw error if no vacationers', function () {
            assert.throws(function () {
                vacation.generateHolidayPackage();
            }, "There must be at least 1 vacationer added");
        });
    });
});
