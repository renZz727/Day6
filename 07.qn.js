let newArr = [];
function flattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") flattenArray(arr[i]);
    else newArr.push(arr[i]);
  }
  return newArr;
}

console.log(flattenArray([1, [2, [3, [4]], 5]]));
