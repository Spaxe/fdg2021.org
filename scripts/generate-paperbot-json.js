const fs = require("fs");
const dateFns = require("date-fns");
const { workshopDay, day1, day2, day3, day4 } = require(__dirname +
  "/../src/ProgramData");

// transform to paperbot json structure
let output = [];

workshopDay.forEach((d) => addEntry(d, 0));
day1.forEach((d) => addEntry(d, 1));
day2.forEach((d) => addEntry(d, 2));
day3.forEach((d) => addEntry(d, 3));
day4.forEach((d) => addEntry(d, 4));

function addEntry(entry, dayOffset) {
  if (entry.type === "papers") {
    entry.presentations.forEach((p) => {
      output.push(parseEntry(p, dayOffset, entry.time, entry.title));
    });
  } else {
    // DO NOTHING
  }
}

function parseEntry(entry, dayOffset, overrideTime, overrideTrack) {
  let timeString = null;
  let dayString = null;

  let entryTime = entry.time || overrideTime;

  if (entryTime !== "TBA") {
    const time = dateFns.parse(
      entryTime,
      "HH:mm",
      new Date(2021, 7, 2 + dayOffset)
    );
    let endTime;
    if (entry.title === "Opening Remarks" || entry.author === "Rilla Khaled") {
      endTime = dateFns.addMinutes(time, 30);
    } else {
      endTime = dateFns.addHours(time, 1);
    }

    timeString = `${dateFns.format(time, "HH:mm")}-${dateFns.format(
      endTime,
      "HH:mm"
    )}`;
    dayString = `${dateFns.format(time, "MMMM d - EEEE")}`;
  }

  return {
    title: entry.title,
    track: entry.type || overrideTrack,
    authors: entry.author || "",
    time: timeString,
    day: dayString
  };
}

const json = JSON.stringify(output, null, 2);

fs.writeFileSync(__dirname + "/../public/fdg21-paperbot.json", json);
