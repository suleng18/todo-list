// Switch-case khi xác định được giá trị trong khoảng nào đó

function printMonth(n) {
  let month = '';

  switch (n) {
    case 1: {
      month = 'Jan';
      break;
    }

    default: {
      month = 'Invalid month';
    }
  }

  return month;
}

console.log(printMonth(1));
