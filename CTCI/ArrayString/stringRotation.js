function isSubstring(str, subStr){
    return str.indexOf(subStr) !== -1
}

function stringRotate(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }

    var two = str1 + str1;

    return two.indexOf(str2) !== -1;
}

// console.log(isSubstring("abcdef", "ac"))


console.log(stringRotate("waterbottle","ttlewaterbe"))