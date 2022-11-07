function findMaxI(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let max = numberList[0];

  numberList.forEach((number) => {
    if (number > max) max = number;
  });

  // for (let i = 0; i < numberList.length; i++) {
  //   if (numberList[i] > max) max = numberList[i];
  // }

  return max;
}
console.log(findMaxI([1, 2, 5, 8, 23]));
