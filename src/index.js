module.exports = function reverse (n) {
  let number = "" + n;
  number = number.split('');
  if (number[0] == '-'){
    number.shift();
  }
  number.reverse();
  return +number.join('');
}
