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
// On time, O1 space
// function isValidSub(array, sequence){
//     let seqIdx = 0;
//     for (const val of array){
//         if(seqIdx === sequence.length) break;
//         if(sequence[seqIdx] === val) seqIdx++;
//     }
//     return seqIdx === sequence.length
// }


const arr =[5,1,22,25,6,-1,8,10]
const seq = [1,6,-1,10]

console.log(isValidSub(arr, seq))