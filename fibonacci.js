
function fibonacci(d){
    var a = 1;
    var b = 0;
    var sum = 0;
    var arry = []
    for(let i = 0; i <= d; i++){
        if(i === 0 ){
            c = 0;
        }
        else{
            c = a + b;
            sum += c
            a = b;
            b = c;
        }
        arry.push(c)
        
    }
    console.log(arry)
    return arry;
}

fibonacci(8);




module.exports = fibonacci;

