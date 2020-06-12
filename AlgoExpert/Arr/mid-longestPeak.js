const arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

function longestPeak(array) {
    // Write your code here.

    let count = 0;

    let max = 0;

    let result = []

    for(let i = 1; i< array.length - 1; i++){
        if(array[i] > array[i-1] && array[i]> array[i+1]){


            count = 3;
            let left = i - 1;
            let right = i + 1;

            while(left - 1 > 0){
                if(array[left] > array[left -1]){
                    count += 1;
                    left = left - 1
                }else{
                    count += 1
                    break
                }
            }

            while(right + 1 < array.length){
                if(array[right] > array[right + 1]){
                    right = right - 1
                    count += 1;
                }else{
                    count += 1
                    break
                }
            }
        }

        if(max < count){
            max = count;
        }
        count = 0
    }

    return max
}

console.log(longestPeak(arr))