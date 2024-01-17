function sortaSum(a, b) {
    // Calculate the sum of the two integers
    var total = a + b;

    // Check if the sum is in the forbidden range (10..19)
    if (10 <= total && total <= 19) {
        return 20;
    } else {
        return total;
    }
}


