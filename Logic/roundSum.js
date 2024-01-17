function roundSum(a, b, c){
  function helper(n){
    if(n%10 >=5){
      n+= 10 - (n % 10);
      return n;
}
    else if(n%10 <5){
      n-= n % 10;
      return n;
    }
  }
  let fixA = helper(a);
  let fixB = helper(b);
  let fixC = helper(c);
  
  return fixA + fixB + fixC;
}
    