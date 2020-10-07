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


   module.exports = fibonacci1;