const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let step = 0; step < times; step++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
