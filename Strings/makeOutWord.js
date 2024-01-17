function makeOutWord(out, word) {
    const midIndex = out.length / 2;
    return out.substring(0, midIndex) + word + out.substring(midIndex);
}
