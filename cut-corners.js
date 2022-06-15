// const multiply = (a, b) => {
//     if (a == 0 || b == 0) return 0;

//     let result = 0;

//     for (var i = 0; i < Math.abs(b); i++) {
//         result += Math.abs(a);
//     }

//     if (a < 0 && b < 0) return result;
//     if (a < 0 || b < 0) return -result;

//     return result;
// };

// function divide(num1, num2) {
//     if (num1 == 0) return 0;
//     if (num2 == 0) return Number.MAX_VALUE;
//     let negResult = false;

//     if (num1 < 0) {
//         num1 = -num1;
//         if (num2 < 0) num2 = -num2;
//         else negResult = true;
//     } else if (num2 < 0) {
//         num2 = -num2;
//         negResult = true;
//     }

//     let quotient = 0;
//     while (num1 >= num2) {
//         num1 = num1 - num2;
//         quotient++;
//     }
//     if (negResult) quotient = -quotient;
//     return quotient;
// }

// function modulo(a, b) {
//     return a - multiply(divide(a, b), b);
// }

// function round(a) {
//     var int = 0;
//     var num = multiply(a, 10);
//     var rem1 = modulo(num, 10);
//     if (rem1 > 0 && rem1 < 5) {
//         int = divide(num, 10);
//     } else if (rem1 >= 5) {
//         int = divide(num, 10) + 1;
//     } else if (rem1 < 0 && rem1 > -5) {
//         int = divide(num, 10);
//     } else if (rem1 <= -5) {
//         int = divide(num, 10) - 1;
//     }
//     return int;
// }

// function ceil(a) {
//     var int = 0;
//     var num = multiply(a, 10);
//     var rem1 = modulo(num, 10);
//     var num2 = divide(num, 10);
//     if (rem1 == 0) {
//         int = a;
//     } else if (rem1 > 0) {
//         int = num2 + 1;
//     } else if (rem1 < 0) {
//         int = num2;
//     }

//     return int;
// }

// function floor(a) {
//     var int = 0;
//     var num = multiply(a, 10);
//     var rem1 = modulo(num, 10);
//     var num2 = divide(num, 10);
//     if (rem1 == 0) {
//         int = a;
//     } else if (rem1 > 0) {
//         int = num2;
//     } else if (rem1 < 0) {
//         int = num2 - 1;
//     }
//     return int;
// }

// function trunc(a) {
//     var int = 0;
//     var num = multiply(a, 10);
//     var rem1 = modulo(num, 10);
//     var num2 = divide(num, 10);
//     if (rem1 == 0) {
//         int = a;
//     } else if (rem1 > 0) {
//         int = num2;
//     } else if (rem1 < 0) {
//         int = num2;
//     }
//     return int;
// }

const modulo = (a, b) => {
    if (a === 0 || b === 0) {
        return 0;
    }
    let aNegative = false;
    if (a < 0) {
        a = -a;
        aNegative = true;
    }
    if (b < 0) {
        b = -b;
    }
    let remainder = a;
    while (remainder > b) {
        remainder -= b;
    }

    return aNegative ? -remainder : remainder;
};
const round = (number) =>
    modulo(number, 1) === 0
        ? number
        : number > 0
        ? modulo(number, 1) < 0.5
            ? number - modulo(number, 1)
            : number - modulo(number, 1) + 1
        : modulo(number, 1) < -0.5
        ? number - modulo(number, 1) - 1
        : number - modulo(number, 1);
const ceil = (number) =>
    modulo(number, 1) === 0
        ? number
        : number > 0
        ? number - modulo(number, 1) + 1
        : number - modulo(number, 1);
const floor = (number) =>
    modulo(number, 1) === 0
        ? number
        : number > 0
        ? number - modulo(number, 1)
        : number - modulo(number, 1) - 1;
const trun = (n) => (modulo(n, 1) !== 0 ? n - modulo(n, 1) : n);
const trunc = (n) =>
    n > 0xfffffffff ? trun(n - 0xfffffffff) + 0xfffffffff : trun(n);
