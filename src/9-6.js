const numberList = [1, 2, 3, 4];
numberList.push(1, 'long');
const pop = numberList.pop();
console.log(pop);
console.log(numberList);

const numberList2 = [9, 8, 7, 89, 76];
numberList2.splice(2, 0, 4);
console.log('🚀 ~ numberList2', numberList2);

const numberList3 = [1, 2, 4, 5, 6].indexOf(5);
console.log(numberList3);
