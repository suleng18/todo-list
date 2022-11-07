function printNumber() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}
printNumber();

function printEvenNumber() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}
printEvenNumber();

function printEvenNumberN(n) {
  if (n < 2) return;

  for (let i = 2; i < n; i += 2) {
    console.log(i);
  }
}

console.log(printEvenNumberN(20));
