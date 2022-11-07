// console.log(sum(1, 2));
// function sum(a, b) {
//   return a + b;
// }

// const tong = (a, b) => a + b;
// console.log(tong(1, 2));

var channelName = 'Su Leng Elm';
console.log(window.channelName);

let un = undefined;
console.log(un);

function sayHello() {}

console.log([1, 2].includes(2));
console.log([1, 2].indexOf(3) >= 0);
console.log(['suleng', 'haiso'].includes('suleng'));

console.log(3 ** 3);
console.log(Math.pow(3, 3));

console.log('12334'.padEnd(8, '*'));

console.log(
  Object.keys({
    id: 1,
    name: 'suleng',
    age: 19,
  }),
);

console.log(
  Object.entries({
    id: 1,
    name: 'suleng',
    age: 19,
  }),
);

function abc(a, b, c) {
  console.log(a, b, c);
}

abc('abc', 123, 'def');

console.log([111, 2, 3, ,].length);

const [ft, sec, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);

const numberList1 = [1, 2, 3, 4];
const numberList2 = [6, 7, 8, 9];
const mergedList = numberList1;
mergedList[0] = 10;
console.log(numberList1);
console.log(mergedList === numberList1);

const school = {
  id: 1,
  name: 'Easy Frontend',
  isHer: true,
};
const { id, ...rest1 } = school;
console.log(rest1);
console.log(school);

const alice = {
  id: 1,
  name: 'XuanLong',
};

const bopzz = {
  ...alice,
  name: 'Bopzz',
};

console.log(bopzz);

console.log([1, 2, , 4, 5].flat());
console.log([5, 20].map((x) => [x, x * 2]).flat(2));
