function scoresIncreasing(scores){
  for(i = 1; i<scores.length; i++){
    if(scores[i] < scores[i - 1]){
      return false;
}
  }
  return true;
}