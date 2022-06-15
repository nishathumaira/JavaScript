const multiply = (a, b) => {
    if (a == 0 || b == 0) return 0;

    let result = 0;

    for (var i = 0; i < Math.abs(b); i++) {
        result += Math.abs(a);
    }

    if (a < 0 && b < 0) return result;
    if (a < 0 || b < 0) return -result;

    return result;
};

function divide(num1, num2) {
    if (num1 == 0) return 0;
    if (num2 == 0) return Number.MAX_VALUE;
    let negResult = false;

    if (num1 < 0) {
        num1 = -num1;
        if (num2 < 0) num2 = -num2;
        else negResult = true;
    } else if (num2 < 0) {
        num2 = -num2;
        negResult = true;
    }

    let quotient = 0;
    while (num1 >= num2) {
        num1 = num1 - num2;
        quotient++;
    }
    if (negResult) quotient = -quotient;
    return quotient;
}

function modulo(a, b) {
    return a - multiply(divide(a, b), b);
}
