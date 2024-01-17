function evenlySpaced(a, b, c) {
    // Sort the values in ascending order
    const sortedValues = [a, b, c].sort((x, y) => x - y);

    // Check if the differences between adjacent values are the same
    return sortedValues[1] - sortedValues[0] === sortedValues[2] - sortedValues[1];
}
