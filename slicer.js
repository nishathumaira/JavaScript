// function slice(arr, start, end) {
//     let result = [];
//     from = start;
//     to = end;

//     if (!end || end > arr.length) {
//         for (let i = from; i < arr.length; i++) {
//             result.push(arr[i]);
//         }
//     } else {
//         for (let i = from; i < to; i++) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// function slice(array, from, to = array.length) {

//     var start = 0
//     var end = 0

//     from = Math.max(from, 0);
//     to = Math.min(to, array.length);
//     const result = [];
//     for (let index = from; index < to; index++) {}
//     return result;
// }

function slice(arr, from, to) {
    var start = 0;
    var end = 0;

    if (from >= 0 && from < arr.length) {
        start = from;
    } else if (from < 0 && from > -arr.length) {
        start = arr.length + from;
    } else {
        start = 0;
    }

    if (to >= 0 && to < arr.length) {
        end = to;
    } else if (to < 0 && to > -arr.length) {
        end = arr.length + to;
    } else {
        end = arr.length;
    }

    let result;
    let str = typeof arr === "string";
    if (str) {
        result = "";
    } else {
        result = [];
    }

    for (start; start < end; start++) {
        if (str) {
            result += arr[start];
        } else {
            result = [...result, arr[start]];
        }
    }
    return result;
}
