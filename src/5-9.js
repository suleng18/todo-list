function classifyStudent(mark) {
  if (mark < 0 || (mark > 10) & (typeof mark !== 'number')) return -1;
  let result;
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  else result = 'Bad';

  return result;
}
console.log(classifyStudent('12'));

function classifyStudent1(mark) {
  if (mark < 0 || (mark > 10) & (typeof mark !== 'number')) return -1;

  let result = 'Bad';
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
}

function classifyStudent2(mark) {
  if (mark < 0 || (mark > 10) & (typeof mark !== 'number')) return -1;

  if (mark > 8) result = 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';

  return 'Bad';
}
console.log(classifyStudent(10));

function classifyStudent3(mark) {}
