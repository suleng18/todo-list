const student = {
  id: 1,
  name: 'Student',
  age: 18,
};

const entries = Object.entries(student);
console.log('🚀 ~ entries', entries);

console.log(Object.fromEntries(entries));

function parseStudentFromJSON(str) {
  try {
    return JSON.parse(str);
  } catch {
    return undefined;
  }
}

console.log(Math.trunc.toString());

const x = null;
const y = 1;
const value = x ?? y;
console.log(value);
