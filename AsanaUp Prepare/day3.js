//mutute array

//alternatingSort

function alternatingSort(a) {
    
    let b = []
    
    let front = 0, last = a.length -1;
    
    let switcher = true
    
    while(front <= last){
        
        if(switcher){
            b.push(a[front])
            front += 1
        }else{
            b.push(a[last]);
            last -= 1
        }
        switcher = !switcher
    }
    a.sort((x,y)=>x-y)
    
    for (let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) return false
    }
    return true
    
}


//concatenationSUm

function iPower(base, power) {
    var result = 1;
    for (var i = 1; i <= power; i++)
        result *= base;

    return result;
}

function concatenationsSum(a) {
    var lowSum = 0;
    var offsetSum = 0;
    for (var i = 0; i < a.length; i++) {
        lowSum += a[i];

        var size = a[i].toString().length;
        var offset = iPower(10, size);
        offsetSum += offset;
    }

    return lowSum * a.length + lowSum * offsetSum;
}

//https://codereview.stackexchange.com/questions/225228/sum-of-all-possible-concatenations-of-array-values


