const lookupChar = require('../03.LookupChar');
const {expect} = require('chai');

describe('lookupChar', function() {
    describe('testing string', function() {
        it('should return undefined if int is passed to the string', function() {
            const inputNum = 44;
            const index = 0;
    
            const test = lookupChar(inputNum, index);
            expect(test).to.equal(undefined);
        })
        it('should return undefined if object is passed as a string', function() {
            const obj = {name: "test"};
            const index = 0;
            
            const test = lookupChar(obj, index);
            expect(test).to.equal(undefined);
        })
        it('should return Error if index is higher than string length', function() {
            const str = "test";
            const index = 7;
            const test = lookupChar(str, index);
            expect(test).to.equal("Incorrect index");
        })
        it('should return Error if index is equal to string length', function() {
            const str = "test";
            const index = 4;
            const test = lookupChar(str, index);
            expect(test).to.equal("Incorrect index");
        })
    })

    describe('testing index', function() {
        it('should return undefined if not a digit is passed instead of index', function() {
            const str = "testtest";
            const obj = {name: "pestko"};
    
            const test = lookupChar(str, obj);
            expect(test).to.equal(undefined);
        })
    
        it('should retrun undefined if obj is passed instead of both string and index', function() {
            const objString = {name: "testest"};
            const objIndex = {index: 12};
            const test = lookupChar(objString, objIndex);
            expect(test).to.equal(undefined);
        })

        it('should return undefined if index is float', function() {
            const str = "'test'";
            const float = 2.2;
            const test = lookupChar(str, float);
            expect(test).to.equal(undefined);
        })

        it('should return Error if index is less than 0', function() {
            const str = "test";
            const index = -1;
            const test = lookupChar(str, index);
            expect(test).to.equal("Incorrect index");
        })
    })

    describe('testing with correct data', function() {
        it('should return correct char with string and 0 index', function() {
            const str = "Kizza";
            const index = 0;
            const test = lookupChar(str, index);
            expect(test).to.equal("K");
        })

        it('should return correct char at string end', function() {
            const str = "Kizza";
            const index = 4;
            const test = lookupChar(str, index);
            expect(test).to.equal("a");
        })

        it('should return correct char inside string', function() {
            const str = "Kizza";
            const index = 2;
            const test = lookupChar(str, index);
            expect(test).to.equal("z");
        })
    })
})