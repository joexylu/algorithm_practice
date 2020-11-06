function fourSum(arr, target) {
  const allPairsSums = {};
  const foursumResult = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const currentSum = arr[i] + arr[j];
      const diff = target - currentSum;
      if (diff in allPairsSums) {
        for (let pair of allPairsSums[diff]) {
          foursumResult.push(pair.concat([arr[i], arr[j]]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      const currentSum = arr[i] + arr[k];
      if (!(currentSum in allPairsSums)) {
        allPairsSums[currentSum] = [[arr[k], arr[i]]];
      } else {
        allPairsSums[currentSum].push([arr[k], arr[i]]);
      }
    }
  }
  return foursumResult;
}
