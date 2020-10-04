

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