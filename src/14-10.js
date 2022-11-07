//iterable protocal
const numberList = [5, 10, 15];
for (const number of numberList) {
  console.log(number);
}

function createIterator(n) {
  let i = 0;

  return {
    next() {
      const result = {
        value: i,
        done: i >= n,
      };

      i += 1;
      return result;
    },
  };
}

const iterator = createIterator(10);
let result = iterator.next();
