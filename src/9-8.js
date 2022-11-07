console.log([2, 1, 3].find((x) => x < 2));
console.log([2, 1, 3].findIndex((x) => x < 2));
const array = ['suleng', 18, 'buixuanlong'].findIndex((x) => x.length > 4);
console.log('🚀 ~ array', array);

console.log([object]);

// callback

function calcSum(logketquar) {
  let sum = 0;

  for (let i = 0; i < 10; i++) {
    sum += i;
  }

  logketquar(sum);
}

function logketquar(sum) {
  console.log('Result: ', sum);
}

calcSum(logketquar);
