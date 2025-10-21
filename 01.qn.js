function parity(arr) {
  odd = [];
  even = [];
  arr.forEach((num) => {
    if (num % 2 === 0) even.push(num);
    else odd.push(num);
  });
  return [...even, ...odd];
}

console.log(parity([3, 2, 4, 1, 5, 8]));
