const student = {};
student.name = 'suleng';
student.age = 18;

const student1 = {
  name: 'suleng',
  name: 'xuan long',
  key: '18',
};

console.log(student1);

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));

function calcAvgMark(mark) {
  if (!mark) return -1;

  // tổng điểm / tổng môn học
  const sumMonHoc = Object.keys(mark).length;

  let sum = 0;
  for (let key in mark) {
    const value = mark[key];
    sum += value;
  }

  return parseInt((sum / sumMonHoc).toFixed(1));
}

console.log(calcAvgMark());
console.log(calcAvgMark({ math: 10, english: 9 }));

function cloneObject(obj) {
  let objClone = {};

  for (let key in obj) {
    objClone[key] = obj[key];
  }

  return objClone;
}
const studentA = { name: 'Bob', math: 9 };
const studentB = cloneObject(studentA);

console.log(studentA === studentB); // should be false
console.log(studentB.name); // Bob
console.log(studentB.math); // 9

function isEqual(obj1, obj2) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

  const lengObj1 = Object.keys(obj1).length;
  const lengObj2 = Object.keys(obj2).length;

  let value;
  let value2;

  for (let key in obj1) {
    value = obj1[key];
  }

  for (let key in obj2) {
    value2 = obj2[key];
  }

  return lengObj1 === lengObj2 && value === value2;
}

console.log(isEqual({ name: 'Bob' }, { name: 'Bob' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }));

const long = {
  long: [12, 3],
  name: 'lonmg',
};

console.log(long.long);
