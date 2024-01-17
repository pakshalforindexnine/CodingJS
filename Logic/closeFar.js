function closeFar(a, b, c){
  if(Math.abs(a-b) <=1 && Math.abs(c-b) >=2 && Math.abs(c-a) >=2){
    return true
  }
   else if((Math.abs(a-c) <=1 && Math.abs(c-b) >=2 && Math.abs(b-a) >=2){
           return true
}
   else{
     return false
   }