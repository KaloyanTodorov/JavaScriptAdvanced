let isOddOrEven = require('../02.OddOrEven');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Testing Even or Odd', function() {
    it('should return undefined if type of variable is not a string', function() {
        // Arrange
        let number = 20;
        
        // Act
        let expectedResult = isOddOrEven(number);
        
        // Assert
        expect(expectedResult).to.equal(undefined);
    })

    it("should retrun odd if length is odd", function() {
        let name = "Kaloyan";
        let expectedResult = isOddOrEven(name);

        expect(expectedResult).to.equal("odd");
    })

    it("should retrun even if length is even", function() {
        let name = "Kaloyan1";
        let expectedResult = isOddOrEven(name);

        expect(expectedResult).to.equal("even");
    })
})