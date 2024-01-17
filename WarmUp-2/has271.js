function has271(nums) {
    for (let i = 0; i < nums.length - 2; i++) {
        const value = nums[i];
        const valuePlus5 = value + 5;
        const valueMinus1 = value - 1;

        if (
            nums[i + 1] === valuePlus5 &&
            (nums[i + 2] === valueMinus1 || Math.abs(nums[i + 2] - valueMinus1) <= 2)
        ) {
            return true;
        }
    }
    return false;
}