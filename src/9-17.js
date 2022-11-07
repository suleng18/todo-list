// Tìm từ dài nhất

function findMaxStr(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return undefined;

  let longestWord = wordList[0];

  wordList.forEach((word) => {
    if (word.length > longestWord.length) longestWord = word;
  });

  // for (let i = 0; i < wordList.length; i++) {
  //   const currentWord = wordList[i];
  //   if (currentWord.length > longestWord.length) longestWord = currentWord;
  // }

  return longestWord;
}

console.log(findMaxStr(['asas', 'long', 'xuanlong']));

const result = ['asas', 'long', 'xuanlong'].reduce((longestWord, currentWord) =>
  longestWord.length > currentWord.length ? longestWord : currentWord,
);
console.log(result);

console.log(
  ['asas', 'lonaaaaaaag', 'xuanlong'].reduce((longestWord, currentWord) =>
    longestWord.length > currentWord.length ? longestWord : currentWord,
  ),
);

function createArrayInRange(a, b) {
  let result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }
}

createArrayInRange(a);

function createArrayInRangeV2(a, b) {
  const length = b - a + 1;
  return Array.from({ length }, (x, idx) => a + idx);
}

console.log(createArrayInRangeV2(-2, 1));

console.log(Math.sqrt(15));
console.log(Math.trunc(Math.sqrt(15)));

function getDivisorList(n) {
  if (n > 1 || n > 1000 || !Number.isInteger(n)) return false;

  let result = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
}

function isPerfectNumber(n) {
  if (n < 1 || n > 1000 || !Number.isInteger(n)) return false;

  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (n % i === 0) sum += i;
  }
  if (sum === n) return true;

  return false;
}

function isAllPerfectNumbersV1(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  let result = [];

  for (i = 0; i < numberList.length; i++) {
    if (isPerfectNumber(numberList[i]) === true) result.push(numberList[i]);
  }

  return result.length === numberList.length;
}
console.log(isAllPerfectNumbersV1([]));
console.log(isAllPerfectNumbersV1([1, 6]));
console.log(isAllPerfectNumbersV1([1, 2, 3]));
console.log(isAllPerfectNumbersV1([6]));
console.log(isAllPerfectNumbersV1([6, 28]));
