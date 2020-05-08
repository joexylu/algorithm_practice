// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
// Example 1: 
// Input:
// asteroids = [1,2,3,-3,4,-2]   
// Output = [1, 2, 4]
// Note:
// The length of asteroids will be at most 10000.
// Each asteroid will be a non-zero integer in the range [-1000, 1000]




function astro(array){
    let collisions = true;
    while(collisions){
        collisions = false;
        for (let i = 0; i < array.length; i++){
            if (array[i] > 0){ //positive
                if(i !== 0){
                    if (array[i+1] < 0 && -array[i+1] > array[i]){
                        array.splice(i,1)
                        collisions = true
                    } else if(array[i+1] < 0 && -array[i+1] < array[i]){
                        array.splice(i+1, 1)
                        collisions = true
                    } else if(array[i+1] < 0 && -array[i+1] === array[i]){
                        array.splice(i,2)
                        collisions = true
                    }
                }
            } else{// negative
                if (i !== array.length-1){
                    if (array[i-1] > 0 && -array[i-1] > array[i]){
                        array.splice(i,1)
                        collisions = true
                    } else if(array[i-1] < 0 && -array[i-1] < array[i]){
                        array.splice(i-1, 1)
                        collisions = true
                    } else if(array[i-1] < 0 && -array[i-1] === array[i]){
                        array.splice(i,2)
                        collisions = true
                    }
                }
            }
        }
    }
    return array
}

// console.log(astro([1,1,1,1,-5]))