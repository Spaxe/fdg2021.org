const fs = require('fs');
const { workshopDay, day1, day2, day3, day4 } = require(__dirname + "/../src/ProgramData");

const output = JSON.stringify({
  workshopDay, day1, day2, day3, day4
});

fs.writeFileSync(__dirname + "/../public/fdg21-paperbot.json", output);

