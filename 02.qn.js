function frequencyCount(sentence) {
  words = sentence.toLowerCase().replace("!", "");
  words = words.replace(",", "").split(" ");
  let frequencyCount = {};
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < words.length; j++) {
      if (words[i] === words[j]) {
        count++;
      }
    }
    frequencyCount[words[i]] = count;
  }
  return frequencyCount;
}

console.log(frequencyCount("Hello hello world, world!"));
