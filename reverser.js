function reverse(param) {
    if (typeof param === "string") {
        let reverse = "";

        for (let i = param.length - 1; i >= 0; i--) {
            reverse += param[i];
        }

        return reverse;
    } else {
        let reverse = [];
        for (let i = param.length - 1; i >= 0; i--) {
            reverse.push(param[i]);
        }
        return reverse;
    }
}
