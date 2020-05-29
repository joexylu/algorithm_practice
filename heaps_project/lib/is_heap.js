// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    if (array[idx] === undefined) return true;
    let max = array[idx];

    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1; 
    let leftVal = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
    let rightVal = array[rightIdx]=== undefined ? -Infinity : array[rightIdx];

    return max > leftVal && max > rightVal &&isMaxHeap(array, leftIdx) && isMaxHeap(array, rightIdx);


}


module.exports = {
    isMaxHeap
};