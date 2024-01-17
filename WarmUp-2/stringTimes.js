function stringTimes(str, n){
  let x = str;
  if(n==0)
  {
    return "";
  }
  else{
    for(i=1;i<n;i++){
      str += x;
    }
    return str;