// 'use strict';

function sayHello(a, b) {
  console.log(this.name, a + b);
}

const student = {
  name: 'suleng',
};

const studenySayhello = sayHello.bind(student);
studenySayhello(5, 10);

sayHello.call(student, 10, 20);
sayHello.apply(student, [1, 2]);
