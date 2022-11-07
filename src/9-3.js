const numberList = [3, 5, 6];
const anotherList = [...numberList, 45, 6]; // spread
anotherList[0] = 4;
console.log(numberList);
console.log('🚀 ~ anotherList', anotherList);

const copyArray = [...anotherList, 23, 2];
console.log('🚀 ~ copyArray', copyArray);

for (let i = 0; i < array.length; i++) {
  const element = array[i];
}
