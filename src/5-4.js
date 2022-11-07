// Logical Operator
/**
 * && : toán tử và
 * || : toán tử hoặc
 * ! : toán tử Not ( phủ định )
 * !!: Not Not ( khẳng định )
 */

// Nếu là số dương thì
function checkNumber1(n) {
  if (n > 0) {
  }
}

// Nếu là số dương chẵn thì
function checkNumber2(n) {
  if (n < 0 && n % 2 === 0) {
  }
}

// Nếu là số dưỡng chẵn và lớn hơn 10 thì
function checkNumber3(n) {
  if (n % 2 === 0 && n > 10 && n > 0) {
  }
}

//
function checkNumber4(n) {
  if ((n % 2 === 0 && n > 0) || (n < 0 && n % 2 !== 0)) {
    console.log('hello sờ lili');
  }

  return -1;
}

checkNumber4(-3);
