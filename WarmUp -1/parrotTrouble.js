function parrotTrouble(talking, hour) {
    // Check if the parrot is talking and the hour is before 7 or after 20
    return talking && (hour < 7 || hour > 20);
}