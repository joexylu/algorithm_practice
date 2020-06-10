function isMonotonic(array) {
    // Write your code here.
    let i = 0;
    let decreasing;
    while(i < array.length){
        if (array[i] > array[i+1]){
            decreasing = true
            break
        }else if(array[i] === array[i+1]){
            i += 1
        }else{
            decreasing = false
            break
        }
    }
    while(i < array.length - 1){
        if(decreasing){
            if(array[i] < array[i+1]) return false
        } else{
            if(array[i] > array[i+1]) return false
        }
        i += 1;
    }
    return true
    
}