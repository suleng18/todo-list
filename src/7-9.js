function parameter(str) {
  if (str === '') return '';
  const strLowerCase = str.toLowerCase();

  return strLowerCase.replaceAll(' ', '-');
}
console.log(parameter('bui xuan LONG'));

function parameter2(str) {
  return str.split(' ').join('-').toLowerCase();
}
console.log(parameter2('bui xuan LONG'));

// =======================

function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;

  return `${str.slice(0, maxLength - 1)}...`;
}
console.log(truncate('bui xuan LONG', 4));

function formatSeconds(seconds) {
  if (seconds < 0 || seconds >= 60) return '--';

  if (seconds < 10) return `0${seconds}`;

  return seconds;
}

console.log(formatSeconds(9));

function formatSecondsV2(seconds) {
  if (seconds < 0 || seconds >= 60) return '--';

  return `0${seconds}`.slice(-2);
}

console.log(formatSecondsV2(20));

console.log(4256 % 3600);

const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  if (seconds < 0 || seconds > 86400) return '';

  let soGio = Math.trunc(seconds / SECONDS_PER_HOUR);

  let sogiayconlai = seconds % SECONDS_PER_HOUR;

  let sophuthienthi = Math.trunc(sogiayconlai / SECONDS_PER_MIN);
}

function extractDomainV1(email) {
  if (email.length < 0) return '';

  const splitEmail = email.split('@');
  return splitEmail[1];
}

function extractDomainV2(email) {
  if (email.length < 0) return '';

  return email.slice(email.indexOf('@') + 1);
}
console.log(extractDomainV2('long@gmail.com'));

function findSecret(code) {
  return code
    .split('')
    .filter((item) => item !== item.toUpperCase())
    .join('');
}
console.log(findSecret('SUPERhelloCODE'));

function findSecretV2(code) {
  for (let i = 0; i < code.length - 1; i++) {
    if (code[i] !== code[i].toUpperCase()) {
      let result = code[i];
      result += result;
      return result;
    }
  }
}
console.log(findSecretV2('SUPERhelloCODE'));

//v1
function handleWord(str) {
  if (!str) return '';

  const handleStr = str.trim();

  return `${handleStr[0].toUpperCase()}${handleStr.slice(1).toLowerCase()} `;
}

function getFullName(firstName, lastName) {
  const fn = handleWord(firstName || '');
  const ln = handleWord(lastName || '');

  return `${fn} ${ln}`;
}

console.log(getFullName('john'));

const student = {
  id: 1,
  name: 'Van A',
  isHero: true,
  'avg mark': 9,
};
student.name = 'Van b';
console.log(student);

const mang = [1, 2, 12, 12];
const mang2 = [1, 2, { name: 'long' }, 12, 12];
console.log(mang === mang2);

const studentLong = { name: 'long', age: 18 };
const { name, age } = studentLong;

console.log('name' in studentLong);

//
