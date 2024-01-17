function bigDiff(nums){
  let big = Math.max(...nums)
  let small = Math.min(...nums)
  let diff = big - small;
  return diff;
}