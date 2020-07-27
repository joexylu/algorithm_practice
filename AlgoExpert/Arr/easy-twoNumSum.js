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
    


    //method 2
    // let tracker = {}
	//  let result = []
	//  array.forEach(el => {
	// 	 if (!tracker[target - el]&& tracker[target - el]!== 0){
	// 		 tracker[el] = target - el
	// 	 } else {
	// 		 result = [el, target - el]
	// 	 }
	//  })
    // return result
    

    // array.sort((a,b) => a - b);
    // let left = 0, right = array.length -1;
    // let currentSum;
    // while (left < right){
    //     currentSum = array[left] + array[right];

    //     if(currentSum === target){
    //         return [array[left], array[right]]
    //     }else if (currentSum < target){
    //         left ++;
    //     }else if (currentSum > target){
    //         right --;
    //     }
    // }
    // return []
}

console.log(twoNumberSum(arr, 10))