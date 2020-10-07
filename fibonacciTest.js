const assert = require('chai').assert
const fibonacci = require('./fibonacci');
const fibonacci1 = require('./fibonacci');


describe("fibonacci numbers in loop", function(){
    let m = new fibonacci(8);

    it('the first number is 0', function(){
        assert.equal(0, m.indexOf(0))
    })

    it('the fibonacci in position 2 is 1', function(){
        assert.equal(1, m.indexOf(1))
    })

    it('should show the position of the number 13 in the sequence', function(){
        assert.equal(7, m.indexOf(13))
    })

    it('should have these values', function(){
        assert.includeMembers( [0,1,1,2,3,5,8,13,21], m)
    })

    

   
})



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


