function randomNumber(n) {
  if (typeof n <= 0 || typeof n !== 'number') return -1;
  return Math.ceil(Math.random() * n);
}

console.log(randomNumber(10));

function randomNumber2(a, b) {
  if (a >= b) return -1;

  const random = Math.round(Math.random() * (b - a));

  return random + a;
}

console.log(randomNumber2(3, 4));
console.log(randomNumber2(3, 4));
console.log(randomNumber2(3, 4));
console.log(randomNumber2(3, 4));
