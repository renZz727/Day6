function missingNumber(arr) {
  let fullArray = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    fullArray.push(i);
  }
  for (let i = 0; i < fullArray.length; i++) {
    if (fullArray[i] !== arr[i]) return fullArray[i];
  }
  return "No missing number";
}

console.log(missingNumber([1, 2, 3, 5, 6]));
console.log(missingNumber([3, 4, 6]));
console.log(missingNumber([1, 2, 3, 4]));
