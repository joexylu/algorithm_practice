// use hash map as the data structure to store letters

function isUnique(str){
    let hashTable = new Object();

    for(let i = 0; i < str.length; i++){
        if(hashTable[str[i]]){
            hashTable[str[i]] = false
        }else{
            hashTable[str[i]] = true
        }
    }

    console.log(hashTable)
    for (let [key, value] of Object.entries(hashTable)) {
        if(hashTable[key]) return true
    }
    return false

}


// let string = "aaaabbbbc"
// console.log(isUnique(string))