function maxOfFirstLastMiddle(nums) {
    const first = nums[0];
    const middle = nums[Math.floor(nums.length / 2)];
    const last = nums[nums.length - 1];

    return Math.max(first, middle, last);
}