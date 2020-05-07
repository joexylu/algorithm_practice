function sayHello(){
    console.log("nice")
}

function factorial(n){
    if (n === 1) return 1;

    return n*factorial(n-1)
}

// console.log(factorial(5))


function fib(n){
    if (n === 1) return 1;
    if (n === 2) return 1;
    let fibNum = fib(n-1) + fib(n-2);
    return fibNum
}

console.log(fib(10))