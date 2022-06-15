function repeat(string, times) {
    var repeatedStr = "";
    while (times > 0) {
        repeatedStr += string;
        times--;
    }
    return repeatedStr;
}
