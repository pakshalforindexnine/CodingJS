function makeBricks(small, big, goal){
  return (((small + (big*5)) >= goal && (goal % 5 <= small)) ? true : false)
}