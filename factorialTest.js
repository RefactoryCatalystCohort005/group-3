const assert = require('chai').assert
const factorial = require('./factorial');
const factorial2 = require('./factorial');


describe("factorial using recursion ", function(){

        it("factorial for 1 is 1", function(){
            assert.equal(1, factorial(1))
        })

        it("factorial for 3 is 6", function(){
            assert.equal(6, factorial(3))
        })

        it("factorial for 4 is 24", function(){
            assert.equal(24, factorial(4))
        })
    }
)

describe("factorial using a for loop ", function(){
    it("factorial for 4 is 24", function(){
        assert.equal(24, factorial2(4))
    })

    it("factorial for 5 is 120", function(){
        assert.equal(120, factorial2(5))
    })
}
)




