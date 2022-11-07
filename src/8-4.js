const student = {
  'long hai': 20,
  name: 'long',
  age: 18,
  address: 'Phu luong',
};

console.log(Object.keys(student));

const keyList = Object.keys(student).forEach((key) => {
  console.log(key);
  console.log(student[key]);
});

for (let i = 0; i < keyList.length; i++) {
  const key = keyList[i];
  console.log('key', key);
  console.log('value', student[key]);
}

for (let key in student) {
  console.log(key);
  console.log(student[key]);
}
