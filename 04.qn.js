// console.log('A'.charCodeAt(0));
// console.log(String.fromCharCode(65));

function pattern(n) {
  let res = [];
  let charCode = 65;
  for (let i = 0; i < n; i++) {
    res[i] = [];
    for (let j = 0; j < i + 1; j++) {
      res[i].push(String.fromCharCode(charCode));
    }
    charCode++;
  }
  for (let i = 0; i < n; i++) {
    console.log(res[i].toString().replaceAll(",", " "));
  }
}
pattern(5);
