function myFilter(arr) {
  filtered = [];
  arr.forEach((element) => {
    if (element > 10) filtered.push(element);
  });
  return filtered;
}

console.log(myFilter([1, 2, 20, 35, 50]));
console.log(myFilter([100, 355, 0, 23, 53, 1, 5, 9]));
