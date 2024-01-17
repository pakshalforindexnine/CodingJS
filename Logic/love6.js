function love6(a, b) {
    // Check if either of the numbers is 6
    if (a === 6 || b === 6) {
        return true;
    }

    // Check if the sum or absolute difference is 6
    return (a + b === 6) || (Math.abs(a - b) === 6);
}