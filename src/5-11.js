function checkError(err) {
  let message;

  switch (err) {
    case 'E01':
      message = ' Invalid username or password';
      break;

    case 'E02': {
      message = ' Too many passwords';
      break;
    }

    case 'E02': {
      message = ' Too many accounts';
      break;
    }

    default: {
      message = 'Something went wrong';
    }
  }

  return message;
}
console.log(checkError('E01'));

function checkError1(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: ' Too many passwords',
    E03: 'Too many username',
  };

  return errorMap[errorCode] ? errorMap[errorCode] : 'Something went wrong';
}

console.log(checkError1('E04'));

console.log(1 - 2 === 1 - 2);

const n = 20;
console.log(n.toString());

let number = false;
console.log(Number(number));

const so124 = 123.526;
console.log(Math.trunc(so124));

console.log(Math.floor(123.45));

console.log(0.1 + 0.2 === 0.1 + 0.2);

console.log((0.1).toFixed(20));

console.log((0.1 + 0.2).toFixed() === (0.3).toFixed());
