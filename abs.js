function isPositive(a) {
    if (a > 0) {
        return true;
    } else {
        return false;
    }
}

function abs(b) {
    if (b == 0) {
        return 0;
    } else if (isPositive(b)) {
        return b;
    } else {
        return b * -1;
    }
}

//if (a % 2 === 0) {
//return true

//}
