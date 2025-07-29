const palindromes = function (word) {
  const reverseWord = word.split("").reverse().join();
  if (word === reverseWord) {
    return console.log("This is a palindrome!");
  } else {
    return console.log("This is not a palindrome!");
  }
};
palindromes("racecar"); // true
palindromes("tacos"); // false
// Do not edit below this line
module.exports = palindromes;
