function isValidSub(array, sequence){
    for (let i = 0; i< array.length; i++){
        if(array[i] === sequence[0]){
            sequence.shift()
        }
    }
    if(sequence.length === 0){
        return true
    }else{
        return false
    }
}


const arr =[5,1,22,25,6,-1,8,10]
const seq = [1,6,-1,10]

console.log(isValidSub(arr, seq))