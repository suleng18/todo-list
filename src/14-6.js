// default parameters
function sum() {}
function sum(a, b = 10) {}
function sum(a = 20, b = 10) {}

//
function sum(...numberList) {
  let sum = 0;

  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
  }

  return sum;
}
console.log(sum(1));
console.log(sum(1, 2, 3));

//
function sum1(...numberList) {
  return [...arguments].reduce((total, number) => total + number);
}
const numberList = [2, 4, 6];
console.log(sum1(...numberList));

// Arrow functions

const sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 2));

const getStudent = () => ({
  name: 'suleng',
});
console.log(getStudent());

function Student(id, name) {
  this.id = id;
  this.name = name;
  this.sayHello = function () {
    console.log('My name is ' + this.name);
  };
}

const Long = new Student(1, 'Long');
Long.sayHello();
console.log(Long.id);
console.log(Long.name);

function sum(x) {
  return function (y) {
    return x + y;
  };
}

console.log(sum(5)(5));

// generate increase id
function createIdGenerator(startId = 1) {
  let id = startId;

  return function () {
    return id++;
  };
}

const getNextId = createIdGenerator();
console.log(getNextId());
console.log(getNextId());
console.log(getNextId());
console.log(getNextId());
