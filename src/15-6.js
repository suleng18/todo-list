const student = {
  id: 1,
  address: {
    city: 'HCM',
  },

  hobbies: ['music'],
  sayHello() {
    console.log('hello');
  },
};

console.log(student.profile?.name);
console.log(student.color?.[0]);
console.log(student.learnjavascript?.());

student.address.city;
student.hobbies[0];
student.sayHello();

const stu = -1 || 'student';
console.log(stu);

const a = {
  duration: 50,
  title: '',
};

a.duration ||= 50;
console.log(a.duration);

const aa = {
  duration: 40,
};

aa.duration ??= 30;
console.log(aa.duration);

aa.speed ??= 60;
console.log(aa.speed);

const query = 'asahahkh+asajgsaj+asasas';
const result = query.replaceAll('+', ' ');
console.log(query);
console.log(result);

const mang1 = [1, 2];

const mang2 = mang1.pop();

console.log(mang1, mang2);
