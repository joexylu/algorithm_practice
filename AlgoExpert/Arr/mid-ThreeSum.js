function threeNumberSum(array, targetSum) {
    // Write your code here.

    let sorted = array.sort((a,b) => a-b)

	let result = []

	let left, right, currentSum

	for(let i = 0; i < sorted.length - 2; i++){
			left = i+1;
			right = sorted.length - 1;

			while(left < right){
					currentSum = sorted[i] + sorted[left] + sorted[right]
					if(currentSum === targetSum){
							result.push([sorted[i], sorted[left], sorted[right]])
							left += 1;
							right -= 1;
					} else if(currentSum > targetSum){
							right -= 1
					} else if (currentSum < targetSum){
							left += 1
					}
			}
	}
	return result
}

  const arr = [-1, 0, 1, 2, -1, -4]

