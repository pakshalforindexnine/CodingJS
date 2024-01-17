function noTeenSum(a, b, c) {
    // Helper function to fix teens
    function fixTeen(n) {
        return (n >= 13 && n <= 19 && n !== 15 && n !== 16) ? 0 : n;
    }
    const fixedA = fixTeen(a);
    const fixedB = fixTeen(b);
    const fixedC = fixTeen(c);

    return fixedA + fixedB + fixedC;
}