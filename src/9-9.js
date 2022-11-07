function findFirstEven(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) return number;
  }

  return undefined;
}
console.log(findFirstEven([3, 5, 7, 2]));

function findFirstEven(numberList, condisonNumber) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (condisonNumber(number)) return i;
  }

  return undefined;
}

console.log(findFirstEven([3, 5, 7, 2], (x) => x % 2 === 0));
console.log(findFirstEven([3, 5, 7, 2], (x) => x > 2));

console.log([2, 3, 4, 5, 6, 7].every((x) => x > 5));
