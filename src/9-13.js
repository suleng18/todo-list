// reduce() : dùng hàm khi có nhu cầu duyệt qua từng phần tử và tính toán ra một kết quả cuối cùng

const numberList = [2, 3, 4];
function calcSum(numberList) {
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    const element = numberList[i];
    sum += element;
  }

  return sum;
}
console.log(calcSum(numberList));

console.log(numberList.reduce((sum, number) => sum + number, 10));

function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('invalid parameter');
  }

  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Nen truyen parameter');
    }
    return initialValue;
  }

  const hasIntialValue = !!initialValue;
  const startIndex = hasIntialValue ? 0 : 1;
  let accumlator = hasIntialValue ? initialValue : arr[0];

  for (let i = startIndex; i < arr.length; i++) {
    accumlator = callbackFn(accumlator, arr[i], i);
  }

  return accumlator;
}

console.log(reduce([2, 4, 5], (prev, number) => prev + number, 0));
