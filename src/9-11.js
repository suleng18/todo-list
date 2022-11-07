function filter(arr, handleElement) {
  if (!Array.isArray(arr) || typeof handleElement !== 'function') return undefined;

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (handleElement(element, i)) newArray.push(element);
  }

  return newArray;
}

console.log(filter([1, 2, 3, 4], (x) => x > 2));
console.log(filter([1, 2, 3, 4], (x, idx) => x > 2 && x % 2 === 0));
