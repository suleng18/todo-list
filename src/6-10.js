// COnvert hours to seconds

function chuyenVeGiay(hours) {
  if (hours < 0) return -1;
  const SECONDS_PER_HOURS = 60 * 60;
  return hours * SECONDS_PER_HOURS;
}

console.log(chuyenVeGiay(3));

// find max number
function findMaxNumber(a, b, c) {
  let maxNumber = a;

  if (b > maxNumber && b > c) maxNumber = b;
  if (c > maxNumber && c > b) maxNumber = c;

  if (b) return maxNumber;
}

console.log(findMaxNumber(12, 10, 7));

// find max even number
function findMaxEvenNumber(a, b, c) {
  let maxEvenNumber = Number.NEGATIVE_INFINITY;

  if (a > maxEvenNumber && a % 2 === 0) maxEvenNumber = a;
  if (b > maxEvenNumber && b % 2 === 0) maxEvenNumber = b;
  if (c > maxEvenNumber && c % 2 === 0) maxEvenNumber = c;
  return maxEvenNumber;
}

console.log(findMaxEvenNumber(4, 6, 9));
