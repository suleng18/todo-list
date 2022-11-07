function createCounter(initValue) {
  let value = initValue || 0;
  let cache = {};
  function increase() {
    value++;
    console.log('🚀 ~ value++', value);
  }
  function decrease() {
    value--;
    console.log('🚀 ~ value--', value);
  }
  function getValue() {
    console.log(value);
    return value;
  }

  return {
    increase: increase,
    decrease: decrease,
    getValue: getValue,
  };
}

const counter1 = createCounter(0);
console.log(counter1);

counter1.increase();
counter1.increase();
counter1.getValue();

const counter2 = createCounter(10);
counter2.increase();
counter2.increase();
counter2.getValue();

for (var i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
