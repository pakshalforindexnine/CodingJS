function doubleX(str) {
    const firstXIndex = str.indexOf('x');

    if (firstXIndex !== -1 && firstXIndex < str.length - 1) {
        return str.charAt(firstXIndex + 1) === 'x';
    }

    return false;
}