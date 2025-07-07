export function dbTimeForHuman(str) {
  const utcDate = new Date(str); // convert string to Date object
  const indiaTime = utcDate.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });
  return indiaTime;
}
