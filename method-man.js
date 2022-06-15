function words(a) {
    let subStr = a.split(" ");
    return subStr;
}

function sentence(b) {
    let singStr = b.join(" ");
    return singStr;
}

function yell(c) {
    let s = c.toUpperCase();
    return s;
}
function whisper(d) {
    let strStar = "*" + d.toLowerCase() + "*";
    return strStar;
}
function capitalize(e) {
    let transform = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    return transform;
}
