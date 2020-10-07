const assert = require('chai').assert
const fibonacci1 = require('./fibonacciRecursion');


describe("fibonacci numbers in recursion", function(){
    let m = new fibonacci1(8);

    it('the first number is 0', function(){
        assert.equal(0, m.indexOf(0))
    })

    it('the fibonacci in position 2 is 1', function(){
        assert.equal(1, m.indexOf(1))
    })

    it('should show the position of the number 13 in the sequence', function(){
        assert.equal(7, m.indexOf(13))
    })

    

   
})


