
function fibonacci(d){
    var a = 1;
    var b = 0;
    var sum = 0;
    for(let i = 0; i <= d; i++){
        if(i === 0 ){
            c = 0;
            console.log(c);
        }
        else{
            c = a + b;
            sum += c
            console.log( c );
            a = b;
            b = c;
        }
    }
    return sum;
}

fibonacci(8);


function fibonacci1(n){
    if (n===1){
      return [0, 1];
    } 
    else{
      var s = fibonacci1(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      let M = s.indexOf(13);
      
      return s;
    }
  };
  
   console.log(fibonacci1(8));


module.exports = fibonacci;
module.exports = fibonacci1;
