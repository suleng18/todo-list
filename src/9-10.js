const numberList = [1, 3, 4, 6];
console.log(numberList.map((x) => x + 2));
console.log(numberList);

function createArrayNew(arr, mappingFn) {
  if (!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mappingFn(element, i);
    // console.log('🚀 ~ newElement', newElement);
    newArray.push(newElement);
  }

  return newArray;
}

console.log(createArrayNew([1, 2, 3, 4], (x, idx) => (idx % 2 === 0 ? x + 1 : x * 2)));
