console.log("Hello World");

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

function round(a) {
    var int = 0;
    var num = multiply(a, 10);
    var rem1 = modulo(num, 10);
    if (rem1 > 0 && rem1 < 5) {
        int = divide(num, 10);
    } else if (rem1 >= 5) {
        int = divide(num, 10) + 1;
    } else if (rem1 < 0 && rem1 > -5) {
        int = divide(num, 10);
    } else if (rem1 <= -5) {
        int = divide(num, 10) - 1;
    }
    return int;
}

function ceil(a) {
    var int = 0;
    var num = multiply(a, 10);
    var rem1 = modulo(num, 10);
    var num2 = divide(num, 10);
    if (rem1 > 0 && rem1 < 5) {
        int = divide(num, 10);
    } else if (rem1 >= 5) {
        int = divide(num, 10) + 1;
    } else if (rem1 < 0 && rem1 > -5) {
        int = divide(num, 10);
    } else if (rem1 <= -5) {
        int = divide(num, 10) - 1;
    }
    return int;
}

function reverse(input) {
    var ret = new Array();
    for (var i = input.length - 1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

var a = "hello";
var b = reverse(a);
console.log(b);
