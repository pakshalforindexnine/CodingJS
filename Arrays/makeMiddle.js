function middleTwoElements(nums) {
    const middleIndex = nums.length / 2 - 1;
    return [nums[middleIndex], nums[middleIndex + 1]];
}