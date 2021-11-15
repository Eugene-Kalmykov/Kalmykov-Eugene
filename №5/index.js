
function sumSalary(array) {
  let sum = array.reduce(function (previousValue, item) {
    return previousValue + item.salary;
  }, 0);
  return sum;
}

console.log(
  sumSalary([
    { name: "Ivan", salary: 1020 },
    { name: "Anton", salary: 2300 },
  ])
);

//solution №2
/*
function sumSalary(array) {
  let sum = 0;
  array.forEach(function (item) {
    sum = sum + item.salary;
  });
  return sum;
}

console.log(
  sumSalary([
    { name: "Ivan", salary: 1020 },
    { name: "Anton", salary: 2300 },
  ])
);
*/