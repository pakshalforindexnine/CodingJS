function catDogEqualCount(str) {
    let catCount = 0;
    let dogCount = 0;

    for (let i = 0; i < str.length - 2; i++) {
        if (str.substring(i, i + 3) === "cat") {
            catCount++;
        } else if (str.substring(i, i + 3) === "dog") {
            dogCount++;
        }
    }

    return catCount === dogCount;
}