export function formatTimestamp(timestamp) {
  var weekday = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
  var monthname = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
  var d = new Date();
  d.setTime(timestamp);

  return weekday[d.getDay()] + " " + d.getDate() + " " + monthname[d.getMonth()] + " " + d.getFullYear() + ", "+ d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}