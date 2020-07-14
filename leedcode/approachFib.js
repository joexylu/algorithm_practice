function fib(num){
    if(num<=1) return 1;
  
    return fib(num - 1) + fib(num - 2)
  }
  
  
  function ApproachingFibonacci(arr) { 
  
    // code goes here  
  
    var sum = arr.reduce(function(a,b){
      return a+b
    },0)
  
    let i = 1;
    let difference = sum;
    let nextFib, smallDiff;
    while(true){
      nextFib = fib(i);
      smallDiff = Math.abs(nextFib - sum);
      if(smallDiff < difference){
        difference = smallDiff;
      }else{
        break
      }
      i++;
    }
  
  
    return difference; 
  
  }