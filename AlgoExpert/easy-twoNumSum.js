const arr = [3,5,-4,8,11,1,-1,6]

function twoNumberSum(array, target){
    for(let i = 0; i < array.length; i++){
        for(let j = i; j < array.length; j ++){
            if( i < j && array[i]+array[j]===target){
                return [array[i],array[j]]
            }
        }
    }
	return []
}

console.log(twoNumberSum(arr, 10))