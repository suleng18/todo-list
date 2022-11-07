function tranformCaptitallize(str) {
  const stringInput = str.toUpperCase();
  return `${stringInput[0]}${stringInput.slice(1).toLowerCase()}`;
}

console.log(tranformCaptitallize('suleg XuanLong lojs loG'));

function capitalize(str) {
  if (str === '') return '';

  const firstLetter = str.charAt(0).toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}
console.log(capitalize('suleg XuanLong'));
