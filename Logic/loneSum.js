function loneSum(a, b, c) {
    // Check if a, b, and c are distinct
    if (a !== b && a !== c && b !== c) {
        return a + b + c;
    }

    // Check individual values for duplicates and exclude them from the sum
    if (a === b && a !== c) {
        return c;
    } else if (a === c && a !== b) {
        return b;
    } else if (b === c && a !== b) {
        return a;
    }

    // Default case (all values are the same)
    return 0;
}