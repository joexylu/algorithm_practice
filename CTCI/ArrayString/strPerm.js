//given two string, write a method to decide if one is a permutation of the other.

function checkPermutation(str){

}

function strPalinPerm(str){
    let letters = new Object()

    let count = 0;

    for(let i = 0; i< str.length; i++){
        if(letters[str[i].toLowerCase()]){
            letters[str[i].toLowerCase()] += 1
        }else if(str[i] === " "){
            continue
        }else{
            letters[str[i].toLowerCase()] = 1
        }
    }

    for(let [key, value] of Object.entries(letters)){
        count += letters[key] % 2
    }
    return count <= 1
}

// console.log(strPalinPerm("Tact Coa"))

// time: o(n); space o(1)

