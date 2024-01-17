function blueTicket(a, b, c) {
    const abSum = a + b;
    const bcSum = b + c;
    const acSum = a + c;

    if (abSum === 10 || bcSum === 10 || acSum === 10) {
        return 10;
    } else if (abSum === bcSum + 10 || abSum === acSum + 10) {
        return 5;
    } else {
        return 0;
    }
}