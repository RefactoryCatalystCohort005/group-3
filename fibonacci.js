


function fibonacci(){
    var a = 1;
    var b = 0;
    var sum = 0;
    for(i=1;i<=10;i++){
    c=a+b;
    sum+=c
    // console.log(c + ": " + sum.toString() );
    
    a=b;
    b=c;
    
    }
    return sum;
    
}

fibonacci();


module.exports = fibonacci;