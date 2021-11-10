function treeSum(arrNum) {
  let reduceValie = arrNum.reduce(function (previousValue, item) {
    if (Array.isArray(item)) {
      return previousValue + treeSum(item);
    } else {
      return previousValue + item;
    }
  }, 0);
  return reduceValie;
}
alert(treeSum([5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]));