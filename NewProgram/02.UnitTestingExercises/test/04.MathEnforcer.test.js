const mathEnforcer = require('../04.MathEnforcer');
const {expect} = require('chai');

describe('mathEnforcer', function() {    
    describe('testing addFive prop', function() {
        it('should return undefined if not a number is passed', function() {
            const obj = {name: 'menche'};
            const test = mathEnforcer.addFive(obj);
            expect(test).to.equal(undefined);
        })
        it('should return 12.3 when added to 7.3', function() {
            const num = 7.3;
            const test = mathEnforcer.addFive(num);
            expect(test).to.equal(12.3)
        })
        it('should return 5 when added to 0', function() {
            const num = 0;
            const test = mathEnforcer.addFive(num);
            expect(test).to.equal(5);
        })
        it('should return -4 when added to -9', function() {
            const num = -9;
            const test = mathEnforcer.addFive(num);
            expect(test).to.equal(-4);
        })
        it('shouold return -2.2 when added to -7.2', function() {
            const num = -7.2;
            const test = mathEnforcer.addFive(num);
            expect(test).to.equal(-2.2);
        })
        it('should return 4.4 when added to -0.6', function() {
            const num = -0.6;
            const test = mathEnforcer.addFive(num);
            expect(test).to.equal(4.4);
        })
        it('should return 2 when added to -3', function() {
            const num = -3;
            const test = mathEnforcer.addFive(num);
            expect(test).to.equal(2);
        })
    })

    describe('testing subtractTen prop', function() {
        it('should return undefined if not a number is passed', function() {
            const str = 'test';
            const test = mathEnforcer.subtractTen(str);
            expect(test).to.equal(undefined);
        })
        it('should return 13 when subtracted from 23', function() {
            const num = 23;
            const test = mathEnforcer.subtractTen(num);
            expect(test).to.equal(13);
        })
        it('should return 3.4 when subtracted from 13.4', function() {
            const num = 13.4;
            const test = mathEnforcer.subtractTen(num)
            expect(test).to.equal(3.4000000000000004)
        })
        it('should return 0 when subtracted from 10', function() {
            const num = 10;
            const test = mathEnforcer.subtractTen(num);
            expect(test).to.equal(0);
        })
        it('should return -4 when sutracted from 6', function() {
            const num = 6;
            const test = mathEnforcer.subtractTen(num);
            expect(test).to.equal(-4);
        })
        it('should return -13 when subtracted from -3', function() {
            const num = -3;
            const test = mathEnforcer.subtractTen(num);
            expect(test).to.equal(-13);
        })
        it('should return -12.2 when subtracted from 2.2', function() {
            const num = -2.2;
            const test = mathEnforcer.subtractTen(num);
            expect(test).to.equal(-12.2)
        })
        it('should return -2.7 when subtracted from 7.3', function() {
            const num = 7.3;
            const test = mathEnforcer.subtractTen(num);
            expect(test).to.equal(-2.7);
        })
    })

    describe('testing sum prop', function() {
        it('should return undefined if num1 is not a number', function() {
            const str1 = 'test'; // String
            const num2 = 4;
            const test = mathEnforcer.sum(str1, num2);
            expect(test).to.equal(undefined);
        })
        it('should return undefined is num2 is not a number', function() {
            const num1 = 5;
            const str2 = 'test'; // String
            const test = mathEnforcer.sum(num1, str2);
            expect(test).to.equal(undefined);
        })
        it('should return undefined if both at not numbers', function() {
            const obj1 = {age: 23}; // Object
            const arr2 = [2, 3, 4]; // Array
            const test = mathEnforcer.sum(obj1, arr2);
            expect(test).to.equal(undefined);
        })
        it('should return 12 when 3 and 9 are passed', function() {
            const num1 = 3;
            const num2 = 9;
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(12);
        })
        it('should return 4 when 7 and -3 are passed', function() {
            const num1 = 7;
            const num2 = -3; // Negative Int
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(4);
        })
        it('should return 3 when -2 and 5 are passed', function() {
            const num1 = -2; // Negative Int
            const num2 = 5;
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(3);
        })
        it('should return -24 when -9 and -15 are passed', function() {
            const num1 = -9; // Negative Int
            const num2 = -15; // Negative Int
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(-24);
        })
        it('should return 13.4 when 3.1 and 10.3 are passed', function() {
            const num1 = 3.1; // Float
            const num2 = 10.3; // Float
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(13.4);
        })
        it('should return 12.5 when 3.5 and 9 are passed', function() {
            const num1 = 3.5; // Float
            const num2 = 9; // Int
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(12.5);
        })
        it('should return 7.8 when 4 and 3.8 are passed', function() {
            const num1 = 4; // Int
            const num2 = 3.8; // Flaot
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(7.8);
        })
        it('should return -3.5999999999999996 if -1.2 and -2.4 are passed', function() {
            const num1 = -1.2;
            const num2 = -2.4;
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(-3.5999999999999996);
        })
        it('should return -2.3 when 5 and -7.3 are passed', function() {
            const num1 = 5;
            const num2 = -7.3;
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(-2.3);
        })
        it('should return -12.3 when -3.3 and -9 are passed', function() {
            const num1 = -3.3;
            const num2 = -9;
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(-12.3);
        })
        it('should return 4.5 when 6.7 and -2.2 are passed', function() {
            const num1 = 6.7;
            const num2 = -2.2;
            const test = mathEnforcer.sum(num1, num2);
            expect(test).to.equal(4.5);
        })
    })
})

