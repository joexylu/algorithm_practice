function moveElementToEnd(array, toMove) {
    // Write your code here.

    let i = 0;
    let end = array.length - 1;
    while(i < end){
        if(array[end]=== toMove){
            end -= 1;
        }else if(array[end] !== toMove && array[i] === toMove){
            [array[i], array[end]] = [array[end], array[i]]
            i += 1;
            end -= 1;
        }else if(array[i] !== toMove){
            i += 1
        }else if(array[i] === toMove && array[end] !== toMove){
            [array[i], array[end]] = [array[end], array[i]]
            i += 1;
            end -= 1;
        }
    }
    return array
}

const arr = [2, 1, 2, 2, 2, 3, 4, 2];


console.log(moveElementToEnd(arr, 2))