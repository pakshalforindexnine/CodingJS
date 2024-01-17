function frontTimes(str, n) {
    const front = str.length < 3 ? str : str.slice(0, 3);
    return front.repeat(n);
}
