const fs = require('fs');
const data = fs.readFileSync('day-01.input.txt', 'utf8');
const lines = data.split(/\n/);
console.log(lines);

const topThree = (data) => {
  let elfArrayCount = [];
  let currentSum = 0;
  for (let i = 0; i < lines.length; i++) {
    let currentEl = lines[i];
    if (currentEl === '') {
      elfArrayCount.push(currentSum);
      currentSum = 0;
      continue;
    }
    currentSum += Number(currentEl);
  }
  let sortedTopCalories = elfArrayCount.sort(function (a, b) {
    return a - b;
  });
  console.log(
    sortedTopCalories[sortedTopCalories.length - 1] +
      sortedTopCalories[sortedTopCalories.length - 2] +
      sortedTopCalories[sortedTopCalories.length - 3]
  );
};
topThree(lines);
