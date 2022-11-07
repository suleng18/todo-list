function checkEmail(str) {
  if (str === '') return false;
  return str.indexOf('@gmail.com') >= 0;
}

console.log(checkEmail('bufixuanlong@gmail.com'));
