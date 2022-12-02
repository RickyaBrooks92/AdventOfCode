const fs = require('fs');
const data = fs.readFileSync('../data/day-01-part1.txt', 'utf8');
const lines = data.split(/\n/);
console.log(lines);
const findHighestCalories = (lines) => {
  let highCalories = 0;
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    let currentEl = lines[i];
    if (currentEl === '') {
      if (count > highCalories) {
        highCalories = count;
        count = 0;
        continue;
      }
      count = 0;
      continue;
    }
    count += Number(currentEl);
    console.log(count);
  }
  console.log(highCalories);
};

findHighestCalories(lines);
