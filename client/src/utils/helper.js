export function formatTimestamp(timestamp) {
  var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var d = new Date();
  d.setTime(timestamp);

  return weekday[d.getDay()] + " " + d.getDate() + " " + monthname[d.getMonth()] + " " + d.getFullYear() + ", "+ d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}