function sumWithSameDigits(a, b) {
    const sum = a + b;
    const numDigitsA = String(a).length;
    const numDigitsSum = String(sum).length;

    return numDigitsSum === numDigitsA ? sum : a;
}