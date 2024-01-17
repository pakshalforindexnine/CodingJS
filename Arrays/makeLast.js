function makeLast(nums){
  let newarr = [];
  for(i = 0; i < nums.length * 2; i++){
    newarr[i] = 0;
}
  newarr[newarr.length -1] = nums[nums.length -1];
  return newarr;
}