function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.

    arrayOne.sort((a,b)=> a-b);
    arrayTwo.sort((a,b)=> a-b);

    let idxOne = 0;
    let idxTwo = 0;

    let small = Infinity;
    let currentDiff;
    let smallestPair;

    while(idxOne < arrayOne.length && idxTwo < arrayTwo.length){

        firstNum = arrayOne[idxOne];
        secondNum = arrayTwo[idxTwo];

        if(firstNum < secondNum){
            currentDiff = secondNum - firstNum
            idxOne += 1
        }else if(secondNum < firstNum){
            currentDiff = firstNum - secondNum
            idxTwo += 1
        }else{
            return [firstNum, secondNum]
        }

        if(small > currentDiff){
            small = currentDiff;
            smallestPair = [firstNum, secondNum]
        }
    }

    return smallestPair
}
  