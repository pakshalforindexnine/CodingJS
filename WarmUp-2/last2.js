function last2(str) {
    if (str.length < 2) {
        // If the string is too short, there cannot be a valid substring of length 2
        return 0;
    }

    const lastTwoChars = str.slice(-2);
    let count = 0;

    for (let i = 0; i < str.length - 2; i++) {
        const substring = str.slice(i, i + 2);
        if (substring === lastTwoChars) {
            count++;
        }
    }

    return count;
}