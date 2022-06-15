var split = function (myinput, delimiter) {
    var stringArray = [];
    var j = 0;

    for (var i = 0; i < myinput.length; i++) {
        if (myinput[i] == delimiter) {
            stringArray.push(myinput.slice(j, i));
            j++; //move one step j=j+1
            // stringArray.push("");
        } else {
            continue;
            //when u find the delimiter get out of the for loop - break - and continue searching again after the space till the end of the string
            //     stringArray[j] += myinput.charAt(i);
            // }
            // stringArray.push(myinput[i]);
        }
    }
    return stringArray;
};
console.log(split("hello world", " "));
