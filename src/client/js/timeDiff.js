function timeDiff(inputDate) {
  console.log("timeDiff is running");
  console.log(`input date is ${inputDate}`);

  //get time difference between UTC and local time
  const now = new Date();
  now.setHours(0, 0, 0);
  console.log(now);

  //convert inputDate from string to date
  const departure = Date.parse(inputDate);
  console.log(departure);

  //compute time left / passed to trip
  const deltaT = Math.floor((departure - now) / 1000 / 60 / 60 / 24);
  console.log(deltaT);

  //display different text accordingly
  let timeText;
  if (deltaT === 0) {
    timeText = "Today 👝";
  } else if (deltaT < -1) {
    timeText = `${deltaT * -1} days ago`;
  } else if (deltaT === -1) {
    timeText = `Yesterday`;
  } else if (deltaT === 1) {
    timeText = `Tomorrow`;
  } else {
    timeText = `In ${deltaT} days`;
  }
  console.log(timeText);
  return timeText;
}
export { timeDiff };
