
// 4 = 4*3*2*1
// n=4
// n-1 = 3

// factorial(4)
// n=4
// factorial(3)
// n=3
// factorial(2)
// n=2
// factorial(1)
// }




 function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n - 1);
  }



  function factorial2(n) {
    if (n === 0 || n === 1)
        return 1;
    for(let i=n-1; i>=1; i--){
        n *= i;
    }
    console.log(n);
    return n;
  }
  

  
console.log(factorial(9))
factorial2(4) 

module.exports = factorial;
module.exports = factorial2;