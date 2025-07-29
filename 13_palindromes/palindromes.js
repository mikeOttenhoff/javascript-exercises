const palindromes = function (string) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter(character => alphanumerical.includes(character))
    .join("");

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split("").reverse().join("");

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};
// console.log(palindromes("racecar")); // true
// console.log(palindromes("racecar!")); // false
// console.log(palindromes("Racecar!"));
// console.log(palindromes("A car, a man, a maraca"));
// console.log(palindromes("Animal loots foliated detail of stool lamina"));
// console.log(palindromes("ZZZZ car, a man, a maracaz."));
// console.log(palindromes("rac3e3car"));
// console.log(palindromes("r3ace3car"));

// Do not edit below this line
module.exports = palindromes;
