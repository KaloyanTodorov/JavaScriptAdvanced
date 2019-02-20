const mathEnforcer = require('../04.MathEnforcer');
const {expect} = require('chai');

describe('mathEnforcer', function() {    

    describe('testing addFive prop', function() {
        it('should return undefined if number passed is not a number', function() {
            const str = 'asdd';
            const result = mathEnforcer.addFive(str);

            expect(result).to.equal(undefined);
        });

        it('should return undefined if function is passed', function() {
            const func = () => {};
            const test = mathEnforcer.addFive(func);
            expect(test).to.equal(undefined);
        })

        it('should return 17.6 when added to 12.6 if argument passed is number', function() {
            const float = 12.6;
            const result = mathEnforcer.addFive(float);
            expect(result).to.equal(17.6);
        });

        it('should return -6 when added to -11', function() {
            const negativeNum = -11;
            const result = mathEnforcer.addFive(negativeNum);
            expect(result).to.equal(-6);
        });

        it('should return 5 when added to 0', function(){
            const result = mathEnforcer.addFive(0);
            expect(result).to.be.equal(5);
        })

        it('should return 2 if added to -3', function() {
            const num = -3;
            const result = mathEnforcer.addFive(num);
            expect(result).to.be.equal(2);
        })
    })

    describe('subtractTen', function() {
        it('should return undefined if not a digit is passed', function() {
            const str = "str";
            const result = mathEnforcer.substractTen(str);
            expect(result).to.equal(undefined); 
        });

        it('should return undefined if not a digit is passed', function() {
            const func = () => {};
            const result = mathEnforcer.substractTen(func);
            expect(result).to.equal(undefined); 
        });

        

        it('should return 2 when subtracted from 12', function() {
            const positiveNum = 12;
            const result = mathEnforcer.substractTen(positiveNum);
            expect(result).to.equal(2);
        });

        it('should return -4 when sutracted from 6', function() {
            const six = 6;
            const result = mathEnforcer.substractTen(six);
            expect(result).to.equal(-4);
        })

        it('should return -21 when subtracted from -11', function() {
            const negativeNum = -11;
            const test = mathEnforcer.substractTen(negativeNum);
            expect(test).to.equal(-21);
        })

        it('should return 2.6 when sutracted from 12.6', function() {
            const positiveFloat = 12.6;
            const test = mathEnforcer.substractTen(positiveFloat);
            expect(test).to.be.equal(2.5999999999999996);
        })
    })
})

