function cutFirst(string) {
    return string.slice(2);
}

function cutLast(string) {
    return string.slice(0, string.length - 2);
}

function cutFirstLast(string) {
    return string.slice(2, -2);
}

function keepFirst(string) {
    return string.substring(0, 2);
}

function keepLast(string) {
    return string.substring(string.length - 2);
}

function keepFirstLast(string) {
    if (string.length <= 4) {
        return string;
    }
    return string.substring(0, 2) + string.substring(string.length - 2);
}
