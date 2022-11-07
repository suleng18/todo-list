function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return n % 2 !== 0;
}

// Recommend
// n = a * a;
function soChinhPhuong(n) {
  if (n <= 0) return false;

  const sqrtN = Math.sqrt(n);
  return sqrtN * sqrtN === n;
}

console.log(soChinhPhuong(10));
