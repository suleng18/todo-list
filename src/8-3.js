const student = {
  name: 'xuan long',
  age: 18,
};

const moreProps = {
  isHerro: true,
  gender: 'male',
};

const cloneStudent = Object.assign({}, student, moreProps);
console.log('🚀 ~ cloneStudent', cloneStudent);

const cloneStudent2 = {
  ...moreProps,
  ...student,
};
console.log('🚀 ~ cloneStudent2', cloneStudent2);
