('use strict');
const key = 'Power';
const student = {
  id: 1,
  name: 'XuanLong',
  'hero type': 'iron man',
  [key]: 50,
  [`get${key}`]: function () {
    return 100;
  },
};

student.id;
console.log(student.Power);

student.Power;
student['hero type'];
student[key];

const school = {
  id: 1,
  name: 'XuanLong',
};

const { id: schoolId, name, age = 18 } = school;
console.log(schoolId);
console.log(name);
console.log(age);

const a = { id: 1 };
const b = { name: 'suleng' };
const c = Object.assign(a, b);

console.log(a);
console.log(b);
console.log(a === c);
console.log(b === c);

const studentObj = {
  id: 1,
  name: 'XuanLong',
};

const suLeng = {
  ...studentObj,
  name: 'Januzaj',
};

console.log(suLeng);

const bopzz = Object.assign({}, studentObj, { name: 'Minh Hai', age: 23 });
console.log('🚀 ~ bopzz', bopzz);

console.log(studentObj === bopzz);

console.log(this === global);
this.mami = 'Easy Dev';
console.log(global.mami);

('use strict');
function sayHello() {
  console.log(this);
}

this.x = 10;
console.log(global.x);

const student3 = {
  name: 'Boz',
  sayHello() {
    console.log('My name is ', this.name);
  },
};

student3.sayHello();

var obj = { num: 2 };
var add = function (a, b) {
  return this.num + a + b;
};

console.log(add.apply(obj, [3, 1]));
console.log(add.call(obj, 1, 1));

var bound = add.bind(obj);
console.log(bound(3, 1));
