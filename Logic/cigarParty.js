function cigarParty(cigars, isWeekend){
  if(isWeekend){
     return (cigars >= 40 ? true : false);
}
  else{
    return(cigars >= 40 && cigars <= 60 ? true : false)
  }
}