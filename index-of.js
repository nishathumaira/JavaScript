// Array.prototype.indexOf =
function indexOf(arr, val, ind) {
    if (ind >= 0) {
        for (var i = ind, len = arr.length; i < len; i++) {
            if (arr[i] === val) {
                return i;
            }
        }
        return -1;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                return i;
            }
        }
        return -1;
    }
}

function lastIndexOf(arr, val, ind) {
    if (ind >= 0) {
        for (let i = ind; i >= 0; i--) {
            if (arr[i] == val) {
                return i;
            }
        }
        return -1;
    } else {
        for (let i = arr.length; i >= 0; i--) {
            if (arr[i] == val) {
                return i;
            }
        }
        return -1;
    }
}

function includes(arr, val, ind) {
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}
