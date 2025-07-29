const removeFromArray = function () {
  const arr = [[1, 2, 3, 4], 3, [1, 2, 3, 4], 1, 4, 3, [1, 2, 3, 4]];
  const cleaned = arr
    .filter(function (item) {
      console.log(item);
      return item !== 3;
    })
    .map(function (item) {
      if (Array.isArray(item)) {
        return item.filter(function (subItem) {
          return subItem !== 3;
        });
      }
      return item;
    });
  return cleaned;
};

// Do not edit below this line
module.exports = removeFromArray;
