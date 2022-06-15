const sign = (a) => {
    if (a > 0) {
        return 1;
    } else if (a == 0) {
        return 0;
    } else {
        return -1;
    }
};

const sameSign = (a, b) => {
    if (a > 0 && b > 0) {
        return true;
    } else if (a < 0 && b < 0) {
        return true;
    } else if (a == 0 && b == 0) {
        return true;
    } else {
        return false;
    }
};
