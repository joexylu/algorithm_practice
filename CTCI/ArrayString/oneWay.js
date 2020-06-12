function oneWay(str1, str2){
    let letter = new Object();

    for (let i = 0; i < str1.length; i++){
        if(!!letter[str1[i]]){
            letter[str1[i]] += 1
        }else{
            letter[str1[i]] = 1
        }
    }

    for (let j = 0; j < str2.length; j++){
        if(!!letter[str2[j]]){
            letter[str2[j]] -= 1
        }else{
            letter[str2[j]] = 1
        }
    }

    let count = 0;

    for(let [key, value] of Object.entries(letter)){
        if(letter[key] !== 0){
            count += 1
        }
    }
    console.log(letter)
    return count === 1
}

console.log(oneWay("apple", "appple"))