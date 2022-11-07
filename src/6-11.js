function extractTheOne(n) {
  if (n.toString().length !== 3) return -1;

  return n % 10;
}
console.log(extractTheOne(130));

function layHangChuc(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc((n % 100) / 10);
}
console.log(layHangChuc(525));

function layHangChuc(n) {
  if (n.toString().length !== 3) return -1;

  return Math.trunc(n / 100);
}
console.log(layHangChuc(525));

// function getTaxiCount(passengersCount) {
//   if (passengersCount <= 0) return -1;

//   if (passengersCount <= 7) return 1;
//   if (passengersCount > 7 && passengersCount % 7 === 0) return passengersCount / 7;
//   if (passengersCount > 7 && passengersCount % 7 !== 0) return Math.trunc(passengersCount / 7) + 1;
// }
// console.log(getTaxiCount(14));

function goixetaxi(sohanhkhach) {
  if (sohanhkhach <= 0) return -1;

  if (sohanhkhach <= 7) return -1;
  if (sohanhkhach > 7 && sohanhkhach % 7 === 0) return sohanhkhach / 7;
  if (sohanhkhach > 7 && sohanhkhach % 7 === 1) return Math.trunc(sohanhkhach / 7) + 1;
}
// 0 ->1000
// 0 <= n < 1000;
function getMaxDigit(n) {
  if (n < 0 || n >= 1000) return -1;

  const one = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundered = Math.trunc(n / 100);

  let max = one;
  if (tens > max) max = tens;
  if (hundered > max) max = hundered;

  return max;
}

console.log(getMaxDigit(12));

// So sánh 2 số nguyên

function compareNumbers(a, b) {
  if (Number.isInteger(a, b) === false) return 'Invalid';

  if (a < b) return -1;
  if (a == b) return 0;
  return 1;
}

console.log(compareNumbers(3, 2));
console.log(compareNumbers(3.1, 2));
console.log(Number.isInteger(2.3));

const myName = 'Su Leng';
const split = myName.split(' ');
const words = split.length;
console.log(words);

for (let i = 0; i <= 10; i++) {
  const element = myName[i];
  console.log('🚀 ~ element', element);
}
const nickname = 'Su Leng';
console.log(myName.includes('long'));

const conCatString = `${myName} ${nickname}`;
console.log('🚀 ~ conCatString', conCatString);
