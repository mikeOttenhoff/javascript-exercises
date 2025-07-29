let sequenceTotal = [];

const sequence = function (n) {
  let i;
  let fib = [0, 1];

  for (i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  sequenceTotal = fib;
};
sequence(25);

let fibonacci = function (number) {
  if (number >= 0) {
    return sequenceTotal.at(number);
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
