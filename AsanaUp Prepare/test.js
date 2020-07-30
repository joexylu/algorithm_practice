//longest sub string advance edition:

function longestSubarrayCheck(a, b, c) {
    
    
    let newSet = new Set(c)
    
    let left = 0;
    
    let pair = [];
    
    let i =0;
    while(i < a.length + 1){
        if(!newSet.has(a[i])){
            pair.push([left, i-1]);
            left = i + 1;
        }
        i++
    }
    let bLenght = b.length
    let hasB = false
    
    for(let i= 0; i< pair.length; i++){
        if(pair[i][1] - pair[i][0] + 1 > bLenght){
            return false
        }else if(pair[i][1] - pair[i][0] + 1 === bLenght){
            if(a.slice(pair[i][0],pair[i][1]+ 1) == b){
                hasB = true
            }
        }
        
    }
    
    return hasB || false
}
