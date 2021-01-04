// Problem. Fibonacci numbers. 0,1,1,2,3,5,8,13,21,... Each number is the sum of two previous numbers. 
// Implement function getFibonacciNumber(n) that returns n-th Fibonacci number

function getFib(n){
    if(n === 0) return 0
    if(n === 1) return 1
    
    return getFib(n-1) + getFib(n-2)
}

function newGetFib(n){
    if(n === 0) return 0
    if(n === 1) return 1
    
    let result = [0,1]
    let j = n
    let sum
    while(j > 1){
        sum = result[0] + result[1]
        
        result.push(sum)
        result.shift();
        j--
    }
    
    return sum 
}

// 2^100 = (2^50)^2
// 2^101 = 2 * 2^100
function powerOf2(n) {
    if (n === 0) return 1
    if (n % 2 === 1) {
        return powerOf2(n - 1) * 2
    }else{
        return powerOf2(n/2) ** 2
    }
    
}