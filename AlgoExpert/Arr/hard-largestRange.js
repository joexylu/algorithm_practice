function largestRange(arr) {
  arr.sort((a, b) => a - b);
  let result = -1;
  let left = 0,
    right = 1;
  let largestLength = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      left = i;
    } else {
      right += 1;
    }
    if (right - left > largestLength) {
      largestLength = right - left;
      result = [arr[left], arr[right - 1]];
    }
  }
  return result;
}
console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]));
