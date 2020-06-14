function stringCompression(str){
    let result = ""

    let pointer = 0;

    while(pointer < str.length){
        let count = 1
        let next = pointer + 1;

        while(!!str[next] && str[pointer] === str[next]){
            count++
            next = next + 1
        }
        result = result + str[pointer] + count
        pointer = next
    }

    return result
}

console.log(stringCompression("aabcccccaa"))