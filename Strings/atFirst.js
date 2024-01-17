function make2Chars(str) {
    if (str.length >= 2) {
        return str.substring(0, 2);
    } else {
        return str.length === 1 ? str + '@' : '@@';
    }
}